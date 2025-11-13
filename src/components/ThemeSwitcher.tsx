import { useState, useEffect } from 'react';

type Theme = 'ksl' | 'lokalmat' | 'nyt-norge' | 'spesialitet';

const themes: { value: Theme; label: string }[] = [
  { value: 'ksl', label: 'KSL' },
  { value: 'lokalmat', label: 'LokalMat' },
  { value: 'nyt-norge', label: 'Nyt Norge' },
  { value: 'spesialitet', label: 'Spesialitet' }
];

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<Theme>('ksl');

  useEffect(() => {
    // Remove all theme classes
    document.documentElement.classList.remove(
      'theme-ksl',
      'theme-lokalmat',
      'theme-nyt-norge',
      'theme-spesialitet'
    );
    
    // Add the selected theme class (only if not ksl, as it's default)
    if (currentTheme !== 'ksl') {
      document.documentElement.classList.add(`theme-${currentTheme}`);
    }
  }, [currentTheme]);

  return (
    <div className="fixed top-4 right-4 z-50 bg-card border border-border rounded-lg shadow-lg p-3">
      <label className="label-small text-muted-foreground mb-2 block">
        Velg plattform
      </label>
      <select
        value={currentTheme}
        onChange={(e) => setCurrentTheme(e.target.value as Theme)}
        className="w-full px-3 py-2 bg-background border border-border rounded-lg body-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {themes.map((theme) => (
          <option key={theme.value} value={theme.value}>
            {theme.label}
          </option>
        ))}
      </select>
    </div>
  );
}
