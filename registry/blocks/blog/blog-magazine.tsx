'use client';

import { motion } from 'framer-motion';
import { Clock, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const mainPost = {
  id: 1,
  title: 'The Evolution of Frontend Architecture: From jQuery to React Server Components',
  excerpt: 'A journey through the history of frontend development and what the future holds for web applications.',
  image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&h=800&fit=crop',
  category: 'Architecture',
  author: { name: 'David Kim', avatar: 'https://i.pravatar.cc/100?img=8' },
  date: 'Mar 15, 2024',
  readTime: '15 min read',
};

const secondaryPosts = [
  {
    id: 2,
    title: 'Why TypeScript is Essential for Large Scale Applications',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop',
    category: 'TypeScript',
    readTime: '8 min',
  },
  {
    id: 3,
    title: 'Micro-Frontends: Breaking Down Monoliths',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    category: 'Architecture',
    readTime: '10 min',
  },
];

const trendingPosts = [
  { id: 4, title: 'Getting Started with Tailwind CSS v4', views: '12.5k', trend: '+24%' },
  { id: 5, title: 'React 19: What You Need to Know', views: '10.2k', trend: '+18%' },
  { id: 6, title: 'The State of JavaScript 2024', views: '8.7k', trend: '+15%' },
  { id: 7, title: 'Building APIs with tRPC', views: '6.3k', trend: '+12%' },
];

const latestPosts = [
  {
    id: 8,
    title: 'Mastering CSS Container Queries',
    category: 'CSS',
    date: 'Mar 14',
  },
  {
    id: 9,
    title: 'Introduction to Web Components',
    category: 'HTML',
    date: 'Mar 13',
  },
  {
    id: 10,
    title: 'Testing React Apps with Vitest',
    category: 'Testing',
    date: 'Mar 12',
  },
  {
    id: 11,
    title: 'GraphQL vs REST in 2024',
    category: 'API',
    date: 'Mar 11',
  },
];

export default function BlogMagazine() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Featured Post */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group lg:col-span-2"
          >
            <Link href="#" className="block">
              <div className="relative overflow-hidden rounded-3xl">
                <motion.img
                  src={mainPost.image}
                  alt={mainPost.title}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <span className="inline-block rounded-lg bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
                    {mainPost.category}
                  </span>
                  <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                    {mainPost.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-slate-300 sm:text-lg">
                    {mainPost.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <img
                      src={mainPost.author.avatar}
                      alt={mainPost.author.name}
                      className="h-10 w-10 rounded-full border-2 border-white/30"
                    />
                    <div className="text-sm">
                      <p className="font-medium text-white">{mainPost.author.name}</p>
                      <p className="text-slate-400">{mainPost.date} · {mainPost.readTime}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* Trending Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-900"
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-rose-500" />
              <h3 className="font-semibold text-slate-900 dark:text-white">Trending Now</h3>
            </div>
            <div className="mt-6 space-y-4">
              {trendingPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href="#" className="group flex items-start gap-4">
                    <span className="text-2xl font-bold text-slate-200 dark:text-slate-700">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                        {post.title}
                      </h4>
                      <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                        <span>{post.views} views</span>
                        <span className="text-emerald-500">{post.trend}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Secondary Posts Row */}
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {secondaryPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href="#" className="block">
                <div className="overflow-hidden rounded-2xl">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-2 font-semibold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </motion.article>
          ))}

          {/* Latest Posts Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800"
          >
            <h3 className="font-semibold text-slate-900 dark:text-white">Latest Posts</h3>
            <div className="mt-4 space-y-4">
              {latestPosts.map((post) => (
                <Link
                  key={post.id}
                  href="#"
                  className="group block border-b border-slate-100 pb-3 last:border-0 dark:border-slate-800"
                >
                  <span className="text-xs text-emerald-600 dark:text-emerald-400">
                    {post.category}
                  </span>
                  <h4 className="mt-1 text-sm font-medium text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                    {post.title}
                  </h4>
                  <span className="mt-1 text-xs text-slate-500">{post.date}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
