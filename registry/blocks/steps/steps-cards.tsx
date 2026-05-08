'use client';

import { motion } from 'framer-motion';
import { Upload, Cpu, Sparkles, Download, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Upload Your Files',
    description: 'Drag and drop your files or browse to select. We support all major formats.',
    icon: Upload,
    color: 'bg-blue-500',
    lightColor: 'bg-blue-100 dark:bg-blue-900/30',
    textColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    title: 'AI Processing',
    description: 'Our advanced AI analyzes and processes your content automatically.',
    icon: Cpu,
    color: 'bg-violet-500',
    lightColor: 'bg-violet-100 dark:bg-violet-900/30',
    textColor: 'text-violet-600 dark:text-violet-400',
  },
  {
    title: 'Enhancement',
    description: 'Smart optimization and enhancement applied to maximize quality.',
    icon: Sparkles,
    color: 'bg-amber-500',
    lightColor: 'bg-amber-100 dark:bg-amber-900/30',
    textColor: 'text-amber-600 dark:text-amber-400',
  },
  {
    title: 'Download Results',
    description: 'Get your processed files instantly in your preferred format.',
    icon: Download,
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-100 dark:bg-emerald-900/30',
    textColor: 'text-emerald-600 dark:text-emerald-400',
  },
];

export default function StepsCards() {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-900 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            transition={{ type: 'spring' }}
            className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-600"
          >
            <CheckCircle className="h-6 w-6 text-white" />
          </motion.div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Transform your content in four simple steps with our AI-powered platform.
          </p>
        </motion.div>

        {/* Steps Cards */}
        <div className="relative mt-16">
          {/* Connection Line - Desktop */}
          <div className="absolute left-0 right-0 top-20 hidden h-0.5 bg-gradient-to-r from-blue-500 via-violet-500 via-amber-500 to-emerald-500 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative rounded-2xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-slate-800"
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 left-6">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                      className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${step.color} text-sm font-bold text-white shadow-lg`}
                    >
                      {index + 1}
                    </motion.span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`mb-4 mt-4 inline-flex h-14 w-14 items-center justify-center rounded-xl ${step.lightColor}`}
                  >
                    <step.icon className={`h-7 w-7 ${step.textColor}`} />
                  </motion.div>

                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>

                  {/* Progress Dots */}
                  <div className="mt-4 flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className={`h-1.5 w-1.5 rounded-full ${
                          i <= index ? step.color : 'bg-slate-200 dark:bg-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 p-8 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <div>
            <h3 className="text-xl font-semibold text-white">Ready to transform your workflow?</h3>
            <p className="mt-1 text-violet-200">Start processing your first file in seconds.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-white px-6 py-3 font-medium text-violet-600 shadow-lg transition-colors hover:bg-violet-50"
          >
            Try It Free
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
