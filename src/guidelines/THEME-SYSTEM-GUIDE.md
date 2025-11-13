# Theme System Guide

## Overview

The application uses a **multi-platform theme system** based on Figma's color variables. This allows the same application to be styled differently for four Norsk Mat platforms: **KSL**, **LokalMat**, **Nyt Norge**, and **Spesialitet**.

## Architecture

### 1. CSS Variables Structure

All colors are defined as CSS custom properties (variables) in `/styles/globals.css`:

```css
:root {
  /* Primary colors */
  --primary: #4A671E;
  --primary-foreground: #FFFFFF;
  --primary-container: #EFF1E7;
  --primary-container-foreground: #284000;
  
  /* Secondary colors */
  --secondary: #3655AE;
  /* ... and so on */
}
```

### 2. Theme Classes

Each platform has its own theme class that overrides the default colors:

- `.theme-ksl` - Default KSL colors (green-focused)
- `.theme-lokalmat` - LokalMat colors (red and earth tones)
- `.theme-nyt-norge` - Nyt Norge colors (blue and green)
- `.theme-spesialitet` - Spesialitet colors (brown and neutral)

### 3. Color Token System

The system follows Material Design 3's color token structure:

#### Base Color Roles
- **Primary**: Main brand color (buttons, links, key actions)
- **Secondary**: Supporting brand color (less prominent actions)
- **Tertiary**: Accent color (additional variety)
- **Error**: Error states and destructive actions

#### Color Variants
Each base color has four variants:
1. **Base** (`--primary`): Main color for filled surfaces
2. **Foreground** (`--primary-foreground`): Text/icons on base color
3. **Container** (`--primary-container`): Lighter background version
4. **Container Foreground** (`--primary-container-foreground`): Text/icons on container

## Platform-Specific Color Palettes

### KSL (Default)
```
Primary:       #4A671E (Green)
Secondary:     #3655AE (Blue)  
Tertiary:      #005D21 (Dark Green)
Error:         #BA1A1A (Red)
```

### LokalMat
```
Primary:       #A80000 (Red)
Secondary:     #2B4F27 (Green)
Tertiary:      #800000 (Dark Red)
Error:         #BA1A1A (Red)
```

### Nyt Norge
```
Primary:       #00319E (Blue)
Secondary:     #446900 (Green)
Tertiary:      #4D6629 (Olive Green)
Error:         #BA1A1A (Red)
```

### Spesialitet
```
Primary:       #594414 (Brown)
Secondary:     #212222 (Dark Gray)
Tertiary:      #6B5D3E (Warm Brown)
Error:         #BA1A1A (Red)
```

## Implementation

### Switching Themes Programmatically

```typescript
// Remove all theme classes
document.documentElement.classList.remove(
  'theme-ksl',
  'theme-lokalmat',
  'theme-nyt-norge',
  'theme-spesialitet'
);

// Apply new theme
document.documentElement.classList.add('theme-lokalmat');
```

### Using ThemeSwitcher Component

```tsx
import { ThemeSwitcher } from './components/ThemeSwitcher';

function App() {
  return (
    <>
      <ThemeSwitcher />
      {/* Your app content */}
    </>
  );
}
```

### Using Theme Colors in Components

#### With Tailwind Classes
```tsx
// These classes automatically use the CSS variables
<button className="bg-primary text-primary-foreground hover:opacity-90">
  Primary Button
</button>

<div className="bg-primary-container text-primary-container-foreground">
  Light primary background
</div>

<span className="text-secondary">Secondary colored text</span>
```

#### With Inline Styles
```tsx
<div style={{
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)',
  padding: '16px',
  borderRadius: 'var(--radius-button)'
}}>
  Inline styled element
</div>
```

#### In CSS Files
```css
.my-component {
  background: var(--primary-container);
  color: var(--primary-container-foreground);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.my-component:hover {
  background: var(--primary);
  color: var(--primary-foreground);
}
```

## Best Practices

### ✅ DO
- Always use CSS variables for colors
- Use semantic color names (primary, secondary, etc.)
- Test your components with all four themes
- Use container variants for light backgrounds
- Use base colors for filled surfaces

### ❌ DON'T
- Hardcode hex color values
- Use arbitrary colors outside the theme system
- Assume a specific color value (themes change it)
- Mix theme and non-theme colors

## Color Usage Guidelines

### When to Use Each Color

**Primary:**
- Main call-to-action buttons
- Active navigation items
- Key interactive elements
- Primary links

**Secondary:**
- Supporting actions
- Alternative buttons
- Secondary navigation
- Less important interactive elements

**Tertiary:**
- Accent elements
- Additional interactive elements
- Variety in UI

**Error/Destructive:**
- Error messages
- Destructive actions (delete, remove)
- Validation failures
- Alert states

**Muted:**
- Disabled states
- Placeholder text
- Secondary information
- Backgrounds for less important content

## Common Patterns

### Button Variants
```tsx
// Primary button (main action)
<button className="bg-primary text-primary-foreground px-6 py-4 rounded-[var(--radius-button)]">
  Save Changes
</button>

// Secondary button (alternative action)
<button className="bg-secondary text-secondary-foreground px-6 py-4 rounded-[var(--radius-button)]">
  Cancel
</button>

// Outlined button
<button className="border-2 border-primary text-primary bg-transparent px-6 py-4 rounded-[var(--radius-button)]">
  Learn More
</button>

// Ghost button
<button className="text-primary bg-transparent px-6 py-4 rounded-[var(--radius-button)] hover:bg-muted">
  Skip
</button>
```

### Card with Theme Colors
```tsx
<div className="bg-card border border-border rounded-[var(--radius-card)] p-6">
  <h3 className="text-foreground mb-2">Card Title</h3>
  <p className="text-muted-foreground mb-4">Card description text</p>
  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-[var(--radius-button)]">
    Action
  </button>
</div>
```

### Alert/Status Messages
```tsx
// Error alert
<div className="bg-error-container text-error-container-foreground border border-error rounded-lg p-4">
  <p>An error occurred</p>
</div>

// Success alert (using tertiary green)
<div className="bg-tertiary-container text-tertiary-container-foreground border border-tertiary rounded-lg p-4">
  <p>Success! Changes saved</p>
</div>

// Info alert (using primary)
<div className="bg-primary-container text-primary-container-foreground border border-primary rounded-lg p-4">
  <p>Important information</p>
</div>
```

## Testing Themes

To ensure your components work with all themes:

1. **Visual Testing**: Use the ThemeSwitcher to cycle through all themes
2. **Contrast Testing**: Verify text is readable in all themes
3. **Interactive Testing**: Test hover, focus, and active states
4. **Consistency Testing**: Ensure semantic colors are used appropriately

## Migration from Hardcoded Colors

If you have existing hardcoded colors, follow these steps:

1. **Identify the color's purpose** (primary action, secondary info, error, etc.)
2. **Map to semantic token** (primary, secondary, tertiary, error, muted)
3. **Choose appropriate variant** (base, foreground, container, container-foreground)
4. **Replace with CSS variable** (`var(--token-name)`)
5. **Test with all themes** to ensure it works correctly

Example:
```tsx
// Before
<button style={{ backgroundColor: '#4A671E', color: '#FFFFFF' }}>
  Click Me
</button>

// After
<button className="bg-primary text-primary-foreground">
  Click Me
</button>
```

## Support

For questions or issues with the theme system:
1. Check that CSS variables are properly defined in `/styles/globals.css`
2. Verify theme classes are correctly applied to the root element
3. Ensure components use CSS variables instead of hardcoded values
4. Test with the ThemeSwitcher component to see all themes in action
