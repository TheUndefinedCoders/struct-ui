import preview from '@/assets/preview';
import type { StaticImageData } from 'next/image';

export type BlockSkeletonType =
  | 'headers'
  | 'hero'
  | 'blog'
  | 'pricing'
  | 'steps'
  | 'footers'
  | 'product-cards'
  | 'team-section';

export type BlockOverviewCard = {
  id: string;
  name: string;
  url: string;
  skeleton: BlockSkeletonType;
  imgSrc?: StaticImageData | string;
  isNew?: boolean;
};

const blocksOverviewCards: BlockOverviewCard[] = [
  {
    id: 'headers',
    name: 'Headers',
    url: '/blocks/headers',
    skeleton: 'headers',
  },
  {
    id: 'hero-sections',
    name: 'Hero',
    url: '/blocks/hero-sections',
    skeleton: 'hero',
  },
  {
    id: 'blog-sections',
    name: 'Blog',
    url: '/blocks/blog-sections',
    skeleton: 'blog',
  },
  {
    id: 'pricing',
    name: 'Pricing',
    url: '/blocks/pricing',
    skeleton: 'pricing',
    isNew: true,
  },
  {
    id: 'steps',
    name: 'Steps',
    url: '/blocks/steps',
    skeleton: 'steps',
  },
  {
    id: 'footers',
    name: 'Footers',
    url: '/blocks/footers',
    skeleton: 'footers',
  },
  {
    id: 'product-cards',
    name: 'Product Cards',
    url: '/blocks/product-cards',
    skeleton: 'product-cards',
    imgSrc: preview.card,
  },
  {
    id: 'team-section',
    name: 'Team Section',
    url: '/blocks/team-cards',
    skeleton: 'team-section',
    imgSrc: preview.teamSection,
  },
];

export default blocksOverviewCards;
