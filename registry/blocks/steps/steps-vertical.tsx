'use client';

import { motion } from 'framer-motion';
import { UserPlus, Settings, Rocket, Trophy, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Create Your Account',
    description: 'Sign up in seconds with your email or social accounts. No credit card required to get started.',
    icon: UserPlus,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    title: 'Configure Your Workspace',
    description: 'Set up your workspace, invite team members, and customize settings to match your workflow.',
    icon: Settings,
    color: 'from-violet-500 to-purple-500',
  },
  {
    number: '03',
    title: 'Launch Your Project',
    description: 'Start building with our powerful tools. Deploy instantly with one click to our global network.',
    icon: Rocket,
    color: 'from-orange-500 to-red-500',
  },
  {
    number: '04',
    title: 'Achieve Success',
    description: 'Monitor your progress, optimize performance, and scale effortlessly as you grow.',
    icon: Trophy,
    color: 'from-emerald-500 to-teal-500',
  },
];

export default function StepsVertical() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
          >
            How It Works
          </motion.span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Get started in 4 simple steps
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            From sign up to success, we've made the journey simple and straightforward.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500 via-violet-500 via-orange-500 to-emerald-500 sm:left-1/2 sm:block sm:-translate-x-px" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative flex items-start gap-6 pb-12 last:pb-0 sm:gap-12 ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 ${
                  index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'
                }`}
              >
                <span
                  className={`inline-block text-sm font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                >
                  Step {step.number}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{step.description}</p>
              </motion.div>

              {/* Center Icon */}
              <div className="relative z-10 flex-shrink-0">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2, type: 'spring' }}
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-lg`}
                >
                  <step.icon className="h-7 w-7 text-white" />
                </motion.div>
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} blur-xl opacity-40`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.2, 0.4],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>

              {/* Empty Space for Alignment */}
              <div className="hidden flex-1 sm:block" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-3 font-medium text-white shadow-lg shadow-blue-500/25"
          >
            <CheckCircle2 className="h-5 w-5" />
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
