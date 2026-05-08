'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function HeroParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [...Array(50)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      {/* Animated particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent_50%)]" />

      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600/20 to-purple-600/20 px-4 py-2 text-sm font-medium text-violet-400 ring-1 ring-violet-500/30">
            <Zap className="h-4 w-4" />
            Lightning Fast Performance
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Design Without
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent"
          >
            Limitations
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 max-w-2xl text-lg text-slate-400 sm:text-xl"
        >
          Experience the next generation of UI components. Built with modern
          technologies for seamless performance and stunning visuals.
        </motion.p>

        {/* Email signup form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 w-full max-w-md"
        >
          <div className="flex gap-2 rounded-full border border-slate-700 bg-slate-800/50 p-2 backdrop-blur-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-4 text-white placeholder-slate-500 focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-2 font-semibold text-white"
            >
              Get Access
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>
          <p className="mt-3 text-sm text-slate-500">
            Free forever. No credit card required.
          </p>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {[
            {
              title: 'Blazing Fast',
              description: 'Optimized for performance',
              icon: '⚡',
            },
            {
              title: 'Fully Accessible',
              description: 'WCAG 2.1 compliant',
              icon: '♿',
            },
            {
              title: 'Dark Mode',
              description: 'Built-in theme support',
              icon: '🌙',
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="group flex flex-col items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-colors hover:border-slate-700"
            >
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="font-semibold text-white">{feature.title}</h3>
              <p className="text-sm text-slate-500">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating 3D elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotateZ: [0, 10, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-10 top-1/4 h-20 w-20 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 backdrop-blur-sm"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotateZ: [0, -10, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-10 top-1/3 h-16 w-16 rounded-full bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-sm"
          />
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotateZ: [0, 5, 0],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/4 left-1/4 h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm"
          />
        </div>
      </div>
    </section>
  );
}
