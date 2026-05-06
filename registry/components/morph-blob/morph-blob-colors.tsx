'use client';
import MorphBlob from './morph-blob';

export default function MorphBlobColors() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 min-h-[350px] p-8 bg-neutral-950 rounded-2xl mx-4">
      {/* Solid Color */}
      <MorphBlob size={120} color="#3B82F6" />
      
      {/* Gradient Horizontal */}
      <MorphBlob
        size={120}
        gradientColors={['#F97316', '#FBBF24']}
        gradientDirection="horizontal"
      />
      
      {/* Gradient Vertical */}
      <MorphBlob
        size={120}
        gradientColors={['#06B6D4', '#10B981']}
        gradientDirection="vertical"
      />
      
      {/* Gradient Diagonal */}
      <MorphBlob
        size={120}
        gradientColors={['#EC4899', '#8B5CF6']}
        gradientDirection="diagonal"
      />
      
      {/* With Glow */}
      <MorphBlob
        size={120}
        gradientColors={['#22D3EE', '#3B82F6']}
        glow={true}
        glowIntensity={20}
      />
    </div>
  );
}
