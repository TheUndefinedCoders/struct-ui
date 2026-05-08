'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Github, Twitter } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Work', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Careers', href: '#', badge: 'Hiring' },
];

export default function HeaderUnderline() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <header className="bg-white dark:bg-slate-950">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between border-b border-slate-200 dark:border-slate-800">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-900 dark:bg-white">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-lg font-bold text-white dark:text-slate-900">S</span>
              </motion.div>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-semibold text-slate-900 dark:text-white">
                Struct Studio
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Design & Development
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative"
              >
                <Link
                  href={link.href}
                  className="relative flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  {link.name}
                  {'badge' in link && (
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400">
                      {link.badge}
                    </span>
                  )}
                </Link>
                {/* Animated underline */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-slate-900 dark:bg-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-4"
          >
            {/* Social links */}
            <div className="hidden items-center gap-2 sm:flex">
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="rounded-lg p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                <Twitter className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="rounded-lg p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                <Github className="h-4 w-4" />
              </motion.a>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group hidden items-center gap-2 rounded-full border border-slate-900 bg-slate-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-slate-900 dark:border-white dark:bg-white dark:text-slate-900 dark:hover:bg-transparent dark:hover:text-white sm:inline-flex"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </motion.div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-white dark:bg-slate-950 md:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
              <div className="space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center justify-between rounded-lg px-4 py-3 text-lg text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                    >
                      <span className="flex items-center gap-2">
                        {link.name}
                        {'badge' in link && (
                          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400">
                            {link.badge}
                          </span>
                        )}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-slate-400" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 border-t border-slate-200 pt-6 dark:border-slate-800"
              >
                <button className="w-full rounded-full bg-slate-900 px-6 py-3 font-medium text-white dark:bg-white dark:text-slate-900">
                  Get in touch
                </button>
                <div className="mt-4 flex justify-center gap-4">
                  <a href="#" className="text-slate-500 dark:text-slate-400">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-slate-500 dark:text-slate-400">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
