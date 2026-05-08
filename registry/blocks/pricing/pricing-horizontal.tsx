'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, Shield, Zap, Users, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    description: 'Great for individuals and small projects',
    monthlyPrice: 15,
    yearlyPrice: 144,
    color: 'emerald',
    features: ['5 team members', '20 projects', '5GB storage', 'Basic analytics', 'Email support'],
  },
  {
    name: 'Business',
    icon: Users,
    description: 'Perfect for growing teams and businesses',
    monthlyPrice: 49,
    yearlyPrice: 468,
    color: 'blue',
    popular: true,
    features: [
      '25 team members',
      'Unlimited projects',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
    ],
  },
  {
    name: 'Enterprise',
    icon: Shield,
    description: 'Advanced features for large organizations',
    monthlyPrice: 149,
    yearlyPrice: 1428,
    color: 'violet',
    features: [
      'Unlimited members',
      'Unlimited projects',
      'Unlimited storage',
      'Custom analytics',
      '24/7 phone support',
      'Dedicated manager',
      'Custom contracts',
      'SLA guarantee',
    ],
  },
];

export default function PricingHorizontal() {
  const [isYearly, setIsYearly] = useState(true);
  const [expandedPlan, setExpandedPlan] = useState<string | null>('Business');

  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-900 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
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
            className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600"
          >
            <Sparkles className="h-7 w-7 text-white" />
          </motion.div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Flexible pricing for everyone
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-400">
            Choose the plan that works best for your team. All plans include a 14-day free trial.
          </p>

          {/* Toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span
              className={`text-sm font-medium ${
                !isYearly ? 'text-slate-900 dark:text-white' : 'text-slate-500'
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative h-7 w-14 rounded-full transition-colors ${
                isYearly ? 'bg-violet-600' : 'bg-slate-300 dark:bg-slate-600'
              }`}
            >
              <motion.div
                className="absolute top-1 h-5 w-5 rounded-full bg-white shadow-md"
                animate={{ left: isYearly ? '32px' : '4px' }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <span
              className={`flex items-center gap-2 text-sm font-medium ${
                isYearly ? 'text-slate-900 dark:text-white' : 'text-slate-500'
              }`}
            >
              Yearly
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400">
                20% off
              </span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards - Horizontal Accordion */}
        <div className="mt-12 space-y-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`overflow-hidden rounded-2xl border transition-all ${
                expandedPlan === plan.name
                  ? 'border-violet-500 bg-white shadow-xl dark:border-violet-500 dark:bg-slate-800'
                  : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600'
              }`}
            >
              {/* Header - Always Visible */}
              <button
                onClick={() => setExpandedPlan(expandedPlan === plan.name ? null : plan.name)}
                className="flex w-full items-center justify-between p-6"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`rounded-xl p-2.5 ${
                      plan.color === 'emerald'
                        ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400'
                        : plan.color === 'blue'
                        ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400'
                        : 'bg-violet-100 text-violet-600 dark:bg-violet-900/50 dark:text-violet-400'
                    }`}
                  >
                    <plan.icon className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-900 dark:text-white">{plan.name}</h3>
                      {plan.popular && (
                        <span className="rounded-full bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-700 dark:bg-violet-900/50 dark:text-violet-300">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{plan.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={isYearly ? 'yearly' : 'monthly'}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="flex items-baseline gap-1"
                      >
                        <span className="text-2xl font-bold text-slate-900 dark:text-white">
                          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-sm text-slate-500">/{isYearly ? 'year' : 'month'}</span>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedPlan === plan.name ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-5 w-5 text-slate-400" />
                  </motion.div>
                </div>
              </button>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedPlan === plan.name && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-slate-200 p-6 dark:border-slate-700">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                            What's included
                          </h4>
                          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                            {plan.features.map((feature) => (
                              <li key={feature} className="flex items-center gap-2">
                                <div
                                  className={`rounded-full p-0.5 ${
                                    plan.color === 'emerald'
                                      ? 'bg-emerald-500'
                                      : plan.color === 'blue'
                                      ? 'bg-blue-500'
                                      : 'bg-violet-500'
                                  }`}
                                >
                                  <Check className="h-3 w-3 text-white" />
                                </div>
                                <span className="text-sm text-slate-600 dark:text-slate-400">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-end justify-end">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`rounded-xl px-8 py-3 font-medium text-white shadow-lg transition-all ${
                              plan.color === 'emerald'
                                ? 'bg-emerald-600 shadow-emerald-500/25 hover:bg-emerald-700'
                                : plan.color === 'blue'
                                ? 'bg-blue-600 shadow-blue-500/25 hover:bg-blue-700'
                                : 'bg-violet-600 shadow-violet-500/25 hover:bg-violet-700'
                            }`}
                          >
                            Get Started
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400"
        >
          All prices in USD. Taxes may apply. Need a custom plan?{' '}
          <a href="#" className="font-medium text-violet-600 hover:text-violet-700 dark:text-violet-400">
            Let's talk
          </a>
        </motion.p>
      </div>
    </section>
  );
}
