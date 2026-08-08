'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export type MarqueeDirection = 'left' | 'right' | 'up' | 'down';

export interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  /** Scroll direction. Overrides `vertical` / `reverse` when set. */
  direction?: MarqueeDirection;
  /** Vertical scroll (ignored when `direction` is set) */
  vertical?: boolean;
  /** Reverse animation direction (ignored when `direction` is set) */
  reverse?: boolean;
  /** Pause animation while hovered */
  pauseOnHover?: boolean;
  /** How many times to repeat children for a seamless loop */
  repeat?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Gap between items (CSS length) */
  gap?: string;
  /** Fade edges with a mask */
  fade?: boolean;
}

function resolveOrientation(
  direction: MarqueeDirection | undefined,
  vertical: boolean,
  reverse: boolean
) {
  if (direction) {
    return {
      isVertical: direction === 'up' || direction === 'down',
      isReverse: direction === 'right' || direction === 'down',
    };
  }
  return { isVertical: vertical, isReverse: reverse };
}

function Marquee({
  children,
  className,
  direction,
  vertical = false,
  reverse = false,
  pauseOnHover = true,
  repeat = 4,
  duration = 40,
  gap = '1rem',
  fade = true,
}: MarqueeProps) {
  const { isVertical, isReverse } = resolveOrientation(
    direction,
    vertical,
    reverse
  );

  const maskImage = fade
    ? isVertical
      ? 'linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)'
      : 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)'
    : undefined;

  return (
    <div
      className={cn(
        'group flex overflow-hidden p-2',
        isVertical ? 'flex-col' : 'flex-row',
        className
      )}
      style={
        {
          '--duration': `${duration}s`,
          '--gap': gap,
          gap: 'var(--gap)',
          maskImage,
          WebkitMaskImage: maskImage,
        } as React.CSSProperties
      }
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            'flex shrink-0 justify-around',
            isVertical
              ? 'animate-marquee-vertical flex-col'
              : 'animate-marquee flex-row',
            isReverse && '[animation-direction:reverse]',
            pauseOnHover && 'group-hover:[animation-play-state:paused]'
          )}
          style={{ gap: 'var(--gap)' }}
          aria-hidden={i > 0 || undefined}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

export { Marquee };

// @docs-preview-start
export default function MarqueeDocsPreview() {
  const items = ['React', 'Next.js', 'Tailwind', 'TypeScript', 'Framer'];
  return (
    <div className="relative flex h-[160px] w-full items-center justify-center overflow-hidden">
      <Marquee pauseOnHover duration={20}>
        {items.map((item) => (
          <div
            key={item}
            className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
          >
            {item}
          </div>
        ))}
      </Marquee>
    </div>
  );
}
// @docs-preview-end
