'use client';
import MorphBlob from './morph-blob';

export default function MorphBlobVariants() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 min-h-[350px] p-8 bg-neutral-950 rounded-2xl mx-4">
      <div className="flex flex-col items-center gap-3">
        <MorphBlob
          size={140}
          variant="organic"
          gradientColors={['#3B82F6', '#8B5CF6']}
        />
        <span className="text-xs text-neutral-400">Organic</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <MorphBlob
          size={140}
          variant="smooth"
          gradientColors={['#10B981', '#06B6D4']}
        />
        <span className="text-xs text-neutral-400">Smooth</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <MorphBlob
          size={140}
          variant="spiky"
          gradientColors={['#F97316', '#EF4444']}
        />
        <span className="text-xs text-neutral-400">Spiky</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <MorphBlob
          size={140}
          variant="wave"
          gradientColors={['#EC4899', '#8B5CF6']}
        />
        <span className="text-xs text-neutral-400">Wave</span>
      </div>
    </div>
  );
}
