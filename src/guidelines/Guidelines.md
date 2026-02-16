**Add your own guidelines here**
Only use absolute positioning when necessary. Opt for responsive and well structured layouts that use flexbox and grid by default
Refactor code as you go to keep code clean
Keep file sizes small and put helper functions and components in their own files.

## Component & Design Consistency Guidelines

**CRITICAL: Always maintain design consistency across the entire application**

### Component Reusability
- ✅ **ALWAYS** reuse existing components from the codebase when building new features
- ✅ Look at existing components in `/components` folder before creating new ones
- ✅ Maintain the same structure, styling patterns, and interactions across revisor and producer interfaces
- ✅ Use the same cards, buttons, lists, tabs, and layout patterns throughout the app

### Design System Adherence
- ✅ **ALWAYS** use colors from `/styles/globals.css` CSS variables
- ✅ **ALWAYS** use typography classes from `/styles/globals.css`
- ✅ **ALWAYS** use spacing, borders, and radius values from the design system
- ❌ **NEVER** create custom colors, fonts, or styling that deviates from the design system
- ❌ **NEVER** hardcode hex colors or RGB values
- ❌ **NEVER** use inline font styles

### Vertical Spacing Standards

**CRITICAL: Consistent vertical spacing across all pages and lists in the Revisor interface**

#### Spacing Between Sections and Lists

- ✅ **ALWAYS** use `gap-2` (8px) between Sorting/Bulk Actions Bar and the list of items below
- ✅ **ALWAYS** use `gap-1` (4px) between individual list items (audit cards, deviation cards, document cards, etc.)
- ✅ Applies to ALL pages with lists: Tildelte Revisjoner, Aksepterte Revisjoner, Revisjonshistorikk, Avviksoversikt, etc.

#### Examples

```tsx
// ✅ CORRECT - 8px gap between action bar and list
<div className="flex flex-col">
  {/* Sorting/Bulk Actions Bar */}
  <div className="flex items-center justify-between px-6 py-4">
    {/* ... action bar content ... */}
  </div>
  
  {/* 8px gap before list */}
  <div className="flex flex-col gap-1 px-6">
    {/* List items with 4px gap between them */}
    {items.map(item => <ItemCard key={item.id} />)}
  </div>
</div>

// ❌ WRONG - Inconsistent spacing
<div className="flex flex-col gap-4">  {/* Don't use gap-4 for list items */}
  {items.map(item => <ItemCard key={item.id} />)}
</div>
```

#### Spacing Rules

- **Action Bar → List**: 8px (`gap-2` or `mb-2`)
- **List Item → List Item**: 4px (`gap-1`)
- **Card Internal Padding**: Use consistent padding from existing components
- Apply these spacing rules to both desktop and mobile views

### Norwegian Language
- ✅ All UI text, labels, buttons, and content must be in Norwegian
- ✅ Maintain consistent terminology across revisor and producer interfaces

### Norwegian Date Format
**CRITICAL: ALL dates throughout the application MUST use the full Norwegian date format**

- ✅ **ALWAYS** use format: `Day-of-week DD. month-name YYYY`
- ✅ Example: `Torsdag 5. desember 2025`
- ✅ Day of week is capitalized
- ✅ Day number is followed by a period
- ✅ Month name is lowercase
- ✅ Full year with 4 digits
- ✅ Applies to BOTH revisor and ansatt (producer) interfaces
- ✅ Applies to ALL date displays: cards, tables, lists, dialogs, headers, etc.
- ❌ **NEVER** use DD/MM/YYYY format (e.g., 05/12/2025)
- ❌ **NEVER** use abbreviated day/month names
- ❌ **NEVER** use English date formats

**Norwegian Month Names:**
- januar, februar, mars, april, mai, juni, juli, august, september, oktober, november, desember

**Norwegian Day Names:**
- Mandag, Tirsdag, Onsdag, Torsdag, Fredag, Lørdag, Søndag

**Example Conversions:**
```tsx
// ❌ WRONG
05/12/2025
2025-12-05
Dec 5, 2025

// ✅ CORRECT
Torsdag 5. desember 2025
```

## Mobile & Tablet Navigation Pattern

**CRITICAL: Consistent navigation pattern for mobile and tablet screens across the entire application**

### Animation Rules

**✅ DO use animations for:**
- Navigating from list to detail view within a page (slide-in-from-right)
- Navigating from detail back to list view within a page (slide-in-from-left)
- These animations provide smooth visual feedback for navigation within a single context

**❌ DO NOT use animations for:**
- Switching between top-level tabs (Register revisjon ↔ Skriv rapport ↔ Dokument oversikt)
- Switching between navigation rail tabs (Hjem ↔ LokalMat ↔ Spesialitet)
- Any tab changes in TopBar or NavigationRail components
- Page/view transitions at the application level

**Reasoning:**
- Within-page animations (list ↔ detail) help users understand spatial relationships
- Tab-level animations are unnecessary and can feel sluggish
- Instant tab switching provides better responsiveness

### The Pattern (Applies to BOTH Revisor and Ansatt/Producer)

This navigation pattern must be consistently applied across all pages with list/detail views:

#### Mobile/Tablet Behavior (<1400px)

**Step 1: Default View**
- **Show ONLY the menu/list panel** at full width
- This panel contains the overview/list of all items (e.g., categories, questions, documents)
- User can browse and select an item from this list
- The detail panel is completely hidden

**Step 2: After Selection**
- **Navigate to the detail view** at full width
- **Hide the menu/list panel** completely
- **Show a back button** (ChevronLeft icon) in the detail view header to return to menu
- Back button should be positioned to the LEFT of the page title

**Step 3: Navigation Back**
- **Clicking the back button** returns to the menu/list view
- Detail panel is hidden again
- Menu/list panel appears at full width

#### Desktop Behavior (≥1400px)

- **Always show both panels side-by-side**
- Menu/list on the left, detail on the right
- No back button needed (both views always visible)
- Standard vertical divider between panels

### Implementation Requirements

#### 1. State Management

```tsx
// Mobile/Tablet state - true = showing menu, false = showing detail
const [showingMenu, setShowingMenu] = useState(true);
const [isAnimating, setIsAnimating] = useState(false); // Optional for smooth animations

// Handler for navigating to detail with animation
const handleNavigateToDetail = (itemId: string) => {
  setSelectedItemId(itemId);
  setIsAnimating(true);
  setTimeout(() => {
    setShowingMenu(false);
    setIsAnimating(false);
  }, 300);
};

// Handler for going back to menu with animation
const handleBackToMenu = () => {
  setIsAnimating(true);
  setTimeout(() => {
    setShowingMenu(true);
    setIsAnimating(false);
  }, 300);
};
```

#### 2. Layout Structure

```tsx
<div className="flex h-full w-full overflow-hidden">
  {/* MOBILE/TABLET: Menu Panel - Shows ONLY when showingMenu is true */}
  {showingMenu && (
    <div className="min-[1400px]:hidden w-full h-full bg-background flex flex-col gap-6 p-6 overflow-y-auto">
      {/* Menu/list content here */}
      {/* Items should call handleNavigateToDetail on click */}
    </div>
  )}

  {/* DESKTOP: Menu Panel - Always visible */}
  <div className="max-[1400px]:hidden w-[400px] h-full flex flex-col p-4 overflow-y-auto">
    {/* Same menu/list content as mobile */}
  </div>

  {/* Vertical Divider - Desktop only */}
  <div className="w-px h-full bg-[var(--border)] max-[1400px]:hidden" />

  {/* MOBILE/TABLET & DESKTOP: Detail Panel */}
  <div className={`flex-1 h-full flex-col ${showingMenu ? 'max-[1400px]:hidden' : 'max-[1400px]:flex'} min-[1400px]:flex max-[1400px]:w-full`}>
    {/* Back button - visible only on mobile/tablet */}
    {!showingMenu && (
      <div className="px-6 pt-4 pb-2 min-[1400px]:hidden">
        <button
          onClick={handleBackToMenu}
          className="flex items-center gap-2 label-large text-foreground hover:opacity-70 transition-opacity"
          aria-label="Tilbake til meny"
        >
          <ChevronLeft className="w-5 h-5" />
          Tilbake
        </button>
      </div>
    )}

    {/* Detail content */}
    <div className="flex-1 overflow-y-auto">
      {/* Detail content here */}
    </div>
  </div>
</div>
```

