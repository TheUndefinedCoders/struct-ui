'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '@/lib/utils';

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipPortal = TooltipPrimitive.Portal;

const tooltipVariants = {
  dark: {
    content: 'bg-neutral-900 text-neutral-50',
    arrow: 'fill-neutral-900',
  },
  white: {
    content: 'bg-white text-neutral-900',
    arrow: 'fill-white',
  },
} as const;

type TooltipVariant = keyof typeof tooltipVariants;

type TooltipContentProps = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Content
> & {
  variant?: TooltipVariant;
};

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(
  (
    {
      className,
      sideOffset = 8,
      side = 'top',
      variant = 'dark',
      children,
      ...props
    },
    ref
  ) => (
    <TooltipPortal>
      <TooltipPrimitive.Content
        ref={ref}
        side={side}
        sideOffset={sideOffset}
        className={cn(
          'z-[100] rounded-md px-3 py-1.5 text-xs shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          tooltipVariants[variant].content,
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className={tooltipVariants[variant].arrow} />
      </TooltipPrimitive.Content>
    </TooltipPortal>
  )
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };

// @docs-preview-start
export default function TooltipPreview() {
  return (
    <TooltipProvider delayDuration={100}>
      <div className="flex h-[160px] w-full items-center justify-center">
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
      </div>
    </TooltipProvider>
  );
}
// @docs-preview-end
