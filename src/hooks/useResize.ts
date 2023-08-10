import { useEffect } from 'react';

export default function useResize(handleResize: () => void) {
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
}
