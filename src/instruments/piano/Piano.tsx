import React from 'react';
import { OCTAVE_4_NOTES } from '../../constants/notes';
import { PITCH_TO_KEY } from '../../constants/keyboardMappings';
import { useAudioEngine } from '../../hooks/useAudioEngine';
import { useKeyboardInput } from '../../hooks/useKeyboardInput';
import PianoKey from './PianoKey';
import styles from './Piano.module.css';

export const Piano: React.FC = () => {
  // Bind QWERTY keyboard listeners
  useKeyboardInput();

  const { playNote, stopNote } = useAudioEngine();

  const whiteNotes = OCTAVE_4_NOTES.filter((note) => !note.isAccidental);
  const blackNotes = OCTAVE_4_NOTES.filter((note) => note.isAccidental);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div 
        className={styles.keyboard}
        role="group"
        aria-label="Interactive Piano Keyboard, Octave 4"
      >
        {/* Render white keys first to form the base row */}
        {whiteNotes.map((note) => (
          <PianoKey
            key={note.pitch}
            note={note}
            onPlay={playNote}
            onRelease={stopNote}
            keyboardLabel={PITCH_TO_KEY[note.pitch]}
          />
        ))}

        {/* Render black keys overlaying the white keys */}
        {blackNotes.map((note) => (
          <PianoKey
            key={note.pitch}
            note={note}
            onPlay={playNote}
            onRelease={stopNote}
            keyboardLabel={PITCH_TO_KEY[note.pitch]}
          />
        ))}
      </div>
    </div>
  );
};

export default Piano;
