'use client';

import { motion } from 'framer-motion';
import { 
  Zap, 
  Palette, 
  Code2, 
  Smartphone, 
  Moon, 
  Accessibility, 
  GitBranch, 
  Sparkles 
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for performance with minimal bundle size',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Palette,
    title: 'Fully Customizable',
    description: 'Easy to modify colors, spacing, and animations',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Well-structured, readable, and maintainable code',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Smartphone,
    title: 'Responsive',
    description: 'Works perfectly on all devices and screen sizes',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Moon,
    title: 'Dark Mode',
    description: 'Built-in dark mode support for all components',
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    icon: Accessibility,
    title: 'Accessible',
    description: 'WCAG compliant with keyboard navigation support',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: GitBranch,
    title: 'Open Source',
    description: 'Free to use in personal and commercial projects',
    gradient: 'from-gray-500 to-slate-500',
  },
  {
    icon: Sparkles,
    title: 'Animations',
    description: 'Smooth animations powered by Framer Motion',
    gradient: 'from-amber-500 to-yellow-500',
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

export function FeaturesSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs sm:text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Why Choose Our Library?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto px-4">
            Built with modern best practices and developer experience in mind.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none"
            >
              {/* Icon */}
              <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-sm sm:text-lg font-semibold text-slate-900 dark:text-white mb-1 sm:mb-2">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400">{feature.description}</p>
              
              {/* Hover glow */}
              <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturesSection;
