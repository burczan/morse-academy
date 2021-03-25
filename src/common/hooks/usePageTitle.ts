import { useEffect } from 'react';

export const usePageTitle = (title: string): void => {
  useEffect(() => {
    const previousTitle = document.title;
    if (title) {
      document.title = `${title} - NPM Package Search`;
    } else {
      document.title = 'NPM Package Search';
    }

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};
