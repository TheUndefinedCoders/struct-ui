'use client';

import { Marquee } from './marquee';
import { ReviewCard, reviews } from './marquee-review-card';

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export default function MarqueeDefault() {
  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <Marquee pauseOnHover duration={20}>
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover duration={20}>
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
