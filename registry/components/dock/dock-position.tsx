'use client';

import Dock from './dock';
import { Home, Pencil, Github, Mail } from 'lucide-react';

const items = [
  { id: 'home', icon: <Home className="h-full w-full" />, label: 'Home' },
  { id: 'blog', icon: <Pencil className="h-full w-full" />, label: 'Blog', dividerAfter: true },
  { id: 'github', icon: <Github className="h-full w-full" />, label: 'GitHub' },
  { id: 'email', icon: <Mail className="h-full w-full" />, label: 'Email' },
];

export default function DockPosition() {
  return (
    <div className="relative flex h-[280px] w-full flex-col justify-between bg-slate-100 dark:bg-zinc-950 rounded-xl overflow-hidden">
      <div className="flex flex-col items-center gap-2 pt-6">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-zinc-400">
          Top (tooltip below)
        </span>
        <Dock items={items} position="top" tooltipSide="bottom" size="sm" />
      </div>
      <div className="flex flex-col items-center gap-2 pb-6">
        <Dock items={items} position="bottom" tooltipSide="top" size="sm" />
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-zinc-400">
          Bottom (tooltip above)
        </span>
      </div>
    </div>
  );
}
