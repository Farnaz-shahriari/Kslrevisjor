import { ChevronDown, ChevronRight, Plus, AlertTriangle, FileText, Search, X, ChevronLeft, Check } from 'lucide-react';
import { useState, useMemo, useRef, useEffect } from 'react';
import { questionsData, MainCategory, QuestionGroup } from '../data/questions';
import svgPathsPending from '../imports/svg-fq63idszfj';
import svgPathsDone from '../imports/svg-492gvby77f';
import { Switch } from './ui/switch';
import { QuestionListDropdown } from './QuestionListDropdown';
import { DividerWithSubtitle } from './ui/divider-with-subtitle';

interface LeftSidebarProps {
  currentQuestionId: string;
  onQuestionSelect: (questionId: string) => void;
  answeredQuestions?: Set<string>;
  questionsWithDeviations?: Set<string>;
  manuallyAddedQuestions?: Set<string>;
  manuallyRemovedQuestions?: Set<string>;
  onAddQuestionToRegister?: (questionId: string) => void;
  onRemoveQuestionFromRegister?: (questionId: string) => void;
}

export function LeftSidebar({ 
  currentQuestionId, 
  onQuestionSelect, 
  answeredQuestions = new Set(), 
  questionsWithDeviations = new Set(),
  manuallyAddedQuestions = new Set(),
  manuallyRemovedQuestions = new Set(),
  onAddQuestionToRegister,
  onRemoveQuestionFromRegister
}: LeftSidebarProps) {
  const [expandedMainCategories, setExpandedMainCategories] = useState<Set<string>>(
    new Set(['category-1'])
  );
  const [expandedQuestionGroups, setExpandedQuestionGroups] = useState<Set<string>>(
    new Set(['group-1-1'])
  );
  const [hoveredQuestionId, setHoveredQuestionId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [showOnlyUnanswered, setShowOnlyUnanswered] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isAddMode, setIsAddMode] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const selectedQuestionRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLDivElement>(null);

  const mainCategories = questionsData;

  // Focus area questions that cannot be removed (always included)
  const focusAreaQuestions = useMemo(() => new Set([
    '1.2.1',
    '1.2.2',
    '1.7.1',
    '1.7.3',
    '1.8.1',
    '1.8.2'
  ]), []);

  // Create a Set of all question IDs that exist in Register Revisjon (questionsData)
  const questionsInRegisterRevisjon = useMemo(() => {
    const questionIds = new Set<string>();
    questionsData.forEach(category => {
      category.questionGroups.forEach(group => {
        group.questions.forEach(question => {
          questionIds.add(question.id);
        });
      });
    });
    return questionIds;
  }, []);

  // Helper function to determine if a question should be shown in Register Revisjon
  const shouldShowQuestion = (questionId: string): boolean => {
    // In add mode, show ALL questions
    if (isAddMode) {
      return true;
    }
    
    // In normal mode, only show questions that are added to the register
    // Focus area questions are always shown
    if (focusAreaQuestions.has(questionId)) {
      return true;
    }
    
    // If manually removed, don't show
    if (manuallyRemovedQuestions.has(questionId)) {
      return false;
    }
    
    // If manually added, show it
    if (manuallyAddedQuestions.has(questionId)) {
      return true;
    }
    
    // Otherwise show (it's in the original questionsData)
    return true;
  };

  // Function to get the partOfBasis status for a question (used in add mode)
  const getPartOfBasisStatus = (questionId: string): 'added' | 'focus' | 'not-added' => {
    // First check if it's a focus area question (always included, cannot be removed)
    if (focusAreaQuestions.has(questionId)) {
      return 'focus';
    }
    
    // Check if manually removed
    if (manuallyRemovedQuestions.has(questionId)) {
      return 'not-added';
    }
    
    // Check if manually added
    if (manuallyAddedQuestions.has(questionId)) {
      return 'added';
    }
    
    // Check if it exists in the original Register Revisjon data
    if (questionsInRegisterRevisjon.has(questionId)) {
      return 'added';
    }
    
    // Otherwise, it's not added
    return 'not-added';
  };

  // Wrapper to prevent removing focus area questions
  const handleRemoveQuestion = (questionId: string) => {
    if (!onRemoveQuestionFromRegister) return;
    // Don't allow removing focus area questions
    if (focusAreaQuestions.has(questionId)) {
      return;
    }
    onRemoveQuestionFromRegister(questionId);
  };

  const handleAddQuestion = (questionId: string) => {
    if (!onAddQuestionToRegister) return;
    onAddQuestionToRegister(questionId);
  };

  // Find which group contains the current question
  const findGroupForQuestion = (questionId: string): { categoryId: string; groupId: string } | null => {
    for (const category of mainCategories) {
      for (const group of category.questionGroups) {
        if (group.questions.some(q => q.id === questionId)) {
          return { categoryId: category.id, groupId: group.id };
        }
      }
    }
    return null;
  };

  // Auto-expand the group containing the current question
  useEffect(() => {
    const groupInfo = findGroupForQuestion(currentQuestionId);
    if (groupInfo) {
      // Expand the category if not already expanded
      setExpandedMainCategories(prev => {
        const newSet = new Set(prev);
        newSet.add(groupInfo.categoryId);
        return newSet;
      });
      
      // Expand the group if not already expanded
      setExpandedQuestionGroups(prev => {
        const newSet = new Set(prev);
        newSet.add(groupInfo.groupId);
        return newSet;
      });
    }
  }, [currentQuestionId]);

  // Scroll selected question into view
  useEffect(() => {
    if (selectedQuestionRef.current) {
      selectedQuestionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }, [currentQuestionId]);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Close search on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        handleCloseSearch();
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  const handleOpenSearch = () => {
    setIsSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const toggleMainCategory = (categoryId: string) => {
    // Only allow category-1 to be expandable
    if (categoryId !== 'category-1') return;
    
    const newExpanded = new Set(expandedMainCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedMainCategories(newExpanded);
  };

  const toggleQuestionGroup = (groupId: string) => {
    // Find if current question is in this group
    const groupInfo = findGroupForQuestion(currentQuestionId);
    
    // Prevent collapsing the group that contains the current question
    if (groupInfo && groupInfo.groupId === groupId && expandedQuestionGroups.has(groupId)) {
      return;
    }
    
    const newExpanded = new Set(expandedQuestionGroups);
    if (newExpanded.has(groupId)) {
      newExpanded.delete(groupId);
    } else {
      newExpanded.add(groupId);
    }
    setExpandedQuestionGroups(newExpanded);
  };

  // Calculate progress for each category
  const getCategoryProgress = (category: MainCategory) => {
    const allQuestions = category.questionGroups.flatMap(group => group.questions);
    const answeredCount = allQuestions.filter(q => q.isAnswered || answeredQuestions.has(q.id)).length;
    const totalCount = allQuestions.length;
    return `${answeredCount}/${totalCount}`;
  };

  // Check if all questions in a group are answered
  const isGroupComplete = (group: QuestionGroup) => {
    return group.questions.every(q => q.isAnswered || answeredQuestions.has(q.id));
  };

  // First filter based on manual additions/removals, then based on search query
  const baseFilteredCategories = useMemo(() => {
    return mainCategories.map(category => ({
      ...category,
      questionGroups: category.questionGroups.map(group => ({
        ...group,
        questions: group.questions.filter(q => shouldShowQuestion(q.id))
      })).filter(group => group.questions.length > 0) // Remove empty groups
    })).filter(category => category.questionGroups.length > 0); // Remove empty categories
  }, [mainCategories, manuallyAddedQuestions, manuallyRemovedQuestions, isAddMode]);

  // Then filter categories based on search query and unanswered filter
  const filteredCategories = useMemo(() => {
    let categories = baseFilteredCategories;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      
      categories = categories.map(category => {
        const filteredGroups = category.questionGroups.map(group => {
          const filteredQuestions = group.questions.filter(question => {
            const questionText = `${question.id} ${question.title}`.toLowerCase();
            return questionText.includes(query);
          });

          return filteredQuestions.length > 0
            ? { ...group, questions: filteredQuestions }
            : null;
        }).filter(Boolean) as QuestionGroup[];

        return filteredGroups.length > 0
          ? { ...category, questionGroups: filteredGroups }
          : null;
      }).filter(Boolean) as MainCategory[];
    }

    // Apply unanswered filter
    if (showOnlyUnanswered) {
      categories = categories.map(category => {
        const filteredGroups = category.questionGroups.map(group => {
          const filteredQuestions = group.questions.filter(question => {
            const isAnswered = question.isAnswered || answeredQuestions.has(question.id);
            return !isAnswered; // Only show unanswered questions
          });

          return filteredQuestions.length > 0
            ? { ...group, questions: filteredQuestions }
            : null;
        }).filter(Boolean) as QuestionGroup[];

        return filteredGroups.length > 0
          ? { ...category, questionGroups: filteredGroups }
          : null;
      }).filter(Boolean) as MainCategory[];
    }

    return categories;
  }, [baseFilteredCategories, searchQuery, showOnlyUnanswered, answeredQuestions]);

  // Pending Icon Component
  const PendingIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <g>
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="var(--muted-foreground)" />
        <path d="M7 13.5C7.82843 13.5 8.5 12.8284 8.5 12C8.5 11.1716 7.82843 10.5 7 10.5C6.17157 10.5 5.5 11.1716 5.5 12C5.5 12.8284 6.17157 13.5 7 13.5Z" fill="var(--muted-foreground)" />
        <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="var(--muted-foreground)" />
        <path d="M17 13.5C17.8284 13.5 18.5 12.8284 18.5 12C18.5 11.1716 17.8284 10.5 17 10.5C16.1716 10.5 15.5 11.1716 15.5 12C15.5 12.8284 16.1716 13.5 17 13.5Z" fill="var(--muted-foreground)" />
      </g>
    </svg>
  );

  // Done Icon Component
  const DoneIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill="var(--muted-foreground)" />
    </svg>
  );

  return (
    <div 
      className="bg-background border-r border-border h-screen overflow-y-auto flex flex-col"
      style={{ minWidth: '400px', width: '400px' }}
    >
      {/* Header - Fixed */}
      <div className="shrink-0 px-4 pt-4 pb-1 border-b border-border">
        <div className="flex flex-col gap-1 w-full">
          <div className="flex gap-4 items-start w-full">
          {!isSearchOpen ? (
            <>
              {/* Normal Mode - Search and Plus Button */}
              {!isAddMode ? (
                <>
                  {/* Search Button */}
                  <div className="flex-1">
                    <button 
                      onClick={handleOpenSearch}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 border border-border rounded-[100px] hover:bg-muted transition-colors"
                    >
                      <Search className="w-6 h-6" />
                      <span className="label-large">Søk i sjekklistespørsmål</span>
                    </button>
                  </div>
                  
                  {/* Add Question Button */}
                  {onAddQuestionToRegister && onRemoveQuestionFromRegister && (
                    <div className="shrink-0">
                      <button 
                        onClick={() => setIsAddMode(true)}
                        className="flex items-center justify-center w-14 h-14 rounded-[100px] border border-border hover:bg-muted transition-colors"
                      >
                        <Plus className="w-6 h-6" />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                /* Add Mode - Back Button, Title, and Search */
                <div className="flex-1 flex flex-col gap-4">
                  {/* Title with Cancel Button */}
                  <div className="flex items-center gap-4 px-2">
                    <h3 className="title-medium flex-1">Legg til spørsmål i revisjonen</h3>
                    <button 
                      onClick={() => setIsAddMode(false)}
                      className="flex items-center justify-center w-14 h-14 rounded-[100px] border border-border hover:bg-muted transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Search Box */}
                  <div className="bg-[#e9e9df] flex gap-1 w-full h-14 items-center rounded-[28px] px-1">
                    {/* Leading icon */}
                    <div className="flex items-center justify-center shrink-0 w-12 h-12">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full">
                        <Search className="w-6 h-6 text-muted-foreground" />
                      </div>
                    </div>
                    
                    {/* Input field */}
                    <div className="flex-1 min-w-0">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Søk i sjekklistespørsmål"
                        className="w-full bg-transparent border-none outline-none body-large text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    
                    {/* Clear button - only show when there's text */}
                    {searchQuery && (
                      <div className="flex items-center justify-center shrink-0 w-12 h-12">
                        <button 
                          onClick={() => setSearchQuery('')}
                          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted/50 transition-colors"
                        >
                          <X className="w-6 h-6 text-muted-foreground" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Search Input - Full Width (Normal Mode) */
            <div ref={searchContainerRef} className="flex-1">
              <div className="bg-[#e9e9df] flex gap-1 w-full h-14 items-center rounded-[28px] px-1">
                {/* Leading icon */}
                <div className="flex items-center justify-center shrink-0 w-12 h-12">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full">
                    <Search className="w-6 h-6 text-muted-foreground" />
                  </div>
                </div>
                
                {/* Input field */}
                <div className="flex-1 min-w-0">
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Søk i sjekklistespørsmål"
                    className="w-full bg-transparent border-none outline-none body-large text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                
                {/* Close button */}
                <div className="flex items-center justify-center shrink-0 w-12 h-12">
                  <button 
                    onClick={handleCloseSearch}
                    className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted/50 transition-colors"
                  >
                    <X className="w-6 h-6 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          )}
          </div>

          {/* Filter: Show only unanswered questions - Only show in normal mode */}
          {!isAddMode && (
            <div className="flex items-center gap-4 px-4 py-1">
              <Switch
                checked={showOnlyUnanswered}
                onCheckedChange={setShowOnlyUnanswered}
              />
              <span className="label-large text-foreground">Vis kun ubesvarte</span>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Content */}
      <div className="flex-1 overflow-y-auto p-4 scrollable-sidebar">
        {isAddMode ? (
          /* Add Mode - Flat list with dividers, no collapsing */
          <div className="space-y-4">
            {filteredCategories.map((category) => (
              <div key={category.id}>
                {category.questionGroups.map((group, groupIndex) => (
                  <div key={group.id}>
                    {/* Group Divider with Subtitle */}
                    <DividerWithSubtitle 
                      subtitle={`${group.id.split('-').pop()} ${group.title}`}
                      className="mb-3 mt-6 first:mt-0"
                    />

                    {/* Questions - Flat list, no nesting */}
                    <div className="space-y-1">
                      {group.questions.map((question) => {
                        const basisStatus = getPartOfBasisStatus(question.id);
                        const isFocus = basisStatus === 'focus';
                        const isAdded = basisStatus === 'added';
                        const isNotAdded = basisStatus === 'not-added';
                        
                        return (
                          <div key={question.id} className="w-full flex items-start gap-2 p-3 rounded-[12px] transition-colors">
                            {/* Question Text - Full text, no truncation */}
                            <div className="flex-1 min-w-0">
                              <p className="body-large">
                                {question.id} {question.title}
                              </p>
                            </div>

                            {/* Add/Remove Chips */}
                            <div className="shrink-0 mt-0.5">
                              {isFocus ? (
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-[#dae2ff] text-[#174295]">
                                  <span className="label-medium">
                                    Fokusområde
                                  </span>
                                </div>
                              ) : isAdded ? (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveQuestion(question.id);
                                  }}
                                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-[#dae2ff] text-[#174295] hover:bg-[#c5d5ff] transition-colors cursor-pointer"
                                  title="Klikk for å fjerne fra Register Revisjon"
                                >
                                  <Check size={18} />
                                  <span className="label-medium">
                                    Lagt til
                                  </span>
                                </button>
                              ) : isNotAdded ? (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleAddQuestion(question.id);
                                  }}
                                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] border border-[var(--border)] hover:bg-muted transition-colors cursor-pointer"
                                  title="Klikk for å legge til i Register Revisjon"
                                >
                                  <Plus size={18} className="text-foreground" />
                                  <span className="label-medium text-foreground">
                                    Legg til
                                  </span>
                                </button>
                              ) : null}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          /* Normal Mode - Collapsible hierarchy */
          <>
            {filteredCategories.map((category) => (
              <div key={category.id} className="mb-4">
                {/* Level 1: Main Category */}
                <button
                  onClick={() => toggleMainCategory(category.id)}
                  className={`w-full flex items-start gap-3 p-2 rounded-[var(--radius)] text-left transition-colors mb-2 ${
                    category.id === 'category-1' ? 'hover:bg-muted' : 'cursor-default'
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <span className="label-medium">{category.number === 0 ? 'KSL' : category.number}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-muted-foreground label-medium">{getCategoryProgress(category)}</p>
                    <p className="mt-0.5 body-large">{category.title}</p>
                  </div>
                  {category.id === 'category-1' && (
                    <div className="shrink-0 mt-1">
                      {expandedMainCategories.has(category.id) ? (
                        <ChevronDown className="w-5 h-5" />
                      ) : (
                        <ChevronRight className="w-5 h-5" />
                      )}
                    </div>
                  )}
                </button>

                {/* Level 2: Question Groups */}
                {expandedMainCategories.has(category.id) && (
                  <div className="ml-3 space-y-2">
                    {category.questionGroups.map((group) => {
                      const groupInfo = findGroupForQuestion(currentQuestionId);
                      const isCurrentGroup = groupInfo && groupInfo.groupId === group.id;
                      const cannotCollapse = isCurrentGroup && expandedQuestionGroups.has(group.id);
                      
                      return (
                      <div key={group.id}>
                        <button
                          onClick={() => toggleQuestionGroup(group.id)}
                          className={`w-full flex items-center gap-2 p-2 rounded-[var(--radius)] text-left transition-colors ${
                            cannotCollapse ? 'cursor-default' : 'hover:bg-muted'
                          }`}
                          title={cannotCollapse ? 'Kan ikke lukke gruppen som inneholder valgt spørsmål' : ''}
                        >
                          {/* Status Icon for Question Group */}
                          <div className="shrink-0">
                            {isGroupComplete(group) ? <DoneIcon /> : <PendingIcon />}
                          </div>
                          <span className="flex-1 min-w-0 text-ellipsis overflow-hidden">
                            {group.title}
                          </span>
                          <div className="shrink-0">
                            {expandedQuestionGroups.has(group.id) ? (
                              <ChevronDown className={`w-4 h-4 ${cannotCollapse ? 'opacity-50' : ''}`} />
                            ) : (
                              <ChevronRight className="w-4 h-4" />
                            )}
                          </div>
                        </button>

                        {/* Level 3: Individual Questions */}
                        {expandedQuestionGroups.has(group.id) && group.questions.length > 0 && (
                          <div className="ml-7 mt-1 space-y-1">
                            {group.questions.map((question) => {
                              const isAnswered = question.isAnswered || answeredQuestions.has(question.id);
                              const isSelected = currentQuestionId === question.id;
                              
                              return (
                                <div 
                                  key={question.id} 
                                  className="relative group"
                                  ref={isSelected ? selectedQuestionRef : null}
                                >
                                  <button
                                    onClick={() => onQuestionSelect(question.id)}
                                    onMouseEnter={() => setHoveredQuestionId(question.id)}
                                    onMouseLeave={() => setHoveredQuestionId(null)}
                                    className={`w-full flex items-start gap-2 p-3 rounded-[12px] text-left transition-colors ${
                                      isSelected
                                        ? 'bg-accent text-accent-foreground'
                                        : 'hover:bg-muted'
                                    }`}
                                  >
                                    {/* Status Icon */}
                                    <div className="shrink-0 mt-0.5">
                                      {isAnswered ? <DoneIcon /> : <PendingIcon />}
                                    </div>

                                    {/* Question Text - Truncated to 3 lines */}
                                    <div className="flex-1 min-w-0">
                                      <p 
                                        className="body-large line-clamp-3"
                                        style={{
                                          display: '-webkit-box',
                                          WebkitLineClamp: 3,
                                          WebkitBoxOrient: 'vertical',
                                          overflow: 'hidden'
                                        }}
                                      >
                                        {question.id} {question.title}
                                      </p>

                                      {/* Icons Row */}
                                      <div className="flex items-center gap-2 mt-2">
                                        {(question.hasDeviation || questionsWithDeviations.has(question.id)) && (
                                          <div className="flex items-center gap-1">
                                            <AlertTriangle className="w-4 h-4 text-destructive" />
                                            <span className="label-xsmall text-destructive">Avvik</span>
                                          </div>
                                        )}
                                        {question.requiresDocumentation && (
                                          <div className="w-5 h-5 flex items-center justify-center">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 20 16">
                                              <path d="M18 2H10L8 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V4C20 2.9 19.1 2 18 2ZM18 14H2V2H7.17L9.17 4H18V14ZM15.5 8.12V11.5H12.5V6.5H13.88L15.5 8.12ZM11 5V13H17V7.5L14.5 5H11Z" fill="#174295" />
                                            </svg>
                                          </div>
                                        )}
                                        {question.hasDocument && (
                                          <FileText className="w-4 h-4 text-secondary" />
                                        )}
                                      </div>
                                    </div>
                                  </button>

                                  {/* Tooltip on Hover */}
                                  {hoveredQuestionId === question.id && (
                                    <div className="absolute left-0 top-full mt-1 z-50 w-full max-w-sm p-3 bg-foreground text-primary-foreground rounded-[var(--radius)] shadow-[var(--elevation-sm)] pointer-events-none">
                                      <p>{question.id} {question.title}</p>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}