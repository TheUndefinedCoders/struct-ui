'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Connect',
    description: 'Link your accounts and data sources in just a few clicks. We support over 100+ integrations.',
  },
  {
    number: '02',
    title: 'Configure',
    description: 'Set up your preferences and customize your workflow to match your specific needs.',
  },
  {
    number: '03',
    title: 'Create',
    description: 'Start building amazing things with our intuitive tools and powerful features.',
  },
];

export default function StepsMinimal() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl font-light text-slate-900 dark:text-white sm:text-4xl">
            Three steps to <span className="font-semibold">get started</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            We've simplified the process so you can focus on what matters most.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative"
            >
              {/* Number */}
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.1, type: 'spring' }}
                className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-slate-200 text-2xl font-light text-slate-400 transition-colors group-hover:border-slate-900 group-hover:text-slate-900 dark:border-slate-800 dark:text-slate-600 dark:group-hover:border-white dark:group-hover:text-white"
              >
                {step.number}
              </motion.span>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-400">{step.description}</p>

              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  className="absolute -right-4 top-8 hidden text-slate-300 dark:text-slate-700 lg:block"
                >
                  <ArrowRight className="h-6 w-6" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 h-px bg-slate-200 dark:bg-slate-800"
        />

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-lg font-medium text-slate-900 dark:text-white">
              Ready to get started?
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              Join thousands of teams already using our platform.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-900 px-6 py-3 font-medium text-white transition-colors hover:bg-transparent hover:text-slate-900 dark:border-white dark:bg-white dark:text-slate-900 dark:hover:bg-transparent dark:hover:text-white"
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
