export interface Drum {
  readonly id: string;
  readonly label: string;
  readonly key: string;
  readonly icon: string;
  readonly gridArea: string;
  readonly gain?: number; // Optional gain property for volume control
}
