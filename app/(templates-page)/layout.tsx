import React, { Suspense } from 'react';
import Header from '@/components/website/header';
import TemplatesSidebar from '@/components/website/sidebars/sidebar-templates';
import { Footer } from '@/components/website/footer';

export default async function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className='mx-auto pl-2 2xl:container lg:grid 2xl:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-4'>
        <Suspense fallback={<div className="h-full border-r animate-pulse bg-zinc-900/20" />}>
          <TemplatesSidebar />
        </Suspense>
        <div className='min-w-0 max-w-full'>{children}</div>
      </main>
      <Footer />
    </>
  );
}
