import { ChevronDown, ChevronRight, Search, X } from 'lucide-react';
import { useState, useMemo, useRef, useEffect } from 'react';
import { producerQuestionsData } from '../data/producerQuestions';
import svgPathsPending from '../imports/svg-fq63idszfj';
import svgPathsDone from '../imports/svg-492gvby77f';

interface ProducerLeftSidebarProps {
  currentQuestionId: string | null;
  onQuestionSelect: (questionId: string) => void;
  answeredQuestions?: Set<string>;
  onIntroSelect?: () => void;
  onProduksjonerSelect?: () => void;
  selectedView?: 'intro' | 'produksjoner' | 'question';
}

export function ProducerLeftSidebar({ 
  currentQuestionId, 
  onQuestionSelect, 
  answeredQuestions = new Set(),
  onIntroSelect,
  onProduksjonerSelect,
  selectedView = 'intro'
}: ProducerLeftSidebarProps) {
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

  const mainCategories = producerQuestionsData;

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
    if (currentQuestionId) {
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

  // Filter questions based on search query
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
          q.id.toLowerCase().includes(query) ||
          q.title.toLowerCase().includes(query)
        )
      })).filter(group => group.questions.length > 0)
    })).filter(category => category.questionGroups.length > 0);
  }, [searchQuery, mainCategories]);

  // Auto-expand all when searching
  useEffect(() => {
    if (searchQuery.trim()) {
      const allCategoryIds = new Set(filteredCategories.map(c => c.id));
      const allGroupIds = new Set(
        filteredCategories.flatMap(c => c.questionGroups.map(g => g.id))
      );
      setExpandedMainCategories(allCategoryIds);
      setExpandedQuestionGroups(allGroupIds);
    }
  }, [searchQuery, filteredCategories]);

  return (
    <div className="w-[400px] border-r border-border flex flex-col overflow-hidden">
      {/* Search Container */}
      <div ref={searchContainerRef} className="shrink-0 px-6 pt-4 pb-2">
        {!isSearchOpen ? (
          <button
            onClick={() => setIsSearchOpen(true)}
            className="w-full h-10 flex items-center gap-2 px-3 rounded-[var(--radius)] border border-border hover:bg-muted transition-colors"
          >
            <Search className="w-5 h-5 text-muted-foreground" />
            <span className="body-medium text-muted-foreground">Søk i sjekklistespørsmål</span>
          </button>
        ) : (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Søk i sjekklistespørsmål"
              className="w-full h-10 pl-10 pr-10 rounded-[var(--radius)] border border-border bg-background body-medium focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={() => {
                setIsSearchOpen(false);
                setSearchQuery('');
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Question List */}
      <div className="flex-1 overflow-auto px-6 py-2 space-y-1">
        {/* Intro Section */}
        <button 
          onClick={onIntroSelect}
          className={`w-full text-left px-4 min-h-[56px] rounded-[var(--radius)] transition-colors ${
            selectedView === 'intro' ? 'bg-secondary-container' : 'hover:bg-muted'
          }`}
        >
          <div className="flex items-center gap-4">
            <span className={`body-large ${selectedView === 'intro' ? 'text-secondary-container-foreground' : 'text-muted-foreground'}`}>
              Før du starter med egenrevisjonen
            </span>
          </div>
        </button>

        {/* Produksjoner Section */}
        <button 
          onClick={onProduksjonerSelect}
          className={`w-full text-left px-4 min-h-[56px] rounded-[var(--radius)] transition-colors ${
            selectedView === 'produksjoner' ? 'bg-secondary-container' : 'hover:bg-muted'
          }`}
        >
          <div className="flex items-center gap-4">
            <span className={`body-large ${selectedView === 'produksjoner' ? 'text-secondary-container-foreground' : 'text-muted-foreground'}`}>
              Produksjoner
            </span>
          </div>
        </button>

        {/* Divider */}
        <div className="h-px bg-border my-3"></div>

        {/* Label */}
        <div className="px-4 min-h-[36px] flex items-center">
          <span className="label-xsmall text-muted-foreground">ALLE SPØRSMÅL</span>
        </div>

        {/* Categories and Questions */}
        {filteredCategories.map((category) => (
          <div key={category.id} className="space-y-1">
            {/* Main Category */}
            <button
              onClick={() => toggleMainCategory(category.id)}
              className="w-full text-left px-4 min-h-[56px] rounded-[var(--radius)] hover:bg-muted transition-colors flex items-center gap-2"
            >
              {expandedMainCategories.has(category.id) ? (
                <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
              ) : (
                <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />
              )}
              <span className="body-large text-foreground">{category.number}. {category.title}</span>
            </button>

            {/* Question Groups */}
            {expandedMainCategories.has(category.id) && (
              <div className="ml-4 space-y-1">
                {category.questionGroups.map((group) => (
                  <div key={group.id} className="space-y-1">
                    {/* Group Header */}
                    <button
                      onClick={() => toggleQuestionGroup(group.id)}
                      className="w-full text-left px-4 min-h-[48px] rounded-[var(--radius)] hover:bg-muted transition-colors flex items-center gap-2"
                    >
                      {expandedQuestionGroups.has(group.id) ? (
                        <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                      )}
                      <span className="body-medium text-foreground">{group.title}</span>
                    </button>

                    {/* Individual Questions */}
                    {expandedQuestionGroups.has(group.id) && (
                      <div className="ml-4 space-y-1">
                        {group.questions.map((question) => {
                          const isSelected = currentQuestionId === question.id;
                          const isAnswered = answeredQuestions.has(question.id);
                          const isHovered = hoveredQuestionId === question.id;

                          return (
                            <button
                              key={question.id}
                              ref={isSelected ? selectedQuestionRef : null}
                              onClick={() => onQuestionSelect(question.id)}
                              onMouseEnter={() => setHoveredQuestionId(question.id)}
                              onMouseLeave={() => setHoveredQuestionId(null)}
                              className={`w-full text-left px-4 min-h-[56px] rounded-[var(--radius)] transition-colors ${
                                isSelected ? 'bg-secondary-container' : 'hover:bg-muted'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                {/* Status Icon */}
                                <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                                  {isAnswered ? (
                                    <img src={svgPathsDone.img} alt="" className="w-6 h-6" />
                                  ) : (
                                    <img src={svgPathsPending.img} alt="" className="w-6 h-6" />
                                  )}
                                </div>

                                {/* Question ID and Title */}
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-baseline gap-2">
                                    <span className={`label-medium ${
                                      isSelected ? 'text-secondary-container-foreground' : 'text-foreground'
                                    }`}>
                                      {question.id}
                                    </span>
                                    <span className={`body-medium ${
                                      isSelected ? 'text-secondary-container-foreground' : 'text-muted-foreground'
                                    }`}>
                                      {question.title}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </button>
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

        {/* No results message */}
        {searchQuery && filteredCategories.length === 0 && (
          <div className="px-4 py-8 text-center">
            <p className="body-medium text-muted-foreground">
              Ingen spørsmål funnet for "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
