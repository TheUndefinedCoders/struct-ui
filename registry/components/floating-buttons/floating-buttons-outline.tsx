'use client';

import FloatingButtons from './floating-buttons';
import { Settings, Bell, User, Search } from 'lucide-react';

export default function FloatingButtonsOutline() {
  const buttons = [
    {
      id: 'settings',
      icon: <Settings className="h-5 w-5" />,
      label: 'Settings',
      tooltip: 'Open Settings',
      onClick: () => alert('Settings clicked!'),
      color: '#6366f1',
    },
    {
      id: 'notifications',
      icon: <Bell className="h-5 w-5" />,
      label: 'Notifications',
      tooltip: 'View Notifications',
      onClick: () => alert('Notifications clicked!'),
      color: '#f59e0b',
    },
    {
      id: 'profile',
      icon: <User className="h-5 w-5" />,
      label: 'Profile',
      tooltip: 'View Profile',
      onClick: () => alert('Profile clicked!'),
      color: '#22c55e',
    },
    {
      id: 'search',
      icon: <Search className="h-5 w-5" />,
      label: 'Search',
      tooltip: 'Search',
      onClick: () => alert('Search clicked!'),
      color: '#ec4899',
    },
  ];

  return (
    <div className="relative h-[400px] w-full bg-white dark:bg-slate-950 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-slate-500 dark:text-slate-400">
          Outline variant with hover fill →
        </p>
      </div>
      <FloatingButtons
        buttons={buttons}
        position="right"
        verticalPosition={50}
        expandOnHover
        expandDirection="vertical"
        variant="outline"
        shadow="none"
        borderRadius="lg"
        animation="scale"
        gap={2}
        containerMode
      />
    </div>
  );
}
