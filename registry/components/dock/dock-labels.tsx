'use client';

import Dock from './dock';
import { Home, Pencil, Github, Linkedin, Mail } from 'lucide-react';

const items = [
  {
    id: 'home',
    icon: <Home className="h-full w-full" />,
    label: 'Home',
    href: '#',
  },
  {
    id: 'blog',
    icon: <Pencil className="h-full w-full" />,
    label: 'Blog',
    href: '#',
    dividerAfter: true,
  },
  {
    id: 'github',
    icon: <Github className="h-full w-full" />,
    label: 'GitHub',
    href: 'https://github.com',
  },
  {
    id: 'linkedin',
    icon: <Linkedin className="h-full w-full" />,
    label: 'LinkedIn',
    href: 'https://linkedin.com',
  },
  {
    id: 'email',
    icon: <Mail className="h-full w-full" />,
    label: 'Email',
    href: 'mailto:hello@example.com',
  },
];

export default function DockLabels() {
  return (
    <div className="relative flex h-[320px] w-full flex-col items-center justify-center gap-8 rounded-xl bg-slate-100 px-4 py-8 dark:bg-zinc-950 overflow-hidden">
      <div className="flex w-full flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-zinc-400">
          Always below — labelMode=&quot;below&quot;
        </span>
        <Dock items={items} labelMode="below" size="sm" />
      </div>
      <div className="flex w-full flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-zinc-400">
          Mobile only — labelMode=&quot;responsive&quot; (resize to see)
        </span>
        <Dock items={items} labelMode="responsive" size="sm" />
      </div>
    </div>
  );
}
