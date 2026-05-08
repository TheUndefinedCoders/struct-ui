'use client';

import { motion } from 'framer-motion';
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
  Dribbble,
  Figma,
  Heart,
} from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:bg-sky-500 hover:text-white' },
  { name: 'GitHub', icon: Github, href: '#', color: 'hover:bg-slate-700 hover:text-white' },
  { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:bg-blue-600 hover:text-white' },
  { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:bg-pink-500 hover:text-white' },
  { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:bg-red-600 hover:text-white' },
  { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:bg-blue-500 hover:text-white' },
  { name: 'Dribbble', icon: Dribbble, href: '#', color: 'hover:bg-pink-400 hover:text-white' },
  { name: 'Figma', icon: Figma, href: '#', color: 'hover:bg-purple-500 hover:text-white' },
];

const footerLinks = [
  { name: 'About', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Careers', href: '#' },
  { name: 'Help', href: '#' },
  { name: 'Privacy', href: '#' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};

export default function FooterSocial() {
  return (
    <footer className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
              <span className="text-xl font-bold text-white">S</span>
            </div>
            <h2 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">Struct UI</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Build beautiful interfaces
            </p>
          </motion.div>

          {/* Social links grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 grid grid-cols-4 gap-4 sm:grid-cols-8"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition-colors dark:bg-slate-800 dark:text-slate-400 ${social.color}`}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group relative text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-pink-500 transition-all group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Divider with animation */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '100%' }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-12 max-w-md"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />
          </motion.div>

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-8"
          >
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} Struct UI. All rights reserved.
            </p>
            <span className="hidden text-slate-300 dark:text-slate-700 sm:block">•</span>
            <p className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
              Made with
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              >
                <Heart className="h-4 w-4 fill-red-500 text-red-500" />
              </motion.span>
              by developers
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
