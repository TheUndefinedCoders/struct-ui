'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';

export default function TooltipDefault() {
  return (
    <div className="flex h-[160px] w-full items-center justify-center rounded-xl bg-slate-100 dark:bg-zinc-950">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-neutral-900"
            >
              Hover me
            </button>
          </TooltipTrigger>
          <TooltipContent>Default dark tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
