'use client';

import { Marquee } from './marquee';

const logos = [
  'React',
  'Next.js',
  'Vercel',
  'Tailwind',
  'TypeScript',
  'Framer',
  'Radix',
  'shadcn/ui',
];

export default function MarqueeLogos() {
  return (
    <div className="relative flex h-[180px] w-full items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <Marquee pauseOnHover duration={25}>
        {logos.map((logo) => (
          <div
            key={logo}
            className="flex h-16 w-36 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-sm font-semibold text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
          >
            {logo}
          </div>
        ))}
      </Marquee>
    </div>
  );
}
