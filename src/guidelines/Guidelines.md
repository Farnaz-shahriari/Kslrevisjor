**Add your own guidelines here**
Only use absolute positioning when necessary. Opt for responsive and well structured layouts that use flexbox and grid by default
Refactor code as you go to keep code clean
Keep file sizes small and put helper functions and components in their own files.

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
import { ThemeSwitcher } from './components/ThemeSwitcher';

// Add to your component
<ThemeSwitcher />
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

<!--

System Guidelines

Use this file to provide the AI with rules and guidelines you want it to follow.
This template outlines a few examples of things you can add. You can add your own sections and format it to suit your needs

TIP: More context isn't always better. It can confuse the LLM. Try and add the most important rules you need

# General guidelines

Any general rules you want the AI to follow.
For example:

Only use absolute positioning when necessary. Opt for responsive and well structured layouts that use flexbox and grid by default
Refactor code as you go to keep code clean
Keep file sizes small and put helper functions and components in their own files.

--------------

# Design system guidelines
Rules for how the AI should make generations look like your company's design system

Additionally, if you select a design system to use in the prompt box, you can reference
your design system's components, tokens, variables and components.
For example:

* Use a base font-size of 14px
* Date formats should always be in the format “Jun 10”
* The bottom toolbar should only ever have a maximum of 4 items
* Never use the floating action button with the bottom toolbar
* Chips should always come in sets of 3 or more
* Don't use a dropdown if there are 2 or fewer options

You can also create sub sections and add more specific details
For example:


## Button
The Button component is a fundamental interactive element in our design system, designed to trigger actions or navigate
users through the application. It provides visual feedback and clear affordances to enhance user experience.

### Usage
Buttons should be used for important actions that users need to take, such as form submissions, confirming choices,
or initiating processes. They communicate interactivity and should have clear, action-oriented labels.

### Variants
* Primary Button
  * Purpose : Used for the main action in a section or page
  * Visual Style : Bold, filled with the primary brand color
  * Usage : One primary button per section to guide users toward the most important action
* Secondary Button
  * Purpose : Used for alternative or supporting actions
  * Visual Style : Outlined with the primary color, transparent background
  * Usage : Can appear alongside a primary button for less important actions
* Tertiary Button
  * Purpose : Used for the least important actions
  * Visual Style : Text-only with no border, using primary color
  * Usage : For actions that should be available but not emphasized
-->
