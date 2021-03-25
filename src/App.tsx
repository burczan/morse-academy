import React from 'react';
import { Navbar } from './common/components/Navbar';
import { Routes } from './common/components/Router';
import { routes } from './views/routes';

const brandImage = {
  // eslint-disable-next-line max-len
  url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='28' width='112'%3E%3Ctext x='0' y='15' font-size='30px' fill='white'%3E.... --- -- . %3C/text%3E%3C/svg%3E",
  alt: 'home page',
  width: 112,
  height: 28,
};

export const App = () => {
  return (
    <>
      <Navbar items={routes} brandImage={brandImage} />
      <Routes routes={routes} />
    </>
  );
};
