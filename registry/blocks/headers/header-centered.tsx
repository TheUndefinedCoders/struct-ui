'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import Link from 'next/link';

const leftLinks = [
  { name: 'Shop', href: '#' },
  { name: 'Collections', href: '#' },
  { name: 'About', href: '#' },
];

const rightLinks = [
  { name: 'Journal', href: '#' },
  { name: 'Stockists', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function HeaderCentered() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-slate-950">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Left Navigation */}
          <div className="hidden w-1/3 md:flex md:items-center md:gap-8">
            {leftLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-sm uppercase tracking-widest text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button (left) */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>

          {/* Centered Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex w-1/3 justify-center"
          >
            <Link href="#" className="group relative">
              <motion.span
                className="text-2xl font-light tracking-[0.3em] text-slate-900 dark:text-white"
                whileHover={{ letterSpacing: '0.4em' }}
                transition={{ duration: 0.3 }}
              >
                STRUCT
              </motion.span>
              <motion.span
                className="absolute -bottom-1 left-0 h-px w-0 bg-slate-900 dark:bg-white"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>

          {/* Right Navigation */}
          <div className="hidden w-1/3 md:flex md:items-center md:justify-end md:gap-8">
            {rightLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 3) * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-sm uppercase tracking-widest text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4 md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="text-slate-600 dark:text-slate-400"
            >
              <Search className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="relative text-slate-600 dark:text-slate-400"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-[10px] text-white dark:bg-white dark:text-slate-900">
                2
              </span>
            </motion.button>
          </div>
        </div>

        {/* Desktop icon bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="hidden border-t border-slate-200 py-3 dark:border-slate-800 md:flex md:items-center md:justify-center md:gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <Search className="h-4 w-4" />
            Search
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <User className="h-4 w-4" />
            Account
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <ShoppingBag className="h-4 w-4" />
            Cart (2)
          </motion.button>
        </motion.div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 md:hidden"
          >
            <div className="space-y-1 px-4 py-6">
              {[...leftLinks, ...rightLinks].map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block py-3 text-center text-lg uppercase tracking-widest text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center gap-8 border-t border-slate-200 pt-6 dark:border-slate-800"
              >
                <button className="flex flex-col items-center gap-1 text-slate-600 dark:text-slate-400">
                  <User className="h-5 w-5" />
                  <span className="text-xs uppercase tracking-wider">Account</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-slate-600 dark:text-slate-400">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="text-xs uppercase tracking-wider">Cart (2)</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
