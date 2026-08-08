import preview from '@/assets/preview';
import type { StaticImageData } from 'next/image';

export type ComponentSkeletonType =
  | 'buttons'
  | 'tooltip'
  | 'magnetic-button'
  | 'particle-button'
  | 'text-typing'
  | 'terminal'
  | 'clip-path'
  | 'animated-beam'
  | 'orbiting-circles'
  | 'morph-blob'
  | 'flip-card'
  | 'product-cards'
  | 'card-hover'
  | 'image-hover'
  | 'tabs'
  | 'chip'
  | 'footers'
  | 'horizontal-scroll'
  | 'blur-vignette'
  | 'motion-number'
  | 'floating-buttons'
  | 'dock';

export type ComponentOverviewCard = {
  id: string;
  name: string;
  url: string;
  skeleton: ComponentSkeletonType;
  imgSrc?: StaticImageData | string;
  isNew?: boolean;
};

const componentsOverviewCards: ComponentOverviewCard[] = [
  {
    id: 'buttons',
    name: 'Buttons',
    url: '/components/buttons',
    skeleton: 'buttons',
    imgSrc: preview.buttons,
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    url: '/components/tooltip',
    skeleton: 'tooltip',
    isNew: true,
  },
  {
    id: 'magnetic-button',
    name: 'Magnetic Button',
    url: '/components/magnetic-button',
    skeleton: 'magnetic-button',
    isNew: true,
  },
  {
    id: 'particle-button',
    name: 'Particle Burst Button',
    url: '/components/particle-button',
    skeleton: 'particle-button',
  },
  {
    id: 'text-typing',
    name: 'Text Typing',
    url: '/components/text-typing',
    skeleton: 'text-typing',
    isNew: true,
  },
  {
    id: 'terminal',
    name: 'Terminal',
    url: '/components/terminal',
    skeleton: 'terminal',
    isNew: true,
  },
  {
    id: 'clip-path',
    name: 'Clip Path',
    url: '/components/clip-path',
    skeleton: 'clip-path',
    imgSrc: preview.clippath,
  },
  {
    id: 'animated-beam',
    name: 'Animated Beam',
    url: '/components/animated-beam',
    skeleton: 'animated-beam',
  },
  {
    id: 'orbiting-circles',
    name: 'Orbiting Circles',
    url: '/components/orbiting-circles',
    skeleton: 'orbiting-circles',
    isNew: true,
  },
  {
    id: 'morph-blob',
    name: 'Morph Blob',
    url: '/components/morph-blob',
    skeleton: 'morph-blob',
  },
  {
    id: 'flip-card',
    name: 'Flip Card',
    url: '/components/flip-card',
    skeleton: 'flip-card',
    isNew: true,
  },
  {
    id: 'product-cards',
    name: 'Product Cards',
    url: '/components/product-cards',
    skeleton: 'product-cards',
    imgSrc: preview.card,
  },
  {
    id: 'card-hover',
    name: 'Card Hover',
    url: '/components/card-hover',
    skeleton: 'card-hover',
    imgSrc: preview.cardHover,
    isNew: true,
  },
  {
    id: 'image-hover',
    name: 'Image Hover',
    url: '/components/image-hover',
    skeleton: 'image-hover',
  },
  {
    id: 'tabs',
    name: 'Tabs',
    url: '/components/tabs',
    skeleton: 'tabs',
    isNew: true,
  },
  {
    id: 'chip',
    name: 'Chip',
    url: '/components/chip',
    skeleton: 'chip',
  },
  {
    id: 'footers',
    name: 'Footers',
    url: '/components/footers',
    skeleton: 'footers',
  },
  {
    id: 'horizontal-scroll',
    name: 'Horizontal Scroll',
    url: '/components/horizontal-scroll',
    skeleton: 'horizontal-scroll',
    imgSrc: preview.horizontascroll,
  },
  {
    id: 'blur-vignette',
    name: 'Blur Vignette',
    url: '/components/blur-vignette',
    skeleton: 'blur-vignette',
    isNew: true,
  },
  {
    id: 'motion-number',
    name: 'Motion Number',
    url: '/components/motion-number',
    skeleton: 'motion-number',
    imgSrc: preview.motionNumber,
    isNew: true,
  },
  {
    id: 'floating-buttons',
    name: 'Floating Buttons',
    url: '/components/floating-buttons',
    skeleton: 'floating-buttons',
    isNew: true,
  },
  {
    id: 'dock',
    name: 'Dock',
    url: '/components/dock',
    skeleton: 'dock',
    isNew: true,
  },
];

export default componentsOverviewCards;
