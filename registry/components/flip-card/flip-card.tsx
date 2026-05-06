'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
  flipDirection?: 'horizontal' | 'vertical' | 'diagonal';
  trigger?: 'hover' | 'click';
  duration?: number;
  variant?: 'default' | 'lifted' | 'glow' | 'gradient-border';
}

export default function FlipCard({
  front,
  back,
  className = '',
  flipDirection = 'horizontal',
  trigger = 'hover',
  duration = 0.6,
  variant = 'default',
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const getRotation = (flipped: boolean) => {
    if (!flipped) return { rotateX: 0, rotateY: 0 };

    switch (flipDirection) {
      case 'horizontal':
        return { rotateY: 180, rotateX: 0 };
      case 'vertical':
        return { rotateX: 180, rotateY: 0 };
      case 'diagonal':
        return { rotateY: 180, rotateX: 15 };
      default:
        return { rotateY: 180, rotateX: 0 };
    }
  };

  const variantStyles = {
    default: '',
    lifted: 'hover:shadow-2xl',
    glow: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]',
    'gradient-border': '',
  };

  const handleInteraction = () => {
    if (trigger === 'click') {
      setIsFlipped(!isFlipped);
    }
  };

  const handleHoverStart = () => {
    if (trigger === 'hover') {
      setIsFlipped(true);
    }
  };

  const handleHoverEnd = () => {
    if (trigger === 'hover') {
      setIsFlipped(false);
    }
  };

  return (
    <div
      className={`relative w-full h-full ${className}`}
      style={{ perspective: '1000px' }}
      onClick={handleInteraction}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {variant === 'gradient-border' && (
        <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-75 blur-sm" />
      )}

      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        initial={false}
        animate={getRotation(isFlipped)}
        transition={{
          duration,
          type: 'spring',
          stiffness: 100,
          damping: 15,
        }}
      >
        {/* Front Face */}
        <div
          className={`
            absolute inset-0 w-full h-full rounded-2xl overflow-hidden
            ${variantStyles[variant]}
          `}
          style={{ backfaceVisibility: 'hidden' }}
        >
          {front}
        </div>

        {/* Back Face */}
        <div
          className={`
            absolute inset-0 w-full h-full rounded-2xl overflow-hidden
            ${variantStyles[variant]}
          `}
          style={{
            backfaceVisibility: 'hidden',
            transform:
              flipDirection === 'vertical' ? 'rotateX(180deg)' : 'rotateY(180deg)',
          }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
}
