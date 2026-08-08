'use client';

import { cn } from '@/lib/utils';
import { Quote, Star } from 'lucide-react';

export type Review = {
  name: string;
  username: string;
  body: string;
  img: string;
  role?: string;
  rating?: number;
};

export const reviews: Review[] = [
  {
    name: 'Jack Morrison',
    username: '@jack',
    role: 'Product Designer',
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: 'linear-gradient(135deg, #fbbf24, #22c55e)',
    rating: 5,
  },
  {
    name: 'Jill Harper',
    username: '@jill',
    role: 'Frontend Engineer',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: 'linear-gradient(135deg, #a855f7, #ec4899)',
    rating: 5,
  },
  {
    name: 'John Blake',
    username: '@john',
    role: 'Founder',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    rating: 4,
  },
  {
    name: 'Jane Ortiz',
    username: '@jane',
    role: 'Design Lead',
    body: "This is hands down the best UI library I've used. Incredible.",
    img: 'linear-gradient(135deg, #f97316, #ef4444)',
    rating: 5,
  },
  {
    name: 'Jenny Cole',
    username: '@jenny',
    role: 'Full-stack Dev',
    body: 'Clean, fast, and beautiful. Exactly what I needed for my project.',
    img: 'linear-gradient(135deg, #14b8a6, #6366f1)',
    rating: 5,
  },
  {
    name: 'James Wu',
    username: '@james',
    role: 'CTO',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'linear-gradient(135deg, #84cc16, #eab308)',
    rating: 4,
  },
];

export function ReviewCard({
  name,
  username,
  body,
  img,
  role = 'Developer',
  rating = 5,
  className,
}: Review & { className?: string }) {
  return (
    <figure
      className={cn(
        'relative w-72 shrink-0 overflow-hidden rounded-2xl border bg-white p-5 shadow-sm',
        'border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900',
        'transition-shadow hover:shadow-md',
        className
      )}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                'h-3.5 w-3.5',
                i < rating
                  ? 'fill-amber-400 text-amber-400'
                  : 'fill-zinc-200 text-zinc-200 dark:fill-zinc-700 dark:text-zinc-700'
              )}
            />
          ))}
        </div>
        <Quote className="h-5 w-5 text-zinc-300 dark:text-zinc-600" />
      </div>

      <blockquote className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
        &ldquo;{body}&rdquo;
      </blockquote>

      <div className="mt-4 flex items-center gap-3 border-t border-zinc-100 pt-4 dark:border-zinc-800">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-semibold text-white shadow-inner"
          style={{ backgroundImage: img }}
          aria-hidden
        >
          {name.charAt(0)}
        </div>
        <div className="min-w-0">
          <figcaption className="truncate text-sm font-semibold text-zinc-900 dark:text-white">
            {name}
          </figcaption>
          <p className="truncate text-xs text-zinc-500 dark:text-zinc-400">
            {role}
            <span className="mx-1 text-zinc-300 dark:text-zinc-600">·</span>
            {username}
          </p>
        </div>
      </div>
    </figure>
  );
}
