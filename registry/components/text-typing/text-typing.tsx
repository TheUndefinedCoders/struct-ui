'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface TextTypingProps {
  texts?: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  cursor?: boolean;
  cursorStyle?: 'bar' | 'underscore' | 'block';
  cursorColor?: string;
  cursorBlinkSpeed?: number;
  loop?: boolean;
  onComplete?: () => void;
}

const defaultTexts = ['Hello World', 'Welcome', 'Text Typing'];

export default function TextTyping({
  texts = defaultTexts,
  className = '',
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 1500,
  cursor = true,
  cursorStyle = 'bar',
  cursorColor = 'currentColor',
  cursorBlinkSpeed = 0.8,
  loop = true,
  onComplete,
}: TextTypingProps) {
  const safeTexts = texts && texts.length > 0 ? texts : defaultTexts;
  
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentText = safeTexts[textIndex] || '';

  const handleTyping = useCallback(() => {
    if (isPaused) return;

    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      } else {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
      } else {
        setIsDeleting(false);
        const nextIndex = textIndex + 1;
        
        if (nextIndex >= safeTexts.length) {
          if (loop) {
            setTextIndex(0);
          } else {
            onComplete?.();
          }
        } else {
          setTextIndex(nextIndex);
        }
      }
    }
  }, [displayText, currentText, isDeleting, isPaused, textIndex, safeTexts.length, loop, pauseDuration, onComplete]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [handleTyping, isDeleting, typingSpeed, deletingSpeed]);

  const getCursorElement = () => {
    switch (cursorStyle) {
      case 'underscore':
        return (
          <motion.span
            className="inline-block w-[0.6em] h-[2px] ml-[2px]"
            style={{ backgroundColor: cursorColor, verticalAlign: 'baseline' }}
            animate={{ opacity: [1, 0] }}
            transition={{ duration: cursorBlinkSpeed, repeat: Infinity, repeatType: 'reverse' }}
          />
        );
      case 'block':
        return (
          <motion.span
            className="inline-block w-[0.55em] h-[1.1em] ml-[2px]"
            style={{ backgroundColor: cursorColor, verticalAlign: 'middle' }}
            animate={{ opacity: [0.8, 0.2] }}
            transition={{ duration: cursorBlinkSpeed, repeat: Infinity, repeatType: 'reverse' }}
          />
        );
      case 'bar':
      default:
        return (
          <motion.span
            className="inline-block w-[2px] h-[1.1em] ml-[2px]"
            style={{ backgroundColor: cursorColor, verticalAlign: 'middle' }}
            animate={{ opacity: [1, 0] }}
            transition={{ duration: cursorBlinkSpeed, repeat: Infinity, repeatType: 'reverse' }}
          />
        );
    }
  };

  return (
    <span className={`inline ${className}`}>
      <span>{displayText}</span>
      {cursor && getCursorElement()}
    </span>
  );
}
