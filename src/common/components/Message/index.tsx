import React from 'react';
import cx from 'classnames';
import { Color } from '../types';

type MessageProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  color?: Color;
};

export const Message = ({ children, header, color }: MessageProps) => {
  return (
    <article className={cx('message', color)}>
      {header && (
        <div className="message-header">
          {header}
        </div>
      )}
      <div className="message-body">
        {children}
      </div>
    </article>
  );
};
