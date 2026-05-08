'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const textVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function HeroMinimal() {
  const headline = 'Design. Build. Ship.';
  const words = headline.split(' ');

  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-white dark:bg-slate-950">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(120,119,198,0.05),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.05),transparent_50%)]" />

      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl flex-col items-center justify-center px-4 py-20">
        {/* Main content */}
        <div className="text-center">
          {/* Animated headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            className="mb-6 text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {words.map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                className="inline-block"
                variants={textVariants}
                custom={wordIndex}
              >
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className="inline-block"
                    variants={letterVariants}
                    transition={{
                      duration: 0.5,
                      delay: wordIndex * 0.2 + charIndex * 0.03,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                {wordIndex < words.length - 1 && '\u00A0'}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-slate-600 dark:text-slate-400 sm:text-xl"
          >
            The modern React component library you&apos;ve been waiting for.
            Build stunning interfaces with minimal effort.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Read Documentation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Animated decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 w-full max-w-4xl"
        >
          {/* Browser mockup */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="relative rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl dark:border-slate-800 dark:bg-slate-900"
          >
            {/* Browser header */}
            <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3 dark:border-slate-800">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="ml-4 flex-1">
                <div className="mx-auto h-6 w-64 rounded-md bg-slate-100 dark:bg-slate-800" />
              </div>
            </div>
            
            {/* Browser content */}
            <div className="p-6">
              <div className="grid gap-4 sm:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + i * 0.1 }}
                    className="space-y-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-800/50"
                  >
                    <div className="h-24 rounded-lg bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800" />
                    <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-700" />
                    <div className="h-3 w-1/2 rounded bg-slate-100 dark:bg-slate-800" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="absolute -left-4 top-1/2 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-lg dark:border-slate-700 dark:bg-slate-800"
          >
            <span className="text-sm font-medium text-slate-900 dark:text-white">
              ⚡ 100+ Components
            </span>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="absolute -right-4 top-1/3 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-lg dark:border-slate-700 dark:bg-slate-800"
          >
            <span className="text-sm font-medium text-slate-900 dark:text-white">
              🎨 Fully Customizable
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
