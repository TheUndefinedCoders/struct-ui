'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';

export default function TooltipWhite() {
  return (
    <div className="flex h-[160px] w-full items-center justify-center rounded-xl bg-zinc-900">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900"
            >
              Hover me
            </button>
          </TooltipTrigger>
          <TooltipContent variant="white">White tooltip with arrow</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
