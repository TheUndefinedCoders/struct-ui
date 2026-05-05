/**
 * Maps registry component names to their actual source files in the registry folder.
 * This allows the API to read the correct files when serving component data.
 */
export const registryFileMap: Record<string, string[]> = {
  chip: ['registry/components/chip/chip.tsx'],
  'button-spotlight': ['registry/components/button/btn-bg-spotlight.tsx'],
  'button-shine': ['registry/components/button/btn-bg-shine.tsx'],
  'card-hover': ['registry/components/card-hover/card-hover.tsx'],
  'image-hover': ['registry/components/image-hover/image-hover.tsx'],
  tabs: ['registry/components/tabs/tabs.tsx'],
  'blur-vignette': ['components/core/blur-vignette.tsx'],
  'motion-number': ['registry/components/motion-number/motion-number.tsx'],
  'horizontal-scroll': [
    'registry/components/scroll-animation/framer-horizontal-scroll.tsx',
  ],
};

/**
 * Maps registry component names to their target paths in the user's project.
 */
export const registryTargetMap: Record<string, string[]> = {
  chip: ['components/ui/chip.tsx'],
  'button-spotlight': ['components/ui/button-spotlight.tsx'],
  'button-shine': ['components/ui/button-shine.tsx'],
  'card-hover': ['components/ui/card-hover.tsx'],
  'image-hover': ['components/ui/image-hover.tsx'],
  tabs: ['components/ui/tabs.tsx'],
  'blur-vignette': ['components/ui/blur-vignette.tsx'],
  'motion-number': ['components/ui/motion-number.tsx'],
  'horizontal-scroll': ['components/ui/horizontal-scroll.tsx'],
};
