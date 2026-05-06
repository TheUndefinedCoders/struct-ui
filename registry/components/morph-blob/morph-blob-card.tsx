'use client';
import MorphBlob from './morph-blob';

export default function MorphBlobCard() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 min-h-[450px] p-8">
      {/* Feature Card with Blob */}
      <div className="relative w-72 h-80 bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800">
        {/* Blob Background */}
        <div className="absolute -top-10 -right-10 opacity-60">
          <MorphBlob
            size={180}
            variant="smooth"
            gradientColors={['#8B5CF6', '#EC4899']}
            duration={10}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col">
          <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
          <p className="text-neutral-400 text-sm leading-relaxed flex-1">
            Optimized performance with instant load times and smooth animations.
          </p>
          <button className="mt-4 text-sm font-medium text-purple-400 hover:text-purple-300 text-left">
            Learn more →
          </button>
        </div>
      </div>

      {/* Pricing Card with Blob */}
      <div className="relative w-72 h-80 bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800">
        {/* Blob Background */}
        <div className="absolute -bottom-16 -left-16 opacity-50">
          <MorphBlob
            size={200}
            variant="organic"
            gradientColors={['#06B6D4', '#10B981']}
            duration={12}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col items-center text-center">
          <span className="text-sm text-neutral-400 uppercase tracking-wide">Pro Plan</span>
          <div className="flex items-baseline mt-2 mb-4">
            <span className="text-4xl font-bold text-white">$29</span>
            <span className="text-neutral-500 ml-1">/mo</span>
          </div>
          <ul className="space-y-2 text-sm text-neutral-300 mb-6">
            <li>✓ Unlimited projects</li>
            <li>✓ Priority support</li>
            <li>✓ Custom domains</li>
            <li>✓ Analytics</li>
          </ul>
          <button className="mt-auto w-full py-2.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
