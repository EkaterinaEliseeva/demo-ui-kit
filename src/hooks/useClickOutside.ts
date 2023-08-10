import { useEffect, RefObject } from 'react';

export default function useClickOutside(ref: RefObject<HTMLElement>, callback: () => void) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [ref, callback]);
}
