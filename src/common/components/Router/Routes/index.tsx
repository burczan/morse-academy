import React from 'react';
import { Route } from '../Route';
import { Route as RouteType } from '../model';

type RoutesProps = {
  routes: RouteType[];
};

export const Routes = ({ routes }: RoutesProps) => {
  return (
    <>
      {routes.map((route) => {
        return (
          <Route key={route.pathname} path={route.pathname} render={route.render} />
        );
      })}
    </>
  );
};
