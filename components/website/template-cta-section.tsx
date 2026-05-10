'use client';

import { ExternalLink } from 'lucide-react';
import { Template } from '@/configs/templatesData';
import { TemplateDownloadButton } from './template-download-button';

interface TemplateCTASectionProps {
  template: Template;
  variant?: 'hero' | 'footer';
}

export function TemplateCTASection({ template, variant = 'hero' }: TemplateCTASectionProps) {
  if (variant === 'footer') {
    return (
      <section className='p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-zinc-950 border border-cyan-500/20'>
        <div className='text-center max-w-2xl mx-auto'>
          <h2 className='text-2xl font-semibold text-white mb-3'>
            Ready to get started?
          </h2>
          <p className='text-zinc-400 mb-6'>
            Get {template.name} and start building your project today.
          </p>
          <div className='flex justify-center gap-4'>
            <TemplateDownloadButton template={template} variant='large' className='flex-none' />
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className='flex flex-wrap gap-4 mb-8'>
      <TemplateDownloadButton template={template} variant='large' className='flex-none' />
      <a
        href={template.previewUrl}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium border border-zinc-700 hover:border-zinc-500 text-white rounded-lg transition-colors hover:bg-zinc-800'
      >
        Live Preview
        <ExternalLink className='w-5 h-5' />
      </a>
    </div>
  );
}

export default TemplateCTASection;
