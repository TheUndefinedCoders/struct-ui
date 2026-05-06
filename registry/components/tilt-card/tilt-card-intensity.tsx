'use client';
import TiltCard from './tilt-card';

export default function TiltCardIntensity() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 min-h-[320px] p-8">
      <div className="flex flex-col items-center gap-3">
        <TiltCard className="w-36 h-48 rounded-xl" tiltMaxAngle={5}>
          <div className="w-full h-full bg-emerald-600 flex flex-col items-center justify-center text-white p-4">
            <span className="text-3xl mb-2">5°</span>
            <span className="text-sm opacity-80">Subtle</span>
          </div>
        </TiltCard>
        <span className="text-xs text-neutral-500">tiltMaxAngle: 5</span>
      </div>

      <div className="flex flex-col items-center gap-3">
        <TiltCard className="w-36 h-48 rounded-xl" tiltMaxAngle={15}>
          <div className="w-full h-full bg-blue-600 flex flex-col items-center justify-center text-white p-4">
            <span className="text-3xl mb-2">15°</span>
            <span className="text-sm opacity-80">Normal</span>
          </div>
        </TiltCard>
        <span className="text-xs text-neutral-500">tiltMaxAngle: 15</span>
      </div>

      <div className="flex flex-col items-center gap-3">
        <TiltCard className="w-36 h-48 rounded-xl" tiltMaxAngle={25}>
          <div className="w-full h-full bg-orange-600 flex flex-col items-center justify-center text-white p-4">
            <span className="text-3xl mb-2">25°</span>
            <span className="text-sm opacity-80">Strong</span>
          </div>
        </TiltCard>
        <span className="text-xs text-neutral-500">tiltMaxAngle: 25</span>
      </div>

      <div className="flex flex-col items-center gap-3">
        <TiltCard className="w-36 h-48 rounded-xl" tiltMaxAngle={40}>
          <div className="w-full h-full bg-red-600 flex flex-col items-center justify-center text-white p-4">
            <span className="text-3xl mb-2">40°</span>
            <span className="text-sm opacity-80">Extreme</span>
          </div>
        </TiltCard>
        <span className="text-xs text-neutral-500">tiltMaxAngle: 40</span>
      </div>
    </div>
  );
}
