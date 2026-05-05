import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { registry } from '@/registry/registry';
import { registryFileMap, registryTargetMap } from '@/registry/registry-map';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;

  const component = registry.find((item) => item.name === name);

  if (!component) {
    return NextResponse.json({ error: 'Component not found' }, { status: 404 });
  }

  const sourceFiles = registryFileMap[name];
  const targetPaths = registryTargetMap[name];

  if (!sourceFiles || !targetPaths) {
    return NextResponse.json(
      { error: 'Component files not configured' },
      { status: 500 }
    );
  }

  const files = await Promise.all(
    sourceFiles.map(async (filePath, index) => {
      try {
        const absolutePath = path.join(process.cwd(), filePath);
        let content = await fs.readFile(absolutePath, 'utf-8');

        // Clean up the content for distribution
        content = cleanComponentForRegistry(content);

        return {
          path: targetPaths[index],
          content,
          type: component.files[index]?.type || 'registry:ui',
          target: targetPaths[index],
        };
      } catch (error) {
        console.error(`Failed to read file ${filePath}:`, error);
        return null;
      }
    })
  );

  const validFiles = files.filter(Boolean);

  if (validFiles.length === 0) {
    return NextResponse.json(
      { error: 'Failed to read component files' },
      { status: 500 }
    );
  }

  const response = {
    name: component.name,
    type: component.type,
    description: component.description,
    dependencies: component.dependencies || [],
    devDependencies: component.devDependencies || [],
    registryDependencies: component.registryDependencies || [],
    files: validFiles,
    tailwind: component.tailwind || {},
    cssVars: component.cssVars || {},
  };

  return NextResponse.json(response);
}

/**
 * Cleans up component code for registry distribution.
 * - Removes default prop values that are only for preview
 * - Updates import paths for user's project
 */
function cleanComponentForRegistry(content: string): string {
  // Remove preview-specific default values (like chipData default)
  content = content.replace(
    /chipData\s*=\s*\{\s*label:\s*['"]Sample Chip['"],\s*id:\s*['"]sample-chip['"]\s*\}/g,
    'chipData'
  );

  // Make sure props without defaults are properly typed as required
  content = content.replace(/chipData\?\s*:/g, 'chipData:');

  return content;
}
