'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: 'Building Scalable Design Systems with React and Tailwind',
    excerpt: 'Learn how to create a robust design system that scales with your team and product needs.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
    category: 'Development',
    author: { name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/100?img=1' },
    date: 'Mar 15, 2024',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'The Future of AI in Web Development',
    excerpt: 'Exploring how artificial intelligence is transforming the way we build web applications.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    category: 'AI',
    author: { name: 'Alex Rivera', avatar: 'https://i.pravatar.cc/100?img=2' },
    date: 'Mar 12, 2024',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'Mastering CSS Grid for Complex Layouts',
    excerpt: 'A comprehensive guide to creating sophisticated layouts using CSS Grid.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop',
    category: 'CSS',
    author: { name: 'Emma Wilson', avatar: 'https://i.pravatar.cc/100?img=3' },
    date: 'Mar 10, 2024',
    readTime: '10 min read',
  },
  {
    id: 4,
    title: 'Introduction to Server Components in Next.js',
    excerpt: 'Understanding the power of React Server Components and how to use them effectively.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=500&fit=crop',
    category: 'Next.js',
    author: { name: 'James Park', avatar: 'https://i.pravatar.cc/100?img=4' },
    date: 'Mar 8, 2024',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'Optimizing Performance in React Applications',
    excerpt: 'Best practices and techniques for building fast and efficient React apps.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    category: 'Performance',
    author: { name: 'Lisa Johnson', avatar: 'https://i.pravatar.cc/100?img=5' },
    date: 'Mar 5, 2024',
    readTime: '9 min read',
  },
  {
    id: 6,
    title: 'Building Accessible UI Components',
    excerpt: 'A guide to creating inclusive user interfaces that work for everyone.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    category: 'Accessibility',
    author: { name: 'Mike Brown', avatar: 'https://i.pravatar.cc/100?img=6' },
    date: 'Mar 2, 2024',
    readTime: '5 min read',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function BlogGrid() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
          >
            Our Blog
          </motion.span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Latest Articles & Insights
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Stay updated with the latest trends, tutorials, and best practices in web development.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group"
            >
              <Link href="#" className="block">
                <div className="overflow-hidden rounded-2xl">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                <div className="mt-4">
                  <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {post.category}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {post.author.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-500">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-medium text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            View All Articles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
