'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Zap, Shield, BarChart3, Users, Code, Cloud, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    name: 'Analytics',
    description: 'Real-time insights for your business',
    href: '#',
    icon: BarChart3,
    color: 'text-blue-500',
  },
  {
    name: 'Security',
    description: 'Enterprise-grade protection',
    href: '#',
    icon: Shield,
    color: 'text-green-500',
  },
  {
    name: 'Automation',
    description: 'Streamline your workflows',
    href: '#',
    icon: Zap,
    color: 'text-yellow-500',
  },
  {
    name: 'Collaboration',
    description: 'Work together seamlessly',
    href: '#',
    icon: Users,
    color: 'text-purple-500',
  },
  {
    name: 'API Platform',
    description: 'Build powerful integrations',
    href: '#',
    icon: Code,
    color: 'text-pink-500',
  },
  {
    name: 'Cloud Services',
    description: 'Scalable infrastructure',
    href: '#',
    icon: Cloud,
    color: 'text-cyan-500',
  },
];

const resources = [
  { name: 'Documentation', href: '#' },
  { name: 'API Reference', href: '#' },
  { name: 'Tutorials', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Community', href: '#' },
];

export default function HeaderMega() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="relative bg-white dark:bg-slate-950">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
              <span className="text-lg font-bold text-white">S</span>
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">Struct UI</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {/* Products dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu('products')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                Products
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    activeMenu === 'products' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeMenu === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-full mt-2 w-[600px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-700 dark:bg-slate-900"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {products.map((product, index) => (
                        <motion.div
                          key={product.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={product.href}
                            className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
                          >
                            <div className={`mt-1 rounded-lg bg-slate-100 p-2 dark:bg-slate-800 ${product.color}`}>
                              <product.icon className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="font-medium text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                                {product.name}
                              </div>
                              <div className="text-sm text-slate-500 dark:text-slate-400">
                                {product.description}
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-700">
                      <Link
                        href="#"
                        className="group inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400"
                      >
                        View all products
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu('resources')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                Resources
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    activeMenu === 'resources' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeMenu === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full mt-2 w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-700 dark:bg-slate-900"
                  >
                    {resources.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="#"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              Enterprise
            </Link>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden items-center gap-3 lg:flex"
          >
            <Link
              href="#"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              Sign in
            </Link>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-600/25 transition-colors hover:bg-blue-700"
            >
              Start Free Trial
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 lg:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-4 px-4 py-6 sm:px-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Products
                </h3>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      className="flex items-center gap-2 rounded-lg p-2 text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                    >
                      <product.icon className={`h-4 w-4 ${product.color}`} />
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Resources
                </h3>
                <div className="mt-2 space-y-1">
                  {resources.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-2 py-2 text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="border-t border-slate-200 pt-4 dark:border-slate-800">
                <Link
                  href="#"
                  className="block py-2 text-sm text-slate-600 dark:text-slate-400"
                >
                  Sign in
                </Link>
                <button className="mt-2 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white">
                  Start Free Trial
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
