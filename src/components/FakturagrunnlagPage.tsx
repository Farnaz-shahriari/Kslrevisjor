import { FileText } from 'lucide-react';

export function FakturagrunnlagPage() {
  return (
    <div className="flex flex-1 h-full w-full items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6 max-w-md px-6 text-center">
        <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
          <FileText className="w-10 h-10 text-muted-foreground" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="title-large text-foreground">Under design</h2>
          <p className="body-medium text-muted-foreground">
            Fakturagrunnlag-siden er under utvikling og vil være tilgjengelig snart.
          </p>
        </div>
      </div>
    </div>
  );
}
