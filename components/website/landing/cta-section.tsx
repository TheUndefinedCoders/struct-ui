'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Github, Star } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative py-16 sm:py-24 bg-white dark:bg-zinc-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 dark:from-cyan-500/20 dark:via-purple-500/20 dark:to-pink-500/20 opacity-50 dark:opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-slate-100 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <Star className="w-4 h-4 text-yellow-500" />
            Open Source & Free
          </span>
          
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 px-4">
            Ready to Build
            <br />
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 bg-clip-text text-transparent">
              Something Amazing?
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
            Join thousands of developers using our components to build beautiful, 
            performant web applications. Start for free today.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <Link
              href="/components"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 text-sm sm:text-base"
            >
              Get Started
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-900 dark:text-white font-medium rounded-xl border border-slate-200 dark:border-zinc-700 transition-all duration-300 text-sm sm:text-base"
            >
              <Github className="w-4 sm:w-5 h-4 sm:h-5" />
              Star on GitHub
            </a>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}

export default CTASection;