#### 3. Key CSS Classes and Patterns

**For Menu/List Panel:**
- Mobile/Tablet version: `min-[1400px]:hidden` + conditional rendering based on `showingMenu`
- Desktop version: `max-[1400px]:hidden` + always rendered
- NO animations on menu panel

**For Detail Panel:**
- Visibility: `${showingMenu ? 'max-[1400px]:hidden' : 'max-[1400px]:flex'} min-[1400px]:flex max-[1400px]:w-full`
- Full width on mobile: `max-[1400px]:w-full`
- NO animations on detail panel

**For Back Button:**
- Visibility: `min-[1400px]:hidden` (only on mobile/tablet)
- Style: Simple text button with leading icon
- Classes: `flex items-center gap-2 label-large text-foreground hover:opacity-70 transition-opacity`
- Icon: `<ChevronLeft className="w-5 h-5" />`
- Label: "Tilbake"
- Spacing: `px-6 pt-4 pb-2`
- NO border or divider

**For Vertical Divider:**
- Visibility: `max-[1400px]:hidden` (only on desktop)
- Style: `w-px h-full bg-[var(--border)]`

### Implementation Examples

#### Revisor - Revisjongrunnlag Page
1. **Mobile Default**: Menu showing all categories (Generelle krav til gården, etc.)
2. **After selection**: Navigate to category detail, hide menu, show back button
3. **Back navigation**: Click back button to return to category menu

#### Revisor - Dokument Oversikt
1. **Mobile Default**: Document list with search
2. **After selection**: Navigate to document detail, hide list, show back button
3. **Back navigation**: Click back button to return to document list

#### Revisor/Ansatt - Question Lists (Register revisjon/Egenkontroll)
1. **Mobile Default**: List of questions in tabs
2. **After selection**: Navigate to question detail, hide list, show back button
3. **Back navigation**: Click back button to return to question list

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1399px
- **Desktop**: ≥ 1400px

**Note:** The pattern uses `1400px` as the breakpoint because that's when there's enough space to show both panels side-by-side comfortably.

### Consistency Rules

- ✅ **ALWAYS** apply this pattern to any list/detail view in the application
- ✅ **ALWAYS** show the menu/list first on mobile/tablet (showingMenu = true by default)
- ✅ **ALWAYS** provide the back button (ChevronLeft) in the detail view on mobile/tablet
- ✅ **ALWAYS** position the back button to the LEFT of the page title
- ✅ **ALWAYS** use the same animations (slide-in-from-left/right, duration-300)
- ✅ **ALWAYS** hide the appropriate panel based on showingMenu state
- ✅ Apply to both Revisor AND Ansatt (Producer) interfaces
- ❌ **NEVER** show both list and detail side-by-side on mobile/tablet
- ❌ **NEVER** use browser back button for navigation - always provide UI back button
- ❌ **NEVER** use different breakpoints - always use 1400px

### Application-Wide Usage

This pattern applies to:

- **Revisor - Revisjongrunnlag**: Category menu ↔ Category detail
- **Revisor - Dokument oversikt**: Document list ↔ Document detail
- **Revisor - Register revisjon**: Question list ↔ Question detail
- **Ansatt - Egenkontroll**: Question list ↔ Question detail
- **Ansatt - Spesialitet**: Question list/Tema list ↔ Question detail
- **Any future list/detail views**: Follow this same pattern

### User Experience Benefits

1. **Clear navigation**: Users always know how to get back to the list
2. **Full-screen focus**: Detail view uses full screen on mobile for better readability
3. **Consistent behavior**: Same pattern across all list/detail views
4. **Smooth animations**: Visual feedback during navigation transitions
5. **No browser back**: Users don't need to rely on browser navigation

## List/Detail Selection Pattern

**CRITICAL: Default selection and state preservation for all list/detail views**

### Auto-Select First Item on Tab Load

**The Golden Rule:**
- **Desktop (≥1400px)**: ALWAYS auto-select the first item in any list - users immediately see content
- **Mobile/Tablet (<1400px)**: NEVER auto-select - users see the list first and must tap to view details

This is a fundamental UX pattern that MUST be consistent across the entire application.

**Desktop Behavior (≥1400px):**

When a user navigates to a tab that shows a list with detail view on DESKTOP:

- ✅ **ALWAYS** auto-select the first item in the list by default
- ✅ **NEVER** show a blank/empty detail area when the list has items
- ✅ This applies to ALL tabs with list/detail views (Alle spørsmål, Ubesvarte, Dokumentasjon, etc.)
- ✅ Ensures users immediately see content without needing to click
- ✅ Example: Navigating to "Register revisjon" on desktop should automatically show the first question details

**Mobile/Tablet Behavior (<1400px):**

When a user navigates to a tab that shows a list with detail view on MOBILE/TABLET:

- ✅ **ALWAYS** show the list view FIRST with NO item selected
- ✅ **NEVER** auto-select any item on initial load
- ✅ User MUST click/tap an item to navigate to the detail view
- ✅ Shows the menu/list panel at full width (detail panel is hidden)
- ✅ Only after user clicks an item should it become selected and navigate to detail view
- ✅ Example: Navigating to "Register revisjon" on mobile should show the question list with no selection

### Preserve Selection When Switching Tabs

When a user switches between tabs and returns:

- ✅ **ALWAYS** preserve the selected item when user switches tabs
- ✅ **NEVER** reset to the first item when returning to a previously visited tab
- ✅ Maintain separate selection state for each tab context
- ✅ User should return to exactly where they were before switching tabs

### Implementation Pattern

```tsx
// Separate state for each tab's selected item
const [tilpassSelectedQuestionId, setTilpassSelectedQuestionId] = useState<string | null>(null);
const [alleSelectedQuestionId, setAlleSelectedQuestionId] = useState<string | null>(null); // Start with null for mobile

// Check if we're on desktop
const isDesktop = window.innerWidth >= 1400;

// Auto-select first item ONLY on desktop when switching to a tab with list/detail
useEffect(() => {
  if (activeTab === 'alle') {
    if (!alleSelectedQuestionId && isDesktop) {
      // Only auto-select on desktop
      setAlleSelectedQuestionId('1.1.1'); // First item
      setSelectedQuestionId('1.1.1');
    } else if (alleSelectedQuestionId) {
      // Restore previously selected question
      setSelectedQuestionId(alleSelectedQuestionId);
    } else {
      // Mobile: no selection on initial load
      setSelectedQuestionId(null);
    }
  } else if (activeTab === 'tilpass') {
    // Restore the tilpass tab's selected question
    setSelectedQuestionId(tilpassSelectedQuestionId);
  }
}, [activeTab]);

// Preserve selection when user selects a different item
useEffect(() => {
  if (activeTab === 'alle' && selectedQuestionId) {
    setAlleSelectedQuestionId(selectedQuestionId);
  } else if (activeTab === 'tilpass' && selectedQuestionId) {
    setTilpassSelectedQuestionId(selectedQuestionId);
  }
}, [selectedQuestionId, activeTab]);

// Handle item click - works for both mobile and desktop
const handleQuestionClick = (questionId: string) => {
  setSelectedQuestionId(questionId);
  // On mobile, also navigate to detail view
  if (window.innerWidth < 1400) {
    setShowingMenu(false);
  }
};
```

