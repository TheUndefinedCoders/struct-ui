'use client';

import Dock from './dock';
import {
  LayoutDashboard,
  FileText,
  Users,
  BarChart3,
  Settings,
  HelpCircle,
} from 'lucide-react';

export default function DockNavigation() {
  const items = [
    {
      id: 'dashboard',
      icon: <LayoutDashboard className="h-full w-full" />,
      label: 'Dashboard',
      onClick: () => {},
    },
    {
      id: 'docs',
      icon: <FileText className="h-full w-full" />,
      label: 'Documents',
      onClick: () => {},
    },
    {
      id: 'team',
      icon: <Users className="h-full w-full" />,
      label: 'Team',
      onClick: () => {},
      dividerAfter: true,
    },
    {
      id: 'analytics',
      icon: <BarChart3 className="h-full w-full" />,
      label: 'Analytics',
      onClick: () => {},
    },
    {
      id: 'settings',
      icon: <Settings className="h-full w-full" />,
      label: 'Settings',
      onClick: () => {},
    },
    {
      id: 'help',
      icon: <HelpCircle className="h-full w-full" />,
      label: 'Help',
      onClick: () => {},
    },
  ];

  return (
    <div className="relative flex h-[220px] w-full items-end justify-center bg-slate-100 pb-10 dark:bg-zinc-950 rounded-xl overflow-hidden">
      <Dock items={items} variant="glass" />
    </div>
  );
}
