'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { TemplateCard } from '@/components/website/template-card';
import {
  templates,
  getFreeTemplates,
  getPaidTemplates,
  getTemplatesByCategory,
  categoryLabels,
  TemplateCategory,
} from '@/configs/templatesData';

function TemplatesContent() {
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter');
  const category = searchParams.get('category') as TemplateCategory | null;

  let displayTemplates = templates;
  let title = 'All Templates';
  let description =
    'Professional, production-ready templates to kickstart your next project. Copy the code and make it yours.';

  if (filter === 'free') {
    displayTemplates = getFreeTemplates();
    title = 'Free Templates';
    description =
      'Get started with our free templates. No payment required, just download and start building.';
  } else if (filter === 'paid') {
    displayTemplates = getPaidTemplates();
    title = 'Premium Templates';
    description =
      'Premium templates with advanced features, integrations, and professional support.';
  } else if (category && categoryLabels[category]) {
    displayTemplates = getTemplatesByCategory(category);
    title = `${categoryLabels[category]} Templates`;
    description = `Browse our collection of ${categoryLabels[category].toLowerCase()} templates.`;
  }

  const featuredTemplates = displayTemplates.filter((t) => t.isFeatured);
  const otherTemplates = displayTemplates.filter((t) => !t.isFeatured);

  return (
    <div className='pt-20 pb-10 pr-4'>
      {/* Header */}
      <div className='mb-8'>
        <div className='flex items-center gap-3 mb-2'>
          <h1 className='sm:text-3xl text-2xl font-semibold tracking-tight'>
            {title}
          </h1>
          <span className='px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full'>
            {displayTemplates.length} templates
          </span>
        </div>
        <p className='md:text-lg text-sm text-muted-foreground lg:w-[80%]'>
          {description}
        </p>
      </div>

      {/* Featured Templates */}
      {featuredTemplates.length > 0 && (
        <section className='mb-12'>
          <h2 className='text-xl font-semibold mb-4 flex items-center gap-2'>
            <span className='w-2 h-2 rounded-full bg-cyan-500' />
            Featured
          </h2>
          <div className='grid lg:grid-cols-2 gap-6'>
            {featuredTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </section>
      )}

      {/* All Templates */}
      {otherTemplates.length > 0 && (
        <section>
          {featuredTemplates.length > 0 && (
            <h2 className='text-xl font-semibold mb-4'>All Templates</h2>
          )}
          <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-6'>
            {otherTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </section>
      )}

      {/* Empty State */}
      {displayTemplates.length === 0 && (
        <div className='flex flex-col items-center justify-center py-20 text-center'>
          <div className='w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-4'>
            <svg
              className='w-8 h-8 text-zinc-500'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
              />
            </svg>
          </div>
          <h3 className='text-lg font-medium text-white mb-2'>
            No templates found
          </h3>
          <p className='text-zinc-400 max-w-sm'>
            We are working on adding more templates to this category. Check back
            soon!
          </p>
        </div>
      )}

      {/* CTA Section */}
      <section className='mt-16 p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          <div>
            <h3 className='text-2xl font-semibold text-white mb-2'>
              Need a custom template?
            </h3>
            <p className='text-zinc-400'>
              We can build custom templates tailored to your specific needs.
            </p>
          </div>
          <a
            href='mailto:contact@structui.com'
            className='inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors whitespace-nowrap'
          >
            Contact Us
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M14 5l7 7m0 0l-7 7m7-7H3'
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}

export default function TemplatesPage() {
  return (
    <Suspense
      fallback={
        <div className='pt-20 pb-10 pr-4'>
          <div className='animate-pulse'>
            <div className='h-8 w-48 bg-zinc-800 rounded mb-4' />
            <div className='h-4 w-96 bg-zinc-800 rounded mb-8' />
            <div className='grid lg:grid-cols-2 gap-6'>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className='h-96 bg-zinc-800 rounded-xl' />
              ))}
            </div>
          </div>
        </div>
      }
    >
      <TemplatesContent />
    </Suspense>
  );
}
