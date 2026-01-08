import { ArrowRight, Calendar, CheckCircle2, AlertTriangle, FileText, Clock } from 'lucide-react';

interface ProducerHomePageProps {
  onNavigateToChecklist?: () => void;
}

export function ProducerHomePage({ onNavigateToChecklist }: ProducerHomePageProps) {
  return (
    <div className="flex-1 overflow-auto bg-background">
      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="title-large text-foreground mb-2">Velkommen, Ketil Nordseth</h1>
          <p className="body-large text-muted-foreground">Haugseter Gård</p>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Active Checklists */}
          <div className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-primary-container rounded-lg">
                <FileText className="w-6 h-6 text-primary-container-foreground" />
              </div>
              <span className="label-small text-muted-foreground">Aktive</span>
            </div>
            <p className="title-large text-foreground mb-1">2</p>
            <p className="body-medium text-muted-foreground">Sjekklister</p>
          </div>

          {/* Pending Items */}
          <div className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-secondary-container rounded-lg">
                <Clock className="w-6 h-6 text-secondary-container-foreground" />
              </div>
              <span className="label-small text-muted-foreground">Ventende</span>
            </div>
            <p className="title-large text-foreground mb-1">8</p>
            <p className="body-medium text-muted-foreground">Ubesvarte spørsmål</p>
          </div>

          {/* Deviations */}
          <div className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-[#ffdad6] rounded-lg">
                <AlertTriangle className="w-6 h-6 text-[#410002]" />
              </div>
              <span className="label-small text-muted-foreground">Åpne</span>
            </div>
            <p className="title-large text-foreground mb-1">3</p>
            <p className="body-medium text-muted-foreground">Avvik</p>
          </div>

          {/* Completed */}
          <div className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-tertiary-container rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-tertiary-container-foreground" />
              </div>
              <span className="label-small text-muted-foreground">Fullført</span>
            </div>
            <p className="title-large text-foreground mb-1">47</p>
            <p className="body-medium text-muted-foreground">Spørsmål</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Checklists - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 border-b border-border">
                <h2 className="title-medium text-foreground">Aktive sjekklister</h2>
              </div>

              {/* Checklist Items */}
              <div className="divide-y divide-border">
                {/* KSL Specialitet Checklist */}
                <button 
                  onClick={onNavigateToChecklist}
                  className="w-full px-6 py-5 hover:bg-muted/50 transition-colors text-left"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="body-large text-foreground mb-1">KSL Spesialitet</h3>
                      <p className="body-medium text-muted-foreground">Egenrevisjon 2024</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="label-small px-3 py-1 rounded-full bg-secondary-container text-secondary-container-foreground">
                        Pågår
                      </span>
                    </div>
                  </div>
                  
                  {/* Progress */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="label-small text-muted-foreground">Fremdrift</span>
                      <span className="label-small text-foreground">47 av 55 spørsmål</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: '85%' }}
                      />
                    </div>
                  </div>

                  {/* Footer Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="body-medium text-muted-foreground">Frist: 15. des 2024</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-[#ba1a1a]" />
                        <span className="body-medium text-muted-foreground">3 avvik</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </button>

                {/* Nyt Norge Checklist */}
                <div className="px-6 py-5 hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="body-large text-foreground mb-1">Nyt Norge</h3>
                      <p className="body-medium text-muted-foreground">Årlig oppfølging</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="label-small px-3 py-1 rounded-full bg-muted text-muted-foreground">
                        Ikke startet
                      </span>
                    </div>
                  </div>
                  
                  {/* Progress */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="label-small text-muted-foreground">Fremdrift</span>
                      <span className="label-small text-foreground">0 av 32 spørsmål</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: '0%' }}
                      />
                    </div>
                  </div>

                  {/* Footer Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="body-medium text-muted-foreground">Frist: 31. jan 2025</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Recent Activity & Quick Actions */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="px-6 py-4 border-b border-border">
                <h2 className="title-medium text-foreground">Hurtighandlinger</h2>
              </div>
              <div className="p-4 space-y-2">
                <button 
                  onClick={onNavigateToChecklist}
                  className="w-full px-6 py-3.5 h-14 rounded-[var(--radius-button)] bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <span className="label-medium">Fortsett egenrevisjon</span>
                </button>
                <button className="w-full px-6 py-3.5 h-14 rounded-[var(--radius-button)] border border-border text-foreground hover:bg-muted transition-colors">
                  <span className="label-medium">Last opp dokumenter</span>
                </button>
                <button className="w-full px-6 py-3.5 h-14 rounded-[var(--radius-button)] border border-border text-foreground hover:bg-muted transition-colors">
                  <span className="label-medium">Lukk avvik</span>
                </button>
              </div>
            </div>

            {/* Upcoming Deadlines */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="px-6 py-4 border-b border-border">
                <h2 className="title-medium text-foreground">Kommende frister</h2>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-error-container rounded-lg shrink-0">
                    <Calendar className="w-4 h-4 text-error-container-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="body-medium text-foreground mb-0.5">KSL Spesialitet</p>
                    <p className="label-small text-muted-foreground">15. desember 2024</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-muted rounded-lg shrink-0">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="body-medium text-foreground mb-0.5">Nyt Norge</p>
                    <p className="label-small text-muted-foreground">31. januar 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Help & Support */}
            <div className="bg-primary-container rounded-xl border border-primary p-4">
              <h3 className="label-medium text-primary-container-foreground mb-2">Trenger du hjelp?</h3>
              <p className="body-medium text-primary-container-foreground mb-3">
                Se veiledning og tips for å fylle ut egenrevisjonen
              </p>
              <button className="px-6 py-3.5 h-14 rounded-[var(--radius-button)] bg-primary-container text-primary-container-foreground hover:bg-primary-container/80 transition-colors label-medium">
                Åpne hjelp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}