import type { Note } from '../../types/music';

export interface PianoKeyProps {
  readonly note: Note;
  readonly onPlay: (pitch: string) => void;
  readonly onRelease: (pitch: string) => void;
  readonly keyboardLabel?: string;
}

export interface PianoProps {
  readonly className?: string;
}
