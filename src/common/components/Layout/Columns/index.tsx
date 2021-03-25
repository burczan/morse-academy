import React from 'react';

type ColumnsProps = {
  children: React.ReactNode;
};

export const Columns = ({ children }: ColumnsProps) => {
  return (
    <div className="columns">
      {children}
    </div>
  );
};
