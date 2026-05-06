'use client';
import MorphBlob from './morph-blob';

export default function MorphBlobDefault() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8 bg-neutral-950 rounded-2xl mx-4">
      <MorphBlob
        size={280}
        gradientColors={['#8B5CF6', '#EC4899']}
        glow={true}
        glowIntensity={30}
      />
    </div>
  );
}
