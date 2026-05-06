'use client';
import FlipCard from './flip-card';

export default function FlipCardVariants() {
  const FrontCard = ({ title, variant }: { title: string; variant: string }) => (
    <div className="w-full h-full bg-neutral-900 dark:bg-neutral-800 flex flex-col items-center justify-center text-white p-4">
      <h4 className="text-base font-bold mb-1">{title}</h4>
      <p className="text-neutral-400 text-xs">variant: {variant}</p>
    </div>
  );

  const BackCard = ({ color }: { color: string }) => (
    <div className={`w-full h-full ${color} flex items-center justify-center text-white`}>
      <span className="text-4xl">✨</span>
    </div>
  );

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 min-h-[320px] p-8">
      <div className="w-36 h-48">
        <FlipCard
          variant="default"
          front={<FrontCard title="Default" variant="default" />}
          back={<BackCard color="bg-blue-600" />}
        />
      </div>
      <div className="w-36 h-48">
        <FlipCard
          variant="lifted"
          front={<FrontCard title="Lifted" variant="lifted" />}
          back={<BackCard color="bg-purple-600" />}
        />
      </div>
      <div className="w-36 h-48">
        <FlipCard
          variant="glow"
          front={<FrontCard title="Glow" variant="glow" />}
          back={<BackCard color="bg-emerald-600" />}
        />
      </div>
      <div className="w-36 h-48">
        <FlipCard
          variant="gradient-border"
          front={<FrontCard title="Gradient" variant="gradient-border" />}
          back={<BackCard color="bg-pink-600" />}
        />
      </div>
    </div>
  );
}
