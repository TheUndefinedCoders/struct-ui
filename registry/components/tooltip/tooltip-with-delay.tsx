'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';

export default function TooltipWithDelay() {
  return (
    <div className="flex h-[160px] w-full items-center justify-center gap-6 rounded-xl bg-slate-100 dark:bg-zinc-950">
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-neutral-900"
            >
              Instant
            </button>
          </TooltipTrigger>
          <TooltipContent>No delay</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={500}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 dark:border-neutral-700 dark:bg-zinc-900 dark:text-white"
            >
              500ms delay
            </button>
          </TooltipTrigger>
          <TooltipContent variant="white">Appears after 500ms</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
