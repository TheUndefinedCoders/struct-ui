'use client';
import TiltCard from './tilt-card';

export default function TiltCardProduct() {
  return (
    <div className="flex items-center justify-center min-h-[480px] p-8">
      <TiltCard 
        className="w-72 h-[420px] sm:w-80 sm:h-[460px] rounded-2xl"
        glare={true}
        glareMaxOpacity={0.3}
        borderGlow={true}
        borderGlowColor="rgba(59, 130, 246, 0.4)"
        tiltMaxAngle={12}
      >
        <div className="w-full h-full bg-neutral-950 rounded-2xl overflow-hidden flex flex-col">
          {/* Product Image */}
          <div className="h-[55%] relative bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center p-6">
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded">NEW</span>
            </div>
            <div className="absolute top-3 right-3">
              <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"
              alt="Smart Watch"
              className="w-44 h-44 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1 p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-neutral-500 text-sm">(128 reviews)</span>
            </div>
            
            <h3 className="text-lg font-bold text-white">Smart Watch Pro</h3>
            <p className="text-neutral-500 text-sm mt-1">Advanced fitness tracking & notifications</p>
            
            <div className="mt-auto flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold text-white">$299</span>
                <span className="text-neutral-500 text-sm line-through ml-2">$399</span>
              </div>
              <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}
