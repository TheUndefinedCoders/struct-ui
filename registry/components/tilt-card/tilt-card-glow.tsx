'use client';
import TiltCard from './tilt-card';

export default function TiltCardGlow() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8">
      <TiltCard 
        className="w-72 h-96 sm:w-80 sm:h-[420px] rounded-2xl"
        borderGlow={true}
        borderGlowColor="rgba(168, 85, 247, 0.6)"
        tiltMaxAngle={12}
        scale={1.05}
      >
        <div className="w-full h-full bg-neutral-950 border border-neutral-800 rounded-2xl flex flex-col items-center justify-center text-white p-6">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-5">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Border Glow</h3>
          <p className="text-neutral-500 text-center text-sm leading-relaxed">
            Glowing border effect on hover with smooth animation
          </p>
          <button className="mt-6 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            Learn More
          </button>
        </div>
      </TiltCard>
    </div>
  );
}
