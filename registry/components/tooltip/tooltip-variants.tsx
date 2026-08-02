'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';

export default function TooltipVariants() {
  return (
    <div className="flex h-[200px] w-full items-center justify-center gap-6 rounded-xl bg-slate-100 dark:bg-zinc-950">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white"
            >
              Dark
            </button>
          </TooltipTrigger>
          <TooltipContent variant="dark">Dark tooltip</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 dark:border-neutral-700 dark:bg-zinc-900 dark:text-white"
            >
              White
            </button>
          </TooltipTrigger>
          <TooltipContent variant="white">White tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
