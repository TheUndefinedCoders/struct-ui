'use client';

import { motion } from 'framer-motion';
import { Check, Minus, HelpCircle } from 'lucide-react';

const plans = [
  { name: 'Free', price: 0, cta: 'Get Started' },
  { name: 'Starter', price: 19, cta: 'Start Trial' },
  { name: 'Pro', price: 49, cta: 'Start Trial', popular: true },
  { name: 'Enterprise', price: 'Custom', cta: 'Contact Us' },
];

const features = [
  {
    category: 'Core Features',
    items: [
      { name: 'Projects', values: ['3', '10', 'Unlimited', 'Unlimited'] },
      { name: 'Storage', values: ['1GB', '10GB', '100GB', 'Unlimited'] },
      { name: 'Bandwidth', values: ['10GB', '100GB', '1TB', 'Unlimited'] },
      { name: 'Team Members', values: ['1', '5', '20', 'Unlimited'] },
    ],
  },
  {
    category: 'Features',
    items: [
      { name: 'Custom Domain', values: [false, true, true, true] },
      { name: 'SSL Certificate', values: [true, true, true, true] },
      { name: 'API Access', values: [false, true, true, true] },
      { name: 'Webhooks', values: [false, false, true, true] },
      { name: 'Advanced Analytics', values: [false, false, true, true] },
    ],
  },
  {
    category: 'Support',
    items: [
      { name: 'Community Support', values: [true, true, true, true] },
      { name: 'Email Support', values: [false, true, true, true] },
      { name: 'Priority Support', values: [false, false, true, true] },
      { name: 'Dedicated Manager', values: [false, false, false, true] },
      { name: 'SLA', values: [false, false, false, true] },
    ],
  },
];

export default function PricingComparison() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Compare Plans
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Find the perfect plan for your needs with our detailed comparison.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"
        >
          {/* Plans Header */}
          <div className="grid grid-cols-5 gap-px bg-slate-200 dark:bg-slate-800">
            <div className="bg-slate-50 p-6 dark:bg-slate-900">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Features
              </span>
            </div>
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 text-center ${
                  plan.popular
                    ? 'bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/50 dark:to-slate-900'
                    : 'bg-white dark:bg-slate-900'
                }`}
              >
                {plan.popular && (
                  <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {plan.name}
                </h3>
                <div className="mt-2">
                  {typeof plan.price === 'number' ? (
                    <>
                      <span className="text-3xl font-bold text-slate-900 dark:text-white">
                        ${plan.price}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400">/mo</span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">
                      {plan.price}
                    </span>
                  )}
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-4 w-full rounded-lg py-2 text-sm font-medium transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Feature Categories */}
          {features.map((category) => (
            <div key={category.category}>
              {/* Category Header */}
              <div className="grid grid-cols-5 gap-px bg-slate-200 dark:bg-slate-800">
                <div className="col-span-5 bg-slate-100 px-6 py-3 dark:bg-slate-800">
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    {category.category}
                  </span>
                </div>
              </div>

              {/* Feature Rows */}
              {category.items.map((feature, featureIndex) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: featureIndex * 0.05 }}
                  className="grid grid-cols-5 gap-px bg-slate-200 dark:bg-slate-800"
                >
                  <div className="flex items-center gap-2 bg-white px-6 py-4 dark:bg-slate-900">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {feature.name}
                    </span>
                    <HelpCircle className="h-4 w-4 text-slate-400" />
                  </div>
                  {feature.values.map((value, valueIndex) => (
                    <div
                      key={valueIndex}
                      className={`flex items-center justify-center bg-white px-6 py-4 dark:bg-slate-900 ${
                        plans[valueIndex].popular
                          ? 'bg-blue-50/50 dark:bg-blue-950/20'
                          : ''
                      }`}
                    >
                      {typeof value === 'boolean' ? (
                        value ? (
                          <div className="rounded-full bg-emerald-100 p-1 dark:bg-emerald-900/50">
                            <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                          </div>
                        ) : (
                          <Minus className="h-4 w-4 text-slate-300 dark:text-slate-600" />
                        )
                      ) : (
                        <span className="text-sm font-medium text-slate-900 dark:text-white">
                          {value}
                        </span>
                      )}
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
