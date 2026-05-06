'use client';
import MorphBlob from './morph-blob';

export default function MorphBlobLoader() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-12 min-h-[350px] p-8 bg-neutral-950 rounded-2xl mx-4">
      {/* Simple loader */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <MorphBlob
            size={80}
            variant="smooth"
            gradientColors={['#3B82F6', '#8B5CF6']}
            duration={3}
            glow={true}
            glowIntensity={15}
          />
        </div>
        <span className="text-neutral-400 text-sm">Loading...</span>
      </div>

      {/* Pulsing loader */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="absolute inset-0 animate-ping opacity-30">
            <MorphBlob
              size={80}
              variant="organic"
              color="#10B981"
              duration={4}
            />
          </div>
          <MorphBlob
            size={80}
            variant="organic"
            gradientColors={['#10B981', '#06B6D4']}
            duration={4}
          />
        </div>
        <span className="text-neutral-400 text-sm">Processing...</span>
      </div>

      {/* Stacked loader */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 flex items-center justify-center opacity-40">
            <MorphBlob
              size={80}
              variant="wave"
              gradientColors={['#EC4899', '#F97316']}
              duration={5}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <MorphBlob
              size={50}
              variant="smooth"
              gradientColors={['#F97316', '#FBBF24']}
              duration={3}
              glow={true}
              glowIntensity={10}
            />
          </div>
        </div>
        <span className="text-neutral-400 text-sm">Syncing...</span>
      </div>
    </div>
  );
}
