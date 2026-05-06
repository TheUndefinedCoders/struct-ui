'use client';
import MorphBlob from './morph-blob';

export default function MorphBlobSpeed() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 min-h-[320px] p-8 bg-neutral-950 rounded-2xl mx-4">
      <div className="flex flex-col items-center gap-3">
        <MorphBlob
          size={120}
          variant="organic"
          gradientColors={['#EF4444', '#F97316']}
          duration={3}
        />
        <span className="text-xs text-neutral-400">Fast (3s)</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <MorphBlob
          size={120}
          variant="organic"
          gradientColors={['#F97316', '#FBBF24']}
          duration={6}
        />
        <span className="text-xs text-neutral-400">Medium (6s)</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <MorphBlob
          size={120}
          variant="organic"
          gradientColors={['#10B981', '#06B6D4']}
          duration={10}
        />
        <span className="text-xs text-neutral-400">Slow (10s)</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <MorphBlob
          size={120}
          variant="organic"
          gradientColors={['#3B82F6', '#8B5CF6']}
          duration={15}
        />
        <span className="text-xs text-neutral-400">Very Slow (15s)</span>
      </div>
    </div>
  );
}
