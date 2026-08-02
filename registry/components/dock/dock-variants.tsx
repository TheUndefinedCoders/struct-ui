'use client';

import Dock from './dock';
import { Home, Pencil, Github, Mail } from 'lucide-react';

const items = [
  { id: 'home', icon: <Home className="h-full w-full" />, label: 'Home' },
  { id: 'blog', icon: <Pencil className="h-full w-full" />, label: 'Blog', dividerAfter: true },
  { id: 'github', icon: <Github className="h-full w-full" />, label: 'GitHub' },
  { id: 'email', icon: <Mail className="h-full w-full" />, label: 'Email' },
];

export default function DockVariants() {
  return (
    <div className="relative flex h-[360px] w-full flex-col items-center justify-center gap-8 bg-slate-100 px-4 py-8 dark:bg-zinc-950 rounded-xl overflow-hidden">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-zinc-400">
          Default
        </span>
        <Dock items={items} variant="default" size="sm" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-zinc-400">
          Glass
        </span>
        <Dock items={items} variant="glass" size="sm" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-zinc-400">
          Outline
        </span>
        <Dock items={items} variant="outline" size="sm" />
      </div>
    </div>
  );
}
