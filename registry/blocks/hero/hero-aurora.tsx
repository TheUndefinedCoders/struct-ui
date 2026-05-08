'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function HeroAurora() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-slate-950">
      {/* Aurora effect */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        
        {/* Aurora layers */}
        <motion.div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(56, 189, 248, 0.1) 25%, rgba(139, 92, 246, 0.15) 50%, rgba(236, 72, 153, 0.1) 75%, transparent 100%)',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Animated aurora bands */}
        <motion.div
          className="absolute -top-[40%] left-0 h-[80%] w-full"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(56, 189, 248, 0.3), transparent)',
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -top-[30%] left-[10%] h-[60%] w-[80%]"
          style={{
            background:
              'radial-gradient(ellipse 70% 40% at 50% 100%, rgba(139, 92, 246, 0.25), transparent)',
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -top-[20%] left-[20%] h-[50%] w-[60%]"
          style={{
            background:
              'radial-gradient(ellipse 60% 30% at 50% 100%, rgba(236, 72, 153, 0.2), transparent)',
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-violet-500 to-pink-500 p-0.5">
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-950">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Ship your product
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
            at lightspeed
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 max-w-2xl text-lg text-slate-400"
        >
          Stop wasting time on repetitive UI code. Focus on what matters - 
          building great products. Our components handle the rest.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 p-0.5 font-semibold text-white"
          >
            <span className="relative flex items-center gap-2 rounded-full bg-slate-950 px-8 py-4 transition-all group-hover:bg-transparent">
              Start Building
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-8 py-4 font-semibold text-white transition-colors hover:bg-slate-800/50"
          >
            View Showcase
          </motion.button>
        </motion.div>

        {/* Features list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-400"
        >
          {[
            'No credit card required',
            'Free for developers',
            'Open source',
            'TypeScript ready',
          ].map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-2"
            >
              <Check className="h-4 w-4 text-cyan-400" />
              {feature}
            </motion.div>
          ))}
        </motion.div>

        {/* Brands */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <p className="mb-6 text-sm text-slate-500">
            Trusted by developers at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {['Vercel', 'Stripe', 'Linear', 'Notion', 'Figma'].map(
              (brand, index) => (
                <motion.span
                  key={brand}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-lg font-semibold text-slate-400"
                >
                  {brand}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