### Application-Wide Usage

This pattern applies to:

- **Revisor - Revisjongrunnlag**: Auto-select first category on desktop, preserve selection between tabs
- **Revisor - Register revisjon**: Auto-select first question in "Alle spørsmål" tab on desktop
- **Revisor - Dokument oversikt**: Auto-select first document on desktop
- **Revisor - Skriv rapport**: Auto-select first section on desktop (all tabs: Informasjon om foretaket, Tidligere revisjon, Svaroversikt, Avvikshåndtering, Hovedkonklusjon)
- **Ansatt - Egenkontroll**: Auto-select first question in "Alle spørsmål" tab on desktop
- **Ansatt - Spesialitet**: Auto-select first question in "Alle spørsmål" tab on desktop
- **Any future list/detail views**: Follow this same pattern

### User Experience Benefits

1. **No blank screens**: Users immediately see content when navigating to a tab
2. **State preservation**: Users don't lose their place when exploring different tabs
3. **Intuitive navigation**: Natural flow between different sections of the application
4. **Consistency**: Same behavior across all list/detail views in the app

### Consistency Rules

- ✅ **ALWAYS** implement auto-selection for the first item in any list
- ✅ **ALWAYS** preserve selection state when switching between tabs
- ✅ **ALWAYS** use separate state variables for different tab contexts
- ❌ **NEVER** show blank content areas when a list has items
- ❌ **NEVER** reset selection to first item when returning to a previously visited tab

## Typography Guidelines

**CRITICAL: ONLY use the typography classes defined in /styles/globals.css**

### Never Use:
- ❌ Hardcoded font families like `font-['Manrope:Regular',sans-serif]` or `font-['Quatro:Regular',sans-serif]`
- ❌ Inline `fontFamily` styles
- ❌ Custom font-size, font-weight, or line-height values unless absolutely necessary

### Always Use Typography Classes:

**For headings (Quatro font):**
- `.headline-medium` - 32px, Quatro (for main page headings - h2)
- `.title-large` - 22px, Quatro (for section headings - h3/h4)
- `.title-medium` - 16px, Quatro (for subsection headings)

**For body text (Manrope font):**
- `.body-large` - 16px, Manrope Regular (for main content text)
- `.body-medium` - 14px, Manrope Regular (for secondary content text)

**For labels and UI elements (Manrope font):**
- `.label-large` - 14px, Manrope Medium (for prominent labels)
- `.label-medium` - 14px, Manrope Medium (for standard labels and buttons)
- `.label-small` - 12px, Manrope Medium (for small labels and captions)
- `.label-xsmall` - 11px, Manrope Medium (for tiny labels)
- `.title-small` - 14px, Manrope Medium (alternative for labels)

### Font Selection Guide:
When you see hardcoded fonts, map them to the nearest class:
- Quatro 22px → `.title-large`
- Quatro 16px → `.title-medium`
- Manrope 16px Regular → `.body-large`
- Manrope 16px Medium → `.body-large` (use Regular for body text)
- Manrope 14px Regular → `.body-medium`
- Manrope 14px Medium → `.label-medium`
- Manrope 12px Medium → `.label-small`
- Manrope SemiBold → Choose nearest `.label-*` class based on size

### Example Conversions:
```tsx
// ❌ WRONG - Hardcoded font
<div className="font-['Manrope:Regular',sans-serif] text-[16px]">
  
// ✅ CORRECT - Typography class
<div className="body-large">

// ❌ WRONG - Hardcoded font
<span className="font-['Quatro:Regular',sans-serif] text-[22px]">

// ✅ CORRECT - Typography class  
<span className="title-large">

// ❌ WRONG - Hardcoded font
<p className="font-['Manrope:Medium',sans-serif] text-[14px]">

// ✅ CORRECT - Typography class
<p className="label-medium">
```

## Theme System (Multi-Platform Color Schemes)

This application supports four different color schemes for different Norsk Mat platforms:

### Available Themes

1. **KSL** (default) - Green-focused agricultural theme
2. **LokalMat** - Red and green earth tones
3. **Nyt Norge** - Blue and green Nordic theme
4. **Spesialitet** - Brown and neutral specialty theme

### How to Use Themes

#### Method 1: Apply theme class to root element

Add one of these classes to the `<html>` or root element to switch themes:

- `theme-ksl` (or no class for default)
- `theme-lokalmat`
- `theme-nyt-norge`
- `theme-spesialitet`

#### Method 2: Use the ThemeSwitcher component

Import and render the `ThemeSwitcher` component anywhere in your app:

```tsx
import { ThemeSwitcher } from "./components/ThemeSwitcher";

// Add to your component
<ThemeSwitcher />;
```

### Using Theme Colors in Components

Always use CSS variables for colors to ensure theme compatibility:

**Primary colors:**

- `var(--primary)` - Main brand color
- `var(--primary-foreground)` - Text on primary background
- `var(--primary-container)` - Light primary background
- `var(--primary-container-foreground)` - Text on primary container

**Secondary colors:**

- `var(--secondary)` - Secondary brand color
- `var(--secondary-foreground)` - Text on secondary background
- `var(--secondary-container)` - Light secondary background
- `var(--secondary-container-foreground)` - Text on secondary container

**Tertiary colors:**

- `var(--tertiary)` - Tertiary accent color
- `var(--tertiary-foreground)` - Text on tertiary background
- `var(--tertiary-container)` - Light tertiary background
- `var(--tertiary-container-foreground)` - Text on tertiary container

**Error/Destructive colors:**

- `var(--error)` / `var(--destructive)` - Error state color
- `var(--error-foreground)` / `var(--destructive-foreground)` - Text on error background
- `var(--error-container)` - Light error background
- `var(--error-container-foreground)` - Text on error container

**Surface colors:**

- `var(--background)` - Main background
- `var(--foreground)` - Main text color
- `var(--card)` - Card backgrounds
- `var(--card-foreground)` - Text on cards
- `var(--muted)` - Muted backgrounds
- `var(--muted-foreground)` - Muted text
- `var(--border)` - Border colors
- `var(--input)` - Input field backgrounds

### Example Usage

```tsx
// Using Tailwind utility classes
<button className="bg-primary text-primary-foreground">
  Primary Button
</button>

// Using inline styles with CSS variables
<div style={{ backgroundColor: 'var(--primary-container)', color: 'var(--primary-container-foreground)' }}>
  Container content
</div>

// Using in custom CSS
.my-component {
  background-color: var(--secondary);
  color: var(--secondary-foreground);
  border: 1px solid var(--border);
}
```

### Important Notes

- **Never hardcode color values** - always use CSS variables
- All themes share the same error colors for consistency
- Deviation severity colors are consistent across themes
- The theme automatically updates all colors throughout the app when switched

Interaction

- Never change the shape of indicator cursor on ui elements that are not clickable
- always include hover state for clickbale item
- In case an item can be selected for the container of that item use the color Secondary container from the librayr
- Always for Texts and icons appearing on a fill of secondary container use the color on secondary container
- Always for the texts and colors that are appearing on a container with primary container color, use the color on primary container

## Button Component System

**CRITICAL: ALL buttons in the application MUST use the Button component from `/components/ui/button.tsx`**

The Button component is a fundamental interactive element in our design system, designed to trigger actions or navigate
users through the application. It provides visual feedback and clear affordances to enhance user experience.

### Import and Basic Usage

