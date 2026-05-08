'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, Rocket, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Hobby',
    icon: Star,
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'For personal projects',
    color: 'slate',
    features: ['1 Project', '100MB Storage', 'Community Support', 'Basic Analytics'],
    cta: 'Start for Free',
  },
  {
    name: 'Startup',
    icon: Rocket,
    monthlyPrice: 29,
    yearlyPrice: 290,
    description: 'For growing businesses',
    color: 'blue',
    popular: true,
    features: [
      '10 Projects',
      '10GB Storage',
      'Priority Support',
      'Advanced Analytics',
      'Team Collaboration',
      'API Access',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Scale',
    icon: Crown,
    monthlyPrice: 99,
    yearlyPrice: 990,
    description: 'For larger teams',
    color: 'violet',
    features: [
      'Unlimited Projects',
      '100GB Storage',
      '24/7 Support',
      'Custom Analytics',
      'Advanced Security',
      'Dedicated Manager',
      'Custom Integrations',
    ],
    cta: 'Contact Sales',
  },
];

export default function PricingToggle() {
  const [isYearly, setIsYearly] = useState(false);

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
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Choose your plan
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Start building for free, then add a plan to go live. Account plans unlock additional features.
          </p>

          {/* Toggle */}
          <div className="mt-10 inline-flex items-center gap-4 rounded-full bg-white p-1.5 shadow-lg dark:bg-slate-800">
            <button
              onClick={() => setIsYearly(false)}
              className={`relative rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
                !isYearly
                  ? 'text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              {!isYearly && (
                <motion.div
                  layoutId="toggle"
                  className="absolute inset-0 rounded-full bg-slate-900 dark:bg-white"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className={`relative ${!isYearly ? 'text-white dark:text-slate-900' : ''}`}>
                Monthly
              </span>
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`relative rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
                isYearly
                  ? 'text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              {isYearly && (
                <motion.div
                  layoutId="toggle"
                  className="absolute inset-0 rounded-full bg-slate-900 dark:bg-white"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className={`relative ${isYearly ? 'text-white dark:text-slate-900' : ''}`}>
                Yearly
              </span>
              <span className="relative ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400">
                -17%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative overflow-hidden rounded-3xl bg-white shadow-xl dark:bg-slate-800 ${
                plan.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute right-0 top-0">
                  <div className="bg-blue-500 px-4 py-1 text-xs font-medium text-white">
                    Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Icon & Name */}
                <div className="flex items-center gap-3">
                  <div
                    className={`rounded-xl p-2.5 ${
                      plan.color === 'slate'
                        ? 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
                        : plan.color === 'blue'
                        ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400'
                        : 'bg-violet-100 text-violet-600 dark:bg-violet-900/50 dark:text-violet-400'
                    }`}
                  >
                    <plan.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {plan.description}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="mt-6 flex items-baseline">
                  <span className="text-sm text-slate-500 dark:text-slate-400">$</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={isYearly ? 'yearly' : 'monthly'}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.2 }}
                      className="text-5xl font-bold text-slate-900 dark:text-white"
                    >
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </motion.span>
                  </AnimatePresence>
                  <span className="ml-2 text-slate-500 dark:text-slate-400">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-slate-200 dark:bg-slate-700" />

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <motion.li
                      key={feature}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className={`rounded-full p-1 ${
                          plan.color === 'slate'
                            ? 'bg-slate-100 dark:bg-slate-700'
                            : plan.color === 'blue'
                            ? 'bg-blue-100 dark:bg-blue-900/50'
                            : 'bg-violet-100 dark:bg-violet-900/50'
                        }`}
                      >
                        <Check
                          className={`h-3.5 w-3.5 ${
                            plan.color === 'slate'
                              ? 'text-slate-600 dark:text-slate-400'
                              : plan.color === 'blue'
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-violet-600 dark:text-violet-400'
                          }`}
                        />
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-8 w-full rounded-xl py-3.5 font-medium transition-all ${
                    plan.popular
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-700'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
