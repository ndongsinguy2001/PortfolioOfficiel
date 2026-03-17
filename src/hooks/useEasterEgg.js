import { useEffect } from 'react';

const useEasterEgg = (combination, callback) => {
  useEffect(() => {
    const pressedKeys = new Set();

    const handleKeyDown = (e) => {
      pressedKeys.add(e.key);
      const combinationKeys = combination.split('+').map(k => k.trim());
      const isCombinationPressed = combinationKeys.every(key => {
        if (key === 'Ctrl') return e.ctrlKey;
        if (key === 'Shift') return e.shiftKey;
        if (key === 'Alt') return e.altKey;
        return pressedKeys.has(key);
      });
      if (isCombinationPressed) {
        callback();
      }
    };

    const handleKeyUp = (e) => {
      pressedKeys.delete(e.key);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [combination, callback]);
};

export default useEasterEgg;