import React from 'react';
import { NavbarItem } from './NavbarItem';
import { Route } from '../Router/model';
import { Image, ImageProps } from '../Image';
import s from './style.module.css';

type NavbarProps = {
  items: Route[];
  brandImage?: ImageProps['img'];
};

export const Navbar = ({ items, brandImage = undefined }: NavbarProps) => {
  return (
    <nav
      className={`navbar is-primary is spaced ${s.marginBottom}`}
      role="navigation"
      aria-label="main navigation"
    >
      {brandImage && (
        <div className="navbar-brand">
          <Image
            img={brandImage}
            href="/"
            linkClassname="navbar-item"
            style={{ boxShadow: 'unset' }}
          />
        </div>
      )}
      <div id="navbar-menu" className="navbar-menu">
        <div className="navbar-start">
          {items.map((item) => {
            if (item.hideInNavbarStart) {
              return null;
            }
            return (
              <NavbarItem key={item.pathname} pathname={item.pathname}>
                {item.name}
              </NavbarItem>
            );
          })}
        </div>
        <div className="navbar-end">
          {items.map((item) => {
            if (item.hideInNavbarEnd) {
              return null;
            }
            return (
              <NavbarItem key={item.pathname} pathname={item.pathname}>
                {item.name}
              </NavbarItem>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