```tsx
import { Button } from "./components/ui/button";

// Primary button (default)
<Button>Click me</Button>

// Secondary/Outlined button
<Button variant="secondary">Cancel</Button>

// Tertiary/Text button
<Button variant="tertiary">Learn more</Button>

// Icon button
<Button variant="ghost" size="icon">
  <Plus className="w-6 h-6" />
</Button>
```

### Standard Button Size
**ALL standard buttons use h-14 (56px) height by default - this is NON-NEGOTIABLE**

The Button component enforces this automatically with the `size="default"` setting.

### Button Variants

* **Primary (default)** - `variant="primary"`
  * Purpose: Used for the main action in a section or page
  * Style: Filled with primary color
  * Example: `<Button>Save changes</Button>`
  * Usage: One primary button per section to guide users toward the most important action

* **Secondary** - `variant="secondary"`
  * Purpose: Used for alternative or supporting actions
  * Style: Outlined with border
  * Example: `<Button variant="secondary">Cancel</Button>`
  * Usage: Can appear alongside a primary button for less important actions

* **Tertiary** - `variant="tertiary"`
  * Purpose: Used for the least important actions
  * Style: Text only, no border or background
  * Example: `<Button variant="tertiary">Learn more</Button>`
  * Usage: For actions that should be available but not emphasized

* **Destructive** - `variant="destructive"`
  * Purpose: For delete or destructive actions
  * Style: Red/error colored
  * Example: `<Button variant="destructive">Delete</Button>`
  * Usage: Use sparingly for irreversible or dangerous actions

* **Ghost** - `variant="ghost"`
  * Purpose: For subtle actions, commonly used with icon buttons
  * Style: Transparent with hover state
  * Example: `<Button variant="ghost" size="icon"><HelpCircle /></Button>`
  * Usage: Toolbars, headers, inline actions

### Button Sizes

* **Default (Medium)** - `size="default"` (or omitted)
  * Height: 56px (h-14)
  * Padding: px-6 py-3.5
  * Border radius: var(--radius-button) (100px pill shape)
  * This is the STANDARD size for all action buttons

* **Icon** - `size="icon"`
  * Dimensions: 56px × 56px (w-14 h-14)
  * Shape: Circular (rounded-full)
  * Usage: Icon-only buttons in headers, toolbars

* **Icon Small** - `size="icon-sm"`
  * Dimensions: 48px × 48px (w-12 h-12)
  * Shape: Circular (rounded-full)
  * Usage: Compact icon buttons when space is limited

* **Icon Extra Small** - `size="icon-xs"`
  * Dimensions: 40px × 40px (w-10 h-10)
  * Shape: Circular (rounded-full)
  * Usage: Very compact UIs only - use sparingly

### ✅ Correct Examples

```tsx
// Primary action button
<Button onClick={handleSave}>Lagre endringer</Button>

// Secondary button with icon
<Button variant="secondary">
  <Download className="w-5 h-5" />
  Last ned
</Button>

// Icon button
<Button variant="ghost" size="icon">
  <HelpCircle className="w-6 h-6" />
</Button>

// Destructive action
<Button variant="destructive" onClick={handleDelete}>
  Slett
</Button>
```

### ❌ Never Use

```tsx
// ❌ WRONG - Raw button element with custom classes
<button className="bg-primary text-primary-foreground px-6 py-3.5 h-14">
  Click me
</button>

// ❌ WRONG - Custom height
<Button className="h-12">Click me</Button>

// ❌ WRONG - Custom padding
<button className="px-4 py-2">Click me</button>

// ❌ WRONG - Non-standard border radius
<button className="rounded-lg">Click me</button>
```

### Migration from Raw Buttons

When you see raw `<button>` elements in the code, replace them with the Button component:

```tsx
// Before
<button className="bg-primary text-primary-foreground px-6 py-3.5 h-14 rounded-[var(--radius-button)] hover:bg-primary/90">
  Save
</button>

// After
<Button>Save</Button>

// Before
<button className="border border-border text-foreground px-6 py-3.5 h-14 rounded-[var(--radius-button)] hover:bg-muted">
  Cancel
</button>

// After
<Button variant="secondary">Cancel</Button>

// Before
<button className="w-14 h-14 flex items-center justify-center rounded-full hover:bg-muted">
  <HelpCircle className="w-6 h-6" />
</button>

// After
<Button variant="ghost" size="icon">
  <HelpCircle className="w-6 h-6" />
</Button>
```

### Exception: Custom Interactive Elements

The Button component should NOT be used for:
- Navigation tabs (use specialized tab components)
- List items that are clickable (use appropriate list/card components)
- Custom interactive elements that need specific styling for design reasons

For these cases, use raw `<button>` elements but ensure they follow accessibility best practices.

## RadioButton Component System

**CRITICAL: ALL radio buttons in the application MUST use the RadioButton component from `/components/ui/radio-button.tsx`**

The RadioButton component is a Material 3 compliant radio button that provides consistent visual design across the entire application following the design system specifications.

### Import and Basic Usage

```tsx
import { RadioButton } from "./components/ui/radio-button";

// Basic usage
<RadioButton
  checked={selectedValue === 'option1'}
  onClick={() => setSelectedValue('option1')}
  label="Option 1"
/>
```

### Material 3 Design Specifications

The RadioButton follows Material 3 design specifications:

* **Container size**: 20×20px (w-5 h-5)
* **Border**: 2px solid
* **Unselected state**: 
  * Border color: `#44483B` (neutral dark gray)
  * Background: transparent
* **Selected state**: 
  * Border color: `var(--primary)`
  * Background: `var(--primary)`
  * Inner dot: 10×10px (w-2.5 h-2.5) white circle
* **Disabled state**: 
  * Opacity: 50%
  * Cursor: not-allowed

### Props

* `checked` (boolean, required) - Whether the radio button is currently selected
* `label` (string, optional) - Label text to display next to the radio button
* `onClick` (function, optional) - Click handler for the radio button
* `disabled` (boolean, optional) - Whether the radio button is disabled
* `className` (string, optional) - Additional CSS classes for the wrapper

### Usage in Question Views

Radio buttons are commonly used in question views for answer selection. They should be placed inside flex containers with hover states:

```tsx
<div className="flex flex-row items-center w-full gap-2 mb-6">
  <div className="flex flex-col h-10 min-h-[40px] items-center justify-center flex-1 rounded-[var(--radius)] transition-colors hover:bg-muted">
    <RadioButton
      checked={selectedAnswer === 'ja'}
      onClick={() => handleAnswerSelect('ja')}
      label="Ja"
      className="w-full px-4"
    />
  </div>

  <div className="flex flex-col h-10 min-h-[40px] items-center justify-center flex-1 rounded-[var(--radius)] transition-colors hover:bg-muted">
    <RadioButton
      checked={selectedAnswer === 'nei'}
      onClick={() => handleAnswerSelect('nei')}
      label="Nei"
      className="w-full px-4"
    />
  </div>

  <div className="flex flex-col h-10 min-h-[40px] items-center justify-center flex-1 rounded-[var(--radius)] transition-colors hover:bg-muted">
    <RadioButton
      checked={selectedAnswer === 'ikke-relevant'}
      onClick={() => handleAnswerSelect('ikke-relevant')}
      label="Ikke relevant"
      className="w-full px-4"
    />
  </div>
</div>
```

### ✅ Correct Examples

```tsx
// Single radio button with label
<RadioButton
  checked={value === 'yes'}
  onClick={() => setValue('yes')}
  label="Yes"
/>

// Radio button group for answer selection
<div className="flex flex-row items-center w-full gap-2">
  <div className="flex-1 hover:bg-muted rounded-[var(--radius)]">
    <RadioButton
      checked={answer === 'ja'}
      onClick={() => setAnswer('ja')}
      label="Ja"
      className="w-full px-4"
    />
  </div>
  <div className="flex-1 hover:bg-muted rounded-[var(--radius)]">
    <RadioButton
      checked={answer === 'nei'}
      onClick={() => setAnswer('nei')}
      label="Nei"
      className="w-full px-4"
    />
  </div>
</div>

// Disabled radio button
<RadioButton
  checked={false}
  onClick={() => {}}
  label="Disabled option"
  disabled={true}
/>
```

