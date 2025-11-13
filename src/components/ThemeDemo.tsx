import { AlertTriangle, CheckCircle2, Info } from 'lucide-react';

/**
 * ThemeDemo - A component that demonstrates all theme colors in action
 * Use this to visually test that all colors work correctly across themes
 */
export function ThemeDemo() {
  return (
    <div className="p-8 space-y-8 bg-background">
      <div>
        <h1 className="text-foreground mb-2">Theme Color System Demo</h1>
        <p className="body-large text-muted-foreground">
          This page demonstrates all theme colors. Switch themes to see colors change.
        </p>
      </div>

      {/* Primary Colors */}
      <section className="space-y-4">
        <h2 className="text-foreground">Primary Colors</h2>
        
        <div className="flex gap-4 flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-lg" style={{ backgroundColor: 'var(--primary)' }} />
            <span className="label-small text-muted-foreground">Primary</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-lg flex items-center justify-center" 
                 style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
              <span className="label-medium">Text</span>
            </div>
            <span className="label-small text-muted-foreground">On Primary</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-lg" style={{ backgroundColor: 'var(--primary-container)' }} />
            <span className="label-small text-muted-foreground">Container</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-lg flex items-center justify-center" 
                 style={{ backgroundColor: 'var(--primary-container)', color: 'var(--primary-container-foreground)' }}>
              <span className="label-medium">Text</span>
            </div>
            <span className="label-small text-muted-foreground">On Container</span>
          </div>
        </div>

        <div className="space-y-2">
          <button className="bg-primary text-primary-foreground px-6 py-4 rounded-[var(--radius-button)] label-medium hover:opacity-90 transition-opacity">
            Primary Button
          </button>
          
          <div className="bg-primary-container text-primary-container-foreground p-4 rounded-lg max-w-md">
            <p className="body-medium">This is a primary container with contrasting text</p>
          </div>
        </div>
      </section>

      {/* Secondary Colors */}
      <section className="space-y-4">
        <h2 className="text-foreground">Secondary Colors</h2>
        
        <div className="flex gap-4 flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-lg" style={{ backgroundColor: 'var(--secondary)' }} />
            <span className="label-small text-muted-foreground">Secondary</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-lg" style={{ backgroundColor: 'var(--secondary-container)' }} />
            <span className="label-small text-muted-foreground">Container</span>
          </div>
        </div>

        <div className="space-y-2">
          <button className="bg-secondary text-secondary-foreground px-6 py-4 rounded-[var(--radius-button)] label-medium hover:opacity-90 transition-opacity">
            Secondary Button
          </button>
        </div>
      </section>

      {/* Tertiary Colors */}
      <section className="space-y-4">
        <h2 className="text-foreground">Tertiary Colors</h2>
        
        <div className="flex gap-4 flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-lg" style={{ backgroundColor: 'var(--tertiary)' }} />
            <span className="label-small text-muted-foreground">Tertiary</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-lg" style={{ backgroundColor: 'var(--tertiary-container)' }} />
            <span className="label-small text-muted-foreground">Container</span>
          </div>
        </div>

        <button className="bg-tertiary text-tertiary-foreground px-6 py-4 rounded-[var(--radius-button)] label-medium hover:opacity-90 transition-opacity">
          Tertiary Button
        </button>
      </section>

      {/* Error/Destructive Colors */}
      <section className="space-y-4">
        <h2 className="text-foreground">Error Colors</h2>
        
        <div className="flex gap-4 flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-lg" style={{ backgroundColor: 'var(--error)' }} />
            <span className="label-small text-muted-foreground">Error</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-lg" style={{ backgroundColor: 'var(--error-container)' }} />
            <span className="label-small text-muted-foreground">Container</span>
          </div>
        </div>

        <div className="space-y-2">
          <button className="bg-destructive text-destructive-foreground px-6 py-4 rounded-[var(--radius-button)] label-medium hover:opacity-90 transition-opacity">
            Delete Item
          </button>
          
          <div className="bg-error-container text-error-container-foreground border border-[var(--error)] p-4 rounded-lg max-w-md flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="label-medium mb-1">Error Message</p>
              <p className="body-medium">Something went wrong. Please try again.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Surface Colors */}
      <section className="space-y-4">
        <h2 className="text-foreground">Surface Colors</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-background border border-border p-4 rounded-lg">
            <p className="label-small text-muted-foreground mb-2">Background</p>
            <p className="body-medium text-foreground">Main background color</p>
          </div>
          
          <div className="bg-card border border-border p-4 rounded-lg">
            <p className="label-small text-muted-foreground mb-2">Card</p>
            <p className="body-medium text-card-foreground">Card background</p>
          </div>
          
          <div className="bg-muted border border-border p-4 rounded-lg">
            <p className="label-small text-muted-foreground mb-2">Muted</p>
            <p className="body-medium text-foreground">Muted background</p>
          </div>
          
          <div className="bg-accent border border-border p-4 rounded-lg">
            <p className="label-small text-muted-foreground mb-2">Accent</p>
            <p className="body-medium text-accent-foreground">Accent background</p>
          </div>
        </div>
      </section>

      {/* Alert Examples */}
      <section className="space-y-4">
        <h2 className="text-foreground">Alert Examples</h2>
        
        <div className="space-y-3 max-w-2xl">
          {/* Success Alert (using tertiary) */}
          <div className="bg-tertiary-container text-tertiary-container-foreground border border-[var(--tertiary)] rounded-lg p-4 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="label-medium mb-1">Success</p>
              <p className="body-medium">Your changes have been saved successfully.</p>
            </div>
          </div>

          {/* Info Alert (using primary) */}
          <div className="bg-primary-container text-primary-container-foreground border border-[var(--primary)] rounded-lg p-4 flex items-start gap-3">
            <Info className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="label-medium mb-1">Information</p>
              <p className="body-medium">Please review your answers before submitting.</p>
            </div>
          </div>

          {/* Warning Alert (using secondary) */}
          <div className="bg-secondary-container text-secondary-container-foreground border border-[var(--secondary)] rounded-lg p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="label-medium mb-1">Warning</p>
              <p className="body-medium">Some fields require your attention.</p>
            </div>
          </div>

          {/* Error Alert */}
          <div className="bg-error-container text-error-container-foreground border border-[var(--error)] rounded-lg p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="label-medium mb-1">Error</p>
              <p className="body-medium">Unable to save. Please check your connection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Button Variants */}
      <section className="space-y-4">
        <h2 className="text-foreground">Button Variants</h2>
        
        <div className="flex flex-wrap gap-3">
          <button className="bg-primary text-primary-foreground px-6 py-4 rounded-[var(--radius-button)] label-medium hover:opacity-90 transition-opacity">
            Filled Primary
          </button>
          
          <button className="bg-secondary text-secondary-foreground px-6 py-4 rounded-[var(--radius-button)] label-medium hover:opacity-90 transition-opacity">
            Filled Secondary
          </button>
          
          <button className="border-2 border-primary text-primary bg-transparent px-6 py-4 rounded-[var(--radius-button)] label-medium hover:bg-primary-container transition-colors">
            Outlined Primary
          </button>
          
          <button className="text-primary bg-transparent px-6 py-4 rounded-[var(--radius-button)] label-medium hover:bg-muted transition-colors">
            Text Primary
          </button>
          
          <button className="bg-muted text-muted-foreground px-6 py-4 rounded-[var(--radius-button)] label-medium cursor-not-allowed opacity-60">
            Disabled
          </button>
        </div>
      </section>

      {/* Input Fields */}
      <section className="space-y-4">
        <h2 className="text-foreground">Input Fields</h2>
        
        <div className="max-w-md space-y-3">
          <div>
            <label className="label-medium text-foreground mb-2 block">
              Text Input
            </label>
            <input
              type="text"
              placeholder="Enter text..."
              className="w-full px-4 py-3 bg-input-background border border-border rounded-lg body-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div>
            <label className="label-medium text-foreground mb-2 block">
              Textarea
            </label>
            <textarea
              placeholder="Enter description..."
              rows={3}
              className="w-full px-4 py-3 bg-input-background border border-border rounded-lg body-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-4">
        <h2 className="text-foreground">Cards</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-[var(--radius-card)] p-6 shadow-[var(--elevation-sm)]">
            <h3 className="title-medium text-card-foreground mb-2">Card Title</h3>
            <p className="body-medium text-muted-foreground mb-4">
              Card description with muted text for secondary information.
            </p>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-[var(--radius-button)] label-medium hover:opacity-90">
              Action
            </button>
          </div>
          
          <div className="bg-primary-container border border-primary rounded-[var(--radius-card)] p-6">
            <h3 className="title-medium text-primary-container-foreground mb-2">Primary Card</h3>
            <p className="body-medium text-primary-container-foreground/80 mb-4">
              A card with primary container background.
            </p>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-[var(--radius-button)] label-medium hover:opacity-90">
              Action
            </button>
          </div>
          
          <div className="bg-secondary-container border border-secondary rounded-[var(--radius-card)] p-6">
            <h3 className="title-medium text-secondary-container-foreground mb-2">Secondary Card</h3>
            <p className="body-medium text-secondary-container-foreground/80 mb-4">
              A card with secondary container background.
            </p>
            <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-[var(--radius-button)] label-medium hover:opacity-90">
              Action
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
