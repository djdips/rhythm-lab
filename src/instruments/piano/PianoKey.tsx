import React from 'react';
import styles from './Piano.module.css';
import type { PianoKeyProps } from './piano.types';
import { BLACK_KEY_OFFSETS } from './piano.constants';

import usePlaybackStore from '../../store/playbackStore';

export const PianoKey: React.FC<PianoKeyProps> = ({
  note,
  onPlay,
  onRelease,
  keyboardLabel
}) => {
  const { pitch, isAccidental, name } = note;
  
  // Subscribe specifically to this key's pressed state
  const isPressed = usePlaybackStore((state) => !!state.activeNotes[pitch]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent text highlights and focus outlines from mouse clicks
    onPlay(pitch);
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    // If the user sweeps their mouse across keys with the primary button down, trigger play
    if (e.buttons === 1) {
      onPlay(pitch);
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    e.preventDefault();
    onRelease(pitch);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    e.preventDefault();
    onRelease(pitch);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault(); // Avoid scrolling or zooming on mobile double taps
    onPlay(pitch);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    onRelease(pitch);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.repeat) return; // Prevent key repeat audio restarts
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onPlay(pitch);
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onRelease(pitch);
    }
  };

  const keyClass = isAccidental ? styles.blackKey : styles.whiteKey;
  const activeClass = isAccidental ? styles.blackKeyActive : styles.whiteKeyActive;

  const style = isAccidental
    ? { left: BLACK_KEY_OFFSETS[pitch] }
    : undefined;

  return (
    <button
      type="button"
      className={`${keyClass} ${isPressed ? activeClass : ''}`}
      style={style}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      aria-label={`${name} note, pitch ${pitch}`}
      aria-pressed={isPressed}
      tabIndex={0}
    >
      <div className={styles.pitchName}>{name}</div>
      {keyboardLabel && (
        <span className={styles.keyLabel} aria-hidden="true">
          {keyboardLabel}
        </span>
      )}
    </button>
  );
};

export default PianoKey;
