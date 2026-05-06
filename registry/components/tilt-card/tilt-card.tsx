'use client';
import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltMaxAngle?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  glare?: boolean;
  glareMaxOpacity?: number;
  glareColor?: string;
  borderGlow?: boolean;
  borderGlowColor?: string;
  disabled?: boolean;
}

export default function TiltCard({
  children,
  className = '',
  tiltMaxAngle = 15,
  perspective = 1000,
  scale = 1.02,
  speed = 400,
  glare = false,
  glareMaxOpacity = 0.35,
  glareColor = 'white',
  borderGlow = false,
  borderGlowColor = 'rgba(255, 255, 255, 0.5)',
  disabled = false,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: speed, damping: 30 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const rotateX = useTransform(ySpring, [-0.5, 0.5], [tiltMaxAngle, -tiltMaxAngle]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-tiltMaxAngle, tiltMaxAngle]);

  const glareX = useTransform(xSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(ySpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = (e.clientX - centerX) / rect.width;
    const mouseY = (e.clientY - centerY) / rect.height;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      style={{
        perspective,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          scale: isHovered && !disabled ? scale : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Border Glow Effect */}
        {borderGlow && (
          <motion.div
            className="absolute -inset-[1px] rounded-[inherit] opacity-0 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, ${borderGlowColor}, transparent, ${borderGlowColor})`,
              filter: 'blur(4px)',
            }}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        )}

        {/* Card Content */}
        <div className="relative w-full h-full rounded-[inherit] overflow-hidden">
          {children}

          {/* Glare Effect */}
          {glare && (
            <motion.div
              className="absolute inset-0 pointer-events-none rounded-[inherit]"
              style={{
                background: `radial-gradient(circle at ${glareX.get()}% ${glareY.get()}%, ${glareColor}, transparent 60%)`,
                mixBlendMode: 'overlay',
              }}
              animate={{
                opacity: isHovered ? glareMaxOpacity : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-full h-full"
                style={{
                  background: useTransform(
                    [glareX, glareY],
                    ([latestX, latestY]) =>
                      `radial-gradient(circle at ${latestX}% ${latestY}%, ${glareColor}, transparent 50%)`
                  ),
                }}
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
