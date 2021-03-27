import React from 'react';
import { Tab } from '../model';

type TabContentProps = {
  children: Tab[];
  activeTabIndex: number;
};

export const TabContent = ({
  activeTabIndex,
  children,
}: TabContentProps) => {
  return (
    <div>
      {children.map((tab, i) => {
        if (i === activeTabIndex) {
          return (
            <div key={`active-tab-content-${activeTabIndex}`}>
              {tab.children}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};
