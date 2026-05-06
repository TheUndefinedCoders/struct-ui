'use client';
import FlipCard from './flip-card';

export default function FlipCardDefault() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8">
      <div className="w-72 h-96 sm:w-80 sm:h-[420px]">
        <FlipCard
          front={
            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 flex flex-col items-center justify-center text-white p-6">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Hover Me</h3>
              <p className="text-white/80 text-center text-sm">
                Move your cursor over this card to see the flip effect
              </p>
            </div>
          }
          back={
            <div className="w-full h-full bg-gradient-to-br from-purple-700 to-pink-600 flex flex-col items-center justify-center text-white p-6">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Back Side</h3>
              <p className="text-white/80 text-center text-sm">
                This is the back of the card with different content
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
}
