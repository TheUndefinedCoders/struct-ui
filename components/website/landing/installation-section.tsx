'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Check, Copy, Terminal, Package, Zap, FileCode, ChevronRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Create your project',
    description: 'Start with a fresh Next.js project with TypeScript and Tailwind CSS',
    command: 'npx create-next-app@latest my-app --typescript --tailwind --eslint',
    highlight: 'npx create-next-app@latest',
  },
  {
    id: 2,
    title: 'Install dependencies',
    description: 'Add the required animation libraries',
    command: 'npm install framer-motion lucide-react clsx tailwind-merge',
    highlight: 'npm install',
  },
  {
    id: 3,
    title: 'Copy & Paste',
    description: 'Browse our components and copy the code directly into your project',
    command: '// Just copy the component code and paste it!',
    highlight: '// Copy & Paste',
  },
];

const codeExample = `// components/magnetic-button.tsx
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

export function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x * 0.3, y: position.y * 0.3 }}
      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 
                 text-white rounded-xl font-medium"
    >
      {children}
    </motion.button>
  );
}`;

function TerminalWindow({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl bg-slate-900 dark:bg-zinc-900 border border-slate-700 dark:border-zinc-800 overflow-hidden shadow-lg">
      {/* Terminal header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 dark:bg-zinc-800/50 border-b border-slate-700 dark:border-zinc-700">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-slate-400 dark:text-zinc-500">Terminal</span>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-lg hover:bg-slate-700 dark:hover:bg-zinc-700 transition-colors"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-slate-400 dark:text-zinc-400" />
          )}
        </button>
      </div>
      
      {/* Terminal content */}
      <div className="p-4 font-mono text-sm overflow-x-auto">
        <span className="text-green-400">$</span>{' '}
        <span className="text-slate-200 dark:text-zinc-300">{command}</span>
      </div>
    </div>
  );
}

function CodeEditor({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl bg-slate-900 dark:bg-zinc-900 border border-slate-700 dark:border-zinc-800 overflow-hidden shadow-lg">
      {/* Editor header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 dark:bg-zinc-800/50 border-b border-slate-700 dark:border-zinc-700">
        <div className="flex items-center gap-3">
          <FileCode className="w-4 h-4 text-cyan-400" />
          <span className="text-xs sm:text-sm text-slate-400 dark:text-zinc-400">magnetic-button.tsx</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg bg-slate-700 dark:bg-zinc-700 hover:bg-slate-600 dark:hover:bg-zinc-600 transition-colors text-xs sm:text-sm"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-green-400 hidden sm:inline">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-slate-400 dark:text-zinc-400" />
              <span className="text-slate-200 dark:text-zinc-300 hidden sm:inline">Copy code</span>
            </>
          )}
        </button>
      </div>
      
      {/* Code content */}
      <div className="p-4 overflow-x-auto max-h-[300px] sm:max-h-none">
        <pre className="text-xs sm:text-sm font-mono">
          <code className="text-slate-200 dark:text-zinc-300 whitespace-pre">{code}</code>
        </pre>
      </div>
    </div>
  );
}

export function InstallationSection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="relative py-16 sm:py-24 bg-white dark:bg-zinc-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium mb-4">
            <Terminal className="w-4 h-4" />
            Installation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Get Started in Minutes
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto px-4">
            Simple setup process. No complex configuration needed.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3 sm:space-y-4"
          >
            {steps.map((step) => (
              <motion.div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                whileHover={{ x: 4 }}
                className={`cursor-pointer p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                  activeStep === step.id
                    ? 'bg-slate-100 dark:bg-zinc-800/80 border-cyan-500/50'
                    : 'bg-slate-50 dark:bg-zinc-800/30 border-slate-200 dark:border-zinc-700 hover:border-slate-300 dark:hover:border-zinc-600'
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`w-8 sm:w-10 h-8 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0 ${
                    activeStep === step.id
                      ? 'bg-gradient-to-br from-cyan-500 to-blue-500 text-white'
                      : 'bg-slate-200 dark:bg-zinc-700 text-slate-500 dark:text-zinc-400'
                  }`}>
                    {step.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-0.5 sm:mb-1">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400">{step.description}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform flex-shrink-0 ${
                    activeStep === step.id ? 'text-cyan-500 dark:text-cyan-400 rotate-90' : 'text-slate-400 dark:text-zinc-600'
                  }`} />
                </div>
              </motion.div>
            ))}

            {/* Additional info */}
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 dark:from-cyan-500/10 dark:to-blue-500/10 border border-cyan-500/10 dark:border-cyan-500/20">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <Zap className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-500 dark:text-cyan-400" />
                <span className="font-medium text-slate-900 dark:text-white text-sm sm:text-base">Pro Tip</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                All components are self-contained with no external dependencies beyond what&apos;s listed. 
                Simply copy the code and it works out of the box.
              </p>
            </div>
          </motion.div>

          {/* Code/Terminal display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 sm:space-y-6"
          >
            <AnimatePresence mode="wait">
              {activeStep <= 2 ? (
                <motion.div
                  key="terminal"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <TerminalWindow
                    command={steps.find(s => s.id === activeStep)?.command || ''}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="editor"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <CodeEditor code={codeExample} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Features badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                { icon: Package, label: 'Zero config' },
                { icon: Zap, label: 'Fast setup' },
                { icon: FileCode, label: 'TypeScript' },
              ].map((feature) => (
                <div key={feature.label} className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700">
                  <feature.icon className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">{feature.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default InstallationSection;
