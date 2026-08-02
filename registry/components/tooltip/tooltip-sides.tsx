'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';

const sides = ['top', 'right', 'bottom', 'left'] as const;

export default function TooltipSides() {
  return (
    <div className="flex h-[240px] w-full items-center justify-center gap-4 rounded-xl bg-slate-100 dark:bg-zinc-950">
      <TooltipProvider delayDuration={100}>
        {sides.map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger asChild>
              <button
                type="button"
                className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm font-medium capitalize text-neutral-900 dark:border-neutral-700 dark:bg-zinc-900 dark:text-white"
              >
                {side}
              </button>
            </TooltipTrigger>
            <TooltipContent side={side} variant="dark">
              Tooltip on {side}
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
}
