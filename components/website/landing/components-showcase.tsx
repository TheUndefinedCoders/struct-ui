'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MousePointer2, Sparkles, Layers, Zap } from 'lucide-react';

const componentExamples = [
  {
    name: 'Magnetic Button',
    description: 'Buttons that follow your cursor',
    gradient: 'from-cyan-500 to-blue-500',
    icon: MousePointer2,
  },
  {
    name: 'Motion Number',
    description: 'Animated counting numbers',
    gradient: 'from-purple-500 to-pink-500',
    icon: Sparkles,
  },
  {
    name: 'Card Hover Effects',
    description: 'Interactive hover animations',
    gradient: 'from-orange-500 to-red-500',
    icon: Layers,
  },
  {
    name: 'Animated Tabs',
    description: 'Smooth tab transitions',
    gradient: 'from-emerald-500 to-teal-500',
    icon: Zap,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ComponentsShowcase() {
  return (
    <section className="relative py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 overflow-hidden">
      {/* Background decoration */}
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
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Components
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Beautiful Components
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto px-4">
            50+ ready-to-use components with smooth animations. Just copy, paste, and customize.
          </p>
        </motion.div>

        {/* Component grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          {componentExamples.map((component) => (
            <motion.div
              key={component.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-4 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none"
            >
              <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gradient-to-br ${component.gradient} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <component.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-slate-900 dark:text-white mb-1 sm:mb-2">{component.name}</h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400">{component.description}</p>
              
              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${component.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive demo area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative rounded-2xl sm:rounded-3xl bg-white dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-900/50 border border-slate-200 dark:border-zinc-800 p-4 sm:p-8 overflow-hidden shadow-sm dark:shadow-none"
        >
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
                Interactive & Accessible
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 mb-4 sm:mb-6">
                Every component is built with accessibility in mind, keyboard navigable, and works seamlessly across all modern browsers.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {['Keyboard navigation', 'Screen reader support', 'Focus management', 'ARIA attributes'].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-slate-700 dark:text-zinc-300">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/components"
                className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-medium transition-colors text-sm sm:text-base"
              >
                Explore all components
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            {/* Demo preview */}
            <div className="relative">
              <div className="aspect-video rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700 p-4 sm:p-6 flex items-center justify-center">
                <div className="space-y-3 sm:space-y-4 w-full max-w-xs">
                  {/* Simulated buttons */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-center text-white font-medium cursor-pointer text-sm sm:text-base"
                  >
                    Hover me
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl bg-slate-200 dark:bg-zinc-700 border border-slate-300 dark:border-zinc-600 text-center text-slate-700 dark:text-white font-medium cursor-pointer text-sm sm:text-base"
                  >
                    Or me
                  </motion.div>
                </div>
              </div>
              
              {/* Decorative gradient */}
              <div className="absolute -top-4 -right-4 w-24 sm:w-32 h-24 sm:h-32 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-20 sm:w-24 h-20 sm:h-24 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ComponentsShowcase;
