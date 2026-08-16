import { useEffect, useState } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export const useKonamiCode = () => {
  const [isKonamiUnlocked, setIsKonamiUnlocked] = useState(false);
  const [keySequence, setKeySequence] = useState([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        document.activeElement.tagName === 'INPUT' ||
        document.activeElement.tagName === 'TEXTAREA'
      ) {
        return;
      }

      let key = event.key;

      if (key.length === 1) {
        key = key.toLowerCase();
      }

      const newSequence = [...keySequence, key];

      if (key !== KONAMI_CODE[newSequence.length - 1]) {
        if (key === KONAMI_CODE[0]) {
          setKeySequence([key]);
        } else {
          setKeySequence([]);
        }
      } else if (newSequence.length === KONAMI_CODE.length) {
        setIsKonamiUnlocked(true);
        setKeySequence([]);
      } else {
        setKeySequence(newSequence);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keySequence]);

  const resetKonami = () => {
    setIsKonamiUnlocked(false);
    setKeySequence([]);
  };

  return { isKonamiUnlocked, setIsKonamiUnlocked, resetKonami };
};
