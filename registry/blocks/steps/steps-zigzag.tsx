'use client';

import { motion } from 'framer-motion';
import { Pencil, Eye, Send, MessageSquare, ArrowDown } from 'lucide-react';

const steps = [
  {
    title: 'Write Your Content',
    description: 'Create engaging content with our powerful editor. Add text, images, and rich media easily.',
    icon: Pencil,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
  },
  {
    title: 'Preview & Edit',
    description: 'See exactly how your content will look. Make adjustments in real-time with instant preview.',
    icon: Eye,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    title: 'Publish Instantly',
    description: 'Go live with one click. Your content is distributed across all channels automatically.',
    icon: Send,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    title: 'Engage & Grow',
    description: 'Track engagement, respond to feedback, and watch your audience grow over time.',
    icon: MessageSquare,
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
  },
];

export default function StepsZigzag() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
            className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
          >
            Simple Process
          </motion.span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            From Idea to Impact
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Our streamlined workflow helps you create, publish, and grow effortlessly.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-16 space-y-16 lg:space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-2xl"
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-64 w-full object-cover sm:h-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  
                  {/* Step Number Overlay */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm dark:bg-slate-900/90"
                  >
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30">
                    <step.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                  >
                    Learn more
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-slate-400"
          >
            <span className="text-sm">Explore More</span>
            <ArrowDown className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
