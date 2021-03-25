import React from 'react';
import cx from 'classnames';
import s from './style.module.css';

type TileProps = {
  title: string;
  subtitle: string;
};

export const Tile = ({
  title,
  subtitle,
}: TileProps) => {
  return (
    <div className="tile is-parent">
      <article
        className={cx('tile is-child is-primary has-text-centered', s.padding, s.box)}
        style={{ padding: '30px' }}
      >
        <pre
          className={cx('title is-1 has-text-white is-spaced has-text-centered', s.border)}
          style={{ backgroundColor: 'transparent' }}
        >
          {title}
        </pre>
        <p className="subtitle is-3 has-text-weight-bold has-text-white has-text-centered">
          {subtitle}
        </p>
      </article>
    </div>
  );
};
