'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink, Star, Sparkles } from 'lucide-react';

const templates = [
  {
    name: 'DevStack Pro',
    description: 'Ultimate landing page for developer tools & APIs',
    price: '$49',
    isFree: false,
    gradient: 'from-cyan-500 to-blue-500',
    image: '/templates/devstack-pro.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    name: 'NeuralFlow',
    description: 'AI/ML startup landing page template',
    price: 'Free',
    isFree: true,
    gradient: 'from-purple-500 to-pink-500',
    image: '/templates/neuralflow.png',
    tags: ['React', 'Framer Motion', 'Tailwind'],
  },
  {
    name: 'LaunchPad',
    description: 'Modern SaaS product launch template',
    price: '$39',
    isFree: false,
    gradient: 'from-emerald-500 to-cyan-500',
    image: '/templates/launchpad.png',
    tags: ['Next.js', 'shadcn/ui', 'TypeScript'],
  },
];

export function TemplatesShowcase() {
  return (
    <section className="relative py-24 bg-zinc-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Templates
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Premium Templates
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Complete, production-ready website templates. Start with a solid foundation and customize to your needs.
          </p>
        </motion.div>

        {/* Templates grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {templates.map((template, index) => (
            <motion.div
              key={template.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 overflow-hidden transition-all duration-300"
            >
              {/* Template preview */}
              <div className={`relative h-48 bg-gradient-to-br ${template.gradient} opacity-90`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <span className="text-white/50 text-sm">Preview</span>
                  </div>
                </div>
                
                {/* Price badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                  template.isFree 
                    ? 'bg-emerald-500/90 text-white' 
                    : 'bg-zinc-900/90 text-white border border-zinc-700'
                }`}>
                  {template.price}
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 bg-white text-zinc-900 rounded-lg font-medium flex items-center gap-2">
                    View Template
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>
              
              {/* Template info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{template.name}</h3>
                <p className="text-sm text-zinc-400 mb-4">{template.description}</p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {template.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25"
          >
            Browse All Templates
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-zinc-500 text-sm mt-4">
            Free and premium templates available
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default TemplatesShowcase;