### ❌ Never Use

```tsx
// ❌ WRONG - Custom radio button with inline styles
<div className="w-6 h-6 rounded-full border-2 border-foreground">
  <div className="w-3 h-3 rounded-full bg-foreground"></div>
</div>

// ❌ WRONG - Hardcoded colors
<div className="w-5 h-5 rounded-full border-2" style={{
  borderColor: '#4a671e',
  backgroundColor: '#4a671e'
}}>
  <div className="w-2.5 h-2.5 rounded-full bg-white" />
</div>

// ❌ WRONG - Non-standard sizes
<div className="w-8 h-8 rounded-full border-4">
  {/* ... */}
</div>
```

### Consistency Rules

- ✅ **ALWAYS** use the RadioButton component for any radio button UI
- ✅ **ALWAYS** use the Material 3 design specifications (20×20px container, 10×10px inner dot)
- ✅ **ALWAYS** use `var(--primary)` for selected state colors
- ✅ **ALWAYS** use `#44483B` for unselected border color
- ✅ Provide clear labels for all radio buttons
- ✅ Group related radio buttons in flex containers with proper spacing
- ❌ **NEVER** create custom radio button implementations
- ❌ **NEVER** use hardcoded colors or sizes
- ❌ **NEVER** deviate from the Material 3 specifications

### Application-Wide Usage

The RadioButton component is used throughout the application in:

- **Question Views** (QuestionView, ProducerQuestionView, SpesialitetQuestionView)
  - Answer selection: Ja/Nei or Ja/Nei/Ikke relevant
- **Spesialitet Checklist** (SpesialitetChecklistPage)
  - Tema questions: Ja/Nei answers
- **Deviation Handling** (AvvikshandteringPage, DeviationView, ExternalRevisionAvvikView)
  - Severity selection: Lite avvik/Avvik/Stor avvik
  - Confirmation method selection

All instances must use the centralized RadioButton component to ensure consistency.

## Tab Component System

**CRITICAL: ALL tabs in the application MUST use the Tab component from `/components/ui/tabs.tsx`**

The Tab component provides a consistent, accessible tab navigation pattern with perfect hover behavior that matches Material Design principles.

### Key Features

The tab component includes these critical interaction patterns:
- ✅ **Cursor changes to pointer** on hover
- ✅ **Background color appears** (`hover:bg-muted`) on hover
- ✅ **Smooth color transitions** for all state changes
- ✅ **Active indicator**: 2px primary underline at the bottom
- ✅ **Text colors**: foreground when active, muted-foreground when inactive
- ✅ **Height**: 48px (h-12) for standard tabs
- ✅ **Typography**: label-medium class from design system

### Import and Basic Usage

```tsx
import { Tab, TabGroup } from "./components/ui/tabs";

// Basic tab group
<TabGroup>
  <Tab 
    active={activeTab === 'tab1'} 
    onClick={() => setActiveTab('tab1')}
  >
    Tab 1
  </Tab>
  <Tab 
    active={activeTab === 'tab2'} 
    onClick={() => setActiveTab('tab2')}
  >
    Tab 2
  </Tab>
  <Tab 
    active={activeTab === 'tab3'} 
    onClick={() => setActiveTab('tab3')}
  >
    Tab 3
  </Tab>
</TabGroup>
```

### Tab Variants

The component system provides three size variants:

**1. Standard Tab (default)** - `<Tab>`
- Height: 48px (h-12)
- Padding: px-4 py-[14px]
- Typography: label-medium
- Use for: Most tab navigation scenarios

**2. Compact Tab** - `<TabCompact>`
- Height: 40px (h-10)
- Padding: px-3 py-2
- Typography: label-small
- Use for: Space-constrained UIs, dense layouts

**3. Large Tab** - `<TabLarge>`
- Height: 56px (h-14)
- Padding: px-6 py-4
- Typography: label-large
- Active text: text-primary (instead of text-foreground)
- Use for: Prominent navigation, main page tabs

### TabGroup Container

The `TabGroup` component wraps tabs and provides:
- Horizontal flex layout with no gaps
- Optional horizontal scrolling for overflow tabs
- Consistent spacing and alignment

```tsx
// With scrolling (default)
<TabGroup>
  {tabs}
</TabGroup>

// Without scrolling
<TabGroup scrollable={false}>
  {tabs}
</TabGroup>

// Custom styling
<TabGroup className="px-6 border-b border-border">
  {tabs}
</TabGroup>
```

### Complete Example

```tsx
import { useState } from 'react';
import { Tab, TabGroup, TabLarge } from "./components/ui/tabs";

function MyComponent() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex flex-col">
      {/* Header with tabs */}
      <div className="border-b border-border">
        <div className="px-6 pt-6">
          <h1 className="headline-small">Page Title</h1>
        </div>
        
        <TabGroup className="px-6">
          <TabLarge 
            active={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')}
          >
            Oversikt
          </TabLarge>
          <TabLarge 
            active={activeTab === 'details'} 
            onClick={() => setActiveTab('details')}
          >
            Detaljer
          </TabLarge>
          <TabLarge 
            active={activeTab === 'history'} 
            onClick={() => setActiveTab('history')}
          >
            Historikk
          </TabLarge>
        </TabGroup>
      </div>

      {/* Tab content */}
      <div className="flex-1 p-6">
        {activeTab === 'overview' && <OverviewContent />}
        {activeTab === 'details' && <DetailsContent />}
        {activeTab === 'history' && <HistoryContent />}
      </div>
    </div>
  );
}
```

### ✅ Correct Examples

```tsx
// Standard tabs
<TabGroup className="px-6">
  <Tab active={activeTab === 'all'} onClick={() => setActiveTab('all')}>
    Alle spørsmål
  </Tab>
  <Tab active={activeTab === 'unanswered'} onClick={() => setActiveTab('unanswered')}>
    Ubesvarte
  </Tab>
</TabGroup>

// Large tabs for main navigation
<TabGroup>
  <TabLarge active={activeTab === 'register'} onClick={() => setActiveTab('register')}>
    Registrer revisjon
  </TabLarge>
  <TabLarge active={activeTab === 'report'} onClick={() => setActiveTab('report')}>
    Skriv rapport
  </TabLarge>
</TabGroup>

// Compact tabs for tight spaces
<TabGroup>
  <TabCompact active={view === 'grid'} onClick={() => setView('grid')}>
    Rutenett
  </TabCompact>
  <TabCompact active={view === 'list'} onClick={() => setView('list')}>
    Liste
  </TabCompact>
</TabGroup>

// Disabled tab
<Tab 
  active={false} 
  onClick={() => {}} 
  disabled={true}
>
  Kommer snart
</Tab>
```

### ❌ Never Use

```tsx
// ❌ WRONG - Raw button without Tab component
<button className="px-4 py-3 hover:bg-muted">
  Tab Label
</button>

// ❌ WRONG - Missing hover states
<button className={activeTab === 'tab1' ? 'text-primary' : 'text-foreground'}>
  Tab 1
</button>

// ❌ WRONG - Inconsistent styling
<button className="h-10 px-2 text-sm">
  Tab Label
</button>

// ❌ WRONG - Hardcoded colors
<button style={{ color: activeTab === 'tab1' ? '#4a671e' : '#666' }}>
  Tab 1
</button>
```

