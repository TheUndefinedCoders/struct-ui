'use client';

import React, { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export interface DockItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
  dividerAfter?: boolean;
}

export interface DockProps {
  items: DockItem[];
  magnification?: number;
  distance?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'glass' | 'outline';
  position?: 'bottom' | 'top';
  tooltipSide?: 'top' | 'bottom';
  className?: string;
}

const sizeConfig = {
  sm: { base: 32, pad: 'px-2 py-1.5', gap: 'gap-0.5' },
  md: { base: 40, pad: 'px-2.5 py-2', gap: 'gap-1' },
  lg: { base: 48, pad: 'px-3 py-2.5', gap: 'gap-1' },
};

const variantConfig = {
  default:
    'bg-zinc-100 border-zinc-200 dark:bg-zinc-900 dark:border-zinc-700',
  glass:
    'bg-white/70 border-white/40 backdrop-blur-xl dark:bg-zinc-900/70 dark:border-zinc-700/50',
  outline:
    'bg-transparent border-zinc-300 dark:border-zinc-600',
};

function DockIcon({
  item,
  mouseX,
  magnification,
  distance,
  baseSize,
  tooltipSide,
}: {
  item: DockItem;
  mouseX: MotionValue<number>;
  magnification: number;
  distance: number;
  baseSize: number;
  tooltipSide: 'top' | 'bottom';
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distanceCalc = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [baseSize, baseSize * magnification, baseSize]
  );

  const size = useSpring(sizeSync, {
    mass: 0.15,
    stiffness: 200,
    damping: 18,
  });

  const iconSize = useTransform(size, (s) => s * 0.5);

  const sharedClassName = cn(
    'relative flex aspect-square items-center justify-center rounded-full',
    'text-zinc-700 dark:text-zinc-200',
    'transition-colors duration-150',
    'hover:bg-zinc-200/80 dark:hover:bg-zinc-700/80',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-500',
    'cursor-pointer'
  );

  const icon = (
    <motion.span
      className="pointer-events-none flex items-center justify-center [&>svg]:h-full [&>svg]:w-full"
      style={{ width: iconSize, height: iconSize }}
    >
      {item.icon}
    </motion.span>
  );

  const trigger = item.href ? (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={item.onClick}
      aria-label={item.label}
      className={sharedClassName}
      style={{ width: size, height: size }}
    >
      {icon}
    </motion.a>
  ) : (
    <motion.button
      type="button"
      onClick={item.onClick}
      aria-label={item.label}
      className={sharedClassName}
      style={{ width: size, height: size }}
    >
      {icon}
    </motion.button>
  );

  return (
    <motion.div
      ref={ref}
      className="relative flex items-end justify-center"
      style={{ width: size, height: size }}
    >
      <Tooltip>
        <TooltipTrigger asChild>{trigger}</TooltipTrigger>
        <TooltipContent side={tooltipSide} sideOffset={8} variant="white">
          {item.label}
        </TooltipContent>
      </Tooltip>
    </motion.div>
  );
}

export default function Dock({
  items,
  magnification = 1.35,
  distance = 100,
  size = 'md',
  variant = 'default',
  position = 'bottom',
  tooltipSide,
  className,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const config = sizeConfig[size];
  const resolvedTooltipSide =
    tooltipSide ?? (position === 'top' ? 'bottom' : 'top');

  return (
    <TooltipProvider delayDuration={100}>
      <motion.div
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          'mx-auto flex h-fit w-max items-end rounded-full border shadow-lg',
          config.pad,
          config.gap,
          variantConfig[variant],
          className
        )}
        role="toolbar"
        aria-label="Dock"
      >
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <DockIcon
              item={item}
              mouseX={mouseX}
              magnification={magnification}
              distance={distance}
              baseSize={config.base}
              tooltipSide={resolvedTooltipSide}
            />
            {item.dividerAfter && (
              <div
                className="mx-1 h-5 w-px self-center bg-zinc-300 dark:bg-zinc-600"
                aria-hidden="true"
              />
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </TooltipProvider>
  );
}
