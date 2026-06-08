export interface HelpShortcutGroup {
  readonly keys: string;
  readonly description: string;
}

export interface InstrumentHelpContent {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly groups: readonly HelpShortcutGroup[];
}