### Migration from Raw Buttons

When you see raw tab buttons in the code, replace them with the Tab component:

```tsx
// Before
<button 
  onClick={() => setActiveTab('tab1')}
  className={`px-4 py-3 whitespace-nowrap transition-colors title-small cursor-pointer hover:bg-muted ${
    activeTab === 'tab1' 
      ? 'text-foreground border-b-2 border-primary' 
      : 'text-muted-foreground'
  }`}
>
  Tab Label
</button>

// After
<Tab 
  active={activeTab === 'tab1'} 
  onClick={() => setActiveTab('tab1')}
>
  Tab Label
</Tab>
```

### Consistency Rules

- ✅ **ALWAYS** use the Tab component for any tab navigation UI
- ✅ **ALWAYS** ensure cursor-pointer and hover:bg-muted are present
- ✅ **ALWAYS** use design system typography classes (label-medium, label-large, etc.)
- ✅ **ALWAYS** show the 2px primary underline for active tabs
- ✅ **ALWAYS** use foreground/muted-foreground colors from design system
- ✅ Wrap tabs in TabGroup for consistent layout
- ✅ Choose the appropriate variant (standard, compact, large) based on context
- ❌ **NEVER** create custom tab implementations
- ❌ **NEVER** use hardcoded colors or sizes
- ❌ **NEVER** omit hover states from tabs

### Application-Wide Usage

The Tab component is used throughout the application in:

- **Header.tsx** - Main navigation tabs (Planlegg revisjon, Registrer revisjon, etc.)
- **ForetakHistorikkView.tsx** - History tabs (Eksternerevisjoner, Egenrevisjoner, Tilsynshistorikk)
- **AvvikoversiktPage.tsx** - Avvik tabs (Åpne avvik, Til handling nå, etc.)
- **FakturagrunnlagPage.tsx** - Trip tabs (Ufakturerte reiser, Alle reiser)
- **ChecklistHeading.tsx** - Checklist tabs (Alle spørsmål, Ubesvarte, etc.)
- **DocumentOverview.tsx** - Document tabs (Vedlegg, Knyttede sjekkliste spørsmål)
- **WriteReportPage.tsx** - Report section tabs
- **ProfilePage.tsx** - Profile tabs
- **Any future tabbed navigation**: Follow this same pattern

All instances must use the centralized Tab component to ensure consistency.

### User Experience Benefits

1. **Consistent interaction**: Same hover behavior across all tabs in the app
2. **Visual feedback**: Clear indication of clickable elements with pointer cursor
3. **Smooth transitions**: Professional feel with transition-colors
4. **Accessibility**: Proper button semantics and keyboard navigation
5. **Maintainability**: Centralized styling makes updates easier

## Mobile-Responsive Table Pattern

**CRITICAL: Tables must adapt to mobile screens while maintaining traditional multi-column layouts on desktop**

### The Problem

Large tables with multiple columns work well on desktop but become unreadable on mobile devices. Instead of horizontal scrolling or compressed columns, tables should adapt to show content in a mobile-friendly format.

### The Solution

**Desktop (≥768px):** 
- Traditional multi-column table layout
- All columns visible with proper headers
- Standard table structure with `<thead>` and `<tbody>`

**Mobile (<768px):**
- Condensed single-column layout
- Each row displays in two lines:
  - **Line 1**: Small elements (chips, badges, short text) inline with `gap-1` spacing
  - **Line 2**: Longer content (descriptions, checklist questions)

### Implementation Pattern

Use responsive utilities to show/hide columns and restructure content for mobile:

```tsx
{/* Desktop Table - Traditional multi-column layout */}
<table className="w-full">
  <thead className="bg-surface-container-low sticky top-0 z-10">
    <tr className="border-b border-[var(--border)]">
      {/* Show all columns on desktop */}
      <th className="px-6 py-3 text-left max-[768px]:hidden">
        <span className="label-medium">Alvorlighetsgrad</span>
      </th>
      <th className="px-6 py-3 text-left max-[768px]:hidden">
        <span className="label-medium">Foretak</span>
      </th>
      <th className="px-6 py-3 text-left">
        {/* Single column header for mobile */}
        <span className="label-medium max-[768px]:hidden">Sjekklistespørsmål</span>
        <span className="label-medium min-[768px]:hidden">Avvik</span>
      </th>
      <th className="px-6 py-3 text-left max-[768px]:hidden">
        <span className="label-medium">Status</span>
      </th>
    </tr>
  </thead>
  <tbody>
    {items.map((item) => (
      <tr key={item.id} className="border-b border-[var(--border)] hover:bg-muted cursor-pointer">
        {/* Desktop: Multiple columns */}
        <td className="px-6 py-4 max-[768px]:hidden">
          <SeverityBadge severity={item.severity} />
        </td>
        <td className="px-6 py-4 max-[768px]:hidden">
          <span className="body-medium">{item.producer}</span>
        </td>
        
        {/* Mobile & Desktop: Responsive column */}
        <td className="px-6 py-4">
          {/* Desktop: Show only question text */}
          <span className="body-medium max-[768px]:hidden">
            {item.question}
          </span>
          
          {/* Mobile: Show condensed two-line format */}
          <div className="flex flex-col gap-2 min-[768px]:hidden">
            {/* Line 1: Small elements with gap-1 */}
            <div className="flex flex-row items-center gap-1 flex-wrap">
              <SeverityBadge severity={item.severity} />
              <StatusBadge status={item.status} />
              <span className="label-small text-muted-foreground">
                {item.producer}
              </span>
            </div>
            
            {/* Line 2: Long text */}
            <span className="body-medium text-foreground">
              {item.question}
            </span>
          </div>
        </td>
        
        <td className="px-6 py-4 max-[768px]:hidden">
          <StatusBadge status={item.status} />
        </td>
      </tr>
    ))}
  </tbody>
</table>
```

### Key Responsive Classes

**Hide on mobile, show on desktop:**
- `max-[768px]:hidden` - Hides element on screens < 768px
- Use this for desktop-only columns

**Hide on desktop, show on mobile:**
- `min-[768px]:hidden` - Hides element on screens ≥ 768px
- Use this for mobile-only condensed content

**Example:**
```tsx
{/* Desktop only */}
<td className="px-6 py-4 max-[768px]:hidden">
  <SeverityBadge severity={item.severity} />
</td>

{/* Mobile only */}
<div className="flex flex-col gap-2 min-[768px]:hidden">
  <div className="flex flex-row items-center gap-1">
    <SeverityBadge severity={item.severity} />
    <StatusBadge status={item.status} />
  </div>
  <span className="body-medium">{item.description}</span>
</div>
```

### Mobile Content Structure

When showing the mobile version (two-line format):

**Line 1 - Small Elements (inline with gap-1):**
- Severity badges
- Status chips
- Producer/company name (if short)
- Dates (if short)
- Any other badge/chip components

**Line 2 - Long Text:**
- Checklist question/description
- Long text content
- Comments
- Any multi-line content

**Structure:**
```tsx
<div className="flex flex-col gap-2">
  {/* Line 1: Chips and short text */}
  <div className="flex flex-row items-center gap-1 flex-wrap">
    {/* Small elements here */}
  </div>
  
  {/* Line 2: Long text */}
  <span className="body-medium">
    {/* Long content here */}
  </span>
</div>
```

### Breakpoint

- **Mobile**: < 768px
- **Desktop**: ≥ 768px

Use `768px` as the breakpoint because it provides enough space for traditional table layouts.

### ✅ Correct Implementation

