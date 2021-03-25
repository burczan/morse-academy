import React from 'react';
import { usePageTitle } from '../../hooks';
import notFound from './notFound.gif';
import s from './style.module.css';

export const PageNotFound = () => {
  usePageTitle('Page not found');

  return (
    <div>
      <img src={notFound} alt="page not found" className={s.bottom} />
    </div>
  );
};
