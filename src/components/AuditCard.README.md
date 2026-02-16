# AuditCard Component

A reusable component for displaying audit cards throughout the audit lifecycle with different statuses and states.

## Audit Lifecycle Statuses

The `AuditCard` component supports 6 different statuses that represent the complete audit workflow:

### 1. **Tildelt** (Assigned)
- **When**: Initial state when audit is assigned to a revisor
- **Display**: Basic audit info with ordning chip
- **Use case**: TildelteRevisjoner page

### 2. **Akseptert** (Accepted)
- **When**: After revisor accepts the audit assignment
- **Display**: Same as Tildelt, ready for planning
- **Use case**: AksepterteRevisjoner page

### 3. **Planlagt** (Planned)
- **When**: After revision time/date is scheduled
- **Display**: Shows planned revision date
- **Use case**: Forside "Planlagte revisjoner"

### 4. **Revidert** (Audited)
- **When**: After the planned date has passed and audit is completed
- **Display**: Shows audit date, report being written
- **Use case**: During report writing phase

### 5. **Rapport Editerbar** (Report Editable)
- **When**: Report is locked but still editable for 14 days
- **Display**: 
  - "Rapport låst" chip (secondary-container)
  - "Editerbar i 14 dager" chip (tertiary-container)
  - Download report button
  - Shows open/closed deviations
- **Use case**: Revisjonshistorikk, ForetakHistorikkView (recent audits)

### 6. **Rapport Låst** (Report Locked)
- **When**: After 14 days, report is permanently locked
- **Display**: 
  - "Rapport låst" chip (secondary-container)
  - Download report button
  - Shows closed deviations only
- **Use case**: Revisjonshistorikk, ForetakHistorikkView (historical audits)

## Usage Examples

### Basic Usage

```tsx
import { AuditCard, AuditCardData } from './components/AuditCard';

const audit: AuditCardData = {
  id: 'audit-123',
  ordning: 'KSL',
  status: 'planlagt',
  revisjonDato: 'Torsdag 30. januar 2026',
  produksjon: ['Korn', 'Storfe'],
  foretakName: 'Haugseter Gård',
  address: 'Haugseterveien 12, 2350 Nes på Hedmarken',
  kommune: 'Nes',
  avvikCount: 0,
  avvikOpen: 0,
  avvikClosed: 0
};

<AuditCard audit={audit} onClick={() => handleCardClick(audit.id)} />
```

### With Deviations (Rapport Editerbar/Låst)

```tsx
const auditWithDeviations: AuditCardData = {
  id: 'audit-456',
  ordning: 'LokalMat',
  status: 'rapport-editerbar',
  revisjonDato: 'Mandag 15. mai 2023',
  rapportLastDato: 'Mandag 29. mai 2023',
  produksjon: ['Storfe', 'Grønnsaker'],
  foretakName: 'Berget Gård AS',
  address: 'Bergetveien 42, 2150 Årnes',
  kommune: 'Nes',
  avvikCount: 3,
  avvikOpen: 2,
  avvikClosed: 1,
  kortRapport: 'Revisjonen ble gjennomført...',
  deviations: [
    {
      id: 'dev-1',
      severity: 'kritisk',
      question: '1.2.1 – Har du en gyldig gjødslingsplan?',
      status: 'dokument-levert',
      deadline: 'Tirsdag 25. mars 2026'
    },
    {
      id: 'dev-2',
      severity: 'lite-avvik',
      question: '1.3.6 – Har du nok lagringskapasitet?',
      status: 'lukket',
      deadline: 'Lørdag 5. april 2026'
    }
  ]
};

<AuditCard 
  audit={auditWithDeviations} 
  onClick={() => handleCardClick(auditWithDeviations.id)}
  showExpandButton={true}
/>
```

### Without Expand Button

```tsx
<AuditCard 
  audit={audit} 
  onClick={() => handleCardClick(audit.id)}
  showExpandButton={false} // Hides "Vis mer/mindre" button
/>
```

### Default Expanded

```tsx
<AuditCard 
  audit={audit} 
  onClick={() => handleCardClick(audit.id)}
  defaultExpanded={true} // Card starts expanded
/>
```

