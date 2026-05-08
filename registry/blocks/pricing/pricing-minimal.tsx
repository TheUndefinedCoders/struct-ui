'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Everything you need to get started.',
    features: ['Up to 3 projects', '1GB storage', 'Basic support'],
    cta: 'Get Started',
    ctaStyle: 'outline',
  },
  {
    name: 'Pro',
    price: '$19',
    period: 'per month',
    description: 'Perfect for professionals and small teams.',
    features: [
      'Unlimited projects',
      '50GB storage',
      'Priority support',
      'Advanced analytics',
      'Custom domains',
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'solid',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'Dedicated support and infrastructure.',
    features: [
      'Everything in Pro',
      'Unlimited storage',
      'Dedicated support',
      'Custom contracts',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    ctaStyle: 'outline',
  },
];

export default function PricingMinimal() {
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
          <h2 className="text-3xl font-light text-slate-900 dark:text-white sm:text-4xl">
            Simple <span className="font-semibold">pricing</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            No hidden fees. No surprises. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 dark:border-slate-800 dark:bg-slate-800 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col p-8 ${
                plan.highlight
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  : 'bg-white dark:bg-slate-950'
              }`}
            >
              <div>
                <h3
                  className={`text-sm font-medium uppercase tracking-wider ${
                    plan.highlight
                      ? 'text-slate-400 dark:text-slate-600'
                      : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span
                    className={`text-4xl font-bold ${
                      plan.highlight ? '' : 'text-slate-900 dark:text-white'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`ml-2 text-sm ${
                      plan.highlight
                        ? 'text-slate-400 dark:text-slate-600'
                        : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`mt-4 text-sm ${
                    plan.highlight
                      ? 'text-slate-400 dark:text-slate-600'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="mt-8 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check
                      className={`h-5 w-5 flex-shrink-0 ${
                        plan.highlight
                          ? 'text-white dark:text-slate-900'
                          : 'text-slate-900 dark:text-white'
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlight
                          ? 'text-slate-300 dark:text-slate-700'
                          : 'text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`mt-8 flex items-center justify-center gap-2 rounded-full py-3 font-medium transition-colors ${
                  plan.highlight
                    ? 'bg-white text-slate-900 hover:bg-slate-100 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800'
                    : plan.ctaStyle === 'solid'
                    ? 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100'
                    : 'border border-slate-300 text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:text-white dark:hover:bg-slate-900'
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 dark:text-slate-400">
            Have questions?{' '}
            <Link
              href="#"
              className="font-medium text-slate-900 underline-offset-4 hover:underline dark:text-white"
            >
              Check our FAQ
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
