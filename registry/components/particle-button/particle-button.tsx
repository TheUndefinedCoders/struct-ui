'use client';
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  angle: number;
  velocity: number;
  shape: 'circle' | 'square' | 'star' | 'heart';
  rotation: number;
}

interface ParticleButtonProps {
  children: React.ReactNode;
  className?: string;
  particleCount?: number;
  particleSize?: [number, number];
  particleColors?: string[];
  particleShape?: 'circle' | 'square' | 'star' | 'heart' | 'mixed';
  burstDirection?: 'radial' | 'upward' | 'explosion';
  duration?: number;
  spread?: number;
  variant?: 'default' | 'gradient' | 'outline' | 'neon' | 'glass';
  onClick?: () => void;
  disabled?: boolean;
}

const shapes = ['circle', 'square', 'star', 'heart'] as const;

const defaultColors = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
  '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F',
];

export default function ParticleButton({
  children,
  className = '',
  particleCount = 30,
  particleSize = [4, 10],
  particleColors = defaultColors,
  particleShape = 'mixed',
  burstDirection = 'radial',
  duration = 800,
  spread = 120,
  variant = 'default',
  onClick,
  disabled = false,
}: ParticleButtonProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const getShape = (): Particle['shape'] => {
    if (particleShape === 'mixed') {
      return shapes[Math.floor(Math.random() * shapes.length)];
    }
    return particleShape;
  };

  const createParticles = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || isAnimating) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      let angle: number;
      let velocity: number;

      switch (burstDirection) {
        case 'upward':
          angle = -90 + (Math.random() - 0.5) * 60;
          velocity = spread * (0.5 + Math.random() * 0.5);
          break;
        case 'explosion':
          angle = Math.random() * 360;
          velocity = spread * (0.8 + Math.random() * 0.4);
          break;
        case 'radial':
        default:
          angle = (360 / particleCount) * i + Math.random() * 20;
          velocity = spread * (0.6 + Math.random() * 0.4);
      }

      newParticles.push({
        id: Date.now() + i,
        x: centerX,
        y: centerY,
        size: particleSize[0] + Math.random() * (particleSize[1] - particleSize[0]),
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        angle,
        velocity,
        shape: getShape(),
        rotation: Math.random() * 360,
      });
    }

    setParticles(newParticles);
    setIsAnimating(true);

    setTimeout(() => {
      setParticles([]);
      setIsAnimating(false);
    }, duration);

    onClick?.();
  }, [disabled, isAnimating, particleCount, particleSize, particleColors, burstDirection, spread, duration, onClick, particleShape]);

  const variantStyles = {
    default: 'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100',
    gradient: 'bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white hover:opacity-90',
    outline: 'border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-neutral-900',
    neon: 'bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] hover:bg-cyan-400',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20',
  };

  const renderShape = (particle: Particle) => {
    const baseStyle = { backgroundColor: particle.color };
    
    switch (particle.shape) {
      case 'square':
        return (
          <div
            className="rounded-sm"
            style={{
              ...baseStyle,
              width: particle.size,
              height: particle.size,
            }}
          />
        );
      case 'star':
        return (
          <svg
            width={particle.size}
            height={particle.size}
            viewBox="0 0 24 24"
            fill={particle.color}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        );
      case 'heart':
        return (
          <svg
            width={particle.size}
            height={particle.size}
            viewBox="0 0 24 24"
            fill={particle.color}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        );
      case 'circle':
      default:
        return (
          <div
            className="rounded-full"
            style={{
              ...baseStyle,
              width: particle.size,
              height: particle.size,
            }}
          />
        );
    }
  };

  return (
    <button
      className={`
        relative overflow-visible
        px-6 py-3 rounded-full font-medium
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${className}
      `}
      onClick={createParticles}
      disabled={disabled}
    >
      <span className="relative z-10">{children}</span>

      <AnimatePresence>
        {particles.map((particle) => {
          const radians = (particle.angle * Math.PI) / 180;
          const endX = Math.cos(radians) * particle.velocity;
          const endY = Math.sin(radians) * particle.velocity;

          return (
            <motion.div
              key={particle.id}
              className="absolute pointer-events-none"
              initial={{
                x: particle.x,
                y: particle.y,
                scale: 0,
                opacity: 1,
                rotate: 0,
              }}
              animate={{
                x: particle.x + endX,
                y: particle.y + endY,
                scale: [0, 1.2, 1, 0],
                opacity: [1, 1, 0.8, 0],
                rotate: particle.rotation + 180,
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: duration / 1000,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{
                left: 0,
                top: 0,
                translateX: '-50%',
                translateY: '-50%',
              }}
            >
              {renderShape(particle)}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </button>
  );
}
