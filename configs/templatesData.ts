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
    id: 'devstack-pro',
    slug: 'devstack-pro',
    name: 'DevStack Pro',
    tagline: 'Ultimate landing page for developer tools & APIs',
    description: 'A premium landing page template crafted for developer tools, APIs, and SDKs. Features beautiful code snippet showcases, interactive documentation previews, pricing tables, and an integrated MDX blog. Built with performance and developer experience in mind.',
    category: 'developer-tools',
    techStack: ['nextjs', 'typescript', 'tailwindcss', 'framer-motion', 'mdx', 'shadcn'],
    features: [
      { title: 'Code Snippets', description: 'Beautiful syntax highlighting for 20+ languages' },
      { title: 'MDX Documentation', description: 'Integrated docs with MDX support' },
      { title: 'Pricing Tables', description: 'Customizable pricing with toggle' },
      { title: 'Dark Mode', description: 'Built-in dark/light mode support' },
      { title: 'SEO Optimized', description: 'Pre-configured meta tags & OG images' },
      { title: 'Responsive', description: 'Mobile-first responsive design' },
    ],
    pricing: {
      isFree: false,
      price: 49,
      currency: 'USD',
    },
    previewUrl: 'https://devstack-pro-demo.vercel.app',
    purchaseUrl: 'https://buy.stripe.com/devstack-pro',
    previewImages: {
      thumbnail: '/templates/devstack-pro.png',
      screenshots: [
        '/templates/devstack-pro.png',
        '/templates/devstack-pro.png',
        '/templates/devstack-pro.png',
      ],
    },
    isNew: true,
    isFeatured: true,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20',
  },
  {
    id: 'neuralflow',
    slug: 'neuralflow',
    name: 'NeuralFlow',
    tagline: 'Modern landing page for AI & ML products',
    description: 'A stunning landing page template designed for AI agents, machine learning products, and automation tools. Features animated neural network backgrounds, AI chat interface previews, integration showcases, and modern glassmorphism design.',
    category: 'ai-agent',
    techStack: ['nextjs', 'typescript', 'tailwindcss', 'framer-motion', 'shadcn'],
    features: [
      { title: 'AI Chat UI', description: 'Pre-built conversation interface' },
      { title: 'Neural Animations', description: 'Animated background effects' },
      { title: 'Integration Grid', description: 'Showcase 50+ integrations' },
      { title: 'Testimonials', description: 'Customer reviews carousel' },
      { title: 'Waitlist Form', description: 'Email capture with validation' },
      { title: 'Analytics Preview', description: 'Dashboard mockup components' },
    ],
    pricing: {
      isFree: false,
      price: 59,
      currency: 'USD',
    },
    previewUrl: 'https://neuralflow-demo.vercel.app',
    purchaseUrl: 'https://buy.stripe.com/neuralflow',
    previewImages: {
      thumbnail: '/templates/neuralflow.png',
      screenshots: [
        '/templates/neuralflow.png',
        '/templates/neuralflow.png',
        '/templates/neuralflow.png',
      ],
    },
    isNew: true,
    isFeatured: true,
    createdAt: '2024-01-10',
    updatedAt: '2024-01-18',
  },
  {
    id: 'launchpad',
    slug: 'launchpad',
    name: 'LaunchPad',
    tagline: 'Free starter template for new ventures',
    description: 'A clean and modern landing page template perfect for startups, indie hackers, and side projects. Get your idea online quickly with a professional design. Includes hero section, features grid, testimonials, and CTA sections.',
    category: 'landing-page',
    techStack: ['nextjs', 'typescript', 'tailwindcss', 'shadcn'],
    features: [
      { title: 'Hero Section', description: 'Eye-catching hero with animations' },
      { title: 'Features Grid', description: 'Showcase your product features' },
      { title: 'Testimonials', description: 'Social proof section' },
      { title: 'Responsive', description: 'Mobile-first design' },
    ],
    pricing: {
      isFree: true,
    },
    previewUrl: 'https://launchpad-demo.vercel.app',
    previewImages: {
      thumbnail: '/templates/launchpad.png',
      screenshots: [
        '/templates/launchpad.png',
        '/templates/launchpad.png',
      ],
    },
    isNew: false,
    isFeatured: false,
    createdAt: '2024-01-05',
    updatedAt: '2024-01-05',
  },
  {
    id: 'cloudscale',
    slug: 'cloudscale',
    name: 'CloudScale',
    tagline: 'Enterprise SaaS landing with full auth flow',
    description: 'A comprehensive SaaS landing page template with built-in Supabase authentication, Stripe payments, pricing tables, and feature comparisons. Perfect for B2B SaaS products looking to convert visitors into paying customers.',
    category: 'saas',
    techStack: ['nextjs', 'typescript', 'tailwindcss', 'framer-motion', 'shadcn', 'supabase', 'stripe'],
    features: [
      { title: 'Authentication', description: 'Pre-built auth with Supabase' },
      { title: 'Stripe Payments', description: 'Ready-to-use checkout flow' },
      { title: 'Pricing Toggle', description: 'Monthly/yearly pricing switch' },
      { title: 'Feature Comparison', description: 'Interactive comparison table' },
      { title: 'Dashboard Preview', description: 'Product UI mockups' },
      { title: 'Email Capture', description: 'Newsletter with Resend' },
    ],
    pricing: {
      isFree: false,
      price: 79,
      currency: 'USD',
      originalPrice: 99,
      discount: 20,
    },
    previewUrl: 'https://cloudscale-demo.vercel.app',
    purchaseUrl: 'https://buy.stripe.com/cloudscale',
    previewImages: {
      thumbnail: '/templates/cloudscale.png',
      screenshots: [
        '/templates/cloudscale.png',
        '/templates/cloudscale.png',
        '/templates/cloudscale.png',
      ],
    },
    isNew: true,
    isFeatured: true,
    createdAt: '2024-01-20',
    updatedAt: '2024-01-22',
  },
  {
    id: 'folio',
    slug: 'folio',
    name: 'Folio',
    tagline: 'Minimal portfolio for creatives',
    description: 'A minimal and elegant portfolio template for developers, designers, and creatives. Showcase your work with a clean design that puts your projects in the spotlight. Includes project grid, about section, and integrated blog.',
    category: 'portfolio',
    techStack: ['nextjs', 'typescript', 'tailwindcss', 'framer-motion', 'mdx'],
    features: [
      { title: 'Project Showcase', description: 'Beautiful masonry grid layout' },
      { title: 'About Section', description: 'Tell your story with style' },
      { title: 'MDX Blog', description: 'Share your thoughts & tutorials' },
      { title: 'Contact Form', description: 'Get in touch easily' },
      { title: 'Animations', description: 'Smooth scroll animations' },
    ],
    pricing: {
      isFree: true,
    },
    previewUrl: 'https://folio-demo.vercel.app',
    previewImages: {
      thumbnail: '/templates/folio.png',
      screenshots: [
        '/templates/folio.png',
        '/templates/folio.png',
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
