'use client';
import { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  magneticStrength?: number;
  magneticRadius?: number;
  springConfig?: { stiffness: number; damping: number };
  variant?: 'default' | 'outline' | 'ghost' | 'glow' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const variantClasses = {
  default:
    'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100',
  outline:
    'border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-neutral-900',
  ghost:
    'text-neutral-900 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800',
  glow: 'bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] hover:bg-blue-500',
  gradient:
    'bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white hover:opacity-90',
};

export default function MagneticButton({
  children,
  className = '',
  magneticStrength = 0.4,
  magneticRadius = 150,
  springConfig = { stiffness: 300, damping: 20 },
  variant = 'default',
  size = 'md',
  disabled = false,
  onClick,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);
  const scale = useSpring(1, { stiffness: 400, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (disabled || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.hypot(distanceX, distanceY);

    if (distance < magneticRadius) {
      const strength = (1 - distance / magneticRadius) * magneticStrength;
      x.set(distanceX * strength);
      y.set(distanceY * strength);
    }
  };

  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovered(true);
      scale.set(1.05);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  return (
    <motion.button
      ref={buttonRef}
      style={{ x, y, scale }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative inline-flex items-center justify-center
        font-medium rounded-full
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500
        disabled:opacity-50 disabled:cursor-not-allowed
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
