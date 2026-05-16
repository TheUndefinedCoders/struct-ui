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

function TerminalWindow({ command, highlight }: { command: string; highlight: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden">
      {/* Terminal header */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-800/50 border-b border-zinc-700">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-zinc-500">Terminal</span>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-lg hover:bg-zinc-700 transition-colors"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-zinc-400" />
          )}
        </button>
      </div>
      
      {/* Terminal content */}
      <div className="p-4 font-mono text-sm">
        <span className="text-green-400">$</span>{' '}
        <span className="text-zinc-300">{command}</span>
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
    <div className="rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden">
      {/* Editor header */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-800/50 border-b border-zinc-700">
        <div className="flex items-center gap-3">
          <FileCode className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-zinc-400">magnetic-button.tsx</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-700 hover:bg-zinc-600 transition-colors text-sm"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-zinc-400" />
              <span className="text-zinc-300">Copy code</span>
            </>
          )}
        </button>
      </div>
      
      {/* Code content */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono">
          <code className="text-zinc-300 whitespace-pre">{code}</code>
        </pre>
      </div>
    </div>
  );
}

export function InstallationSection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="relative py-24 bg-zinc-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            <Terminal className="w-4 h-4" />
            Installation
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get Started in Minutes
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Simple setup process. No complex configuration needed.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {steps.map((step) => (
              <motion.div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                whileHover={{ x: 4 }}
                className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                  activeStep === step.id
                    ? 'bg-zinc-800/80 border-cyan-500/50'
                    : 'bg-zinc-800/30 border-zinc-700 hover:border-zinc-600'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg ${
                    activeStep === step.id
                      ? 'bg-gradient-to-br from-cyan-500 to-blue-500 text-white'
                      : 'bg-zinc-700 text-zinc-400'
                  }`}>
                    {step.id}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-zinc-400">{step.description}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    activeStep === step.id ? 'text-cyan-400 rotate-90' : 'text-zinc-600'
                  }`} />
                </div>
              </motion.div>
            ))}

            {/* Additional info */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span className="font-medium text-white">Pro Tip</span>
              </div>
              <p className="text-sm text-zinc-400">
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
            className="space-y-6"
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
                    highlight={steps.find(s => s.id === activeStep)?.highlight || ''}
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
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Package, label: 'Zero config' },
                { icon: Zap, label: 'Fast setup' },
                { icon: FileCode, label: 'TypeScript' },
              ].map((feature) => (
                <div key={feature.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700">
                  <feature.icon className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-zinc-300">{feature.label}</span>
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
