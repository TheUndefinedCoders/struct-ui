'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    monthlyPrice: 12,
    yearlyPrice: 99,
    description: 'Essential features for individuals',
    features: [
      { name: '5 Projects', included: true },
      { name: '10GB Storage', included: true },
      { name: 'Basic Analytics', included: true },
      { name: 'Email Support', included: true },
      { name: 'API Access', included: false },
      { name: 'Custom Domain', included: false },
    ],
  },
  {
    name: 'Professional',
    monthlyPrice: 39,
    yearlyPrice: 349,
    description: 'Advanced features for professionals',
    popular: true,
    features: [
      { name: 'Unlimited Projects', included: true },
      { name: '100GB Storage', included: true },
      { name: 'Advanced Analytics', included: true },
      { name: 'Priority Support', included: true },
      { name: 'API Access', included: true },
      { name: 'Custom Domain', included: true },
    ],
  },
  {
    name: 'Enterprise',
    monthlyPrice: 99,
    yearlyPrice: 899,
    description: 'Complete solution for teams',
    features: [
      { name: 'Unlimited Everything', included: true },
      { name: 'Unlimited Storage', included: true },
      { name: 'Custom Analytics', included: true },
      { name: '24/7 Phone Support', included: true },
      { name: 'Full API Access', included: true },
      { name: 'White Labeling', included: true },
    ],
  },
];

export default function PricingGradient() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-24">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-purple-600/30 blur-[120px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-600/30 blur-[120px]"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/20 blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Pricing that scales with you
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Start free, upgrade when you're ready. No hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className={`text-sm ${!isYearly ? 'text-white' : 'text-slate-500'}`}>
              Monthly
            </span>
            <motion.button
              onClick={() => setIsYearly(!isYearly)}
              className="relative h-8 w-16 rounded-full bg-slate-800 p-1"
            >
              <motion.div
                className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                animate={{ x: isYearly ? 32 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </motion.button>
            <span className={`text-sm ${isYearly ? 'text-white' : 'text-slate-500'}`}>
              Yearly
              <span className="ml-2 rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-400">
                Save 30%
              </span>
            </span>
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
              className={`relative rounded-3xl ${
                plan.popular
                  ? 'bg-gradient-to-b from-purple-500/20 to-pink-500/20 p-[1px]'
                  : 'bg-slate-800/50 backdrop-blur-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 text-sm font-medium text-white">
                    Recommended
                  </span>
                </div>
              )}
              <div
                className={`h-full rounded-3xl p-8 ${
                  plan.popular ? 'bg-slate-900/90 backdrop-blur-sm' : ''
                }`}
              >
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{plan.description}</p>

                {/* Price */}
                <div className="mt-6 flex items-baseline">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={isYearly ? 'yearly' : 'monthly'}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="text-5xl font-bold text-white"
                    >
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </motion.span>
                  </AnimatePresence>
                  <span className="ml-2 text-slate-400">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>

                {/* Features */}
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-center gap-3">
                      {feature.included ? (
                        <div className="rounded-full bg-emerald-500/20 p-1">
                          <Check className="h-4 w-4 text-emerald-400" />
                        </div>
                      ) : (
                        <div className="rounded-full bg-slate-700/50 p-1">
                          <X className="h-4 w-4 text-slate-500" />
                        </div>
                      )}
                      <span
                        className={feature.included ? 'text-slate-300' : 'text-slate-500'}
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
