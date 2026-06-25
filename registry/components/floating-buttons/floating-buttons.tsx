'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface FloatingButtonItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
  color?: string;
  hoverColor?: string;
  textColor?: string;
  tooltip?: string;
}

export interface FloatingButtonsProps {
  buttons: FloatingButtonItem[];
  position?: 'left' | 'right';
  verticalPosition?: number;
  size?: 'sm' | 'md' | 'lg';
  gap?: number;
  showLabels?: boolean;
  expandOnHover?: boolean;
  expandDirection?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'outline' | 'ghost' | 'gradient';
  primaryColor?: string;
  secondaryColor?: string;
  backdropBlur?: boolean;
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  borderRadius?: 'sm' | 'md' | 'lg' | 'full';
  animation?: 'slide' | 'scale' | 'fade';
  pulse?: boolean;
  className?: string;
  /** Use absolute positioning relative to parent instead of fixed to viewport */
  containerMode?: boolean;
  /** Always show buttons in expanded state with labels visible (no hover animation) */
  expanded?: boolean;
  /** Layout of icon and label within each button: horizontal (icon left, label right) or vertical (icon top, label bottom) */
  buttonLayout?: 'horizontal' | 'vertical';
}

const sizeConfig = {
  sm: { 
    button: 'h-10', 
    buttonWidth: 'w-10',
    icon: 'h-4 w-4', 
    text: 'text-xs', 
    paddingX: 12,
    height: 40,
  },
  md: { 
    button: 'h-12', 
    buttonWidth: 'w-12',
    icon: 'h-5 w-5', 
    text: 'text-sm', 
    paddingX: 16,
    height: 48,
  },
  lg: { 
    button: 'h-14', 
    buttonWidth: 'w-14',
    icon: 'h-6 w-6', 
    text: 'text-base', 
    paddingX: 20,
    height: 56,
  },
};

const shadowConfig = {
  none: '',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
};

const borderRadiusConfig = {
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  full: 'rounded-full',
};

