'use client';
import FlipCard from './flip-card';

export default function FlipCardProduct() {
  return (
    <div className="flex items-center justify-center min-h-[450px] p-8">
      <div className="w-72 h-[400px] sm:w-80 sm:h-[440px]">
        <FlipCard
          trigger="click"
          variant="glow"
          front={
            <div className="w-full h-full bg-neutral-900 flex flex-col">
              <div className="relative h-[55%] bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
                  alt="Headphones"
                  className="w-48 h-48 object-contain z-0"
                />
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-20">
                  -30%
                </span>
              </div>
              <div className="flex-1 p-5 flex flex-col">
                <span className="text-blue-400 text-xs font-medium uppercase tracking-wide">Premium Audio</span>
                <h3 className="text-white text-lg font-bold mt-1">Wireless Pro Headphones</h3>
                <p className="text-neutral-400 text-sm mt-2 line-clamp-2">
                  Immersive sound with active noise cancellation
                </p>
                <div className="flex items-center gap-2 mt-auto">
                  <span className="text-2xl font-bold text-white">$199</span>
                  <span className="text-neutral-500 line-through">$299</span>
                </div>
                <p className="text-neutral-500 text-xs mt-2">Click to see details →</p>
              </div>
            </div>
          }
          back={
            <div className="w-full h-full bg-neutral-900 flex flex-col p-5">
              <h4 className="text-white text-lg font-bold mb-4">Product Details</h4>
              <ul className="space-y-3 flex-1">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-300 text-sm">40+ hours battery life</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-300 text-sm">Active Noise Cancellation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-300 text-sm">Bluetooth 5.3 connectivity</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-300 text-sm">Premium memory foam cushions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-300 text-sm">2 year warranty included</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors mt-4">
                Add to Cart
              </button>
              <p className="text-neutral-500 text-xs text-center mt-3">Click to flip back</p>
            </div>
          }
        />
      </div>
    </div>
  );
}
