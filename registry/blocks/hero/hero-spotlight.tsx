'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSpotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="group relative min-h-[600px] w-full overflow-hidden bg-slate-950"
    >
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(120, 119, 198, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Background grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl flex-col items-center justify-center px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center rounded-lg bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                New Release
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Create stunning
              <span className="block text-indigo-400">digital experiences</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 max-w-xl text-lg text-slate-400 lg:mx-0 mx-auto"
            >
              Transform your ideas into reality with our powerful design system.
              Build responsive, accessible, and beautiful interfaces in minutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-600"
              >
                Start Building
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-300 transition-colors hover:bg-slate-800"
              >
                <Play className="h-4 w-4" />
                Watch Demo
              </motion.button>
            </motion.div>
          </div>

          {/* Right content - Animated card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:block"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-2xl" />
              
              {/* Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-sm"
              >
                {/* Code preview mockup */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="text-slate-500">{'// Your component code'}</div>
                  <div>
                    <span className="text-purple-400">import</span>
                    <span className="text-slate-300">{' { Button } '}</span>
                    <span className="text-purple-400">from</span>
                    <span className="text-green-400">{" '@struct-ui'"}</span>
                  </div>
                  <div className="h-4" />
                  <div>
                    <span className="text-purple-400">export</span>
                    <span className="text-blue-400">{' function '}</span>
                    <span className="text-yellow-400">App</span>
                    <span className="text-slate-300">{'() {'}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">return</span>
                    <span className="text-slate-300">{' ('}</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-slate-300">{'<'}</span>
                    <span className="text-blue-400">Button</span>
                    <span className="text-slate-300">{' variant='}</span>
                    <span className="text-green-400">{'"gradient"'}</span>
                    <span className="text-slate-300">{'>'}</span>
                  </div>
                  <div className="pl-10 text-slate-300">Click me</div>
                  <div className="pl-8">
                    <span className="text-slate-300">{'</'}</span>
                    <span className="text-blue-400">Button</span>
                    <span className="text-slate-300">{'>'}</span>
                  </div>
                  <div className="pl-4 text-slate-300">{')'}</div>
                  <div className="text-slate-300">{'}'}</div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 -top-4 rounded-xl border border-slate-700 bg-slate-800 p-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-sm text-slate-300">TypeScript Ready</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 rounded-xl border border-slate-700 bg-slate-800 p-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-500" />
                  <span className="text-sm text-slate-300">Dark Mode</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