## Props

### AuditCardData

```typescript
interface AuditCardData {
  id: string;
  ordning: 'KSL' | 'LokalMat' | 'Nyt Norge' | 'Spesialitet';
  status: AuditStatus;
  revisjonDato?: string; // Norwegian date format
  rapportLastDato?: string; // Date when report was locked
  produksjon: string[]; // e.g., ['Korn', 'Storfe']
  foretakName: string;
  address: string; // Format: "Street, Postal Code City"
  kommune: string;
  avvikCount?: number; // Total deviations
  avvikOpen?: number; // Open deviations
  avvikClosed?: number; // Closed deviations
  kortRapport?: string; // Short report text (optional)
  deviations?: DeviationData[]; // Detailed deviation list (optional)
}
```

### AuditCardProps

```typescript
interface AuditCardProps {
  audit: AuditCardData;
  onClick?: () => void; // Click handler for entire card
  showExpandButton?: boolean; // Show/hide "Vis mer/mindre" button (default: true)
  defaultExpanded?: boolean; // Initial expanded state (default: false)
}
```

### DeviationData

```typescript
interface DeviationData {
  id: string;
  severity: 'kritisk' | 'avvik' | 'lite-avvik';
  question: string; // Checklist question text
  status: 'apent' | 'lukket' | 'dokument-levert' | 'tidspunkt-foreslatt' | 'venter-handling';
  deadline?: string; // Norwegian date format (optional)
}
```

## Status Chips Display Logic

| Status | "Rapport låst" | "Editerbar i 14 dager" | "X åpne avvik" | Download Button |
|--------|---------------|----------------------|---------------|----------------|
| tildelt | ❌ | ❌ | ❌ | ❌ |
| akseptert | ❌ | ❌ | ❌ | ❌ |
| planlagt | ❌ | ❌ | ❌ | ❌ |
| revidert | ❌ | ❌ | If avvikOpen > 0 | ❌ |
| rapport-editerbar | ✅ | ✅ | If avvikOpen > 0 | ✅ |
| rapport-last | ✅ | ❌ | If avvikOpen > 0 | ✅ |

## Color Scheme

### Ordning Chips
- **KSL**: Background #4A671E, Text #FFFFFF (white)
- **LokalMat**: Background #A80000, Text #FFFFFF (white)
- **Nyt Norge**: Background #00319E, Text #FFFFFF (white)
- **Spesialitet**: Background #594414, Text #FFFFFF (white)

### Status Chips
- **Rapport låst**: Uses `var(--secondary-container)` background
- **Editerbar i 14 dager**: Uses `var(--tertiary-container)` background
- **Åpne avvik**: Uses `var(--error-container)` background

### Severity Badges
- **Kritisk**: Background #ffdad6, Text #410002
- **Avvik**: Background #fddcc9, Text #4a2800
- **Lite avvik**: Background #fdeeb1, Text #3d2c00

## Design System Compliance

✅ Uses CSS variables from `/styles/globals.css`
✅ Uses typography classes (title-large, title-medium, body-large, label-medium, label-small)
✅ Follows Norwegian date format: "Dayname DD. month YYYY"
✅ Responsive layout with mobile/desktop breakpoints
✅ Consistent spacing (gap-1 for card lists, gap-4 for internal spacing)

## Where to Use

- **ForsidePage**: Planlagte revisjoner list (status: 'planlagt')
- **TildelteRevisjoner**: Assigned audits (status: 'tildelt')
- **AksepterteRevisjoner**: Accepted audits (status: 'akseptert')
- **Revisjonshistorikk**: Historical audits (status: 'rapport-editerbar' or 'rapport-last')
- **ForetakHistorikkView**: Audit history for specific foretak (all statuses)
- **RevisjonsgrunnlagPage**: Can show historical context (status: 'rapport-last')

## Future Updates

To add new features or modify behavior for a specific status:

1. Update the `AuditStatus` type to add new statuses
2. Modify the status chip display logic in the component
3. Add new deviation status types to `DeviationData` if needed
4. All existing cards will automatically work without breaking

This centralized component ensures consistency across the application and makes future updates easier!
