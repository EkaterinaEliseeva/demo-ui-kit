import React, { useState } from 'react';

import classNames from '@/utils/classNames';
import Tab from '@/components/tabs/components/Tab';
import { TTabDataElement } from '@/components/tabs/types/TTabDataElement';

export type TTabsProps = {
  tabsData: TTabDataElement[];
};

export default function Tabs({ tabsData }: TTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex gap-6">
      {tabsData.map((tab, index) => (
        <Tab
          id={index}
          action={setActiveTab}
          key={index}
          className={classNames(
            activeTab === index ? 'text-gray-ui/100 after:bg-gray-ui/100 after:w-full' : 'text-gray-ui/50 after:bg-transparent'
          )}
        >
          {tab.title}
        </Tab>
      ))}
    </div>
  );
}
