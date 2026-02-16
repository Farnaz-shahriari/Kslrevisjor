import React from 'react';
import { Tab } from './ui/tabs';

interface HeaderProps {
  activeTab?: 'planlegg' | 'revisjonsoversikt' | 'dokumentoversikt' | 'registrer' | 'rapport';
  onTabChange?: (tab: string) => void;
}

export function Header({ activeTab = 'planlegg', onTabChange }: HeaderProps) {
  return (
    <div className="flex flex-col border-b border-border">
      {/* Top section with logo and profile */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground label-large">NM</span>
          </div>
          <div>
            <h1 className="title-large">Norsk Mat</h1>
            <p className="body-medium text-muted-foreground">Revisjonssystem</p>
          </div>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-muted rounded-[var(--radius)] transition-colors">
          <div className="w-8 h-8 bg-secondary rounded-full" />
          <span className="label-medium">Revisor Name</span>
        </button>
      </div>

      {/* Navigation tabs */}
      <div className="flex items-center gap-0 px-6 overflow-x-auto">
        <Tab
          active={activeTab === 'planlegg'}
          onClick={() => onTabChange?.('planlegg')}
        >
          Planlegg revisjon
        </Tab>
        <Tab
          active={activeTab === 'revisjonsoversikt'}
          onClick={() => onTabChange?.('revisjonsoversikt')}
        >
          Revisjonsoversikt
        </Tab>
        <Tab
          active={activeTab === 'dokumentoversikt'}
          onClick={() => onTabChange?.('dokumentoversikt')}
        >
          Dokumentoversikt
        </Tab>
        <Tab
          active={activeTab === 'registrer'}
          onClick={() => onTabChange?.('registrer')}
        >
          Registrer revisjon
        </Tab>
        <Tab
          active={activeTab === 'rapport'}
          onClick={() => onTabChange?.('rapport')}
        >
          Skriv rapport
        </Tab>
      </div>
    </div>
  );
}