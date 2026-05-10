import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';
import {
  templates,
  getTemplateBySlug,
  techStackIcons,
  categoryLabels,
  TechStack,
} from '@/configs/templatesData';
import { TemplateCTASection } from '@/components/website/template-cta-section';

export async function generateStaticParams() {
  return templates.map((template) => ({
    slug: template.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) return { title: 'Template Not Found' };

  return {
    title: `${template.name} - Struct UI Templates`,
    description: template.description,
  };
}

const TechBadge = ({ tech }: { tech: TechStack }) => {
  const info = techStackIcons[tech];
  return (
    <span className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 text-zinc-300 rounded-full text-sm'>
      {info.name}
    </span>
  );
};

export default async function TemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  const priceDisplay = template.pricing.isFree
    ? 'Free'
    : `$${template.pricing.price} ${template.pricing.currency}`;

  return (
    <div className='pt-20 pb-10 pr-4'>
      {/* Breadcrumb */}
      <div className='mb-6'>
        <Link
          href='/templates'
          className='inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors'
        >
          <ArrowLeft className='w-4 h-4' />
          Back to Templates
        </Link>
      </div>

      {/* Hero Section */}
      <div className='grid lg:grid-cols-2 gap-8 mb-12'>
        {/* Left: Info */}
        <div className='flex flex-col'>
          <div className='flex items-center gap-3 mb-4'>
            <span className='text-sm font-medium text-cyan-400 uppercase tracking-wider'>
              {categoryLabels[template.category]}
            </span>
            {template.isNew && (
              <span className='px-2 py-1 text-xs font-medium bg-cyan-600 text-white rounded-md'>
                New
              </span>
            )}
            {template.pricing.isFree && (
              <span className='px-2 py-1 text-xs font-medium bg-emerald-500 text-white rounded-md'>
                Free
              </span>
            )}
          </div>

          <h1 className='text-3xl md:text-4xl font-bold text-white mb-3'>
            {template.name}
          </h1>

          <p className='text-lg text-zinc-400 mb-6'>{template.tagline}</p>

          <p className='text-zinc-400 mb-8 leading-relaxed'>
            {template.description}
          </p>

          {/* Pricing */}
          <div className='mb-8'>
            {!template.pricing.isFree && template.pricing.originalPrice && (
              <div className='flex items-center gap-2 mb-2'>
                <span className='text-lg text-zinc-500 line-through'>
                  ${template.pricing.originalPrice}
                </span>
                <span className='px-2 py-0.5 text-xs font-medium bg-rose-500 text-white rounded'>
                  Save {template.pricing.discount}%
                </span>
              </div>
            )}
            <div className='text-4xl font-bold text-white mb-2'>
              {priceDisplay}
            </div>
            {!template.pricing.isFree && (
              <p className='text-sm text-zinc-500'>One-time payment • Lifetime access</p>
            )}
          </div>

          {/* CTA Buttons */}
          <TemplateCTASection template={template} variant='hero' />

          {/* Tech Stack */}
          <div>
            <h3 className='text-sm font-medium text-zinc-400 uppercase tracking-wider mb-3'>
              Built with
            </h3>
            <div className='flex flex-wrap gap-2'>
              {template.techStack.map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Main Preview Image */}
        <div className='relative aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800'>
          <Image
            src={template.previewImages.thumbnail}
            alt={template.name}
            fill
            className='object-cover'
            priority
          />
        </div>
      </div>

      {/* Features Section */}
      <section className='mb-12'>
        <h2 className='text-2xl font-semibold text-white mb-6'>Features</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {template.features.map((feature, index) => (
            <div
              key={index}
              className='p-5 bg-zinc-900/50 border border-zinc-800 rounded-xl'
            >
              <div className='flex items-start gap-3'>
                <div className='flex-shrink-0 w-6 h-6 rounded-full bg-cyan-600/20 flex items-center justify-center'>
                  <Check className='w-4 h-4 text-cyan-400' />
                </div>
                <div>
                  <h3 className='font-medium text-white mb-1'>
                    {feature.title}
                  </h3>
                  <p className='text-sm text-zinc-400'>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots Section */}
      {template.previewImages.screenshots.length > 0 && (
        <section className='mb-12'>
          <h2 className='text-2xl font-semibold text-white mb-6'>Screenshots</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {template.previewImages.screenshots.map((screenshot, index) => (
              <div
                key={index}
                className='relative aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors'
              >
                <Image
                  src={screenshot}
                  alt={`${template.name} screenshot ${index + 1}`}
                  fill
                  className='object-cover'
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* What's Included */}
      <section className='mb-12'>
        <h2 className='text-2xl font-semibold text-white mb-6'>
          What&apos;s Included
        </h2>
        <div className='grid md:grid-cols-2 gap-4'>
          {[
            'Full source code',
            'Documentation',
            'Lifetime updates',
            'Commercial license',
            'Figma design file',
            'Priority support',
          ].map((item, index) => (
            <div key={index} className='flex items-center gap-3'>
              <Check className='w-5 h-5 text-emerald-500' />
              <span className='text-zinc-300'>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className='mb-12'>
        <h2 className='text-2xl font-semibold text-white mb-6'>
          Frequently Asked Questions
        </h2>
        <div className='space-y-4'>
          {[
            {
              q: 'Can I use this template for commercial projects?',
              a: 'Yes! All templates come with a commercial license. You can use them for client projects, SaaS products, or any commercial purpose.',
            },
            {
              q: 'Do I get access to updates?',
              a: 'Yes, you get lifetime access to all future updates for the template you purchase.',
            },
            {
              q: 'What if I need help setting up?',
              a: 'Each template comes with detailed documentation. Premium templates also include priority support via email.',
            },
            {
              q: 'Can I request a refund?',
              a: 'We offer a 14-day money-back guarantee if you\'re not satisfied with your purchase.',
            },
          ].map((faq, index) => (
            <div
              key={index}
              className='p-5 bg-zinc-900/50 border border-zinc-800 rounded-xl'
            >
              <h3 className='font-medium text-white mb-2'>{faq.q}</h3>
              <p className='text-sm text-zinc-400'>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <TemplateCTASection template={template} variant='footer' />
    </div>
  );
}
