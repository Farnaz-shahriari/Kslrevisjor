# Production Counts Migration Guide

All audit cards now support displaying production counts in parentheses like: `Sau (69)`

## Updated Components

✅ **AuditCard** (`/components/AuditCard.tsx`)
- Interface updated to use `ProductionItem[]`
- Displays counts automatically: `{prod.name}{prod.count !== undefined ? ` (${prod.count})` : ''}`

✅ **RevisjonCard** (`/components/RevisjonCard.tsx`) 
- Interface updated to use `ProductionItem[]`
- Displays counts automatically in the same format

✅ **ForetakHistorikkView** (`/components/ForetakHistorikkView.tsx`)
- Mock data already updated with realistic counts

## Files That Need Updating

The following files have `produksjon: string[]` that need to be converted to `produksjon: ProductionItem[]`:

### 1. AksepterteRevisjonerPage.tsx
Convert:
```typescript
produksjon: ['Sau', 'Grovfôr', 'Storfe']
```

To:
```typescript
produksjon: [
  { name: 'Sau', count: 69 },
  { name: 'Grovfôr', count: 245 },
  { name: 'Storfe', count: 42 }
]
```

### 2. RevisjonshistorikkPage.tsx
Same conversion pattern as above.

### 3. TildelteRevisjonerPage.tsx
Convert from string with numbers:
```typescript
produksjon: ['Sau (11)', 'Grovfôr (114)', 'Storfe (2)']
```

To:
```typescript
produksjon: [
  { name: 'Sau', count: 11 },
  { name: 'Grovfôr', count: 114 },
  { name: 'Storfe', count: 2 }
]
```

### 4. PlanleggRevisjonPage.tsx  
Convert same as #1 above.

### 5. ForsidePage.tsx
Update the `RevisjonData` interface and all mock data.

### 6. InteractiveMap.tsx, MapRevisjonCard.tsx, MapView.tsx, MapViewWrapper.tsx
These use the same `RevisjonData` interface - update the interface definition and all mock data.

## Realistic Production Count Ranges

Use these realistic ranges when adding counts:

- **Sau** (Sheep): 15-120
- **Lam** (Lamb): 10-80
- **Storfe** (Cattle): 25-150
- **Geit** (Goat): 12-65
- **Korn** (Grain): 180-600 (hectares or tons)
- **Grovfôr** (Fodder): 80-400
- **Melkeproduksjon** (Dairy): 40-200 (cows)
- **Økologiske grønnsaker** (Organic vegetables): 150-800 (varied)
- **Grønnsaker** (Vegetables): 200-1500 (varied)
- **Potet** (Potato): 80-350
- **Frukt og bær** (Fruit/berries): 100-400
- **Honningproduksjon** (Honey): Not typically counted (leave empty)
- **Biodling** (Beekeeping): 15-80 (hives)
- **Planter og stauder** (Plants): 30-150
- **Frø og belgvekster** (Seeds/legumes): 40-200
- **Geitost produksjon** (Goat cheese): Not typically counted (leave empty)
- **Rotfrukter** (Root vegetables): 60-250
- **Urter** (Herbs): 15-60

## Import Statement

Add this import to pages that use the ProductionItem type:

```typescript
import { ProductionItem } from './RevisjonCard';
// OR
import { ProductionItem } from './AuditCard';
```

## Interface Updates

Update RevisjonData interface:
```typescript
interface RevisjonData {
  ordning: string;
  revisjonsfrist: string;
  produksjon: ProductionItem[]; // ← Changed from string[]
  kommune: string;
  address: string;
  isPriority: boolean;
  // ... other fields
}
```

## Example Complete Conversion

**BEFORE:**
```typescript
{
  id: 'awaiting-1',
  foretakName: 'Nordseth Gård',
  visitDate: null,
  visitTime: null,
  revisjonData: {
    ordning: 'KSL',
    revisjonsfrist: '15. februar 2025',
    produksjon: ['Sau', 'Grovfôr', 'Storfe'],
    kommune: 'Trysil',
    address: 'Fjellveien 88, 2420 Trysil',
    isPriority: false,
  },
},
```

**AFTER:**
```typescript
{
  id: 'awaiting-1',
  foretakName: 'Nordseth Gård',
  visitDate: null,
  visitTime: null,
  revisjonData: {
    ordning: 'KSL',
    revisjonsfrist: '15. februar 2025',
    produksjon: [
      { name: 'Sau', count: 78 },
      { name: 'Grovfôr', count: 245 },
      { name: 'Storfe', count: 42 }
    ],
    kommune: 'Trysil',
    address: 'Fjellveien 88, 2420 Trysil',
    isPriority: false,
  },
},
```

## Notes

- Some production types don't need counts (like "Honningproduksjon") - just omit the `count` property
- Counts are optional - `count?: number` - so you can leave them undefined if not applicable
- The display format automatically adds parentheses only when `count` is defined
- Use realistic numbers based on the production type and farm size
- Vary the numbers across different farms for realism