```tsx
{/* Example: Avvik table */}
<table className="w-full">
  <thead className="bg-surface-container-low sticky top-0 z-10">
    <tr className="border-b border-[var(--border)]">
      <th className="px-6 py-3 text-left max-[768px]:hidden">
        <span className="label-medium">Alvorlighetsgrad</span>
      </th>
      <th className="px-6 py-3 text-left max-[768px]:hidden">
        <span className="label-medium">Foretak</span>
      </th>
      <th className="px-6 py-3 text-left">
        <span className="label-medium max-[768px]:hidden">Sjekklistespørsmål</span>
        <span className="label-medium min-[768px]:hidden">Avvik</span>
      </th>
      <th className="px-6 py-3 text-left max-[768px]:hidden">
        <span className="label-medium">Status</span>
      </th>
    </tr>
  </thead>
  <tbody>
    {deviations.map((deviation) => (
      <tr key={deviation.id} className="border-b hover:bg-muted cursor-pointer">
        {/* Desktop: Severity column */}
        <td className="px-6 py-4 max-[768px]:hidden">
          <SeverityBadge severity={deviation.severity} />
        </td>
        
        {/* Desktop: Producer column */}
        <td className="px-6 py-4 max-[768px]:hidden">
          <span className="body-medium">{deviation.producer}</span>
        </td>
        
        {/* Responsive column - shows different content on mobile vs desktop */}
        <td className="px-6 py-4">
          {/* Desktop: Question only */}
          <span className="body-medium max-[768px]:hidden">
            {deviation.questionNumber} {deviation.questionText}
          </span>
          
          {/* Mobile: Condensed format */}
          <div className="flex flex-col gap-2 min-[768px]:hidden">
            <div className="flex flex-row items-center gap-1 flex-wrap">
              <SeverityBadge severity={deviation.severity} />
              <StatusBadge status={deviation.status} />
              <span className="label-small text-muted-foreground">
                {deviation.producer}
              </span>
            </div>
            <span className="body-medium">
              {deviation.questionNumber} {deviation.questionText}
            </span>
          </div>
        </td>
        
        {/* Desktop: Status column */}
        <td className="px-6 py-4 max-[768px]:hidden">
          <StatusBadge status={deviation.status} />
        </td>
      </tr>
    ))}
  </tbody>
</table>
```

### ❌ Wrong Implementation

```tsx
{/* ❌ WRONG: Changes table structure for all screen sizes */}
<td className="px-6 py-4">
  <div className="flex flex-col gap-2">
    <div className="flex flex-row items-center gap-1">
      <SeverityBadge />
      <StatusBadge />
    </div>
    <span>{text}</span>
  </div>
</td>

{/* ✅ CORRECT: Only uses condensed format on mobile */}
<td className="px-6 py-4">
  <span className="max-[768px]:hidden">{text}</span>
  <div className="flex flex-col gap-2 min-[768px]:hidden">
    <div className="flex flex-row items-center gap-1">
      <SeverityBadge />
      <StatusBadge />
    </div>
    <span>{text}</span>
  </div>
</td>
```

### Application-Wide Usage

Apply this pattern to these tables:

**Revisor:**
- **AvvikoversiktPage** - All deviation tabs (Åpne avvik, Til handling nå, etc.)
- **WriteReportPage - Tidligere revisjon** - External revision deviation tables (ExternalRevisionAvvikView)
- **WriteReportPage - Avvikshåndtering** - Deviation handling table

**Producer:**
- **ProducerDeviationView** - Producer deviation tables
- **ExternalRevisionAvvikView** - External revision tables

### Consistency Rules

- ✅ **ALWAYS** keep traditional multi-column table on desktop (≥768px)
- ✅ **ALWAYS** use responsive utilities (`max-[768px]:hidden`, `min-[768px]:hidden`)
- ✅ **ALWAYS** use `gap-1` (4px) between chips/badges on mobile
- ✅ **ALWAYS** use `gap-2` (8px) between lines on mobile
- ✅ **ALWAYS** place small elements (chips/badges) on line 1
- ✅ **ALWAYS** place long text on line 2
- ❌ **NEVER** change desktop table structure - keep all columns visible
- ❌ **NEVER** apply mobile format to desktop screens
- ❌ **NEVER** use single-column layout on desktop

### User Experience Benefits

1. **Desktop unchanged**: Maintains traditional table layout with all information visible
2. **Mobile optimized**: Content stacks naturally for easy reading on small screens
3. **Consistent interaction**: Same click/tap behavior across devices
4. **Scannable**: Chips on top make it easy to identify items at a glance
5. **No horizontal scroll**: All content fits within mobile viewport

 Some of the base components you are using may have styling(eg. gap/typography) baked in as defaults.
So make sure you explicitly set any styling information from the guidelines in the generated react to override the defaults.

## Deferred Status Filtering Pattern

**CRITICAL: Immediate visual feedback with deferred list reorganization across the entire application**

### The Golden Rule

When a user performs an action that changes an item's status (answering a question, closing an avvik, changing severity, etc.):

1. ✅ **ALWAYS** update the item's status/details IMMEDIATELY in place
2. ✅ **ALWAYS** keep the item in its current list/tab position
3. ✅ **NEVER** move the item to another filtered list/tab immediately
4. ✅ **ONLY** reorganize items into correct filtered lists when user navigates away and returns

This pattern provides clear visual feedback that the system has processed the user's action, while preventing confusion from items "disappearing" immediately.

### The Pattern

**Step 1: User Action**
- User performs an action (answers question, closes avvik, changes severity, etc.)
- Item status updates IMMEDIATELY in the UI
- Item STAYS in its current position in the current list/tab
- Status column/badge reflects the new status
- User sees the change happen right where they made it

**Step 2: Navigation Trigger**
- User navigates away by:
  - Switching to a different tab in the same view
  - Navigating to a different page
  - Changing filters
  - Refreshing the view

**Step 3: List Reorganization**
- When user returns to the view, items appear in their correct filtered lists/tabs
- Item with updated status now appears under the appropriate tab/filter
- Item no longer appears in the previous tab if it doesn't match that filter

### Implementation Pattern

Use a "pending changes" flag that triggers reorganization on navigation:

```tsx
// Track pending changes that need reorganization
const [hasPendingChanges, setHasPendingChanges] = useState(false);

// When user changes status, update in place and flag for reorganization
const handleStatusChange = (itemId: string, newStatus: string) => {
  // Update the item status in the current list
  setItems(prevItems => 
    prevItems.map(item => 
      item.id === itemId 
        ? { ...item, status: newStatus }
        : item
    )
  );
  
  // Flag that we have pending changes
  setHasPendingChanges(true);
};

// When user changes tabs, reorganize if needed
const handleTabChange = (newTab: string) => {
  if (hasPendingChanges) {
    // Reorganize items into correct filtered lists
    reorganizeItems();
    setHasPendingChanges(false);
  }
  setActiveTab(newTab);
};

// Alternative: Use useEffect to reorganize when component remounts
useEffect(() => {
  // On mount/remount, always show correctly filtered items
  loadFilteredItems(activeTab);
}, [activeTab]);
```

### Real-World Examples

#### Example 1: Avviksoversikt (Deviation Overview)

**Scenario:** User viewing "Åpne avvik" tab

1. **User Action:**
   - User clicks on an avvik to view details
   - User confirms closing the avvik in the detail panel
   - Dialog appears: "Bekreft lukking av avvik"
   - User clicks "Bekreft"

2. **Immediate Feedback:**
   - Avvik status changes to "Lukket" in the status column
   - Avvik STAYS in the "Åpne avvik" list
   - User can see the status has changed from "Dokumentert åpent" to "Lukket"
   - Detail panel reflects new status

3. **Deferred Reorganization:**
   - User switches to "Til behandling nå" tab → items reorganize
   - User navigates to "Profil" page and returns → items reorganize
   - When user returns to "Åpne avvik" tab, the closed avvik is gone
   - When user views "Lukket avvik" tab, the closed avvik appears there

