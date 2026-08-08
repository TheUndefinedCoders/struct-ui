'use client';

import { Marquee } from './marquee';

const tags = ['React', 'Next.js', 'Tailwind', 'Framer', 'TypeScript', 'Radix'];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
      {children}
    </div>
  );
}

export default function MarqueeDirections() {
  return (
    <div className="grid h-[420px] w-full grid-cols-1 gap-4 overflow-hidden rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 sm:grid-cols-2">
      <div className="space-y-1">
        <p className="px-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
          Left (default)
        </p>
        <Marquee direction="left" duration={18} fade>
          {tags.map((t) => (
            <Tag key={`l-${t}`}>{t}</Tag>
          ))}
        </Marquee>
      </div>
      <div className="space-y-1">
        <p className="px-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
          Right
        </p>
        <Marquee direction="right" duration={18} fade>
          {tags.map((t) => (
            <Tag key={`r-${t}`}>{t}</Tag>
          ))}
        </Marquee>
      </div>
      <div className="space-y-1">
        <p className="px-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
          Up
        </p>
        <Marquee direction="up" duration={12} className="h-36" fade>
          {tags.map((t) => (
            <Tag key={`u-${t}`}>{t}</Tag>
          ))}
        </Marquee>
      </div>
      <div className="space-y-1">
        <p className="px-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
          Down
        </p>
        <Marquee direction="down" duration={12} className="h-36" fade>
          {tags.map((t) => (
            <Tag key={`d-${t}`}>{t}</Tag>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
