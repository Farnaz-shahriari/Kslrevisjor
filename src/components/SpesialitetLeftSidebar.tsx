import { ChevronDown, ChevronRight, Plus, AlertTriangle, FileText, Search, X } from 'lucide-react';
import { useState, useMemo, useRef, useEffect } from 'react';
import { spesialitetQuestionsData, SpesialitetMainCategory, SpesialitetQuestionGroup } from '../data/spesialitetQuestions';
import svgPathsPending from '../imports/svg-fq63idszfj';
import svgPathsDone from '../imports/svg-492gvby77f';

interface SpesialitetLeftSidebarProps {
  currentQuestionId: string;
  onQuestionSelect: (questionId: string) => void;
  answeredQuestions?: Set<string>;
  questionsWithDeviations?: Set<string>;
  manuallyAddedQuestions?: Set<string>;
  manuallyRemovedQuestions?: Set<string>;
}

export function SpesialitetLeftSidebar({ 
  currentQuestionId, 
  onQuestionSelect, 
  answeredQuestions = new Set(), 
  questionsWithDeviations = new Set(),
  manuallyAddedQuestions = new Set(),
  manuallyRemovedQuestions = new Set()
}: SpesialitetLeftSidebarProps) {
  const [expandedMainCategories, setExpandedMainCategories] = useState<Set<string>>(
    new Set(['category-1'])
  );
  const [expandedQuestionGroups, setExpandedQuestionGroups] = useState<Set<string>>(
    new Set(['group-1-1'])
  );
  const [hoveredQuestionId, setHoveredQuestionId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const selectedQuestionRef = useRef<HTMLDivElement>(null);

  const mainCategories = spesialitetQuestionsData;

  // Focus area questions that cannot be removed (always included)
  const focusAreaQuestions = useMemo(() => new Set([
    '1.2.1',
    '1.2.2',
    '1.7.1',
    '1.7.3',
    '1.8.1',
    '1.8.2'
  ]), []);

  // Helper function to determine if a question should be shown in Register Revisjon
  const shouldShowQuestion = (questionId: string): boolean => {
    // Focus area questions are always shown
    if (focusAreaQuestions.has(questionId)) {
      return true;
    }
    
    // If manually added, show it
    if (manuallyAddedQuestions.has(questionId)) {
      return true;
    }
    
    // If manually removed, don't show it
    if (manuallyRemovedQuestions.has(questionId)) {
      return false;
    }
    
    // By default, show all questions
    return true;
  };

  // Find which group contains the current question
  const findGroupForQuestion = (questionId: string): { categoryId: string; groupId: string } | null => {
    for (const category of mainCategories) {
      for (const group of category.questionGroups) {
        if (group.questions.some(q => q.id === questionId && shouldShowQuestion(q.id))) {
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
      setExpandedMainCategories(prev => {
        const newSet = new Set(prev);
        newSet.add(groupInfo.categoryId);
        return newSet;
      });
      
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

  // Focus search input when search is opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  const toggleMainCategory = (categoryId: string) => {
    setExpandedMainCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const toggleQuestionGroup = (groupId: string) => {
    setExpandedQuestionGroups(prev => {
      const newSet = new Set(prev);
      if (newSet.has(groupId)) {
        newSet.delete(groupId);
      } else {
        newSet.add(groupId);
      }
      return newSet;
    });
  };

  // Filter questions based on search
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return mainCategories;
    }

    const query = searchQuery.toLowerCase();
    return mainCategories.map(category => ({
      ...category,
      questionGroups: category.questionGroups.map(group => ({
        ...group,
        questions: group.questions.filter(q => 
          shouldShowQuestion(q.id) && (
            q.id.toLowerCase().includes(query) || 
            q.title.toLowerCase().includes(query)
          )
        )
      })).filter(group => group.questions.length > 0)
    })).filter(category => category.questionGroups.length > 0);
  }, [searchQuery, manuallyAddedQuestions, manuallyRemovedQuestions]);

  // Auto-expand groups when searching
  useEffect(() => {
    if (searchQuery.trim()) {
      const allCategoryIds = new Set<string>();
      const allGroupIds = new Set<string>();
      
      filteredCategories.forEach(category => {
        allCategoryIds.add(category.id);
        category.questionGroups.forEach(group => {
          allGroupIds.add(group.id);
        });
      });
      
      setExpandedMainCategories(allCategoryIds);
      setExpandedQuestionGroups(allGroupIds);
    }
  }, [searchQuery, filteredCategories]);

  const getQuestionStatus = (questionId: string): 'answered' | 'unanswered' | 'deviation' => {
    if (questionsWithDeviations.has(questionId)) {
      return 'deviation';
    }
    if (answeredQuestions.has(questionId)) {
      return 'answered';
    }
    return 'unanswered';
  };

  return (
    <div className="w-[400px] border-r border-border flex flex-col overflow-hidden bg-background">
      {/* Header */}
      <div className="px-6 pt-4 pb-2 border-b border-border">
        <div className="flex items-center justify-between mb-2">
          <h2 className="title-large text-foreground">Sjekkliste spørsmål</h2>
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="w-10 h-10 flex items-center justify-center hover:bg-muted rounded-full transition-colors"
          >
            <Search className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Search Input */}
        {isSearchOpen && (
          <div ref={searchContainerRef} className="mt-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Søk i sjekkliste spørsmål"
                className="w-full h-10 pl-9 pr-9 bg-muted border border-border rounded-[var(--radius)] body-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center hover:bg-background rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Questions List */}
      <div className="flex-1 overflow-auto px-6 py-2">
        {filteredCategories.map((category) => (
          <div key={category.id} className="mb-2">
            {/* Main Category Header */}
            <button
              onClick={() => toggleMainCategory(category.id)}
              className="w-full flex items-center gap-2 px-2 py-2 hover:bg-muted rounded-[var(--radius)] transition-colors"
            >
              {expandedMainCategories.has(category.id) ? (
                <ChevronDown className="w-5 h-5 text-foreground shrink-0" />
              ) : (
                <ChevronRight className="w-5 h-5 text-foreground shrink-0" />
              )}
              <span className="label-medium text-foreground text-left flex-1">
                {category.number}. {category.title}
              </span>
            </button>

            {/* Question Groups */}
            {expandedMainCategories.has(category.id) && (
              <div className="ml-4 mt-1 space-y-1">
                {category.questionGroups.map((group) => (
                  <div key={group.id}>
                    {/* Question Group Header */}
                    <button
                      onClick={() => toggleQuestionGroup(group.id)}
                      className="w-full flex items-center gap-2 px-2 py-2 hover:bg-muted rounded-[var(--radius)] transition-colors"
                    >
                      {expandedQuestionGroups.has(group.id) ? (
                        <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />
                      )}
                      <span className="label-small text-muted-foreground text-left flex-1">
                        {group.title}
                      </span>
                    </button>

                    {/* Individual Questions */}
                    {expandedQuestionGroups.has(group.id) && (
                      <div className="ml-4 space-y-1">
                        {group.questions.filter(q => shouldShowQuestion(q.id)).map((question) => {
                          const isSelected = currentQuestionId === question.id;
                          const status = getQuestionStatus(question.id);
                          const isHovered = hoveredQuestionId === question.id;
                          const isFocusArea = focusAreaQuestions.has(question.id);

                          return (
                            <div
                              key={question.id}
                              ref={isSelected ? selectedQuestionRef : null}
                            >
                              <button
                                onClick={() => onQuestionSelect(question.id)}
                                onMouseEnter={() => setHoveredQuestionId(question.id)}
                                onMouseLeave={() => setHoveredQuestionId(null)}
                                className={`w-full flex items-start gap-2 px-2 py-2 rounded-[var(--radius)] transition-colors ${
                                  isSelected ? 'bg-secondary-container' : 'hover:bg-muted'
                                }`}
                              >
                                {/* Status Icon */}
                                <div className="shrink-0 pt-0.5">
                                  {status === 'deviation' ? (
                                    <AlertTriangle className="w-5 h-5 text-error" />
                                  ) : status === 'answered' ? (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                                      <g dangerouslySetInnerHTML={{ __html: svgPathsDone }} />
                                    </svg>
                                  ) : (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                                      <g dangerouslySetInnerHTML={{ __html: svgPathsPending }} />
                                    </svg>
                                  )}
                                </div>

                                {/* Question Content */}
                                <div className="flex-1 min-w-0 text-left">
                                  <div className={`label-small mb-1 ${
                                    isSelected ? 'text-secondary-container-foreground' : 'text-muted-foreground'
                                  }`}>
                                    {question.id}
                                    {isFocusArea && (
                                      <span className="ml-1 text-primary">*</span>
                                    )}
                                  </div>
                                  <div className={`body-medium line-clamp-2 ${
                                    isSelected ? 'text-secondary-container-foreground' : 'text-foreground'
                                  }`}>
                                    {question.title}
                                  </div>
                                </div>
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
