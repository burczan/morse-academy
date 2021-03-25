import React from 'react';
import { Home } from './Home';
import { PageNotFound } from '../common/components/PageNotFound';
import { Route } from '../common/components/Router/model';
import { Translator } from './Translator';
import { MorseCode } from './MorseCode';

type Pathname = {
  pathname: '/'
  | '/translator'
  | '/morse_code'
  | '/404';
};

export const routes: Route[] & Pathname[] = [
  {
    pathname: '/morse_code',
    name: 'Morse code',
    render: () => <MorseCode />,
    hideInNavbarStart: false,
    hideInNavbarEnd: true,
  },
  {
    pathname: '/translator',
    name: 'Translator',
    render: () => <Translator />,
    hideInNavbarStart: false,
    hideInNavbarEnd: true,
  },
  {
    pathname: '/404',
    name: '404',
    render: () => <PageNotFound />,
    hideInNavbarStart: true,
    hideInNavbarEnd: true,
  },
  {
    pathname: '/',
    name: 'Home',
    render: () => <Home />,
    hideInNavbarStart: true,
    hideInNavbarEnd: true,
  },
];
