'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Layout, Grid3X3 } from 'lucide-react';

const blocks = [
  {
    name: 'Hero Sections',
    count: 6,
    description: 'Eye-catching hero layouts',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Pricing Tables',
    count: 6,
    description: 'Conversion-optimized pricing',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Headers',
    count: 6,
    description: 'Navigation and branding',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'Footers',
    count: 6,
    description: 'Professional footer layouts',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Blog Sections',
    count: 6,
    description: 'Content showcase layouts',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'Team Cards',
    count: 4,
    description: 'Team member showcases',
    gradient: 'from-rose-500 to-pink-500',
  },
];

export function BlocksShowcase() {
  return (
    <section className="relative py-16 sm:py-24 bg-white dark:bg-zinc-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs sm:text-sm font-medium mb-4">
            <Layout className="w-4 h-4" />
            Blocks
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Ready-to-Use Sections
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto px-4">
            Complete page sections that work out of the box. Hero sections, pricing tables, footers, and more.
          </p>
        </motion.div>

        {/* Blocks grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {blocks.map((block, index) => (
            <motion.div
              key={block.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700 hover:border-slate-300 dark:hover:border-zinc-600 p-4 sm:p-6 transition-all duration-300 overflow-hidden"
            >
              {/* Preview placeholder */}
              <div className={`h-20 sm:h-32 rounded-lg sm:rounded-xl bg-gradient-to-br ${block.gradient} opacity-10 dark:opacity-20 mb-3 sm:mb-4 flex items-center justify-center`}>
                <Grid3X3 className="w-8 sm:w-12 h-8 sm:h-12 text-slate-400 dark:text-white/50" />
              </div>
              
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-lg font-semibold text-slate-900 dark:text-white mb-0.5 sm:mb-1 truncate">{block.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 truncate">{block.description}</p>
                </div>
                <span className={`flex-shrink-0 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-gradient-to-r ${block.gradient} text-white`}>
                  {block.count}
                </span>
              </div>
              
              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${block.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 border border-purple-500/10 dark:border-purple-500/20"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              Build Pages in Minutes
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 mb-4 sm:mb-6">
              Combine blocks like LEGO pieces to create complete, stunning pages. Each block is designed to work seamlessly with others.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6">
              {['Responsive', 'Dark Mode', 'Customizable', 'Accessible'].map((tag) => (
                <span key={tag} className="px-2 sm:px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 text-xs sm:text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href="/blocks"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 text-sm sm:text-base"
            >
              Browse All Blocks
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          {/* Visual demo */}
          <div className="relative hidden sm:block">
            <div className="space-y-4">
              {/* Simulated block previews */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="h-16 rounded-xl bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center px-4"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500" />
                <div className="ml-3 space-y-1 flex-1">
                  <div className="h-2 w-20 bg-slate-300 dark:bg-zinc-600 rounded" />
                  <div className="h-2 w-32 bg-slate-200 dark:bg-zinc-700 rounded" />
                </div>
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-slate-200 dark:bg-zinc-700 rounded-full" />
                  <div className="h-6 w-16 bg-cyan-500 rounded-full" />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="h-40 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-slate-200 dark:border-zinc-700 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="h-3 w-48 bg-slate-300 dark:bg-zinc-600 rounded mx-auto mb-2" />
                  <div className="h-2 w-64 bg-slate-200 dark:bg-zinc-700 rounded mx-auto mb-4" />
                  <div className="flex gap-3 justify-center">
                    <div className="h-8 w-24 bg-purple-500 rounded-lg" />
                    <div className="h-8 w-24 bg-slate-200 dark:bg-zinc-700 rounded-lg" />
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-3 gap-3"
              >
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-24 rounded-xl bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 p-3">
                    <div className="h-2 w-full bg-slate-300 dark:bg-zinc-600 rounded mb-2" />
                    <div className="h-2 w-3/4 bg-slate-200 dark:bg-zinc-700 rounded" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BlocksShowcase;
