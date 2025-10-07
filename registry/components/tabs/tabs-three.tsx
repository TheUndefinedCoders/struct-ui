'use client';
import { useState } from 'react';
import Tabs from './tabs';

interface ITabs {
  label: string;
  id: string;
}

export default function TabsTwo() {
  const [selectedTab, setSelectedTab] = useState<string>('tab1');

  const tabsConfig: ITabs[] = [
    { label: 'Tab 1', id: 'tab1' },
    { label: 'Tab 2', id: 'tab2' },
    { label: 'Tab 3', id: 'tab3' },
  ];

  const selectedIndex = tabsConfig.findIndex(section => section.id === selectedTab);
  const sliderWidth = 100 / tabsConfig.length;

  const handleTabChange = (sectionId: string) => {
    setSelectedTab(sectionId);
  };

  return (
    <Tabs
      tabsConfig={tabsConfig}
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
    />
  );
}