import type { Note } from '../types/music';

export const OCTAVE_4_NOTES: readonly Note[] = [
  { pitch: 'C4', name: 'C', frequency: 261.63, isAccidental: false, octave: 4 },
  { pitch: 'C#4', name: 'C#', frequency: 277.18, isAccidental: true, octave: 4 },
  { pitch: 'D4', name: 'D', frequency: 293.66, isAccidental: false, octave: 4 },
  { pitch: 'D#4', name: 'D#', frequency: 311.13, isAccidental: true, octave: 4 },
  { pitch: 'E4', name: 'E', frequency: 329.63, isAccidental: false, octave: 4 },
  { pitch: 'F4', name: 'F', frequency: 349.23, isAccidental: false, octave: 4 },
  { pitch: 'F#4', name: 'F#', frequency: 369.99, isAccidental: true, octave: 4 },
  { pitch: 'G4', name: 'G', frequency: 392.00, isAccidental: false, octave: 4 },
  { pitch: 'G#4', name: 'G#', frequency: 415.30, isAccidental: true, octave: 4 },
  { pitch: 'A4', name: 'A', frequency: 440.00, isAccidental: false, octave: 4 },
  { pitch: 'A#4', name: 'A#', frequency: 466.16, isAccidental: true, octave: 4 },
  { pitch: 'B4', name: 'B', frequency: 493.88, isAccidental: false, octave: 4 }
];

export const NOTE_MAP: Readonly<Record<string, Note>> = OCTAVE_4_NOTES.reduce((acc, note) => {
  return { ...acc, [note.pitch]: note };
}, {} as Record<string, Note>);
