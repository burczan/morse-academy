import React from 'react';
import cx from 'classnames';
import { ColumnGridSize, ColumnSize } from '../../../types';

type ColumnProps = {
  children: React.ReactNode;
  size?: ColumnSize | ColumnGridSize;
};

export const Column = ({ children, size }: ColumnProps) => {
  return (
    <div className={cx('column', size)}>
      {children}
    </div>
  );
};
