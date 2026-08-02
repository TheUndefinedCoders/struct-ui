'use client';

import Dock from './dock';
import { Home, Search, Settings, Bell } from 'lucide-react';

const items = [
  { id: 'home', icon: <Home className="h-full w-full" />, label: 'Home' },
  { id: 'search', icon: <Search className="h-full w-full" />, label: 'Search' },
  { id: 'bell', icon: <Bell className="h-full w-full" />, label: 'Notifications' },
  { id: 'settings', icon: <Settings className="h-full w-full" />, label: 'Settings' },
];

export default function DockSizes() {
  return (
    <div className="relative flex h-[360px] w-full flex-col items-center justify-center gap-8 bg-slate-100 px-4 py-8 dark:bg-zinc-950 rounded-xl overflow-hidden">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-zinc-400">
          Small
        </span>
        <Dock items={items} size="sm" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-zinc-400">
          Medium
        </span>
        <Dock items={items} size="md" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-zinc-400">
          Large
        </span>
        <Dock items={items} size="lg" />
      </div>
    </div>
  );
}
