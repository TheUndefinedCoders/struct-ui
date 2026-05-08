'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: 'The Art of Writing Clean Code',
    excerpt: 'Principles and practices for writing maintainable, readable code that stands the test of time.',
    date: 'March 15, 2024',
    number: '01',
  },
  {
    id: 2,
    title: 'Understanding Modern JavaScript',
    excerpt: 'A comprehensive guide to ES6+ features and how they improve your development workflow.',
    date: 'March 12, 2024',
    number: '02',
  },
  {
    id: 3,
    title: 'Building for Performance',
    excerpt: 'Techniques and strategies for creating blazing-fast web applications.',
    date: 'March 10, 2024',
    number: '03',
  },
  {
    id: 4,
    title: 'The Future of Web Development',
    excerpt: 'Exploring emerging trends and technologies shaping the future of the web.',
    date: 'March 8, 2024',
    number: '04',
  },
  {
    id: 5,
    title: 'Design Systems That Scale',
    excerpt: 'Creating consistent, reusable design systems for growing teams and products.',
    date: 'March 5, 2024',
    number: '05',
  },
];

export default function BlogMinimal() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-light text-slate-900 dark:text-white sm:text-4xl">
            Recent <span className="font-semibold">Writing</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Thoughts on design, development, and building products
          </p>
        </motion.div>

        {/* Blog List */}
        <div className="mt-16">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link
                href="#"
                className="flex items-start gap-6 border-t border-slate-200 py-8 dark:border-slate-800"
              >
                <span className="hidden text-sm font-light text-slate-400 dark:text-slate-600 sm:block">
                  {post.number}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-slate-500 dark:text-slate-500">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-medium text-slate-900 transition-colors group-hover:text-slate-600 dark:text-white dark:group-hover:text-slate-300 sm:text-2xl">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    {post.excerpt}
                  </p>
                </div>
                <motion.div
                  className="hidden items-center gap-2 text-slate-400 transition-colors group-hover:text-slate-900 dark:group-hover:text-white sm:flex"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-sm">Read</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 border-t border-slate-200 pt-8 text-center dark:border-slate-800"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-sm font-medium text-slate-600 underline-offset-4 hover:underline dark:text-slate-400"
          >
            Load more articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
