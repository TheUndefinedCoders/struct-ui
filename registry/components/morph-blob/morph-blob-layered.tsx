'use client';
import MorphBlob from './morph-blob';

export default function MorphBlobLayered() {
  return (
    <div className="flex items-center justify-center min-h-[450px] p-8 bg-neutral-950 rounded-2xl mx-4">
      <div className="relative w-[350px] h-[350px]">
        {/* Back layer - largest */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <MorphBlob
            size={350}
            variant="smooth"
            gradientColors={['#3B82F6', '#8B5CF6']}
            duration={12}
            blur={2}
          />
        </div>
        
        {/* Middle layer */}
        <div className="absolute inset-0 flex items-center justify-center opacity-50">
          <MorphBlob
            size={280}
            variant="organic"
            gradientColors={['#8B5CF6', '#EC4899']}
            duration={10}
          />
        </div>
        
        {/* Front layer - smallest */}
        <div className="absolute inset-0 flex items-center justify-center">
          <MorphBlob
            size={200}
            variant="wave"
            gradientColors={['#EC4899', '#F97316']}
            duration={8}
            glow={true}
            glowIntensity={25}
          />
        </div>
        
        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10">
            <h3 className="text-4xl font-bold text-white mb-2">Liquid</h3>
            <p className="text-white/60 text-sm">Morphing Layers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
