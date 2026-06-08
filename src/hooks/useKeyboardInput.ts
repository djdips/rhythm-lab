import { useEffect } from 'react';
import { useAudioEngine } from './useAudioEngine';
import { KEY_TO_PITCH } from '../constants/keyboardMappings';

export const useKeyboardInput = () => {
  const { playNote, stopNote } = useAudioEngine();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Prevent key triggers if user is currently typing in an input element
      const activeElement = document.activeElement;
      if (activeElement) {
        const tagName = activeElement.tagName.toLowerCase();
        const isContentEditable = activeElement.getAttribute('contenteditable') === 'true';
        if (
          tagName === 'input' ||
          tagName === 'textarea' ||
          tagName === 'select' ||
          isContentEditable
        ) {
          return;
        }
      }

      // Block OS key-repeat events to prevent re-triggering audio node creation
      if (event.repeat) return;

      const pitch = KEY_TO_PITCH[event.code];
      if (pitch) {
        playNote(pitch);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const pitch = KEY_TO_PITCH[event.code];
      if (pitch) {
        stopNote(pitch);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [playNote, stopNote]);
};

export default useKeyboardInput;
