import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import docs from '@/configs/blocksDocumentation.json';
import dynamic from 'next/dynamic';

export const dynamicParams = true;

export async function generateStaticParams() {
  const paths = docs.dataArray.flatMap((category) =>
    category.componentArray.map((component) => ({
      componentName: component.componentName,
    }))
  );
  return paths;
}

export default async function BlockPage({
  params,
}: {
  params: Promise<{ componentName: string }>;
}) {
  const { componentName } = await params;

  const component = docs.dataArray.reduce((found, category) => {
    if (found) return found;
    return category.componentArray.find(
      (comp) => comp.componentName === componentName
    );
  }, null as any);

  if (!component) {
    notFound();
  }

  const ComponentPreview = component?.filesrc
    ? dynamic(() => import(`../../../registry/${component.filesrc}`), {
        loading: () => <div className="flex items-center justify-center min-h-screen">Loading preview...</div>,
      })
    : null;

  return (
    <section className="min-h-screen w-full dark:bg-[#000000] bg-white">
      <div className="w-full">
        {ComponentPreview ? (
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading preview...</div>}>
            <ComponentPreview />
          </Suspense>
        ) : (
          <div className="flex items-center justify-center min-h-screen">Block not found</div>
        )}
      </div>
    </section>
  );
}
