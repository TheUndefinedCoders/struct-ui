'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, ChevronRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  product: [
    { name: 'Features', href: '#' },
    { name: 'Integrations', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Changelog', href: '#' },
    { name: 'Roadmap', href: '#' },
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Tutorials', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Community', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Careers', href: '#', external: true },
    { name: 'Press Kit', href: '#' },
    { name: 'Contact', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export default function FooterWave() {
  return (
    <footer className="relative bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-950">
      {/* Animated wave SVG */}
      <div className="absolute inset-x-0 top-0 -mt-1 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          className="w-full"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,64 C240,96 480,32 720,64 C960,96 1200,32 1440,64 L1440,0 L0,0 Z"
            fill="currentColor"
            className="text-white dark:text-slate-800"
            animate={{
              d: [
                'M0,64 C240,96 480,32 720,64 C960,96 1200,32 1440,64 L1440,0 L0,0 Z',
                'M0,64 C240,32 480,96 720,64 C960,32 1200,96 1440,64 L1440,0 L0,0 Z',
                'M0,64 C240,96 480,32 720,64 C960,96 1200,32 1440,64 L1440,0 L0,0 Z',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600" />
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">Struct UI</span>
            </div>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              The modern component library for building stunning interfaces. Ship faster with 
              production-ready components.
            </p>

            {/* Newsletter mini-form */}
            <div className="mt-6">
              <p className="text-sm font-medium text-slate-900 dark:text-white">
                Stay updated
              </p>
              <div className="mt-2 flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  <Mail className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Links sections */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                  {category}
                </h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                      >
                        <ChevronRight className="mr-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                        {link.name}
                        {'external' in link && link.external && (
                          <ExternalLink className="ml-1 h-3 w-3" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-slate-200 pt-8 dark:border-slate-800 sm:flex-row"
        >
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
            <p>© {new Date().getFullYear()} Struct UI</p>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
              Privacy
            </Link>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
              Terms
            </Link>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
              Cookies
            </Link>
          </div>

          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                whileHover={{ y: -3 }}
                className="rounded-full bg-slate-100 p-2 text-slate-600 transition-colors hover:bg-blue-100 hover:text-blue-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-blue-900/50 dark:hover:text-blue-400"
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
