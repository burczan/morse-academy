import { useEffect, useState } from 'react';

export const useLocationChange = (path: string): string => {
  const [currentPath, setCurrentPath] = useState(path);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return currentPath;
};
