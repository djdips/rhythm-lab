import type { InstrumentHelpContent } from "@/types/help";

export interface HelpSheetProps {
  readonly content: InstrumentHelpContent;
}

export function HelpSheet({ content }: HelpSheetProps) {
  return (
    <div className="mt-6 flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-bg-dark/50 border border-border-muted/40 rounded-xl text-sm">
            <div className="flex items-center gap-3">
              <span className="text-xl">{content.icon}</span>
              <div>
                <h2 className="font-bold text-text-primary">{content.title}</h2>
                <p className="text-xs text-text-muted">{content.description}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {content.groups.map((group) => (
                <div className="flex items-center gap-1 bg-bg-card px-2.5 py-1.5 rounded-lg border border-border-muted text-xs">
                  <span className="font-mono bg-bg-dark px-1.5 py-0.5 rounded border border-border-muted text-brand-primary-light">{group.keys}</span>
                  <span className="text-text-muted">→</span>
                  <span className="font-bold">{group.description}</span>
                </div>
              ))}
            </div>
          </div>
  );
}