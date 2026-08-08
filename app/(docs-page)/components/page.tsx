'use client';

import Link from 'next/link';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import componentsOverviewCards from '@/configs/componentsOverview';
import { ComponentSkeletonPreview } from '@/components/website/component-skeleton-preview';

export default function Home() {
  return (
    <div className="pt-20 pb-5">
      <h1 className="pb-1 text-2xl font-semibold tracking-tight sm:text-3xl">
        Components
      </h1>

      <p className="text-sm text-muted-foreground md:text-lg lg:w-[80%]">
        Beautifully designed components that you can copy and paste into your
        apps. Accessible. Customizable. Open Source.
      </p>

      <div className="grid grid-cols-2 gap-4 py-4 md:grid-cols-3 md:gap-6">
        {componentsOverviewCards.map((component) => (
          <Link
            key={component.id}
            href={component.url}
            className="group rounded-lg border p-2 transition-all hover:border-zinc-400 hover:shadow-sm dark:hover:border-zinc-600"
          >
            <AspectRatio.Root ratio={16 / 9}>
              <ComponentSkeletonPreview type={component.skeleton} />
            </AspectRatio.Root>
            <div className="flex items-center gap-2 px-2 py-1 sm:px-4 sm:py-2">
              <h2 className="text-sm font-medium capitalize leading-[140%] md:text-lg xl:text-xl">
                {component.name}
              </h2>
              {component.isNew && (
                <span className="rounded-full bg-cyan-500/15 px-1.5 py-0.5 text-[10px] font-medium text-cyan-600 dark:text-cyan-400">
                  New
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
