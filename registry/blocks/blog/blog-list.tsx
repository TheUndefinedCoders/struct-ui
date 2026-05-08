'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight, Bookmark, Share2 } from 'lucide-react';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: 'The Complete Guide to React Server Components',
    excerpt: 'Server Components represent a paradigm shift in how we build React applications. Learn how they work, when to use them, and best practices for implementation.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
    category: 'React',
    author: { name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/100?img=1' },
    date: 'Mar 15, 2024',
    readTime: '12 min read',
    tags: ['React', 'Next.js', 'Server Components'],
  },
  {
    id: 2,
    title: 'Building Accessible Web Applications: A Developer Guide',
    excerpt: 'Accessibility is not optional. This comprehensive guide covers everything from ARIA attributes to keyboard navigation and screen reader optimization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    category: 'Accessibility',
    author: { name: 'Alex Rivera', avatar: 'https://i.pravatar.cc/100?img=2' },
    date: 'Mar 12, 2024',
    readTime: '15 min read',
    tags: ['Accessibility', 'UX', 'Web Standards'],
  },
  {
    id: 3,
    title: 'Modern CSS Techniques You Should Know in 2024',
    excerpt: 'From container queries to cascade layers, discover the latest CSS features that are changing how we style web applications.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    category: 'CSS',
    author: { name: 'Emma Wilson', avatar: 'https://i.pravatar.cc/100?img=3' },
    date: 'Mar 10, 2024',
    readTime: '10 min read',
    tags: ['CSS', 'Frontend', 'Styling'],
  },
  {
    id: 4,
    title: 'State Management in 2024: Beyond Redux',
    excerpt: 'Explore modern state management solutions like Zustand, Jotai, and the built-in React features that might replace your need for external libraries.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=300&fit=crop',
    category: 'State Management',
    author: { name: 'James Park', avatar: 'https://i.pravatar.cc/100?img=4' },
    date: 'Mar 8, 2024',
    readTime: '8 min read',
    tags: ['React', 'State', 'Architecture'],
  },
];

export default function BlogList() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-b border-slate-200 pb-8 dark:border-slate-800"
        >
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Insights, tutorials, and updates from our engineering team.
          </p>
        </motion.div>

        {/* Blog List */}
        <div className="divide-y divide-slate-200 dark:divide-slate-800">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group py-10"
            >
              <div className="flex flex-col gap-6 sm:flex-row">
                {/* Image */}
                <Link href="#" className="flex-shrink-0">
                  <div className="relative h-48 w-full overflow-hidden rounded-xl sm:h-40 sm:w-56">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </Link>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <Link href="#">
                    <h2 className="mt-3 text-xl font-semibold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 sm:text-2xl">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="mt-2 line-clamp-2 text-slate-600 dark:text-slate-400">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-slate-500 dark:text-slate-500"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="h-8 w-8 rounded-full"
                      />
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {post.author.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300"
                      >
                        <Bookmark className="h-4 w-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300"
                      >
                        <Share2 className="h-4 w-4" />
                      </motion.button>
                      <Link
                        href="#"
                        className="group/link ml-2 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Read more
                        <ChevronRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center justify-center gap-2"
        >
          {[1, 2, 3, 4, 5].map((page) => (
            <motion.button
              key={page}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`h-10 w-10 rounded-lg text-sm font-medium transition-colors ${
                page === 1
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
              }`}
            >
              {page}
            </motion.button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
