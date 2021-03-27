/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import cx from 'classnames';
import { Tab } from '../model';

export type TabNavConfig = {
  alignment?: 'is-centered' | 'is-right';
  size?: 'is-small' | 'is-medium' | 'is-large';
  fullwidth?: boolean;
};

type TabNavProps = TabNavConfig & {
  children: Tab[];
  activeTabIndex: number;
  onClick: (i: number) => void;
};

export const TabNav = ({
  children,
  activeTabIndex,
  onClick,
  alignment,
  size,
  fullwidth = false,
}: TabNavProps) => {
  return (
    <div className={cx('tabs is-boxed', alignment, size, { 'is-fullwidth': fullwidth })}>
      <ul>
        {children.map(({ label }, i) => {
          return (
            <li
              key={`tab-${label}`}
              className={cx({ 'is-active': i === activeTabIndex })}
            >
              <a onClick={() => onClick(i)}>
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