#### Example 2: Svaroversikt (Answer Overview in Write Report)

**Scenario:** User viewing "Ubesvarte" tab in Svaroversikt

1. **User Action:**
   - User clicks on a question that shows status "Trenger utfylling"
   - User answers "Ja" to the question in the detail panel
   - User clicks "Lagre" or the answer is auto-saved

2. **Immediate Feedback:**
   - Question status changes to "Ja" in the status column
   - Question STAYS in the "Ubesvarte" list
   - User can see the status changed from "Trenger utfylling" to "Ja"
   - Status chip color updates to reflect "Ja" status

3. **Deferred Reorganization:**
   - User switches to "Ja" tab → items reorganize
   - User switches to "Nei" tab and back → items reorganize
   - When user returns to "Ubesvarte" tab, the answered question is gone
   - When user views "Ja" tab, the answered question appears there

#### Example 3: Register Revisjon (Question Answering)

**Scenario:** User viewing "Ubesvarte" tab in Register revisjon

1. **User Action:**
   - User selects a question with status "Ikke besvart"
   - User answers "Nei" and adds a deviation
   - User saves the answer

2. **Immediate Feedback:**
   - Question status changes to "Nei" in the question list
   - Question STAYS in the "Ubesvarte" tab
   - Status badge updates to show "Nei"
   - User sees their action had an effect

3. **Deferred Reorganization:**
   - User switches to "Ja" tab → items reorganize
   - User switches to "Alle spørsmål" tab → items reorganize
   - When user returns to "Ubesvarte" tab, the answered question is gone
   - When user views "Nei" tab, the answered question appears there

### Application-Wide Usage

This pattern applies to ALL views with filtered lists/tabs:

**Revisor Interface:**

1. **Avviksoversikt** (AvvikoversiktPage)
   - Tabs: Åpne avvik, Til behandling nå, Til oppfølging, Avventer produsent, Lukket avvik
   - Actions: Closing avvik, changing severity, changing status
   - Behavior: Status updates in place, reorganizes on tab change

2. **Skriv rapport - Svaroversikt** (SvaroversiktSection)
   - Tabs: Alle, Ja, Nei, Ikke relevant, Ubesvarte
   - Actions: Answering questions, changing answers
   - Behavior: Status updates in place, reorganizes on tab change

3. **Skriv rapport - Avvikshåndtering** (AvvikshandteringPage)
   - Tabs: Alle, Lite avvik, Avvik, Stort avvik
   - Actions: Changing severity, closing deviations
   - Behavior: Status updates in place, reorganizes on tab change

4. **Register revisjon** (RegisterRevisjonPage)
   - Tabs: Alle spørsmål, Ja, Nei, Ikke relevant, Ubesvarte, Dokumentasjon, Avvik
   - Actions: Answering questions, adding deviations
   - Behavior: Status updates in place, reorganizes on tab change

**Producer Interface:**

1. **Egenkontroll** (Producer Question View)
   - Tabs: Alle spørsmål, Ja, Nei, Ikke relevant, Ubesvarte, Dokumentasjon
   - Actions: Answering questions, uploading documentation
   - Behavior: Status updates in place, reorganizes on tab change

2. **Avvik** (ProducerDeviationView)
   - Tabs: Åpne, Til handling, Lukket
   - Actions: Responding to deviations, uploading documentation
   - Behavior: Status updates in place, reorganizes on tab change

3. **Spesialitet** (SpesialitetQuestionView / SpesialitetChecklistPage)
   - Tabs: Alle spørsmål, Ja, Nei, Ubesvarte
   - Actions: Answering checklist questions
   - Behavior: Status updates in place, reorganizes on tab change

### User Experience Benefits

1. **Immediate feedback**: Users see their actions take effect instantly
2. **No confusion**: Items don't "disappear" while users are working with them
3. **Visual confirmation**: Status changes are clearly visible in the current context
4. **Predictable behavior**: Users understand where items will be after navigation
5. **Reduced anxiety**: Users don't worry that their changes were lost when items "disappear"
6. **Better workflow**: Users can complete multiple actions in one tab before switching

### Consistency Rules

- ✅ **ALWAYS** update status in place when user makes a change
- ✅ **ALWAYS** keep the item in its current list/tab after status change
- ✅ **ALWAYS** reorganize items only when user navigates away
- ✅ **ALWAYS** show correct filtered items when user returns to a tab/view
- ✅ Apply to ALL filtered lists and tabs in both Revisor and Producer interfaces
- ❌ **NEVER** immediately remove an item from a list when its status changes
- ❌ **NEVER** move items between tabs without user navigation
- ❌ **NEVER** make items "disappear" immediately after user action

### Implementation Triggers for Reorganization

Items should reorganize when:

- ✅ User switches between tabs in the same view
- ✅ User navigates to a different page and returns
- ✅ User changes filter settings
- ✅ User refreshes the view
- ✅ Component remounts (useEffect on mount)

Items should NOT reorganize when:

- ❌ User changes an item's status
- ❌ User saves an answer
- ❌ User updates item details
- ❌ User is still viewing the same tab

### Technical Considerations

**State Management:**
- Maintain separate "displayed items" and "filtered items" states
- Display items reflect current user view (may include items that don't match filter)
- Filtered items are loaded fresh when user navigates or changes tabs

**Performance:**
- Reorganization is cheap - only happens on navigation, not on every status change
- Immediate status updates are fast - just updating local state
- No unnecessary re-filtering on every user action

**Data Consistency:**
- Backend updates happen immediately when user changes status
- Frontend shows optimistic update in place
- On navigation, fetch fresh filtered data from backend or re-filter local data

### Example Code Pattern

```tsx
function DeviationOverviewPage() {
  const [activeTab, setActiveTab] = useState('åpne');
  const [displayedDeviations, setDisplayedDeviations] = useState<Deviation[]>([]);
  const [hasPendingChanges, setHasPendingChanges] = useState(false);

  // Load correctly filtered items when tab changes
  useEffect(() => {
    const filteredDeviations = getFilteredDeviations(allDeviations, activeTab);
    setDisplayedDeviations(filteredDeviations);
    setHasPendingChanges(false);
  }, [activeTab, allDeviations]);

  // Handle status change - update in place
  const handleCloseDeviation = (deviationId: string) => {
    // Update displayed items immediately
    setDisplayedDeviations(prev =>
      prev.map(dev =>
        dev.id === deviationId
          ? { ...dev, status: 'Lukket' }
          : dev
      )
    );

    // Update backend
    updateDeviationStatus(deviationId, 'Lukket');

    // Flag for reorganization
    setHasPendingChanges(true);
  };

  // Handle tab change - reorganize if needed
  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    // useEffect will handle reorganization
  };

  return (
    <div>
      <TabGroup>
        <Tab active={activeTab === 'åpne'} onClick={() => handleTabChange('åpne')}>
          Åpne avvik
        </Tab>
        <Tab active={activeTab === 'lukket'} onClick={() => handleTabChange('lukket')}>
          Lukket avvik
        </Tab>
      </TabGroup>

      <DeviationList
        deviations={displayedDeviations}
        onClose={handleCloseDeviation}
      />
    </div>
  );
}
```

### Visual Feedback During Status Change

To make status changes even clearer, consider these optional enhancements:

1. **Highlight the changed item** with a brief color flash
2. **Show a snackbar/toast** confirming the action ("Avvik lukket")
3. **Update the status badge** with a smooth transition
4. **Add a subtle icon** next to changed items (e.g., checkmark)

These are optional but reinforce that the user's action was successful.

So make sure you explicitly set any styling information from the guidelines in the generated react to override the defaults.