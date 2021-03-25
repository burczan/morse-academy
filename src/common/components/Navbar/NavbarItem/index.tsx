import React from 'react';
import { goTo } from '../../../utils/helpers';

type NavbarItemProps = {
  pathname: string;
  children: React.ReactNode;
};

export const NavbarItem = ({ pathname, children }: NavbarItemProps) => {
  const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    goTo(pathname);
  };

  return (
    <a onClick={onClick} href={pathname} className="navbar-item is-size-4">
      {children}
    </a>
  );
};
