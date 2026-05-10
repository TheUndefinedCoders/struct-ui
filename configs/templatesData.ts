export type TechStack = 
  | 'nextjs'
  | 'react'
  | 'typescript'
  | 'tailwindcss'
  | 'framer-motion'
  | 'shadcn'
  | 'mdx'
  | 'prisma'
  | 'supabase'
  | 'stripe'
  | 'resend';

export type TemplateCategory = 
  | 'landing-page'
  | 'saas'
  | 'portfolio'
  | 'blog'
  | 'ecommerce'
  | 'dashboard'
  | 'ai-agent'
  | 'developer-tools';

export interface TemplateFeature {
  title: string;
  description: string;
}

export interface TemplatePricing {
  isFree: boolean;
  price?: number;
  currency?: string;
  originalPrice?: number;
  discount?: number;
}

export interface Template {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: TemplateCategory;
  techStack: TechStack[];
  features: TemplateFeature[];
  pricing: TemplatePricing;
  previewUrl: string;
  purchaseUrl?: string;
  previewImages: {
    thumbnail: string;
    screenshots: string[];
  };
  isNew?: boolean;
  isFeatured?: boolean;
  createdAt: string;
  updatedAt: string;
}

export const techStackIcons: Record<TechStack, { name: string; icon: string }> = {
  'nextjs': { name: 'Next.js', icon: 'nextjs' },
  'react': { name: 'React', icon: 'react' },
  'typescript': { name: 'TypeScript', icon: 'typescript' },
  'tailwindcss': { name: 'Tailwind CSS', icon: 'tailwindcss' },
  'framer-motion': { name: 'Framer Motion', icon: 'framer' },
  'shadcn': { name: 'shadcn/ui', icon: 'shadcn' },
  'mdx': { name: 'MDX', icon: 'mdx' },
  'prisma': { name: 'Prisma', icon: 'prisma' },
  'supabase': { name: 'Supabase', icon: 'supabase' },
  'stripe': { name: 'Stripe', icon: 'stripe' },
  'resend': { name: 'Resend', icon: 'resend' },
};

export const categoryLabels: Record<TemplateCategory, string> = {
  'landing-page': 'Landing Page',
  'saas': 'SaaS',
  'portfolio': 'Portfolio',
  'blog': 'Blog',
  'ecommerce': 'E-commerce',
  'dashboard': 'Dashboard',
  'ai-agent': 'AI Agent',
  'developer-tools': 'Developer Tools',
};

