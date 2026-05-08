'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Twitter } from 'lucide-react';

export default function HeroGrid() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-black">
      {/* Animated grid background */}
      <div className="absolute inset-0">
        {/* Radial gradient mask */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
        
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Animated grid lines */}
        <svg className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[...Array(5)].map((_, i) => (
            <motion.line
              key={`h-${i}`}
              x1="0"
              y1={`${20 + i * 20}%`}
              x2="100%"
              y2={`${20 + i * 20}%`}
              stroke="url(#grid-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'easeInOut',
              }}
            />
          ))}
          {[...Array(7)].map((_, i) => (
            <motion.line
              key={`v-${i}`}
              x1={`${10 + i * 15}%`}
              y1="0"
              x2={`${10 + i * 15}%`}
              y2="100%"
              stroke="url(#grid-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeInOut',
              }}
            />
          ))}
        </svg>

        {/* Glowing orbs */}
        <motion.div
          className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-blue-500/20 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-cyan-500/20 blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center">
        {/* Announcement */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group mb-8 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-4 py-2 text-sm text-slate-400 backdrop-blur-sm transition-colors hover:border-slate-700"
        >
          <span className="flex h-2 w-2">
            <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
          </span>
          Announcing our $10M Series A
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </motion.a>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          The Future of
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Web Development
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 max-w-2xl text-lg text-slate-400"
        >
          Build production-ready applications with our enterprise-grade component
          library. Designed for speed, accessibility, and developer experience.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 font-semibold text-white"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Started Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/50 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-slate-800"
          >
            <Github className="h-5 w-5" />
            Star on GitHub
          </motion.button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="h-10 w-10 rounded-full border-2 border-slate-900 bg-gradient-to-br from-slate-700 to-slate-800"
              />
            ))}
          </div>
          <p className="text-sm text-slate-500">
            Trusted by{' '}
            <span className="font-semibold text-slate-300">10,000+</span>{' '}
            developers worldwide
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 transition-colors hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-500 transition-colors hover:text-white">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
