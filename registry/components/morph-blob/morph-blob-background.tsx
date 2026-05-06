'use client';
import MorphBlob from './morph-blob';

export default function MorphBlobBackground() {
  return (
    <div className="relative min-h-[500px] p-8 bg-neutral-950 rounded-2xl mx-4 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-20 -left-20 opacity-40">
        <MorphBlob
          size={400}
          variant="smooth"
          gradientColors={['#3B82F6', '#8B5CF6']}
          duration={15}
          blur={3}
        />
      </div>
      <div className="absolute -bottom-32 -right-20 opacity-40">
        <MorphBlob
          size={450}
          variant="organic"
          gradientColors={['#EC4899', '#F97316']}
          duration={12}
          blur={3}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30">
        <MorphBlob
          size={300}
          variant="wave"
          gradientColors={['#10B981', '#06B6D4']}
          duration={10}
          blur={2}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px] text-center">
        <span className="px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 mb-6">
          ✨ Introducing v2.0
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Beautiful Liquid
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Backgrounds
          </span>
        </h2>
        <p className="text-white/60 max-w-md mb-8">
          Create stunning visual effects with morphing SVG blobs that flow and animate smoothly.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white text-neutral-900 rounded-full font-medium hover:bg-white/90 transition-colors">
            Get Started
          </button>
          <button className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors backdrop-blur-sm">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
