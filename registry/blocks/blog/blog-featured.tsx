'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Bookmark } from 'lucide-react';
import Link from 'next/link';

const featuredPost = {
  id: 1,
  title: 'The Complete Guide to Building Modern Web Applications in 2024',
  excerpt: 'Discover the latest tools, frameworks, and best practices for creating exceptional web experiences. From React Server Components to AI-powered development, we cover everything you need to know.',
  image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop',
  category: 'Featured',
  author: { name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/100?img=1', role: 'Lead Developer' },
  date: 'Mar 15, 2024',
  readTime: '12 min read',
};

const sidePosts = [
  {
    id: 2,
    title: 'Understanding React 19 New Features',
    excerpt: 'A deep dive into the latest React features and how to use them.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
    category: 'React',
    date: 'Mar 14, 2024',
    readTime: '6 min',
  },
  {
    id: 3,
    title: 'TypeScript Best Practices for 2024',
    excerpt: 'Level up your TypeScript skills with these proven patterns.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop',
    category: 'TypeScript',
    date: 'Mar 12, 2024',
    readTime: '8 min',
  },
  {
    id: 4,
    title: 'Building Design Systems at Scale',
    excerpt: 'How to create maintainable design systems for large teams.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop',
    category: 'Design',
    date: 'Mar 10, 2024',
    readTime: '5 min',
  },
];

export default function BlogFeatured() {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-900 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              Featured Stories
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Hand-picked articles from our editorial team
            </p>
          </div>
          <Link
            href="#"
            className="hidden items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 sm:flex"
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Featured Grid */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Main Featured Post */}
          <motion.article
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group"
          >
            <Link href="#" className="block">
              <div className="relative overflow-hidden rounded-3xl">
                <motion.img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <span className="inline-block rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">
                    {featuredPost.category}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                    {featuredPost.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-300">
                    {featuredPost.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="h-10 w-10 rounded-full border-2 border-white/20"
                      />
                      <div>
                        <p className="text-sm font-medium text-white">{featuredPost.author.name}</p>
                        <p className="text-xs text-slate-400">{featuredPost.author.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                >
                  <Bookmark className="h-5 w-5" />
                </motion.button>
              </div>
            </Link>
          </motion.article>

          {/* Side Posts */}
          <div className="flex flex-col gap-6">
            {sidePosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href="#" className="flex gap-4">
                  <div className="relative h-24 w-32 flex-shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-40">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                      {post.category}
                    </span>
                    <h3 className="mt-1 font-semibold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                      {post.title}
                    </h3>
                    <p className="mt-1 line-clamp-1 text-sm text-slate-600 dark:text-slate-400">
                      {post.excerpt}
                    </p>
                    <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
