'use client';
import TiltCard from './tilt-card';

export default function TiltCardImage() {
  return (
    <div className="flex items-center justify-center min-h-[450px] p-8">
      <TiltCard 
        className="w-80 h-[420px] sm:w-96 sm:h-[480px] rounded-2xl"
        glare={true}
        glareMaxOpacity={0.25}
        tiltMaxAngle={8}
        scale={1.03}
      >
        <div className="w-full h-full rounded-2xl overflow-hidden relative group">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop"
            alt="Mountain Landscape"
            className="w-full h-full object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                Featured
              </span>
              <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                Nature
              </span>
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Swiss Alps Adventure</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Discover breathtaking mountain views and pristine landscapes in the heart of Europe.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
                  alt="Author"
                  className="w-10 h-10 rounded-full border-2 border-white/30"
                />
                <div>
                  <p className="text-sm font-medium">Alex Turner</p>
                  <p className="text-xs text-white/60">Travel Photographer</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-white text-neutral-900 rounded-lg text-sm font-medium hover:bg-white/90 transition-colors">
                Explore
              </button>
            </div>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}
