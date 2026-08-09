'use client';

import { cn } from '@/lib/utils';
import type { ComponentSkeletonType } from '@/configs/componentsOverview';

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
      <div className="relative z-[1] flex h-full w-full items-center justify-center p-4">
        {children}
      </div>
    </div>
  );
}

const skeletons: Record<ComponentSkeletonType, React.ReactNode> = {
  buttons: (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Bone className="h-8 w-20 rounded-full" />
      <Bone className="h-8 w-24 rounded-lg" />
      <Bone className="h-8 w-16 rounded-md" />
    </div>
  ),
  tooltip: (
    <div className="flex flex-col items-center gap-2">
      <div className="relative rounded-md bg-zinc-900 px-2.5 py-1 dark:bg-white">
        <Bone className="h-2 w-10 bg-zinc-100 dark:bg-zinc-800" />
        <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-[5px] border-t-[5px] border-x-transparent border-t-zinc-900 dark:border-t-white" />
      </div>
      <Bone className="mt-1 h-8 w-8 rounded-full" />
    </div>
  ),
  'magnetic-button': (
    <div className="relative">
      <div className="absolute -inset-3 rounded-full border border-dashed border-zinc-300 dark:border-zinc-600" />
      <Bone className="relative h-10 w-28 rounded-full" />
    </div>
  ),
  'particle-button': (
    <div className="relative flex items-center justify-center">
      <Bone className="h-9 w-24 rounded-lg" />
      {[
        '-top-2 left-2',
        '-top-1 right-3',
        'top-1 -left-2',
        'bottom-0 -right-1',
        '-bottom-2 left-6',
      ].map((pos) => (
        <span
          key={pos}
          className={cn(
            'absolute h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600',
            pos
          )}
        />
      ))}
    </div>
  ),
  'text-typing': (
    <div className="flex w-4/5 flex-col gap-2">
      <Bone className="h-3 w-full" />
      <Bone className="h-3 w-3/4" />
      <div className="flex items-center gap-1">
        <Bone className="h-3 w-1/2" />
        <span className="h-4 w-0.5 animate-pulse bg-zinc-400 dark:bg-zinc-500" />
      </div>
    </div>
  ),
  terminal: (
    <div className="w-4/5 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-900 shadow-sm dark:border-zinc-700">
      <div className="flex items-center gap-1.5 border-b border-zinc-700 px-2 py-1.5">
        <span className="h-2 w-2 rounded-full bg-red-400/80" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
        <span className="h-2 w-2 rounded-full bg-green-400/80" />
      </div>
      <div className="space-y-1.5 p-2.5">
        <Bone className="h-2 w-3/4 bg-zinc-700" />
        <Bone className="h-2 w-1/2 bg-zinc-700" />
        <Bone className="h-2 w-2/3 bg-zinc-700" />
      </div>
    </div>
  ),
  'clip-path': (
    <div className="relative h-16 w-24">
      <div className="absolute inset-0 bg-zinc-300 dark:bg-zinc-600 [clip-path:polygon(0_0,100%_0,100%_70%,50%_100%,0_70%)]" />
      <div className="absolute inset-1 bg-zinc-200 dark:bg-zinc-700 [clip-path:polygon(0_0,100%_0,100%_70%,50%_100%,0_70%)]" />
    </div>
  ),
  'animated-beam': (
    <div className="flex w-4/5 items-center justify-between gap-3">
      <Bone className="h-9 w-9 rounded-xl" />
      <div className="relative h-0.5 flex-1 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
        <div className="absolute inset-y-0 left-1/4 w-1/3 rounded-full bg-zinc-400 dark:bg-zinc-400" />
      </div>
      <Bone className="h-9 w-9 rounded-xl" />
    </div>
  ),
  'orbiting-circles': (
    <div className="relative flex h-20 w-20 items-center justify-center">
      <div className="absolute h-16 w-16 rounded-full border border-dashed border-zinc-300 dark:border-zinc-600" />
      <div className="absolute h-10 w-10 rounded-full border border-zinc-300 dark:border-zinc-600" />
      <Bone className="h-5 w-5 rounded-full" />
      <Bone className="absolute -top-0.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full" />
      <Bone className="absolute bottom-1 right-1 h-3 w-3 rounded-full" />
      <Bone className="absolute bottom-2 left-1 h-3 w-3 rounded-full" />
    </div>
  ),
  'morph-blob': (
    <div className="h-16 w-20 animate-pulse rounded-[40%_60%_60%_40%/50%_40%_60%_50%] bg-gradient-to-br from-zinc-300 to-zinc-400 dark:from-zinc-600 dark:to-zinc-500" />
  ),
  'flip-card': (
    <div className="relative h-16 w-24">
      <Bone className="absolute inset-0 rotate-6 rounded-lg opacity-40" />
      <Bone className="absolute inset-0 -rotate-3 rounded-lg opacity-70" />
      <div className="absolute inset-0 flex flex-col justify-end gap-1 rounded-lg border border-zinc-200 bg-zinc-100 p-2 dark:border-zinc-700 dark:bg-zinc-800">
        <Bone className="h-2 w-3/4" />
        <Bone className="h-2 w-1/2" />
      </div>
    </div>
  ),
  'product-cards': (
    <div className="flex w-full justify-center gap-2">
      {[1, 2].map((i) => (
        <div
          key={i}
          className="w-[42%] overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800"
        >
          <Bone className="h-10 w-full rounded-none" />
          <div className="space-y-1 p-1.5">
            <Bone className="h-1.5 w-3/4" />
            <Bone className="h-1.5 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  ),
  'card-hover': (
    <div className="w-2/5 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-md dark:border-zinc-700 dark:bg-zinc-800">
      <Bone className="h-12 w-full rounded-none" />
      <div className="space-y-1.5 p-2">
        <Bone className="h-2 w-4/5" />
        <Bone className="h-2 w-1/2" />
      </div>
    </div>
  ),
  'image-hover': (
    <div className="relative h-16 w-28 overflow-hidden rounded-lg">
      <Bone className="absolute inset-0 rounded-none" />
      <div className="absolute inset-x-0 bottom-0 space-y-1 bg-gradient-to-t from-black/40 to-transparent p-2">
        <Bone className="h-1.5 w-2/3 bg-white/70" />
        <Bone className="h-1.5 w-1/3 bg-white/50" />
      </div>
    </div>
  ),
  tabs: (
    <div className="w-4/5 space-y-3">
      <div className="flex gap-2 border-b border-zinc-200 pb-1 dark:border-zinc-700">
        <Bone className="h-5 w-14 rounded-md bg-zinc-300 dark:bg-zinc-500" />
        <Bone className="h-5 w-14" />
        <Bone className="h-5 w-14" />
      </div>
      <div className="space-y-1.5">
        <Bone className="h-2 w-full" />
        <Bone className="h-2 w-5/6" />
        <Bone className="h-2 w-2/3" />
      </div>
    </div>
  ),
  chip: (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Bone className="h-6 w-16 rounded-full" />
      <Bone className="h-6 w-20 rounded-full" />
      <Bone className="h-6 w-14 rounded-md" />
    </div>
  ),
  footers: (
    <div className="w-4/5 space-y-2 rounded-lg border border-zinc-200 p-2 dark:border-zinc-700">
      <div className="flex justify-between gap-2">
        <Bone className="h-3 w-12" />
        <div className="flex gap-1.5">
          <Bone className="h-3 w-8" />
          <Bone className="h-3 w-8" />
          <Bone className="h-3 w-8" />
        </div>
      </div>
      <Bone className="h-px w-full" />
      <Bone className="mx-auto h-2 w-1/3" />
    </div>
  ),
  'horizontal-scroll': (
    <div className="flex w-full items-center gap-2 overflow-hidden px-1">
      <Bone className="h-14 w-20 shrink-0 rounded-lg" />
      <Bone className="h-14 w-20 shrink-0 rounded-lg" />
      <Bone className="h-14 w-20 shrink-0 rounded-lg opacity-50" />
      <Bone className="h-14 w-10 shrink-0 rounded-lg opacity-20" />
    </div>
  ),
  'blur-vignette': (
    <div className="relative h-16 w-28 overflow-hidden rounded-lg">
      <Bone className="absolute inset-0 rounded-none" />
      <div className="absolute inset-0 shadow-[inset_0_0_24px_10px_rgba(0,0,0,0.35)] dark:shadow-[inset_0_0_24px_10px_rgba(0,0,0,0.55)]" />
    </div>
  ),
  'motion-number': (
    <div className="flex items-end gap-1">
      <Bone className="h-10 w-7 rounded-md" />
      <Bone className="h-12 w-7 rounded-md bg-zinc-300 dark:bg-zinc-500" />
      <Bone className="h-9 w-7 rounded-md" />
      <Bone className="h-11 w-7 rounded-md" />
    </div>
  ),
  'floating-buttons': (
    <div className="relative h-16 w-28">
      <div className="absolute right-2 top-1/2 flex -translate-y-1/2 flex-col gap-1.5">
        <Bone className="h-7 w-7 rounded-full" />
        <Bone className="h-7 w-7 rounded-full" />
        <Bone className="h-7 w-7 rounded-full bg-zinc-300 dark:bg-zinc-500" />
      </div>
    </div>
  ),
  dock: (
    <div className="flex items-end gap-1.5 rounded-full border border-zinc-200 bg-white/80 px-2.5 py-1.5 shadow-sm dark:border-zinc-700 dark:bg-zinc-800/80">
      <Bone className="h-7 w-7 rounded-full" />
      <Bone className="h-8 w-8 rounded-full bg-zinc-300 dark:bg-zinc-500" />
      <div className="mx-0.5 h-5 w-px self-center bg-zinc-300 dark:bg-zinc-600" />
      <Bone className="h-7 w-7 rounded-full" />
      <Bone className="h-7 w-7 rounded-full" />
      <Bone className="h-7 w-7 rounded-full" />
    </div>
  ),
  marquee: (
    <div className="relative flex w-full flex-col gap-2 overflow-hidden px-1">
      <div className="flex gap-2">
        <Bone className="h-10 w-20 shrink-0 rounded-lg" />
        <Bone className="h-10 w-20 shrink-0 rounded-lg" />
        <Bone className="h-10 w-20 shrink-0 rounded-lg opacity-60" />
        <Bone className="h-10 w-12 shrink-0 rounded-lg opacity-25" />
      </div>
      <div className="flex gap-2">
        <Bone className="h-10 w-12 shrink-0 rounded-lg opacity-25" />
        <Bone className="h-10 w-20 shrink-0 rounded-lg opacity-60" />
        <Bone className="h-10 w-20 shrink-0 rounded-lg" />
        <Bone className="h-10 w-20 shrink-0 rounded-lg" />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-zinc-50 dark:from-zinc-900/80" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-zinc-50 dark:from-zinc-900/80" />
    </div>
  ),
};

export function ComponentSkeletonPreview({
  type,
  className,
}: {
  type: ComponentSkeletonType;
  className?: string;
}) {
  return (
    <div className={cn('h-full w-full', className)}>
      <PreviewShell>{skeletons[type]}</PreviewShell>
    </div>
  );
}

export default ComponentSkeletonPreview;
