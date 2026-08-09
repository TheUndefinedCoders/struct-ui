'use client';

import { Marquee } from './marquee';
import { ReviewCard, reviews } from './marquee-review-card';

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(0, reviews.length / 2);
const fourthRow = reviews.slice(reviews.length / 2);

export default function Marquee3D() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            'translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        <Marquee pauseOnHover vertical duration={20}>
          {firstRow.map((review) => (
            <ReviewCard key={`a-${review.username}`} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical duration={20}>
          {secondRow.map((review) => (
            <ReviewCard key={`b-${review.username}`} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical duration={20}>
          {thirdRow.map((review) => (
            <ReviewCard key={`c-${review.username}`} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical duration={20}>
          {fourthRow.map((review) => (
            <ReviewCard key={`d-${review.username}`} {...review} />
          ))}
        </Marquee>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white dark:from-zinc-950" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white dark:from-zinc-950" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-zinc-950" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-zinc-950" />
    </div>
  );
}
