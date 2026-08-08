'use client';

import { cn } from '@/lib/utils';
import type { BlockSkeletonType } from '@/configs/blocksOverview';

function Bone({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'rounded-md bg-zinc-200/90 dark:bg-zinc-700/80',
        className
      )}
    />
  );
}

function PreviewShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-md bg-zinc-50 dark:bg-zinc-900/80">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]" />
      <div className="relative z-[1] flex h-full w-full items-center justify-center p-3 sm:p-4">
        {children}
      </div>
    </div>
  );
}

const skeletons: Record<BlockSkeletonType, React.ReactNode> = {
  headers: (
    <div className="w-[90%] space-y-2 rounded-lg border border-zinc-200 bg-white/70 p-2 dark:border-zinc-700 dark:bg-zinc-800/70">
      <div className="flex items-center justify-between gap-2">
        <Bone className="h-4 w-10 rounded-md" />
        <div className="hidden items-center gap-1.5 sm:flex">
          <Bone className="h-2.5 w-8" />
          <Bone className="h-2.5 w-8" />
          <Bone className="h-2.5 w-8" />
        </div>
        <Bone className="h-6 w-14 rounded-full" />
      </div>
    </div>
  ),
  hero: (
    <div className="flex w-[90%] flex-col items-center gap-2 text-center">
      <Bone className="h-2.5 w-16 rounded-full" />
      <Bone className="h-4 w-3/4" />
      <Bone className="h-3 w-1/2" />
      <div className="mt-1 flex gap-2">
        <Bone className="h-7 w-16 rounded-lg" />
        <Bone className="h-7 w-16 rounded-lg" />
      </div>
      <Bone className="mt-1 h-10 w-full rounded-lg opacity-70" />
    </div>
  ),
  blog: (
    <div className="flex w-full justify-center gap-2 px-1">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className={cn(
            'w-[28%] overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800',
            i === 3 && 'hidden sm:block'
          )}
        >
          <Bone className="h-9 w-full rounded-none" />
          <div className="space-y-1 p-1.5">
            <Bone className="h-1.5 w-4/5" />
            <Bone className="h-1.5 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  ),
  pricing: (
    <div className="flex w-full items-end justify-center gap-2 px-1">
      <div className="w-[28%] space-y-1.5 rounded-lg border border-zinc-200 bg-white p-1.5 dark:border-zinc-700 dark:bg-zinc-800">
        <Bone className="h-2 w-1/2" />
        <Bone className="h-4 w-2/3" />
        <Bone className="h-1.5 w-full" />
        <Bone className="h-1.5 w-4/5" />
        <Bone className="mt-1 h-5 w-full rounded-md" />
      </div>
      <div className="w-[32%] space-y-1.5 rounded-lg border border-zinc-300 bg-white p-1.5 shadow-sm dark:border-zinc-500 dark:bg-zinc-800">
        <Bone className="h-2 w-1/2 bg-zinc-300 dark:bg-zinc-500" />
        <Bone className="h-5 w-2/3 bg-zinc-300 dark:bg-zinc-500" />
        <Bone className="h-1.5 w-full" />
        <Bone className="h-1.5 w-4/5" />
        <Bone className="mt-1 h-6 w-full rounded-md bg-zinc-300 dark:bg-zinc-500" />
      </div>
      <div className="hidden w-[28%] space-y-1.5 rounded-lg border border-zinc-200 bg-white p-1.5 sm:block dark:border-zinc-700 dark:bg-zinc-800">
        <Bone className="h-2 w-1/2" />
        <Bone className="h-4 w-2/3" />
        <Bone className="h-1.5 w-full" />
        <Bone className="h-1.5 w-4/5" />
        <Bone className="mt-1 h-5 w-full rounded-md" />
      </div>
    </div>
  ),
  steps: (
    <div className="flex w-[90%] items-center justify-between gap-1">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex flex-1 flex-col items-center gap-1">
          <div className="flex w-full items-center">
            {i > 1 && <Bone className="h-0.5 flex-1 rounded-none" />}
            <Bone
              className={cn(
                'h-6 w-6 shrink-0 rounded-full',
                i === 2 && 'bg-zinc-300 dark:bg-zinc-500'
              )}
            />
            {i < 4 && <Bone className="h-0.5 flex-1 rounded-none" />}
          </div>
          <Bone className="h-1.5 w-8" />
        </div>
      ))}
    </div>
  ),
  footers: (
    <div className="w-[90%] space-y-2 rounded-lg border border-zinc-200 bg-white/70 p-2 dark:border-zinc-700 dark:bg-zinc-800/70">
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-1 space-y-1">
          <Bone className="h-3 w-10" />
          <Bone className="h-1.5 w-full" />
          <Bone className="h-1.5 w-3/4" />
        </div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-1">
            <Bone className="h-2 w-8" />
            <Bone className="h-1.5 w-full" />
            <Bone className="h-1.5 w-4/5" />
            <Bone className="h-1.5 w-2/3" />
          </div>
        ))}
      </div>
      <Bone className="h-px w-full" />
      <Bone className="mx-auto h-1.5 w-1/3" />
    </div>
  ),
  'product-cards': (
    <div className="flex w-full justify-center gap-2 px-1">
      {[1, 2].map((i) => (
        <div
          key={i}
          className="w-[40%] overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800"
        >
          <Bone className="h-12 w-full rounded-none" />
          <div className="space-y-1 p-1.5">
            <Bone className="h-1.5 w-3/4" />
            <Bone className="h-1.5 w-1/2" />
            <Bone className="mt-1 h-5 w-full rounded-md" />
          </div>
        </div>
      ))}
    </div>
  ),
  'team-section': (
    <div className="flex w-full justify-center gap-2 px-1">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className={cn(
            'flex w-[28%] flex-col items-center gap-1.5 rounded-lg border border-zinc-200 bg-white p-2 dark:border-zinc-700 dark:bg-zinc-800',
            i === 3 && 'hidden sm:flex'
          )}
        >
          <Bone className="h-8 w-8 rounded-full" />
          <Bone className="h-1.5 w-3/4" />
          <Bone className="h-1.5 w-1/2" />
        </div>
      ))}
    </div>
  ),
};

export function BlockSkeletonPreview({
  type,
  className,
}: {
  type: BlockSkeletonType;
  className?: string;
}) {
  return (
    <div className={cn('h-full w-full', className)}>
      <PreviewShell>{skeletons[type]}</PreviewShell>
    </div>
  );
}

export default BlockSkeletonPreview;
