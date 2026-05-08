'use client';

import { motion } from 'framer-motion';
import { Search, Lightbulb, Wrench, BarChart3 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We analyze your needs, research your market, and identify opportunities for growth.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Our team develops a tailored plan aligned with your business objectives.',
    icon: Lightbulb,
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'We execute the strategy with precision, keeping you informed every step of the way.',
    icon: Wrench,
  },
  {
    number: '04',
    title: 'Optimization',
    description: 'Continuous monitoring and refinement ensure long-term success and growth.',
    icon: BarChart3,
  },
];

export default function StepsGradient() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-24">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-violet-600/30 blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-cyan-600/30 blur-[100px]"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/20 blur-[80px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.1 }}
            className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-sm text-slate-300">Our Approach</span>
          </motion.div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            How We <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            A systematic approach that transforms ideas into impactful solutions.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute -right-3 top-8 hidden h-px w-6 bg-gradient-to-r from-violet-500/50 to-transparent lg:block" />
              )}

              <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10">
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/10 to-cyan-500/10 opacity-0 transition-opacity group-hover:opacity-100"
                />

                {/* Number */}
                <div className="relative">
                  <span className="text-6xl font-bold text-white/5">{step.number}</span>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="absolute left-0 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500"
                  >
                    <step.icon className="h-7 w-7 text-white" />
                  </motion.div>
                </div>

                <h3 className="relative mt-6 text-xl font-semibold text-white">{step.title}</h3>
                <p className="relative mt-2 text-slate-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:grid-cols-3"
        >
          {[
            { value: '500+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
