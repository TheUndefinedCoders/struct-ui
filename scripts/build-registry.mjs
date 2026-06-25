#!/usr/bin/env node
/**
 * Build script to generate static registry JSON files.
 * Run this before deploying to generate /public/r/*.json files.
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.join(__dirname, '..');

const registryFileMap = {
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
  'orbiting-circles': ['registry/components/orbiting-circles/orbiting-circles.tsx'],
  'animated-beam': ['registry/components/animated-beam/animated-beam.tsx'],
  'floating-buttons': ['registry/components/floating-buttons/floating-buttons.tsx'],
};

const registryTargetMap = {
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
  'orbiting-circles': ['components/ui/orbiting-circles.tsx'],
  'animated-beam': ['components/ui/animated-beam.tsx'],
  'floating-buttons': ['components/ui/floating-buttons.tsx'],
};

const registry = [
  {
    name: 'chip',
    type: 'registry:ui',
    description: 'A customizable chip/badge component with various border styles.',
    dependencies: [],
    registryDependencies: [],
  },
  {
    name: 'button-spotlight',
    type: 'registry:ui',
    description: 'An animated button with spotlight hover effect.',
    dependencies: ['framer-motion'],
    registryDependencies: [],
  },
  {
    name: 'button-shine',
    type: 'registry:ui',
    description: 'A button with animated shine effect.',
    dependencies: [],
    registryDependencies: [],
  },
  {
    name: 'card-hover',
    type: 'registry:ui',
    description: 'A card component with hover animation effects.',
    dependencies: ['framer-motion'],
    registryDependencies: [],
  },
  {
    name: 'image-hover',
    type: 'registry:ui',
    description: 'An image component with hover reveal effects.',
    dependencies: ['framer-motion'],
    registryDependencies: [],
  },
  {
    name: 'tabs',
    type: 'registry:ui',
    description: 'Animated tabs with smooth sliding indicator.',
    dependencies: [],
    registryDependencies: [],
  },
  {
    name: 'blur-vignette',
    type: 'registry:ui',
    description: 'A blur vignette overlay component for images and videos.',
    dependencies: [],
    registryDependencies: [],
  },
  {
    name: 'motion-number',
    type: 'registry:ui',
    description: 'Animated number counter with smooth transitions.',
    dependencies: ['motion-number', 'framer-motion'],
    registryDependencies: [],
  },
  {
    name: 'horizontal-scroll',
    type: 'registry:ui',
    description: 'Horizontal scroll animation section with Framer Motion.',
    dependencies: ['framer-motion', 'lenis'],
    registryDependencies: [],
  },
  {
    name: 'magnetic-button',
    type: 'registry:ui',
    description: 'A button with magnetic pull effect that follows the cursor with elastic snap-back animation.',
    dependencies: ['framer-motion'],
    registryDependencies: [],
  },
  {
    name: 'flip-card',
    type: 'registry:ui',
    description: 'A 3D flip card with realistic perspective transforms, multiple directions, and style variants.',
    dependencies: ['framer-motion'],
    registryDependencies: [],
  },
  {
    name: 'tilt-card',
    type: 'registry:ui',
    description: 'A 3D tilt card that rotates based on mouse position with glare and glow effects.',
    dependencies: ['framer-motion'],
    registryDependencies: [],
  },
  {
    name: 'particle-button',
    type: 'registry:ui',
    description: 'A button that explodes into colorful particles on click with customizable shapes and effects.',
    dependencies: ['framer-motion', 'lucide-react'],
    registryDependencies: [],
  },
  {
    name: 'morph-blob',
    type: 'registry:ui',
    description: 'Liquid SVG blobs that continuously morph and flow with gradient colors and glow effects.',
    dependencies: ['framer-motion'],
    registryDependencies: [],
  },
  {
    name: 'text-typing',
    type: 'registry:ui',
    description: 'Smooth text typing animation that cycles through texts with typewriter effect and customizable cursor.',
    dependencies: ['framer-motion'],
    registryDependencies: [],
  },
  {
    name: 'terminal',
    type: 'registry:ui',
    description: 'A customizable terminal component with typing animation, multiple themes (macOS, Windows, Linux), and support for various output types.',
    dependencies: ['framer-motion'],
    registryDependencies: [],
  },
  {
    name: 'orbiting-circles',
    type: 'registry:ui',
    description: 'Animated orbiting circles with icons rotating in opposite directions, pause on hover, and customizable speeds.',
    dependencies: [],
    registryDependencies: [],
  },
  {
    name: 'animated-beam',
    type: 'registry:ui',
    description: 'An animated beam of light that travels along a path, perfect for showcasing integrations and connections.',
    dependencies: [],
    registryDependencies: [],
  },
  {
    name: 'floating-buttons',
    type: 'registry:ui',
    description: 'A customizable floating action button component that sticks to the side of the screen with expand on hover and multiple variants.',
    dependencies: ['framer-motion', 'lucide-react'],
    registryDependencies: [],
  },
];

function cleanComponentForRegistry(content, componentName) {
  // Remove preview-specific default values
  if (componentName === 'chip') {
    content = content.replace(
      /chipData\s*=\s*\{\s*label:\s*['"]Sample Chip['"],\s*id:\s*['"]sample-chip['"]\s*\}/g,
      'chipData'
    );
    content = content.replace(/chipData\?\s*:/g, 'chipData:');
  }

  if (componentName === 'tabs') {
    // Remove internal state fallbacks for tabs - make props required
    content = content.replace(/tabsConfig\?\s*:/g, 'tabsConfig:');
    content = content.replace(/selectedTab\?\s*:/g, 'selectedTab:');
    content = content.replace(/setSelectedTab\?\s*:/g, 'setSelectedTab:');
  }

  return content;
}

async function buildRegistry() {
  const outputDir = path.join(ROOT_DIR, 'public', 'r');

  // Ensure output directory exists
  await fs.mkdir(outputDir, { recursive: true });

  // Generate index.json
  const index = registry.map((item) => ({
    name: item.name,
    type: item.type,
    description: item.description,
    dependencies: item.dependencies,
    registryDependencies: item.registryDependencies,
  }));

  await fs.writeFile(
    path.join(outputDir, 'index.json'),
    JSON.stringify(index, null, 2)
  );
  console.log('✓ Generated index.json');

  // Generate individual component JSON files
  for (const component of registry) {
    const sourceFiles = registryFileMap[component.name];
    const targetPaths = registryTargetMap[component.name];

    if (!sourceFiles || !targetPaths) {
      console.warn(`⚠ Skipping ${component.name}: missing file mapping`);
      continue;
    }

    const files = [];

    for (let i = 0; i < sourceFiles.length; i++) {
      const sourcePath = path.join(ROOT_DIR, sourceFiles[i]);

      try {
        let content = await fs.readFile(sourcePath, 'utf-8');
        content = cleanComponentForRegistry(content, component.name);

        files.push({
          path: targetPaths[i],
          content,
          type: 'registry:ui',
          target: targetPaths[i],
        });
      } catch (error) {
        console.error(`✗ Failed to read ${sourceFiles[i]}:`, error.message);
      }
    }

    if (files.length === 0) {
      console.warn(`⚠ No files generated for ${component.name}`);
      continue;
    }

    const output = {
      name: component.name,
      type: component.type,
      description: component.description,
      dependencies: component.dependencies || [],
      devDependencies: [],
      registryDependencies: component.registryDependencies || [],
      files,
      tailwind: {},
      cssVars: {},
    };

    await fs.writeFile(
      path.join(outputDir, `${component.name}.json`),
      JSON.stringify(output, null, 2)
    );
    console.log(`✓ Generated ${component.name}.json`);
  }

  console.log('\n✅ Registry build complete!');
}

buildRegistry().catch(console.error);
