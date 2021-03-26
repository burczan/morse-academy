import React from 'react';
import { useLocationChange } from '../../../hooks';
import { routes } from '../../../../views/routes';
import { Route as RouteType } from '../model';
import { goTo } from '../../../helpers/navigation';

const pathnames = routes.map((route) => route.pathname);

type RouteProps = {
  path: RouteType['pathname'];
  render: RouteType['render'];
};

export const Route = ({ path, render }: RouteProps) => {
  const currentPath = useLocationChange(window.location.pathname);

  if (currentPath === path) {
    return (
      <>
        {render()}
      </>
    );
  }

  if (!pathnames.includes(window.location.pathname)) {
    goTo('/404');
  }

  return null;
};
