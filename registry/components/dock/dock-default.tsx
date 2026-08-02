'use client';

import Dock from './dock';
import { Home, Pencil, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function DockDefault() {
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
      id: 'twitter',
      icon: <Twitter className="h-full w-full" />,
      label: 'X',
      href: 'https://x.com',
    },
    {
      id: 'email',
      icon: <Mail className="h-full w-full" />,
      label: 'Email',
      href: 'mailto:hello@example.com',
    },
  ];

  return (
    <div className="relative flex h-[220px] w-full items-end justify-center bg-slate-100 pb-10 dark:bg-zinc-950 rounded-xl overflow-hidden">
      <Dock items={items} />
    </div>
  );
}
