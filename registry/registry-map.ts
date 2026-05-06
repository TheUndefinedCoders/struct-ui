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
  'magnetic-button': ['registry/components/magnetic-button/magnetic-button.tsx'],
  'flip-card': ['registry/components/flip-card/flip-card.tsx'],
  'tilt-card': ['registry/components/tilt-card/tilt-card.tsx'],
  'particle-button': ['registry/components/particle-button/particle-button.tsx'],
  'morph-blob': ['registry/components/morph-blob/morph-blob.tsx'],
  'text-typing': ['registry/components/text-typing/text-typing.tsx'],
  'terminal': ['registry/components/terminal/terminal.tsx'],
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
  'magnetic-button': ['components/ui/magnetic-button.tsx'],
  'flip-card': ['components/ui/flip-card.tsx'],
  'tilt-card': ['components/ui/tilt-card.tsx'],
  'particle-button': ['components/ui/particle-button.tsx'],
  'morph-blob': ['components/ui/morph-blob.tsx'],
  'text-typing': ['components/ui/text-typing.tsx'],
  'terminal': ['components/ui/terminal.tsx'],
};
