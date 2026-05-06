'use client';
import FlipCard from './flip-card';

export default function FlipCardDirections() {
  const CardContent = ({ title, direction }: { title: string; direction: string }) => (
    <>
      <div className="w-full h-full bg-neutral-900 dark:bg-neutral-800 flex flex-col items-center justify-center text-white p-4">
        <h4 className="text-lg font-bold mb-1">{title}</h4>
        <p className="text-neutral-400 text-xs text-center">{direction}</p>
      </div>
    </>
  );

  const BackContent = ({ emoji }: { emoji: string }) => (
    <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
      <span className="text-5xl">{emoji}</span>
    </div>
  );

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 min-h-[300px] p-8">
      <div className="w-40 h-52">
        <FlipCard
          flipDirection="horizontal"
          front={<CardContent title="Horizontal" direction="← Flip →" />}
          back={<BackContent emoji="🔄" />}
        />
      </div>
      <div className="w-40 h-52">
        <FlipCard
          flipDirection="vertical"
          front={<CardContent title="Vertical" direction="↑ Flip ↓" />}
          back={<BackContent emoji="🔃" />}
        />
      </div>
      <div className="w-40 h-52">
        <FlipCard
          flipDirection="diagonal"
          front={<CardContent title="Diagonal" direction="↗ Flip ↙" />}
          back={<BackContent emoji="🌀" />}
        />
      </div>
    </div>
  );
}
