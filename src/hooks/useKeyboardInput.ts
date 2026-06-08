import { useEffect } from 'react';
import { useAudioEngine } from './useAudioEngine';
import { useCurrentInstrumentMappings } from './useCurrentInstrumentMappings';

export const useKeyboardInput = () => {
  const { playTarget, stopTarget } = useAudioEngine();

  const { keyMap } = useCurrentInstrumentMappings();

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

      const target = keyMap[event.code];
      if (target) {
        playTarget(target);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const target = keyMap[event.code];
      if (target) {
        stopTarget(target);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [playTarget, stopTarget, keyMap]);
};

export default useKeyboardInput;
