'use client';

import React, { useEffect, useState } from 'react';
import { ScrollArea } from '@/components/website/ui/scroll-area';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Component, Layout, Sparkles } from 'lucide-react';
import { IRecentPage, useRecentPagesStore } from '@/hooks/useZustStore';
import { templateCategories, templateTypes } from '@/configs/leftSideTemplatesMetaData';

export const basePath = [
  {
    href: '/components',
    name: 'Components',
    icon: <Component />,
  },
  {
    href: '/templates',
    name: 'Templates',
    icon: <Layout />,
  },
  {
    href: '/blocks',
    name: 'Blocks',
    icon: <Component />,
  },
];

function TemplatesSidebar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { addVisitedPage, getRecentPages } = useRecentPagesStore();
  const [recentPages, setRecentPages] = useState<IRecentPage[]>([]);

  const currentFilter = searchParams.get('filter');
  const currentCategory = searchParams.get('category');

  const isActive = (href: string) => {
    if (href === '/templates' && pathname === '/templates' && !currentFilter && !currentCategory) {
      return true;
    }
    if (href.includes('?filter=')) {
      const filter = href.split('filter=')[1];
      return currentFilter === filter;
    }
    if (href.includes('?category=')) {
      const category = href.split('category=')[1];
      return currentCategory === category;
    }
    return false;
  };

  useEffect(() => {
    const recentPage = getRecentPages();
    setRecentPages(recentPage);
  }, [getRecentPages]);

  return (
    <aside className='h-full border-r'>
      <div className='sticky top-0 h-screen w-full rounded-md pt-[3.2em]'>
        <ScrollArea className='h-full py-4'>
          <ul className='pb-1'>
            {basePath?.map((link, index) => {
              return (
                <li key={`id-${index}-${link.href}`}>
                  <Link
                    href={link.href}
                    onClick={() => addVisitedPage(link.href, link.name)}
                    className={`flex gap-2 group font-medium items-center py-1 my-2 transition-all ${
                      link.href === pathname
                        ? 'active-nav'
                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                    }`}
                  >
                    {React.cloneElement(link?.icon, {
                      className: `${
                        link.href === pathname
                          ? 'dark:text-base-dark dark:bg-white bg-base-dark text-white'
                          : 'dark:bg-gray-800 dark:text-white group-hover:bg-base-dark group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-base-dark'
                      } h-7 w-7 border transition-all rounded-md p-1`,
                    })}
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Filter Section */}
          <h1 className='text-lg font-semibold pb-1 flex items-center gap-2'>
            <Sparkles className='w-4 h-4' />
            Templates
          </h1>
          {templateCategories?.map((link: any) => {
            const active = isActive(link.href);
            return (
              <li
                key={link.href}
                className={`list-none 2xl:text-sm text-[0.81em] flex items-center gap-1 dark:hover:text-white my-3 2xl:py-1 py-0.5 pl-2 border-l transition-all ${
                  active
                    ? 'dark:border-white border-black text-black dark:text-white font-semibold'
                    : 'dark:text-slate-400 2xl:font-normal font-medium hover:border-black/60 dark:hover:border-white/50 text-slate-500 hover:text-slate-900'
                }`}
              >
                <Link
                  href={link.href}
                  onClick={() => addVisitedPage(link.href, link.name)}
                  className='w-full'
                >
                  {link.name}
                </Link>
              </li>
            );
          })}

          {/* Categories Section */}
          <h2 className='text-sm font-semibold pb-1 mt-4 text-zinc-500 uppercase tracking-wider'>
            Categories
          </h2>
          {templateTypes?.map((link: any) => {
            const active = isActive(link.href);
            return (
              <li
                key={link.href}
                className={`list-none 2xl:text-sm text-[0.81em] flex items-center gap-1 dark:hover:text-white my-3 2xl:py-1 py-0.5 pl-2 border-l transition-all ${
                  active
                    ? 'dark:border-white border-black text-black dark:text-white font-semibold'
                    : 'dark:text-slate-400 2xl:font-normal font-medium hover:border-black/60 dark:hover:border-white/50 text-slate-500 hover:text-slate-900'
                }`}
              >
                <Link
                  href={link.href}
                  onClick={() => addVisitedPage(link.href, link.name)}
                  className='w-full'
                >
                  {link.name}
                  {link?.new && (
                    <span className='2xl:text-xs text-[0.74em] bg-cyan-500 text-white px-1 ml-2 rounded-sm'>
                      New
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ScrollArea>
      </div>
    </aside>
  );
}

export default TemplatesSidebar;
