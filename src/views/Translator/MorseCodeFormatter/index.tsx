import React from 'react';
import cx from 'classnames';

type MorseCodeFormatterProps = {
  children: string;
};

export const MorseCodeFormatter = ({ children }: MorseCodeFormatterProps) => {
  return (
    <>
      <pre
        className={cx('title is-1 has-text-dark is-spaced')}
        style={{ backgroundColor: 'transparent', whiteSpace: 'break-spaces' }}
      >
        {children}
      </pre>
    </>
  );
};
