'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Features', href: '#' },
  {
    name: 'Products',
    href: '#',
    dropdown: [
      { name: 'Analytics', href: '#', description: 'Track your growth' },
      { name: 'Automation', href: '#', description: 'Streamline workflows' },
      { name: 'Integrations', href: '#', description: 'Connect your tools' },
    ],
  },
  { name: 'Pricing', href: '#' },
  { name: 'Resources', href: '#' },
];

export default function HeaderGradient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 left-1/4 h-40 w-40 rounded-full bg-purple-500/30 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -top-20 right-1/4 h-40 w-40 rounded-full bg-blue-500/30 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <nav className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="relative">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-0.5">
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-white dark:bg-slate-950">
                  <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500">
                    S
                  </span>
                </div>
              </div>
              <motion.div
                className="absolute -inset-1 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 opacity-0"
                whileHover={{ opacity: 0.3 }}
              />
            </div>
            <span className="text-lg font-bold text-slate-900 dark:text-white">Struct UI</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="group flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-700 dark:bg-slate-900"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block rounded-lg p-3 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <div className="font-medium text-slate-900 dark:text-white">
                            {item.name}
                          </div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">
                            {item.description}
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden items-center gap-3 md:flex"
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
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-purple-500/25"
            >
              <Sparkles className="h-4 w-4" />
              Get Started
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden md:hidden"
            >
              <div className="space-y-1 py-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block rounded-lg px-4 py-2 text-base font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="border-t border-slate-200 pt-4 dark:border-slate-700">
                  <Link
                    href="#"
                    className="block rounded-lg px-4 py-2 text-base font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    Sign in
                  </Link>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="mt-2 w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-center font-medium text-white"
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
