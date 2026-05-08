'use client';

import { motion } from 'framer-motion';
import { FileText, Code, Palette, Zap, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Plan Your Project',
    description: 'Define your goals, gather requirements, and create a comprehensive project roadmap.',
    icon: FileText,
  },
  {
    number: 2,
    title: 'Design the Interface',
    description: 'Create wireframes, mockups, and design systems that bring your vision to life.',
    icon: Palette,
  },
  {
    number: 3,
    title: 'Build & Develop',
    description: 'Transform designs into production-ready code with modern development practices.',
    icon: Code,
  },
  {
    number: 4,
    title: 'Launch & Scale',
    description: 'Deploy your project and scale seamlessly with our powerful infrastructure.',
    icon: Zap,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function StepsHorizontal() {
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
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Our Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            A proven methodology that delivers results every time.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, index) => (
            <motion.div key={step.number} variants={cardVariants} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-0.5 w-6 -translate-y-1/2 translate-x-full bg-gradient-to-r from-slate-300 to-slate-200 dark:from-slate-700 dark:to-slate-800 lg:block">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                    className="h-full origin-left bg-gradient-to-r from-blue-500 to-violet-500"
                  />
                </div>
              )}

              <motion.div
                whileHover={{ y: -5 }}
                className="relative h-full rounded-2xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-slate-800"
              >
                {/* Number Badge */}
                <div className="mb-4 flex items-center justify-between">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/25"
                  >
                    <step.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <span className="text-4xl font-bold text-slate-100 dark:text-slate-800">
                    {String(step.number).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-medium text-white dark:bg-white dark:text-slate-900"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
