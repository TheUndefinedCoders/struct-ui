import { z } from 'zod';

export const registryItemFileSchema = z.object({
  path: z.string(),
  content: z.string().optional(),
  type: z.enum(['registry:ui', 'registry:lib', 'registry:hook', 'registry:component']),
  target: z.string().optional(),
});

export const registryItemSchema = z.object({
  name: z.string(),
  type: z.enum(['registry:ui', 'registry:lib', 'registry:hook', 'registry:block']),
  description: z.string().optional(),
  dependencies: z.array(z.string()).optional(),
  devDependencies: z.array(z.string()).optional(),
  registryDependencies: z.array(z.string()).optional(),
  files: z.array(registryItemFileSchema),
  tailwind: z
    .object({
      config: z.record(z.any()).optional(),
    })
    .optional(),
  cssVars: z.record(z.record(z.string())).optional(),
});

export type RegistryItem = z.infer<typeof registryItemSchema>;
export type RegistryItemFile = z.infer<typeof registryItemFileSchema>;

export const registry: RegistryItem[] = [
  {
    name: 'chip',
    type: 'registry:ui',
    description: 'A customizable chip/badge component with various border styles.',
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: 'components/ui/chip.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'button-spotlight',
    type: 'registry:ui',
    description: 'An animated button with spotlight hover effect.',
    dependencies: ['framer-motion'],
    registryDependencies: [],
    files: [
      {
        path: 'components/ui/button-spotlight.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'button-shine',
    type: 'registry:ui',
    description: 'A button with animated shine effect.',
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: 'components/ui/button-shine.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'card-hover',
    type: 'registry:ui',
    description: 'A card component with hover animation effects.',
    dependencies: ['framer-motion'],
    registryDependencies: [],
    files: [
      {
        path: 'components/ui/card-hover.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'image-hover',
    type: 'registry:ui',
    description: 'An image component with hover reveal effects.',
    dependencies: ['framer-motion'],
    registryDependencies: [],
    files: [
      {
        path: 'components/ui/image-hover.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'tabs',
    type: 'registry:ui',
    description: 'Animated tabs with smooth sliding indicator.',
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: 'components/ui/tabs.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'blur-vignette',
    type: 'registry:ui',
    description: 'A blur vignette overlay component for images and videos.',
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: 'components/ui/blur-vignette.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'motion-number',
    type: 'registry:ui',
    description: 'Animated number counter with smooth transitions.',
    dependencies: ['motion-number', 'framer-motion'],
    registryDependencies: [],
    files: [
      {
        path: 'components/ui/motion-number.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'horizontal-scroll',
    type: 'registry:ui',
    description: 'Horizontal scroll animation section with Framer Motion.',
    dependencies: ['framer-motion', 'lenis'],
    registryDependencies: [],
    files: [
      {
        path: 'components/ui/horizontal-scroll.tsx',
        type: 'registry:ui',
      },
    ],
  },
];
