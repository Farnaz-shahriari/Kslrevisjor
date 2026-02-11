import { useState, useEffect, useRef } from 'react';
import { X, Mic, Search, Plus, Upload, Image, StickyNote, AlertTriangle, ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { DeviationView } from './DeviationView';
import { VoiceRecordingView } from './VoiceRecordingView';
import { InlineVoiceRecording } from './InlineVoiceRecording';
import { BottomSheet } from './ui/bottom-sheet';
import { ListItem } from './ui/list-item';
import svgPaths from '../imports/svg-vbij11rrav';
import { questionsData } from '../data/questions';
import { SavedNote } from '../App';

interface PrivateNotesPanelDockableProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuestionData?: (questionId: string, data: any) => void;
  getQuestionData?: (questionId: string) => any;
  savedNotes?: SavedNote[];
  onSaveNote?: (note: SavedNote) => void;
  onDeleteNote?: (noteId: string) => void;
  panelWidth?: number;
  onPanelWidthChange?: (width: number) => void;
}

interface MatchedQuestion {
  id: string;
  title: string;
  category: string;
  score: number;
}

export function PrivateNotesPanelDockable({ isOpen, onClose, onUpdateQuestionData, getQuestionData, savedNotes = [], onSaveNote, onDeleteNote, panelWidth = 384, onPanelWidthChange }: PrivateNotesPanelDockableProps) {
  const [noteText, setNoteText] = useState('');
  const [isRelatedToDeviation, setIsRelatedToDeviation] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState<MatchedQuestion | null>(null);
  const [matchedQuestions, setMatchedQuestions] = useState<MatchedQuestion[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<MatchedQuestion[]>([]);
  const [textBeforeRecording, setTextBeforeRecording] = useState('');
  const [isProcessingImage, setIsProcessingImage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // View state: 'create' | 'list'
  const [viewMode, setViewMode] = useState<'create' | 'list'>('list'); // Changed default to 'list'
  
  // Track the current note being edited (null = new note, string = editing existing note)
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  
  // Track the current note being edited
  const [currentNoteId, setCurrentNoteId] = useState<string | null>(null);
  
  // Deviation data state
  const [deviationData, setDeviationData] = useState<any>(undefined);
  
  // Notes list search state
  const [notesSearchActive, setNotesSearchActive] = useState(false);
  const [notesSearchQuery, setNotesSearchQuery] = useState('');
  
  // Panel width state (resizable from 400px minimum)
  const [currentPanelWidth, setCurrentPanelWidth] = useState(panelWidth);
  const [isResizing, setIsResizing] = useState(false);
  
  const recognitionRef = useRef<any>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize speech recognition
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.lang = 'nb-NO'; // Norwegian language
        recognition.continuous = true; // Keep listening
        recognition.interimResults = true; // Show results as user speaks

        recognition.onresult = (event: any) => {
          let interimTranscript = '';
          let finalTranscript = '';

          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              finalTranscript += transcript + ' ';
            } else {
              interimTranscript += transcript;
            }
          }

          // Update text field with final transcript
          if (finalTranscript) {
            setNoteText(prev => prev + finalTranscript);
          }
        };

        recognition.onerror = (event: any) => {
          console.error('Speech recognition error:', event.error);
          setIsRecording(false);
          
          // Handle different error types
          if (event.error === 'not-allowed') {
            setErrorMessage('Talegjenkjenning er blokkert.\\n\\nSjekk følgende:\\n• Er du på en sikker forbindelse (https://)?\\n• Har du tillatt mikrofon i nettleserens innstillinger?\\n• Prøv å laste inn siden på nytt\\n\\nDu kan fortsatt skrive notatet manuelt nedenfor.');
          } else if (event.error === 'no-speech') {
            // Don't show error for no-speech, just stop recording
            setIsRecording(false);
          } else if (event.error === 'network') {
            setErrorMessage('Nettverksfeil. Sjekk internettforbindelsen din.');
          } else if (event.error === 'aborted') {
            // User stopped it, no error needed
            setIsRecording(false);
          } else {
            setErrorMessage('Talegjenkjenning feilet. Prøv igjen, eller skriv notatet manuelt.');
          }
        };

        recognition.onend = () => {
          setIsRecording(false);
        };

        recognitionRef.current = recognition;
      }
    }

    // Cleanup
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  // Auto-save note when text is entered
  useEffect(() => {
    if (!onSaveNote) return;

    // Check if we have any content worth saving
    const hasNoteText = noteText.trim().length > 0;
    const hasQuestionConnection = selectedQuestion !== null;
    const hasAvvikMarked = isRelatedToDeviation;
    
    // Save if we have: text OR question connection OR avvik marked
    // All three are independent reasons to keep a note
    if (!hasNoteText && !hasQuestionConnection && !hasAvvikMarked) {
      return;
    }

    // Debounce the save to avoid saving on every keystroke
    const timeoutId = setTimeout(() => {
      // If we don't have a current note ID, create a new one
      if (!currentNoteId) {
        const newNoteId = `note-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        setCurrentNoteId(newNoteId);
        
        const newNote: SavedNote = {
          id: newNoteId,
          text: noteText,
          timestamp: new Date(),
          questionId: selectedQuestion?.id,
          questionTitle: selectedQuestion?.title,
          isDeviation: isRelatedToDeviation,
          deviationSeverity: isRelatedToDeviation && deviationData?.severity ? deviationData.severity : undefined,
          deviationMangel: isRelatedToDeviation ? deviationData?.mangel : undefined,
          deviationBevis: isRelatedToDeviation ? deviationData?.bevis : undefined,
          deviationKrav: isRelatedToDeviation ? deviationData?.krav : undefined,
        };

        onSaveNote(newNote);
        console.log('✅ Created new note:', newNote);
      } else {
        // Update the existing note
        const updatedNote: SavedNote = {
          id: currentNoteId,
          text: noteText,
          timestamp: new Date(),
          questionId: selectedQuestion?.id,
          questionTitle: selectedQuestion?.title,
          isDeviation: isRelatedToDeviation,
          deviationSeverity: isRelatedToDeviation && deviationData?.severity ? deviationData.severity : undefined,
          deviationMangel: isRelatedToDeviation ? deviationData?.mangel : undefined,
          deviationBevis: isRelatedToDeviation ? deviationData?.bevis : undefined,
          deviationKrav: isRelatedToDeviation ? deviationData?.krav : undefined,
        };

        onSaveNote(updatedNote);
        console.log('✅ Updated existing note:', updatedNote);
      }
    }, 1000); // Save after 1 second of inactivity

    return () => clearTimeout(timeoutId);
  }, [noteText, selectedQuestion, isRelatedToDeviation, deviationData, onSaveNote, currentNoteId]);

  const handleVoiceInput = async () => {
    if (!recognitionRef.current) {
      setErrorMessage('Talegjenkjenning er ikke støttet i denne nettleseren. Prøv Chrome, Edge eller Safari.');
      return;
    }

    // Clear any previous errors
    setErrorMessage('');
    
    // Save current text before starting recording
    setTextBeforeRecording(noteText);
    
    // Request microphone permission first
    try {
      // This will trigger the browser's permission prompt
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Stop the stream immediately - we just needed to get permission
      stream.getTracks().forEach(track => track.stop());
      
      // Now start speech recognition
      try {
        recognitionRef.current.start();
        setIsRecording(true);
      } catch (error: any) {
        if (error.message && error.message.includes('already started')) {
          // Recognition is already running, just toggle state
          setIsRecording(true);
        } else {
          setErrorMessage('Kunne ikke starte talegjenkjenning. Prøv igjen.');
        }
      }
    } catch (error: any) {
      // Only log non-permission errors to avoid console noise
      if (error.name !== 'NotAllowedError' && error.name !== 'PermissionDeniedError') {
        console.error('Microphone access error:', error);
      }
      
      if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
        setErrorMessage('Mikrofontilgang ble nektet.\\n\\nFor å bruke talegjenkjenning:\\n1. Klikk på låsikonet (eller \\"info\\"-ikonet) til venstre i adressefeltet\\n2. Finn \\"Mikrofon\\" i innstillingene\\n3. Endre fra \\"Blokker\\" til \\"Tillat\\"\\n4. Klikk \\"Prøv igjen\\"-knappen nedenfor\\n\\nDu kan også skrive notatet manuelt i tekstfeltet.');
      } else if (error.name === 'NotFoundError') {
        setErrorMessage('Ingen mikrofon funnet. Koble til en mikrofon og prøv igjen.');
      } else {
        setErrorMessage('Kunne ikke få tilgang til mikrofon. Du kan skrive notatet manuelt nedenfor.');
      }
    }
  };

  const handleConfirmRecording = () => {
    // Stop recording and keep the transcribed text
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsRecording(false);
    setErrorMessage('');
  };

  const handleCancelRecording = () => {
    // Stop recording and restore the text from before recording started
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setNoteText(textBeforeRecording);
    setIsRecording(false);
    setErrorMessage('');
  };

  // Search and match questions based on note text
  useEffect(() => {
    if (!noteText.trim() || selectedQuestion) {
      setMatchedQuestions([]);
      return;
    }

    const searchTerms = noteText.toLowerCase().split(/\s+/).filter(term => term.length > 2);
    
    if (searchTerms.length === 0) {
      setMatchedQuestions([]);
      return;
    }

    // Norwegian synonyms and related terms
    const synonyms: Record<string, string[]> = {
      'oversikt': ['dokumentasjon', 'register', 'oversyn', 'kontroll', 'liste'],
      'dokumentasjon': ['oversikt', 'dokumenter', 'papir', 'bevis', 'kvittering'],
      'kjøpt': ['innkjøp', 'anskaffet', 'handlet', 'bestilt'],
      'solgt': ['salg', 'levert', 'leveranse'],
      'driftsmiddel': ['redskap', 'utstyr', 'maskiner', 'verktøy'],
      'produkt': ['vare', 'artikkel', 'råvare'],
      'fôr': ['kraftfôr', 'grovfôr', 'for'],
      'gjødsel': ['handelsgjødsel', 'mineralgjødsel'],
      'plantevernmiddel': ['sprøytemiddel', 'kjemikalier'],
      'merking': ['etikett', 'label', 'merkelapp'],
      'hygiene': ['renhold', 'sanitær', 'vask'],
      'vann': ['vannforsyning', 'drikkevann'],
      'avfall': ['søppel', 'avfallshåndtering'],
    };

    const matches: MatchedQuestion[] = [];

    questionsData.forEach(category => {
      category.questionGroups.forEach(group => {
        group.questions.forEach(question => {
          const questionText = `${question.id} ${question.title}`.toLowerCase();
          let score = 0;

          // Check direct matches
          searchTerms.forEach(term => {
            if (questionText.includes(term)) {
              score += 10;
            }
            
            // Check synonyms
            if (synonyms[term]) {
              synonyms[term].forEach(synonym => {
                if (questionText.includes(synonym)) {
                  score += 5;
                }
              });
            }
          });

          if (score > 0) {
            matches.push({
              id: question.id,
              title: question.title,
              category: category.title,
              score: score,
            });
          }
        });
      });
    });

    // Sort by score (highest first) and limit to top 5
    matches.sort((a, b) => b.score - a.score);
    setMatchedQuestions(matches.slice(0, 5));
  }, [noteText, selectedQuestion]);

  const handleSelectQuestion = (question: MatchedQuestion) => {
    setSelectedQuestion(question);
  };

  const handleRemoveQuestion = () => {
    setSelectedQuestion(null);
  };

  // Save note to question when closing the panel
  const handleClose = () => {
    // Sync note to selected question before closing
    if (selectedQuestion && onUpdateQuestionData && getQuestionData) {
      const questionId = selectedQuestion.id;
      
      // Get current question state
      const currentQuestionData = getQuestionData(questionId) || {};
      
      // Prepare updated notat text (append to existing notes)
      const existingNotes = currentQuestionData.notatText || '';
      const separator = existingNotes.trim() ? '\\n\\n---\\n\\n' : '';
      const updatedNotatText = existingNotes + separator + noteText;

      // Build update object
      const updateData: any = {
        notatText: updatedNotatText,
      };

      // If deviation is enabled, also update answer and deviation data
      if (isRelatedToDeviation) {
        updateData.answer = 'nei'; // Set answer to "Nei"
        if (deviationData) {
          updateData.deviationData = deviationData;
        }
      }

      // Update the question with the synced data
      onUpdateQuestionData(questionId, updateData);

      console.log('✅ Synced note to question:', questionId);
      console.log('  Note text:', updatedNotatText);
      console.log('  Avvik enabled:', isRelatedToDeviation);
      if (isRelatedToDeviation) {
        console.log('  Answer set to: nei');
        console.log('  Deviation data:', deviationData);
      }
    }
    
    // Reset state and close
    setNoteText('');
    setSelectedQuestion(null);
    setIsRelatedToDeviation(false);
    setDeviationData(undefined);
    setErrorMessage('');
    setCurrentNoteId(null); // Clear current note ID
    setViewMode('create'); // Reset to create mode
    onClose();
  };

  const handleOpenSearch = () => {
    setIsSearching(true);
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleCloseSearch = () => {
    setIsSearching(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);

    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const searchTerms = query.toLowerCase().split(/\s+/).filter(term => term.length > 1);
    
    if (searchTerms.length === 0) {
      setSearchResults([]);
      return;
    }

    const matches: MatchedQuestion[] = [];

    questionsData.forEach(category => {
      category.questionGroups.forEach(group => {
        group.questions.forEach(question => {
          const questionText = `${question.id} ${question.title}`.toLowerCase();
          let score = 0;

          // Check direct matches
          searchTerms.forEach(term => {
            if (questionText.includes(term)) {
              score += 10;
            }
          });

          if (score > 0) {
            matches.push({
              id: question.id,
              title: question.title,
              category: category.title,
              score: score,
            });
          }
        });
      });
    });

    // Sort by score (highest first) and limit to top 20
    matches.sort((a, b) => b.score - a.score);
    setSearchResults(matches.slice(0, 20));
  };

  const handleSelectFromSearch = (question: MatchedQuestion) => {
    setSelectedQuestion(question);
    handleCloseSearch();
  };

  // Handler to load note for editing
  const handleNoteClick = (note: SavedNote) => {
    // Load note data into state
    setNoteText(note.text);
    setCurrentNoteId(note.id);
    setEditingNoteId(note.id);
    setIsRelatedToDeviation(note.isDeviation);
    
    // Load connected question if any
    if (note.questionId && note.questionTitle) {
      const category = questionsData.flatMap(cat => cat.questionGroups)
        .flatMap(group => group.questions)
        .find(q => q.id === note.questionId);
      
      if (category) {
        setSelectedQuestion({
          id: note.questionId,
          title: note.questionTitle,
          category: questionsData.find(cat => 
            cat.questionGroups.some(grp => 
              grp.questions.some(q => q.id === note.questionId)
            )
          )?.title || '',
          score: 0
        });
      }
    }
    
    // Load deviation data if any
    if (note.isDeviation && note.deviationSeverity) {
      setDeviationData({ severity: note.deviationSeverity });
    }
    
    // Switch to create/edit view
    setViewMode('create');
  };

  // Alias for consistency with the new code
  const handleEditNote = handleNoteClick;

  // Handler to create new note
  const handleCreateNewNote = () => {
    // Reset all state for a new note
    setNoteText('');
    setCurrentNoteId(null);
    setEditingNoteId(null);
    setSelectedQuestion(null);
    setIsRelatedToDeviation(false);
    setDeviationData(undefined);
    setErrorMessage('');
    setViewMode('create');
  };

  // Handler for "Ferdig" button - returns to list view
  const handleFinished = () => {
    // Don't reset state, just return to list view
    // Note is already auto-saved
    setViewMode('list');
  };

  // Handler for "Tilbake til alle notater" button when editing
  const handleBackToList = () => {
    // Check if note should be deleted
    const hasNoteText = noteText.trim().length > 0;
    const hasQuestionConnection = selectedQuestion !== null;
    const hasAvvikMarked = isRelatedToDeviation;
    
    // Only delete if: no text AND no question connection AND no avvik marked
    // Any of these three is enough to keep the note
    if (!hasNoteText && !hasQuestionConnection && !hasAvvikMarked && currentNoteId && onDeleteNote) {
      onDeleteNote(currentNoteId);
      console.log('🗑️ Deleted note (no content, no question, no avvik):', currentNoteId);
    }
    
    // Reset state and return to list
    setNoteText('');
    setCurrentNoteId(null);
    setEditingNoteId(null);
    setSelectedQuestion(null);
    setIsRelatedToDeviation(false);
    setDeviationData(undefined);
    setErrorMessage('');
    setViewMode('list');
  };

  const handleImageUpload = () => {
    // Trigger file input
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setErrorMessage('Vennligst velg en bildefil (JPG, PNG, etc.)');
      return;
    }

    // Clear any previous errors
    setErrorMessage('');
    setIsProcessingImage(true);

    try {
      // Convert image to base64
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64Image = e.target?.result as string;

        try {
          // Call OpenAI Vision API to extract text
          const extractedText = await processImageWithOCR(base64Image);
          
          // Append extracted text to existing note text
          if (extractedText) {
            setNoteText(prev => {
              const separator = prev.trim() ? '\n\n' : '';
              return prev + separator + extractedText;
            });
          } else {
            setErrorMessage('Kunne ikke finne lesbar tekst i bildet. Prøv et annet bilde eller skriv notatet manuelt.');
          }
        } catch (error) {
          console.error('OCR error:', error);
          setErrorMessage('Det oppstod en feil ved behandling av bildet. Prøv igjen eller skriv notatet manuelt.');
        } finally {
          setIsProcessingImage(false);
        }
      };

      reader.onerror = () => {
        setErrorMessage('Kunne ikke lese bildefilen. Prøv igjen.');
        setIsProcessingImage(false);
      };

      reader.readAsDataURL(file);
    } catch (error) {
      console.error('File reading error:', error);
      setErrorMessage('Kunne ikke behandle bildet. Prøv igjen.');
      setIsProcessingImage(false);
    }

    // Reset file input
    if (event.target) {
      event.target.value = '';
    }
  };

  // OCR function using OpenAI Vision API
  const processImageWithOCR = async (base64Image: string): Promise<string> => {
    // Configuration - Set to mock mode by default since API key is not available
    const USE_MOCK_OCR = true; // Set to false when you have a valid OpenAI API key
    const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY_HERE';
    
    // MOCK MODE - Instant response without API call
    if (USE_MOCK_OCR) {
      console.log('📝 Using mock OCR (no API call)');
      // Simulate a short delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return "Dette er tekst hentet fra bildet. (Mock OCR - Sett inn din OpenAI API nøkkel for ekte OCR)";
    }
    
    // Validate API key
    if (!OPENAI_API_KEY || OPENAI_API_KEY === 'YOUR_OPENAI_API_KEY_HERE') {
      console.log('⚠️ No valid OpenAI API key - using mock OCR');
      await new Promise(resolve => setTimeout(resolve, 1000));
      return "Dette er tekst hentet fra bildet. (Mock OCR - Sett inn din OpenAI API nøkkel for ekte OCR)";
    }
    
    // PRODUCTION MODE - Real OCR using OpenAI Vision API
    console.log('🚀 Using REAL OCR with OpenAI Vision API...');
    
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4o",
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: "You are an OCR system. Extract ALL readable text from this image, including handwritten notes. Return ONLY the transcribed text exactly as it appears in the image. Do not add explanations, formatting, or extra content. If the text is in Norwegian, keep it in Norwegian. Preserve line breaks and structure as they appear in the image."
                },
                {
                  type: "image_url",
                  image_url: {
                    url: base64Image
                  }
                }
              ]
            }
          ],
          max_tokens: 1000,
          temperature: 0.1
        })
      });

      if (!response.ok) {
        console.error(`API Error: ${response.status} ${response.statusText}`);
        // Fall back to mock on API error
        return "Dette er tekst hentet fra bildet. (API feil - vennligst sjekk API nøkkelen)";
      }

      const data = await response.json();
      
      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        console.error('Unexpected API response');
        return "Dette er tekst hentet fra bildet. (Uventet API svar)";
      }
      
      const extractedText = data.choices[0].message.content;
      
      // Clean up and return only the text
      return extractedText.trim();
    } catch (error: any) {
      console.error('❌ OCR Error:', error);
      
      // Fall back to mock on any error
      return "Dette er tekst hentet fra bildet. (Nettverksfeil - bruker mock OCR)";
    }
  };

  // Handle mouse down on resize handle
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  };

  // Handle mouse move and mouse up for resizing
  useEffect(() => {
    if (!isResizing) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newWidth = window.innerWidth - e.clientX;
      
      // Constrain width between 20% and 50% of screen width
      const minWidth = window.innerWidth * 0.20; // 20%
      const maxWidth = window.innerWidth * 0.50; // 50%
      
      const constrainedWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
      setCurrentPanelWidth(constrainedWidth);
      
      // Call parent callback if provided
      if (onPanelWidthChange) {
        onPanelWidthChange(constrainedWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, onPanelWidthChange]);

  if (!isOpen) return null;

  // Desktop: Dockable Side Panel - Only render this version for desktop
  // The parent component wraps this in conditional rendering based on screen size
  return (
    <div 
      ref={panelRef}
      className="flex flex-row h-full bg-surface-container-low border-l border-border relative"
      style={{ width: `${currentPanelWidth}px` }}
    >
      {/* Resize Handle - Left Edge */}
      <div
        onMouseDown={handleMouseDown}
        className={`absolute left-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-primary transition-colors z-10 ${
          isResizing ? 'bg-primary' : 'bg-transparent'
        }`}
        style={{
          touchAction: 'none',
        }}
      >
        {/* Wider invisible hit area for easier grabbing */}
        <div className="absolute -left-1 -right-1 top-0 bottom-0" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {viewMode === 'create' ? renderNotesPanelContent() : renderNotesListView()}
      </div>
    </div>
  );

  // Helper function to get first two lines of text
  function getFirstTwoLines(text: string): string {
    const lines = text.split('\\n').filter(line => line.trim().length > 0);
    return lines.slice(0, 2).join(' ');
  }

  // Helper function to get deviation severity color
  function getDeviationColor(severity: 'lite-avvik' | 'avvik' | 'stor-avvik'): string {
    switch (severity) {
      case 'lite-avvik':
        return '#FFB800'; // Yellow
      case 'avvik':
        return '#FF9800'; // Orange
      case 'stor-avvik':
        return '#F44336'; // Red
      default:
        return 'var(--foreground)';
    }
  }

  // Render notes list view
  function renderNotesListView() {
    return (
      <div className="flex flex-col h-full overflow-hidden bg-surface-container-low">
        {/* Top section with buttons side by side */}
        <div className="flex flex-row items-center justify-between gap-4 px-6 py-4 shrink-0">
          {/* Green "Legg til nytt notat" button */}
          <Button 
            onClick={handleCreateNewNote}
            className="flex items-center gap-2"
          >
            <Plus className="w-6 h-6" />
            <span className="label-medium">Legg til nytt notat</span>
          </Button>
          
          {/* Close icon button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            aria-label="Lukk egne notater"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Search and Filter Row */}
        <div className="flex items-center justify-between px-6 py-4 shrink-0">
          {!notesSearchActive ? (
            <>
              {/* Compact search button */}
              <button 
                onClick={() => setNotesSearchActive(true)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-[100px] hover:bg-muted transition-colors"
              >
                <Search className="w-5 h-5 text-primary" />
                <span className="label-medium text-primary">Søk i notater</span>
              </button>
              
              {/* Filter button */}
              <Button
                variant="ghost"
                size="icon"
                aria-label="Filtrer"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path d="M10 18h4v-2h-4v2zM3 6v2h18V6zm3 7h12v-2H6v2z" fill="currentColor" />
                </svg>
              </Button>
            </>
          ) : (
            <>
              {/* Expanded search input */}
              <div className="flex-1 flex items-center gap-2 px-4 h-12 rounded-[var(--radius)] border border-border bg-background">
                <Search className="w-5 h-5 text-muted-foreground shrink-0" />
                <input
                  type="text"
                  value={notesSearchQuery}
                  onChange={(e) => setNotesSearchQuery(e.target.value)}
                  placeholder="Søk i notater..."
                  className="flex-1 body-large text-foreground focus:outline-none bg-transparent"
                  autoFocus
                />
              </div>
              
              {/* Close search button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setNotesSearchActive(false);
                  setNotesSearchQuery('');
                }}
                aria-label="Lukk søk"
              >
                <X className="w-6 h-6 text-foreground" />
              </Button>
            </>
          )}
        </div>

        {/* Notes list or empty state */}
        <div className="flex-1 overflow-y-auto px-6 pb-10">
          {(() => {
            // Filter notes based on search query
            const filteredNotes = notesSearchQuery.trim()
              ? savedNotes.filter(note => {
                  const searchLower = notesSearchQuery.toLowerCase();
                  const noteTextLower = note.text.toLowerCase();
                  const questionIdLower = (note.questionId || '').toLowerCase();
                  const questionTitleLower = (note.questionTitle || '').toLowerCase();
                  
                  return noteTextLower.includes(searchLower) ||
                         questionIdLower.includes(searchLower) ||
                         questionTitleLower.includes(searchLower);
                })
              : savedNotes;

            if (filteredNotes.length === 0 && notesSearchQuery.trim()) {
              // No search results
              return (
                <div className="flex flex-col items-center justify-center h-full px-6">
                  <Search className="w-16 h-16 text-muted-foreground mb-4" />
                  <p className="body-large text-muted-foreground mb-2">Ingen notater funnet</p>
                  <p className="label-medium text-muted-foreground text-center">
                    Prøv et annet søkeord
                  </p>
                </div>
              );
            }

            if (filteredNotes.length === 0 && !notesSearchQuery.trim()) {
              // Empty state (no notes at all)
              return (
                <div className="flex flex-col items-center justify-center h-full px-6">
                  {/* Illustration */}
              <div className="w-[280px] h-[200px] mb-8 relative">
                <svg className="block size-full" fill="none" viewBox="0 0 280 201.049">
                  <g>
                    <path d="M133.732 165.344C133.732 165.344 133.732 197.744 133.732 197.744C133.732 199.407 135.08 200.755 136.743 200.755C136.743 200.755 253.732 200.755 253.732 200.755C255.395 200.755 256.743 199.407 256.743 197.744C256.743 197.744 256.743 165.344 256.743 165.344C256.743 165.344 133.732 165.344 133.732 165.344Z" fill="#E3E3D9" />
                    <path d="M250.232 195.247C250.232 195.247 140.232 195.247 140.232 195.247C140.232 195.247 140.232 170.852 140.232 170.852C140.232 170.852 250.232 170.852 250.232 170.852C250.232 170.852 250.232 195.247 250.232 195.247Z" fill="#C4C8B7" />
                    <path d="M26.2324 165.344C26.2324 165.344 26.2324 197.744 26.2324 197.744C26.2324 199.407 27.5804 200.755 29.2434 200.755C29.2434 200.755 146.232 200.755 146.232 200.755C147.895 200.755 149.243 199.407 149.243 197.744C149.243 197.744 149.243 165.344 149.243 165.344C149.243 165.344 26.2324 165.344 26.2324 165.344Z" fill="#E0E4D3" />
                    <path d="M142.732 195.247C142.732 195.247 32.7324 195.247 32.7324 195.247C32.7324 195.247 32.7324 170.852 32.7324 170.852C142.732 170.852 142.732 170.852 142.732 170.852C142.732 170.852 142.732 195.247 142.732 195.247Z" fill="#C4C8B7" />
                    <path d="M0 137.241C0 137.241 0 165.344 0 165.344C0 165.344 280 165.344 280 165.344C280 165.344 280 137.241 280 137.241C280 135.578 278.652 134.23 276.989 134.23C276.989 134.23 3.01099 134.23 3.01099 134.23C1.34799 134.23 0 135.578 0 137.241Z" fill="#E0E4D3" />
                    <path d="M6.50781 159.837C6.50781 159.837 273.492 159.837 273.492 159.837C273.492 159.837 273.492 139.738 273.492 139.738C273.492 139.738 6.50781 139.738 6.50781 139.738C6.50781 139.738 6.50781 159.837 6.50781 159.837Z" fill="#C4C8B7" />
                    <path d="M108.329 13.2676C108.329 13.2676 108.329 134.229 108.329 134.229C108.329 134.229 171.671 134.229 171.671 134.229C171.671 134.229 171.671 13.2676 171.671 13.2676C171.671 11.6046 170.323 10.2566 168.66 10.2566C168.66 10.2566 111.34 10.2566 111.34 10.2566C109.677 10.2566 108.329 11.6046 108.329 13.2676Z" fill="#E0E4D3" />
                    <path d="M114.836 127.723C114.836 127.723 165.164 127.723 165.164 127.723C165.164 127.723 165.164 15.7744 165.164 15.7744C165.164 15.7744 114.836 15.7744 114.836 15.7744C114.836 15.7744 114.836 127.723 114.836 127.723Z" fill="#C4C8B7" />
                    <path d="M135.508 39.4824C135.508 39.4824 144.492 39.4824 144.492 39.4824C144.492 39.4824 144.492 30.4985 144.492 30.4985C144.492 30.4985 135.508 30.4985 135.508 30.4985C135.508 30.4985 135.508 39.4824 135.508 39.4824Z" fill="#C4C8B7" />
                    <path d="M127.266 71.8789C127.266 71.8789 152.734 71.8789 152.734 71.8789C152.734 71.8789 152.734 68.3672 152.734 68.3672C152.734 68.3672 127.266 68.3672 127.266 68.3672C127.266 68.3672 127.266 71.8789 127.266 71.8789Z" fill="#C4C8B7" />
                    <path d="M127.266 84.6348C127.266 84.6348 152.734 84.6348 152.734 84.6348C152.734 84.6348 152.734 81.123 152.734 81.123C152.734 81.123 127.266 81.123 127.266 81.123C127.266 81.123 127.266 84.6348 127.266 84.6348Z" fill="#C4C8B7" />
                    <path d="M120.758 97.3916C120.758 97.3916 159.242 97.3916 159.242 97.3916C159.242 97.3916 159.242 93.8799 159.242 93.8799C159.242 93.8799 120.758 93.8799 120.758 93.8799C120.758 93.8799 120.758 97.3916 120.758 97.3916Z" fill="#C4C8B7" />
                    <path d="M120.758 110.148C120.758 110.148 159.242 110.148 159.242 110.148C159.242 110.148 159.242 106.636 159.242 106.636C159.242 106.636 120.758 106.636 120.758 106.636C120.758 106.636 120.758 110.148 120.758 110.148Z" fill="#C4C8B7" />
                    <path d="M142.734 54.0293L166.182 54.0293C166.182 54.0293 162.167 48.5215 154.137 48.5215C146.108 48.5215 142.734 54.0293 142.734 54.0293Z" fill="#284000" />
                  </g>
                </svg>
              </div>
              
              {/* Text */}
              <h3 className="title-large text-foreground mb-2 text-center">Legg til privat notat</h3>
              <p className="body-large text-foreground mb-8 text-center">Ikke delt med foretaket</p>
              
              {/* Green button */}
              <Button 
                onClick={handleCreateNewNote}
                className="flex items-center gap-2"
              >
                <Plus className="w-6 h-6" />
                <span className="label-medium">Legg til nytt notat</span>
              </Button>
                </div>
              );
            }

            // Display filtered notes
            return (
              <div className="flex flex-col gap-2">
                {filteredNotes.map((note, index) => {
                // Determine what text to display
                // If note text is empty but has avvik mangel, show mangel instead
                const displayText = note.text.trim() 
                  ? getFirstTwoLines(note.text)
                  : note.deviationMangel?.trim() 
                    ? getFirstTwoLines(note.deviationMangel)
                    : '(Tomt notat)';
                
                let leadingIcon;
                let iconColor = 'var(--foreground)';
                
                if (note.isDeviation && note.deviationSeverity) {
                  // Show warning icon with severity color
                  if (note.deviationSeverity === 'stor-avvik') {
                    iconColor = '#BA1A1A'; // Red
                  } else if (note.deviationSeverity === 'avvik' || note.deviationSeverity === 'lite-avvik') {
                    iconColor = '#705400'; // Brown/Yellow
                  }
                  leadingIcon = (
                    <AlertTriangle className="w-6 h-6" style={{ color: iconColor }} />
                  );
                } else {
                  // Regular sticky note icon
                  leadingIcon = <StickyNote className="w-6 h-6 text-foreground" />;
                }
                
                return (
                  <button
                    key={index}
                    onClick={() => handleEditNote(note)}
                    className="bg-white border border-border rounded-[12px] min-h-[88px] p-4 flex items-start gap-4 hover:bg-muted/30 transition-colors text-left"
                  >
                    {/* Leading icon */}
                    <div className="shrink-0 pt-1">
                      {leadingIcon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0 flex flex-col gap-1">
                      {note.questionId && (
                        <p className="label-small text-muted-foreground truncate">
                          {note.questionId} {note.questionTitle}
                        </p>
                      )}
                      <p className="body-large text-foreground line-clamp-2">
                        {displayText}
                      </p>
                    </div>
                  </button>
                );
              })}
              </div>
            );
          })()}
        </div>
      </div>
    );
  }

  // Shared content renderer for both mobile and desktop
  function renderNotesPanelContent() {
    // Show inline voice recording UI when recording
    if (isRecording) {
      return <InlineVoiceRecording onConfirm={handleConfirmRecording} onCancel={handleCancelRecording} />;
    }

    return (
      <div className="flex flex-col h-full overflow-hidden bg-surface-container-low">
        {/* Header */}
        <div className="shrink-0 px-6 pt-4 pb-2">
          {/* Navigation row */}
          <div className="flex items-center justify-between mb-3">
            {/* Back to all notes button */}
            <button
              onClick={handleBackToList}
              className="flex items-center gap-2 px-6 py-4 rounded-[100px] hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
              <span className="label-large text-primary">Alle notater</span>
            </button>
            
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              aria-label="Lukk"
            >
              <X className="w-6 h-6 text-foreground" />
            </Button>
          </div>

          {/* Header content row */}
          {!editingNoteId && (
            <div className="flex items-center gap-4">
              {/* Title */}
              <div className="flex-1">
                <h2 className="title-large text-foreground">Nytt notat</h2>
              </div>
              
              {/* Ferdig button */}
              <Button onClick={handleFinished}>
                Ferdig
              </Button>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border shrink-0" />

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {/* Voice input button */}
          <div className="mb-4">
            <Button 
              variant="secondary" 
              className="w-full" 
              onClick={handleVoiceInput}
            >
              <Mic className="w-6 h-6" />
              Snakk inn notat
            </Button>
          </div>

          {/* Image OCR button */}
          <div className="mb-4">
            <Button 
              variant="secondary" 
              className="w-full" 
              onClick={handleImageUpload}
              disabled={isProcessingImage}
            >
              <Image className="w-6 h-6" />
              {isProcessingImage ? 'Behandler bilde...' : 'Hent tekst fra bilde'}
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          {/* Error message */}
          {errorMessage && (
            <div className="mb-4">
              <div className="p-4 rounded-[var(--radius)] bg-error-container border border-error mb-3">
                <p className="label-medium text-error-container-foreground whitespace-pre-line">{errorMessage}</p>
              </div>
              <Button 
                variant="secondary" 
                className="w-full"
                onClick={() => {
                  setErrorMessage('');
                  handleVoiceInput();
                }}
              >
                Prøv igjen
              </Button>
            </div>
          )}

          {/* Text input */}
          <div className="mb-6 relative">
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Skriv her"
              className="w-full h-[152px] px-4 py-3 rounded-[var(--radius)] border border-border resize-none body-large focus:outline-none focus:border-primary transition-colors text-foreground bg-background"
            />
            <div className="mt-1 px-4 flex items-center justify-between">
              <p className="label-small text-muted-foreground">Kun synlig for deg · lagres automatisk</p>
              {noteText.trim().length > 0 && (
                <button
                  onClick={() => setNoteText('')}
                  className="label-small text-primary hover:text-primary/70 transition-colors"
                >
                  Tøm
                </button>
              )}
            </div>
          </div>

          {/* Toggle for "Notatet gjelder et avvik" - Always visible */}
          <div className="flex items-center h-14 px-4 mb-6">
            <div className="box-border content-stretch flex gap-4 items-center relative w-full">
              <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0">
                <Switch 
                  checked={isRelatedToDeviation}
                  onCheckedChange={setIsRelatedToDeviation}
                />
              </div>
              <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0">
                <span className="label-large text-foreground">Notatet gjelder et avvik</span>
              </div>
            </div>
          </div>

          {/* Deviation Registration Section - only show when switch is ON */}
          {isRelatedToDeviation && (
            <div className="content-stretch flex flex-col gap-4 items-start mb-6">
              <DeviationView
                deviationData={deviationData}
                onUpdate={setDeviationData}
                showTrengerUtfylling={false}
              />
            </div>
          )}

          {/* Selected question - always visible if there's a connection */}
          {selectedQuestion && (
            <>
              {/* Divider - only if there's no text */}
              {noteText.trim().length === 0 && (
                <div className="mb-4">
                  <div className="h-px w-full mb-2 bg-border" />
                  <p className="label-medium text-muted-foreground">Gjelder hvilket spørsmål?</p>
                </div>
              )}
              
              <div className="flex flex-col gap-4 mb-4">
                <div className="flex flex-col gap-1">
                  <div className="inline-flex items-center self-start px-4 h-8 rounded-[8px] bg-primary-container">
                    <span className="label-medium text-primary-container-foreground">Valgt</span>
                  </div>
                  
                  <div className="min-h-[92px] rounded-[12px] border-2 border-primary bg-secondary-container p-3">
                    <div className="flex flex-col gap-2">
                      <p className="label-medium text-foreground">
                        {selectedQuestion.id} {selectedQuestion.title}
                      </p>
                      <p className="label-small text-muted-foreground">{selectedQuestion.category}</p>
                      <Button 
                        variant="tertiary" 
                        className="self-start h-auto py-1 px-0"
                        onClick={handleRemoveQuestion}
                      >
                        Fjern kobling
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Show question matching sections only if there's text AND no selection */}
          {noteText.trim().length > 0 && !selectedQuestion && (
            <>
              {/* Divider */}
              <div className="mb-4">
                <div className="h-px w-full mb-2 bg-border" />
                <p className="label-medium text-muted-foreground">Gjelder hvilket spørsmål?</p>
              </div>

              {/* Matched questions (only show if there's text and no selection) */}
              {matchedQuestions.length > 0 && (
                <div className="flex flex-col gap-4 mb-4">
                  {/* Best match */}
                  {matchedQuestions[0] && (
                    <div className="flex flex-col gap-1">
                      <div className="inline-flex items-center self-start px-4 h-8 rounded-[8px] border border-border">
                        <span className="label-medium text-foreground">Beste treff</span>
                      </div>
                      
                      <button 
                        className="min-h-[92px] rounded-[12px] border border-border p-3 hover:bg-muted transition-colors text-left"
                        onClick={() => handleSelectQuestion(matchedQuestions[0])}
                      >
                        <div className="flex flex-col gap-1">
                          <p className="label-medium text-foreground">
                            {matchedQuestions[0].id} {matchedQuestions[0].title}
                          </p>
                          <p className="label-small text-muted-foreground">{matchedQuestions[0].category}</p>
                        </div>
                      </button>
                    </div>
                  )}

                  {/* Additional matches */}
                  {matchedQuestions.length > 1 && (
                    <div className="flex flex-col gap-1">
                      <div className="inline-flex items-center self-start px-4 h-8 rounded-[8px] border border-border">
                        <span className="label-medium text-foreground">Andre treff</span>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        {matchedQuestions.slice(1).map((question) => (
                          <button
                            key={question.id}
                            className="min-h-[92px] rounded-[12px] border border-border p-3 hover:bg-muted transition-colors text-left"
                            onClick={() => handleSelectQuestion(question)}
                          >
                            <div className="flex flex-col gap-1">
                              <p className="label-medium text-foreground">
                                {question.id} {question.title}
                              </p>
                              <p className="label-small text-muted-foreground">{question.category}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Search button - Only show if no automatic matches */}
              {matchedQuestions.length === 0 && (
                <div className="mb-4">
                  <Button 
                    variant="secondary" 
                    className="w-full"
                    onClick={handleOpenSearch}
                  >
                    <Search className="w-6 h-6" />
                    Søk etter spørsmål
                  </Button>
                </div>
              )}
            </>
          )}

          {/* Search overlay - can appear regardless of text */}
          {isSearching && (
                <>
                  {/* Backdrop */}
                  <div 
                    className="fixed inset-0 bg-black/20 z-50"
                    onClick={handleCloseSearch}
                  />

                  {/* Search Modal */}
                  <div className="fixed inset-4 z-50 bg-background rounded-[var(--radius-xl)] shadow-2xl flex flex-col max-w-2xl mx-auto my-8">
                    {/* Search Header */}
                    <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
                      <div className="flex-1 flex items-center gap-2 px-4 h-12 rounded-[var(--radius)] border border-border">
                        <Search className="w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => handleSearchQueryChange(e.target.value)}
                          placeholder="Søk etter spørsmål..."
                          className="flex-1 body-large text-foreground focus:outline-none bg-transparent"
                          autoFocus
                        />
                      </div>
                      <button
                        onClick={handleCloseSearch}
                        className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-muted transition-colors"
                        aria-label="Lukk søk"
                      >
                        <X className="w-6 h-6 text-foreground" />
                      </button>
                    </div>

                    {/* Search Results */}
                    <div className="flex-1 overflow-y-auto px-6 py-4">
                      {searchResults.length === 0 && searchQuery.trim() !== '' && (
                        <p className="body-large text-muted-foreground text-center py-8">
                          Ingen resultater funnet
                        </p>
                      )}

                      {searchResults.length === 0 && searchQuery.trim() === '' && (
                        <p className="body-large text-muted-foreground text-center py-8">
                          Skriv for å søke etter spørsmål
                        </p>
                      )}

                      {searchResults.length > 0 && (
                        <div className="flex flex-col gap-2">
                          {searchResults.map((question) => (
                            <button
                              key={question.id}
                              className="min-h-[92px] rounded-[12px] border border-border p-3 hover:bg-muted transition-colors text-left"
                              onClick={() => handleSelectFromSearch(question)}
                            >
                              <div className="flex flex-col gap-1">
                                <p className="label-medium text-foreground">
                                  {question.id} {question.title}
                                </p>
                                <p className="label-small text-muted-foreground">{question.category}</p>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
        </div>
      </div>
    );
  }
}