export const templates: Template[] = [
  {
    id: 'codeforge',
    slug: 'codeforge',
    name: 'Codeforge Template',
    tagline: 'Professional landing page for developer tools',
    description: 'A professional landing page template designed for developer tools and APIs. Showcase code snippets, highlight features, and display pricing plans. Includes an integrated MDX blog, fully responsive design, and easy customization options.',
    category: 'developer-tools',
    techStack: ['nextjs', 'typescript', 'tailwindcss', 'framer-motion', 'mdx', 'shadcn'],
    features: [
      { title: 'Code Snippets', description: 'Beautiful syntax highlighting for multiple languages' },
      { title: 'MDX Blog', description: 'Integrated blog with MDX support' },
      { title: 'Pricing Tables', description: 'Customizable pricing sections' },
      { title: 'Dark Mode', description: 'Built-in dark mode support' },
      { title: 'SEO Optimized', description: 'Pre-configured SEO with meta tags' },
      { title: 'Responsive', description: 'Fully responsive on all devices' },
    ],
    pricing: {
      isFree: false,
      price: 49,
      currency: 'USD',
    },
    previewUrl: 'https://codeforge-demo.vercel.app',
    purchaseUrl: 'https://buy.stripe.com/codeforge',
    previewImages: {
      thumbnail: '/placeholder-template.svg',
      screenshots: [
        '/placeholder-template.svg',
        '/placeholder-template.svg',
        '/placeholder-template.svg',
      ],
    },
    isNew: true,
    isFeatured: true,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20',
  },
  {
    id: 'ai-agent',
    slug: 'ai-agent',
    name: 'AI Agent Template',
    tagline: 'Landing page for AI agent startups',
    description: 'A professional landing page template designed for AI agent startups. Showcase your AI agent\'s features, pricing, and benefits to your customers. Includes real-time collaboration UI, seamless integrations section, and modern design.',
    category: 'ai-agent',
    techStack: ['nextjs', 'typescript', 'tailwindcss', 'framer-motion', 'shadcn'],
    features: [
      { title: 'AI Chat UI', description: 'Pre-built AI conversation interface' },
      { title: 'Integrations Grid', description: 'Showcase your integrations beautifully' },
      { title: 'Testimonials', description: 'Customer testimonials section' },
      { title: 'Analytics Preview', description: 'Dashboard preview components' },
      { title: 'Waitlist Form', description: 'Email capture with validation' },
      { title: 'Animated Elements', description: 'Smooth Framer Motion animations' },
    ],
    pricing: {
      isFree: false,
      price: 49,
      currency: 'USD',
    },
    previewUrl: 'https://ai-agent-demo.vercel.app',
    purchaseUrl: 'https://buy.stripe.com/ai-agent',
    previewImages: {
      thumbnail: '/placeholder-template.svg',
      screenshots: [
        '/placeholder-template.svg',
        '/placeholder-template.svg',
        '/placeholder-template.svg',
      ],
    },
    isNew: true,
    isFeatured: true,
    createdAt: '2024-01-10',
    updatedAt: '2024-01-18',
  },
  {
    id: 'startup-starter',
    slug: 'startup-starter',
    name: 'Startup Starter',
    tagline: 'Free template for early-stage startups',
    description: 'A clean and minimal landing page template perfect for early-stage startups. Get started quickly with a professional design without any cost. Includes hero section, features grid, and CTA sections.',
    category: 'landing-page',
    techStack: ['nextjs', 'typescript', 'tailwindcss', 'shadcn'],
    features: [
      { title: 'Hero Section', description: 'Eye-catching hero with CTA' },
      { title: 'Features Grid', description: 'Showcase your product features' },
      { title: 'Footer', description: 'Professional footer with links' },
      { title: 'Responsive', description: 'Mobile-first design' },
    ],
    pricing: {
      isFree: true,
    },
    previewUrl: 'https://startup-starter-demo.vercel.app',
    previewImages: {
      thumbnail: '/placeholder-template.svg',
      screenshots: [
        '/placeholder-template.svg',
        '/placeholder-template.svg',
      ],
    },
    isNew: false,
    isFeatured: false,
    createdAt: '2024-01-05',
    updatedAt: '2024-01-05',
  },
  {
    id: 'saas-pro',
    slug: 'saas-pro',
    name: 'SaaS Pro',
    tagline: 'Complete SaaS landing with authentication',
    description: 'A comprehensive SaaS landing page template with built-in authentication, pricing tables, and feature comparisons. Perfect for B2B SaaS products looking to convert visitors into customers.',
    category: 'saas',
    techStack: ['nextjs', 'typescript', 'tailwindcss', 'framer-motion', 'shadcn', 'supabase', 'stripe'],
    features: [
      { title: 'Authentication', description: 'Pre-built auth with Supabase' },
      { title: 'Stripe Integration', description: 'Ready-to-use payment flow' },
      { title: 'Pricing Toggle', description: 'Monthly/yearly pricing switch' },
      { title: 'Feature Comparison', description: 'Interactive comparison table' },
      { title: 'Dashboard Preview', description: 'Showcase your product UI' },
      { title: 'Email Capture', description: 'Newsletter subscription form' },
    ],
    pricing: {
      isFree: false,
      price: 79,
      currency: 'USD',
      originalPrice: 99,
      discount: 20,
    },
    previewUrl: 'https://saas-pro-demo.vercel.app',
    purchaseUrl: 'https://buy.stripe.com/saas-pro',
    previewImages: {
      thumbnail: '/placeholder-template.svg',
      screenshots: [
        '/placeholder-template.svg',
        '/placeholder-template.svg',
        '/placeholder-template.svg',
      ],
    },
    isNew: true,
    isFeatured: true,
    createdAt: '2024-01-20',
    updatedAt: '2024-01-22',
  },
  {
    id: 'portfolio-minimal',
    slug: 'portfolio-minimal',
    name: 'Portfolio Minimal',
    tagline: 'Clean portfolio for developers & designers',
    description: 'A minimal and elegant portfolio template for developers and designers. Showcase your work with a clean design that puts your projects in the spotlight.',
    category: 'portfolio',
    techStack: ['nextjs', 'typescript', 'tailwindcss', 'framer-motion', 'mdx'],
    features: [
      { title: 'Project Showcase', description: 'Beautiful project grid layout' },
      { title: 'About Section', description: 'Tell your story' },
      { title: 'MDX Blog', description: 'Share your thoughts' },
      { title: 'Contact Form', description: 'Get in touch easily' },
      { title: 'Animations', description: 'Subtle scroll animations' },
    ],
    pricing: {
      isFree: true,
    },
    previewUrl: 'https://portfolio-minimal-demo.vercel.app',
    previewImages: {
      thumbnail: '/placeholder-template.svg',
      screenshots: [
        '/placeholder-template.svg',
        '/placeholder-template.svg',
      ],
    },
    isNew: false,
    isFeatured: false,
    createdAt: '2024-01-08',
    updatedAt: '2024-01-12',
  },
];

export const getFreeTemplates = () => templates.filter(t => t.pricing.isFree);
export const getPaidTemplates = () => templates.filter(t => !t.pricing.isFree);
export const getFeaturedTemplates = () => templates.filter(t => t.isFeatured);
export const getTemplateBySlug = (slug: string) => templates.find(t => t.slug === slug);
export const getTemplatesByCategory = (category: TemplateCategory) => 
  templates.filter(t => t.category === category);
