import React, { useState } from 'react';
import { TabContent } from './TabContent';
import { TabNav, TabNavConfig } from './TabNav';
import { Tab } from './model';

type TabsProps = TabNavConfig & {
  children: Tab[];
};

export const Tabs = ({
  children,
  alignment,
  size,
  fullwidth = false,
}: TabsProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
      <TabNav
        activeTabIndex={activeTabIndex}
        onClick={(i) => setActiveTabIndex(i)}
        alignment={alignment}
        size={size}
        fullwidth={fullwidth}
      >
        {children}
      </TabNav>
      <TabContent activeTabIndex={activeTabIndex}>
        {children}
      </TabContent>
    </div>
  );
};
