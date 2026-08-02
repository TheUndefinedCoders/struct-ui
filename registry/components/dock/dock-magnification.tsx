'use client';

import Dock from './dock';
import { Home, Search, Settings, Heart, Star, Folder } from 'lucide-react';

export default function DockMagnification() {
  const items = [
    { id: 'home', icon: <Home className="h-full w-full" />, label: 'Home' },
    { id: 'search', icon: <Search className="h-full w-full" />, label: 'Search' },
    { id: 'folder', icon: <Folder className="h-full w-full" />, label: 'Files', dividerAfter: true },
    { id: 'heart', icon: <Heart className="h-full w-full" />, label: 'Favorites' },
    { id: 'star', icon: <Star className="h-full w-full" />, label: 'Starred' },
    { id: 'settings', icon: <Settings className="h-full w-full" />, label: 'Settings' },
  ];

  return (
    <div className="relative flex h-[240px] w-full flex-col items-center justify-end gap-4 bg-slate-100 pb-10 dark:bg-zinc-950 rounded-xl overflow-hidden">
      <p className="absolute top-6 text-sm text-slate-500 dark:text-zinc-400">
        Hover icons — magnification set to 1.6x
      </p>
      <Dock items={items} magnification={1.6} distance={120} />
    </div>
  );
}
