'use client';

import { cn } from '@/lib/utils';
import { Marquee } from './marquee';

type Skill = {
  name: string;
  slug: string;
  color: string;
};

const skills: Skill[] = [
  { name: 'TypeScript', slug: 'typescript', color: '#3178C6' },
  { name: 'React', slug: 'react', color: '#61DAFB' },
  { name: 'Next.js', slug: 'nextdotjs', color: '#000000' },
  { name: 'Tailwind', slug: 'tailwindcss', color: '#06B6D4' },
  { name: 'Framer', slug: 'framer', color: '#0055FF' },
  { name: 'Node.js', slug: 'nodedotjs', color: '#5FA04E' },
  { name: 'Vite', slug: 'vite', color: '#646CFF' },
  { name: 'Vue', slug: 'vuedotjs', color: '#4FC08D' },
  { name: 'Python', slug: 'python', color: '#3776AB' },
  { name: 'Docker', slug: 'docker', color: '#2496ED' },
  { name: 'GraphQL', slug: 'graphql', color: '#E10098' },
  { name: 'PostgreSQL', slug: 'postgresql', color: '#4169E1' },
  { name: 'Prisma', slug: 'prisma', color: '#2D3748' },
  { name: 'Figma', slug: 'figma', color: '#F24E1E' },
  { name: 'GitHub', slug: 'github', color: '#181717' },
  { name: 'Vercel', slug: 'vercel', color: '#000000' },
];

function SkillIcon({
  slug,
  color,
  name,
  size = 18,
}: {
  slug: string;
  color: string;
  name: string;
  size?: number;
}) {
  const hex = color.replace('#', '');
  const needsDarkInvert = ['000000', '181717', '2D3748'].includes(
    hex.toUpperCase()
  );
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/${hex}`}
      alt=""
      width={size}
      height={size}
      className={cn('shrink-0', needsDarkInvert && 'dark:brightness-0 dark:invert')}
      loading="lazy"
      aria-hidden
      title={name}
    />
  );
}

function SkillTag({ name, slug, color, className }: Skill & { className?: string }) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-sm font-medium text-zinc-800 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100',
        className
      )}
    >
      <span
        className="flex size-6 items-center justify-center rounded-full"
        style={{ backgroundColor: `${color}18` }}
      >
        <SkillIcon slug={slug} color={color} name={name} size={14} />
      </span>
      {name}
    </div>
  );
}

function SkillCard({ name, slug, color, className }: Skill & { className?: string }) {
  return (
    <div
      className={cn(
        'flex w-36 flex-col items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950',
        className
      )}
    >
      <span
        className="flex size-12 items-center justify-center rounded-xl"
        style={{ backgroundColor: `${color}18` }}
      >
        <SkillIcon slug={slug} color={color} name={name} size={26} />
      </span>
      <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
        {name}
      </span>
    </div>
  );
}

export default function MarqueeSkills() {
  const firstRow = skills.slice(0, 8);
  const secondRow = skills.slice(8);

  return (
    <div className="relative flex h-[320px] w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <Marquee pauseOnHover duration={28} fade>
        {firstRow.map((skill) => (
          <SkillTag key={skill.name} {...skill} />
        ))}
      </Marquee>
      <Marquee pauseOnHover duration={32} reverse fade>
        {secondRow.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>
    </div>
  );
}
