'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ArrowUpRight, Tag } from 'lucide-react';
import Link from 'next/link';

const categories = ['All', 'Development', 'Design', 'Product', 'AI'];

const posts = [
  {
    id: 1,
    title: 'Building a Component Library from Scratch',
    excerpt: 'A step-by-step guide to creating reusable components with modern tooling.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    category: 'Development',
    date: 'Mar 15, 2024',
    readTime: '8 min',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    id: 2,
    title: 'The Psychology of User Interface Design',
    excerpt: 'Understanding how users think and interact with digital products.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    category: 'Design',
    date: 'Mar 14, 2024',
    readTime: '6 min',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    id: 3,
    title: 'Leveraging AI for Product Development',
    excerpt: 'How artificial intelligence is changing the way we build products.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    category: 'AI',
    date: 'Mar 13, 2024',
    readTime: '10 min',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 4,
    title: 'Roadmap Planning Best Practices',
    excerpt: 'Strategies for building product roadmaps that align teams and stakeholders.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    category: 'Product',
    date: 'Mar 12, 2024',
    readTime: '7 min',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 5,
    title: 'Advanced TypeScript Patterns',
    excerpt: 'Deep dive into advanced TypeScript features for better code quality.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop',
    category: 'Development',
    date: 'Mar 11, 2024',
    readTime: '12 min',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 6,
    title: 'Creating Design Tokens at Scale',
    excerpt: 'Managing design systems with tokens for consistency across platforms.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
    category: 'Design',
    date: 'Mar 10, 2024',
    readTime: '9 min',
    gradient: 'from-indigo-500 to-blue-600',
  },
];

export default function BlogCards() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredPosts = activeCategory === 'All'
    ? posts
    : posts.filter((post) => post.category === activeCategory);

  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-900 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Explore Our Articles
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Discover insights, tutorials, and thoughts from our team of experts.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Cards Grid */}
        <motion.div
          layout
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredId(post.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative"
              >
                <Link href="#" className="block">
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl dark:bg-slate-800">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover"
                        animate={{
                          scale: hoveredId === post.id ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.4 }}
                      />
                      {/* Gradient Overlay */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredId === post.id ? 0.8 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      {/* Arrow Icon */}
                      <motion.div
                        className="absolute right-4 top-4"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                          opacity: hoveredId === post.id ? 1 : 0,
                          scale: hoveredId === post.id ? 1 : 0.5,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="rounded-full bg-white p-2">
                          <ArrowUpRight className="h-5 w-5 text-slate-900" />
                        </div>
                      </motion.div>
                      {/* Category Tag */}
                      <div className="absolute bottom-4 left-4">
                        <motion.span
                          className="inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-900 backdrop-blur-sm"
                          animate={{
                            y: hoveredId === post.id ? -5 : 0,
                          }}
                        >
                          <Tag className="h-3 w-3" />
                          {post.category}
                        </motion.span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
