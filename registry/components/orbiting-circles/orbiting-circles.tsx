'use client';
import { useState, useRef, useEffect, ReactNode } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface OrbitItem {
  id?: string;
  title?: string;
  icon: ReactNode;
  className?: string;
}

interface OrbitRing {
  radius: number;
  items: OrbitItem[];
  duration?: number;
  reverse?: boolean;
  initialRotation?: number;
}

interface OrbitingCirclesProps {
  rings?: OrbitRing[];
  centerContent?: ReactNode;
  pauseOnHover?: boolean;
  className?: string;
  showOrbits?: boolean;
  orbitClassName?: string;
}

const defaultRings: OrbitRing[] = [
  {
    radius: 80,
    duration: 20,
    items: [
      { id: 'item-1', title: 'Item 1', icon: <div className="w-8 h-8 rounded-full bg-white/20" /> },
      { id: 'item-2', title: 'Item 2', icon: <div className="w-8 h-8 rounded-full bg-white/20" /> },
    ],
  },
];

export default function OrbitingCircles({
  rings = defaultRings,
  centerContent,
  pauseOnHover = true,
  className = '',
  showOrbits = true,
  orbitClassName = '',
}: OrbitingCirclesProps) {
  const [pausedRingIndex, setPausedRingIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const styleId = 'orbiting-circles-keyframes';
    if (typeof document !== 'undefined' && !document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const safeRings = rings && rings.length > 0 ? rings : defaultRings;
  const maxRadius = Math.max(...safeRings.map((r) => r.radius));

  return (
    <TooltipProvider delayDuration={100}>
      <div
        ref={containerRef}
        className={`relative ${className}`}
        style={{ width: maxRadius * 2 + 80, height: maxRadius * 2 + 80 }}
        tabIndex={0}
      >
      {/* Center Content */}
      {centerContent && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          {centerContent}
        </div>
      )}

      {/* Orbit Rings */}
      {safeRings.map((ring, ringIndex) => {
        const { radius, items, duration = 20, reverse = false, initialRotation = 0 } = ring;
        const direction = reverse ? 'reverse' : 'normal';
        const isThisRingPaused = pauseOnHover && pausedRingIndex === ringIndex;

        return (
          <div
            key={ringIndex}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ width: radius * 2, height: radius * 2 }}
          >
            {/* Orbit Path */}
            {showOrbits && (
              <div
                className={`absolute inset-0 rounded-full border transition-colors duration-300 ${
                  isThisRingPaused ? 'border-neutral-600' : 'border-neutral-800/50'
                } ${orbitClassName}`}
              />
            )}

            {/* Rotating Container */}
            <div
              className="absolute inset-0"
              style={{
                animation: `orbit-spin ${duration}s linear infinite ${direction}`,
                animationPlayState: isThisRingPaused ? 'paused' : 'running',
                transform: `rotate(${initialRotation}deg)`,
              }}
            >
              {/* Orbit Items */}
              {items.map((item, itemIndex) => {
                const angle = (360 / items.length) * itemIndex;
                const radian = (angle * Math.PI) / 180;
                const x = Math.cos(radian) * radius;
                const y = Math.sin(radian) * radius;

                const iconContent = (
                  <div
                    className={`flex items-center justify-center transition-transform duration-300 cursor-pointer ${
                      isThisRingPaused ? 'scale-110' : ''
                    } ${item.className || ''}`}
                    style={{
                      animation: `orbit-spin ${duration}s linear infinite ${reverse ? 'normal' : 'reverse'}`,
                      animationPlayState: isThisRingPaused ? 'paused' : 'running',
                    }}
                  >
                    {item.icon}
                  </div>
                );

                return (
                  <div
                    key={item.id || itemIndex}
                    className="absolute left-1/2 top-1/2 pointer-events-auto"
                    style={{
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                    }}
                    onMouseEnter={() => pauseOnHover && setPausedRingIndex(ringIndex)}
                    onMouseLeave={() => pauseOnHover && setPausedRingIndex(null)}
                  >
                    {item.title ? (
                      <Tooltip>
                        <TooltipTrigger asChild>{iconContent}</TooltipTrigger>
                        <TooltipContent side="top">
                          <p>{item.title}</p>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      iconContent
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      </div>
    </TooltipProvider>
  );
}
