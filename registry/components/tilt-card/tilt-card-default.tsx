'use client';
import TiltCard from './tilt-card';

export default function TiltCardDefault() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8">
      <TiltCard className="w-72 h-96 sm:w-80 sm:h-[420px] rounded-2xl">
        <div className="w-full h-full bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 flex flex-col items-center justify-center text-white p-6">
          <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">3D Tilt Card</h3>
          <p className="text-white/70 text-center text-sm leading-relaxed">
            Move your cursor around the card to see the 3D tilt effect in action
          </p>
          <div className="mt-6 px-4 py-2 bg-white/10 rounded-full text-sm">
            Hover & Move
          </div>
        </div>
      </TiltCard>
    </div>
  );
}
