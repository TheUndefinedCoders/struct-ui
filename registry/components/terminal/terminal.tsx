'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TerminalLine {
  type: 'command' | 'output' | 'error' | 'success' | 'info';
  content: string;
  prompt?: string;
  delay?: number;
}

interface TerminalProps {
  lines?: TerminalLine[];
  title?: string;
  theme?: 'macos' | 'windows' | 'linux' | 'minimal';
  typingSpeed?: number;
  showLineNumbers?: boolean;
  autoScroll?: boolean;
  loop?: boolean;
  startDelay?: number;
  className?: string;
  height?: string;
}

const defaultLines: TerminalLine[] = [
  { type: 'command', content: 'npm install struct-ui', prompt: '~' },
  { type: 'output', content: 'Installing dependencies...', delay: 500 },
  { type: 'success', content: '✓ Installed 42 packages', delay: 800 },
  { type: 'command', content: 'npm run dev', prompt: '~', delay: 300 },
  { type: 'info', content: 'Starting development server...', delay: 400 },
  { type: 'success', content: '✓ Ready on http://localhost:3000', delay: 600 },
];

const themes = {
  macos: {
    bg: 'bg-[#1E1E1E]',
    headerBg: 'bg-[#323233]',
    border: 'border-neutral-700',
    text: 'text-neutral-300',
    buttons: ['bg-[#FF5F57]', 'bg-[#FEBC2E]', 'bg-[#28C840]'],
  },
  windows: {
    bg: 'bg-[#0C0C0C]',
    headerBg: 'bg-[#1F1F1F]',
    border: 'border-neutral-800',
    text: 'text-neutral-300',
    buttons: [],
  },
  linux: {
    bg: 'bg-[#300A24]',
    headerBg: 'bg-[#3D0D2B]',
    border: 'border-[#5C2D4B]',
    text: 'text-neutral-300',
    buttons: ['bg-neutral-600', 'bg-neutral-600', 'bg-neutral-600'],
  },
  minimal: {
    bg: 'bg-neutral-950',
    headerBg: 'bg-neutral-900',
    border: 'border-neutral-800',
    text: 'text-neutral-300',
    buttons: [],
  },
};

const promptColors = {
  macos: 'text-green-400',
  windows: 'text-yellow-400',
  linux: 'text-green-500',
  minimal: 'text-cyan-400',
};

export default function Terminal({
  lines = defaultLines,
  title = 'Terminal',
  theme = 'macos',
  typingSpeed = 50,
  showLineNumbers = false,
  autoScroll = true,
  loop = false,
  startDelay = 500,
  className = '',
  height = 'auto',
}: TerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<{ line: TerminalLine; text: string; complete: boolean }[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [started, setStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const themeConfig = themes[theme];
  const promptColor = promptColors[theme];

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (!started || currentLineIndex >= lines.length) {
      if (loop && currentLineIndex >= lines.length) {
        setTimeout(() => {
          setDisplayedLines([]);
          setCurrentLineIndex(0);
          setCurrentCharIndex(0);
        }, 2000);
      }
      return;
    }

    const currentLine = lines[currentLineIndex];
    const delay = currentLine.delay || 0;

    if (!isTyping && currentCharIndex === 0) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        setDisplayedLines((prev) => [
          ...prev,
          { line: currentLine, text: '', complete: false },
        ]);
      }, delay);
      return () => clearTimeout(timer);
    }

    if (isTyping) {
      if (currentLine.type === 'command') {
        if (currentCharIndex < currentLine.content.length) {
          const timer = setTimeout(() => {
            setDisplayedLines((prev) => {
              const updated = [...prev];
              updated[updated.length - 1] = {
                ...updated[updated.length - 1],
                text: currentLine.content.slice(0, currentCharIndex + 1),
              };
              return updated;
            });
            setCurrentCharIndex((prev) => prev + 1);
          }, typingSpeed);
          return () => clearTimeout(timer);
        } else {
          setDisplayedLines((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = { ...updated[updated.length - 1], complete: true };
            return updated;
          });
          setIsTyping(false);
          setCurrentCharIndex(0);
          setCurrentLineIndex((prev) => prev + 1);
        }
      } else {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            text: currentLine.content,
            complete: true,
          };
          return updated;
        });
        setIsTyping(false);
        setCurrentCharIndex(0);
        setCurrentLineIndex((prev) => prev + 1);
      }
    }
  }, [started, currentLineIndex, currentCharIndex, isTyping, lines, typingSpeed, loop]);

  useEffect(() => {
    if (autoScroll && containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [displayedLines, autoScroll]);

  const getLineColor = (type: TerminalLine['type']) => {
    switch (type) {
      case 'error':
        return 'text-red-400';
      case 'success':
        return 'text-green-400';
      case 'info':
        return 'text-blue-400';
      case 'output':
        return 'text-neutral-400';
      default:
        return themeConfig.text;
    }
  };

  const getPrompt = (line: TerminalLine) => {
    if (line.type !== 'command') return null;
    const prompt = line.prompt || '~';
    
    if (theme === 'windows') {
      return <span className="text-neutral-500">C:\Users\dev{prompt}&gt; </span>;
    }
    return (
      <>
        <span className={promptColor}>user@dev</span>
        <span className="text-neutral-500">:</span>
        <span className="text-blue-400">{prompt}</span>
        <span className="text-neutral-500">$ </span>
      </>
    );
  };

  return (
    <div className={`rounded-xl overflow-hidden border ${themeConfig.border} ${className}`}>
      {/* Header */}
      <div className={`relative flex items-center px-4 py-3 ${themeConfig.headerBg} border-b ${themeConfig.border}`}>
        {themeConfig.buttons.length > 0 && (
          <div className="flex gap-2">
            {themeConfig.buttons.map((color, i) => (
              <div key={i} className={`w-3 h-3 rounded-full ${color}`} />
            ))}
          </div>
        )}
        {theme === 'windows' && (
          <div className="flex gap-4 ml-auto">
            <span className="text-neutral-500 text-xs">─</span>
            <span className="text-neutral-500 text-xs">□</span>
            <span className="text-neutral-500 text-xs">×</span>
          </div>
        )}
        <span className="absolute left-1/2 -translate-x-1/2 text-sm text-neutral-400">
          {title}
        </span>
      </div>

      {/* Terminal Content */}
      <div
        ref={containerRef}
        className={`${themeConfig.bg} p-4 font-mono text-sm overflow-auto`}
        style={{ height: height !== 'auto' ? height : undefined, maxHeight: '400px' }}
      >
        {displayedLines.map((item, index) => (
          <div key={index} className={`flex ${showLineNumbers ? 'gap-4' : ''} mb-1`}>
            {showLineNumbers && (
              <span className="text-neutral-600 select-none w-6 text-right">{index + 1}</span>
            )}
            <div className={getLineColor(item.line.type)}>
              {getPrompt(item.line)}
              <span>{item.text}</span>
              {item.line.type === 'command' && !item.complete && (
                <motion.span
                  className="inline-block w-2 h-4 bg-current ml-[1px] align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                />
              )}
            </div>
          </div>
        ))}
        {displayedLines.length === 0 && started && (
          <div className="flex">
            {getPrompt({ type: 'command', content: '', prompt: '~' })}
            <motion.span
              className={`inline-block w-2 h-4 ${themeConfig.text} bg-current ml-[1px] align-middle`}
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