export default function FloatingButtons({
  buttons,
  position = 'right',
  verticalPosition = 50,
  size = 'md',
  gap = 3,
  showLabels = false,
  expandOnHover = true,
  expandDirection = 'vertical',
  variant = 'solid',
  primaryColor = '#6366f1',
  secondaryColor = '#8b5cf6',
  backdropBlur = true,
  shadow = 'lg',
  borderRadius = 'full',
  animation = 'slide',
  pulse = false,
  className,
  containerMode = false,
  expanded = false,
  buttonLayout = 'horizontal',
}: FloatingButtonsProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const isSingleButton = buttons.length === 1;
  const isAlwaysExpanded = expanded || showLabels || isSingleButton;

  const getVariantStyles = (button: FloatingButtonItem, isHovered: boolean) => {
    const color = button.color || primaryColor;
    const hoverColor = button.hoverColor || secondaryColor;
    const textColor = button.textColor || '#ffffff';

    switch (variant) {
      case 'solid':
        return {
          backgroundColor: isHovered ? hoverColor : color,
          color: textColor,
        };
      case 'outline':
        return {
          backgroundColor: isHovered ? color : 'transparent',
          borderColor: color,
          borderWidth: '2px',
          color: isHovered ? textColor : color,
        };
      case 'ghost':
        return {
          backgroundColor: isHovered ? `${color}20` : 'transparent',
          color: color,
        };
      case 'gradient':
        return {
          background: `linear-gradient(135deg, ${color}, ${hoverColor})`,
          color: textColor,
        };
      default:
        return {
          backgroundColor: color,
          color: textColor,
        };
    }
  };

  const getAnimationVariants = () => {
    const offset = position === 'left' ? -100 : 100;

    switch (animation) {
      case 'slide':
        return {
          hidden: { x: offset, opacity: 0 },
          visible: { x: 0, opacity: 1 },
          exit: { x: offset, opacity: 0 },
        };
      case 'scale':
        return {
          hidden: { scale: 0, opacity: 0 },
          visible: { scale: 1, opacity: 1 },
          exit: { scale: 0, opacity: 0 },
        };
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
          exit: { opacity: 0 },
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
          exit: { opacity: 0 },
        };
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = getAnimationVariants();

  const ButtonWrapper = ({ button, children }: { button: FloatingButtonItem; children: React.ReactNode }) => {
    if (button.href) {
      return (
        <a href={button.href} target="_blank" rel="noopener noreferrer" className="block">
          {children}
        </a>
      );
    }
    return <>{children}</>;
  };

  return (
    <motion.div
      className={cn(
        'z-50 flex',
        containerMode ? 'absolute' : 'fixed',
        position === 'left' ? 'left-4' : 'right-4',
        expandDirection === 'vertical' ? 'flex-col' : 'flex-row',
        position === 'right' ? 'items-end' : 'items-start',
        className
      )}
      style={{
        top: containerMode ? `${verticalPosition}%` : `${verticalPosition}vh`,
        transform: 'translateY(-50%)',
        gap: `${gap * 4}px`,
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {buttons.map((button, index) => {
        const isHovered = hoveredId === button.id;
        const showLabel = isAlwaysExpanded || (expandOnHover && isHovered);

        return (
          <motion.div
            key={button.id}
            variants={itemVariants}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onMouseEnter={() => !isAlwaysExpanded && setHoveredId(button.id)}
            onMouseLeave={() => !isAlwaysExpanded && setHoveredId(null)}
            className={cn(
              'relative flex',
              position === 'right' ? 'justify-end' : 'justify-start'
            )}
          >
            <ButtonWrapper button={button}>
              {isAlwaysExpanded ? (
                <button
                  onClick={button.onClick}
                  className={cn(
                    'flex items-center justify-center',
                    buttonLayout === 'vertical' ? 'flex-col w-auto' : sizeConfig[size].button,
                    shadowConfig[shadow],
                    borderRadiusConfig[borderRadius],
                    backdropBlur && 'backdrop-blur-sm',
                    pulse && 'animate-pulse',
                    'transition-colors duration-200'
                  )}
                  style={{
                    ...getVariantStyles(button, isHovered),
                    ...(buttonLayout === 'vertical' 
                      ? { 
                          paddingTop: sizeConfig[size].paddingX,
                          paddingBottom: sizeConfig[size].paddingX,
                          paddingLeft: 12,
                          paddingRight: 12,
                        }
                      : {
                          paddingLeft: sizeConfig[size].paddingX,
                          paddingRight: sizeConfig[size].paddingX,
                        }
                    ),
                  }}
                >
                  <span className={cn(sizeConfig[size].icon, 'flex-shrink-0')}>
                    {button.icon}
                  </span>
                  <span
                    className={cn(
                      sizeConfig[size].text,
                      'whitespace-nowrap font-medium',
                      buttonLayout === 'vertical' ? 'mt-2' : 'ml-2 pr-1'
                    )}
                    style={buttonLayout === 'vertical' 
                      ? { 
                          writingMode: 'vertical-rl',
                          transform: position === 'left' ? 'rotate(180deg)' : undefined,
                        } 
                      : undefined
                    }
                  >
                    {button.label}
                  </span>
                </button>
              ) : buttonLayout === 'vertical' ? (
                <motion.button
                  onClick={button.onClick}
                  className={cn(
                    'flex flex-col items-center justify-center overflow-hidden',
                    shadowConfig[shadow],
                    borderRadiusConfig[borderRadius],
                    backdropBlur && 'backdrop-blur-sm',
                    pulse && 'animate-pulse',
                  )}
                  style={getVariantStyles(button, isHovered)}
                  initial={false}
                  animate={{
                    height: showLabel ? 'auto' : sizeConfig[size].height,
                    width: sizeConfig[size].height,
                    paddingTop: showLabel ? sizeConfig[size].paddingX : (sizeConfig[size].height - 20) / 2,
                    paddingBottom: showLabel ? sizeConfig[size].paddingX : (sizeConfig[size].height - 20) / 2,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className={cn(sizeConfig[size].icon, 'flex-shrink-0')}
                  >
                    {button.icon}
                  </motion.span>

                  <AnimatePresence mode="wait">
                    {showLabel && (
                      <motion.span
                        key="label"
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{
                          duration: 0.2,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className={cn(
                          sizeConfig[size].text,
                          'whitespace-nowrap font-medium'
                        )}
                        style={{ 
                          writingMode: 'vertical-rl',
                          transform: position === 'left' ? 'rotate(180deg)' : undefined,
                        }}
                      >
                        {button.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              ) : (
                <motion.button
                  onClick={button.onClick}
                  className={cn(
                    'flex items-center overflow-hidden',
                    sizeConfig[size].button,
                    shadowConfig[shadow],
                    borderRadiusConfig[borderRadius],
                    backdropBlur && 'backdrop-blur-sm',
                    pulse && 'animate-pulse',
                  )}
                  style={getVariantStyles(button, isHovered)}
                  initial={false}
                  animate={{
                    width: showLabel ? 'auto' : sizeConfig[size].height,
                    paddingLeft: showLabel ? sizeConfig[size].paddingX : (sizeConfig[size].height - 20) / 2,
                    paddingRight: showLabel ? sizeConfig[size].paddingX : (sizeConfig[size].height - 20) / 2,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className={cn(sizeConfig[size].icon, 'flex-shrink-0')}
                  >
                    {button.icon}
                  </motion.span>

                  <AnimatePresence mode="wait">
                    {showLabel && (
                      <motion.span
                        key="label"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{
                          duration: 0.2,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className={cn(
                          sizeConfig[size].text,
                          'whitespace-nowrap font-medium ml-2 pr-1'
                        )}
                      >
                        {button.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              )}
            </ButtonWrapper>

            {button.tooltip && !showLabel && !isAlwaysExpanded && (
              <AnimatePresence>
                {isHovered && !expandOnHover && (
                  <motion.div
                    initial={{ opacity: 0, x: position === 'left' ? 10 : -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: position === 'left' ? 10 : -10 }}
                    transition={{ duration: 0.15 }}
                    className={cn(
                      'absolute top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs whitespace-nowrap z-10',
                      position === 'left' ? 'left-full ml-2' : 'right-full mr-2'
                    )}
                  >
                    {button.tooltip}
                    <div
                      className={cn(
                        'absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45',
                        position === 'left' ? '-left-1' : '-right-1'
                      )}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
