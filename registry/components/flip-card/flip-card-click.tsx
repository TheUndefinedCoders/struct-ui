'use client';
import FlipCard from './flip-card';

export default function FlipCardClick() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8">
      <div className="w-72 h-96 sm:w-80 sm:h-[420px]">
        <FlipCard
          trigger="click"
          front={
            <div className="w-full h-full bg-gradient-to-br from-amber-500 to-orange-600 flex flex-col items-center justify-center text-white p-6 cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Click Me</h3>
              <p className="text-white/80 text-center text-sm">
                Tap or click this card to flip it over
              </p>
              <span className="mt-4 px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                Tap to flip
              </span>
            </div>
          }
          back={
            <div className="w-full h-full bg-gradient-to-br from-orange-600 to-red-600 flex flex-col items-center justify-center text-white p-6 cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Flipped!</h3>
              <p className="text-white/80 text-center text-sm">
                Great! Click again to flip back
              </p>
              <span className="mt-4 px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                Tap to return
              </span>
            </div>
          }
        />
      </div>
    </div>
  );
}
