'use client';
import MagneticButton from './magnetic-button';

export default function MagneticButtonStrength() {
  return (
    <div className="flex flex-wrap items-center justify-center min-h-[200px] gap-6">
      <div className="flex flex-col items-center gap-2">
        <MagneticButton magneticStrength={0.2} magneticRadius={100}>
          Subtle
        </MagneticButton>
        <span className="text-xs text-neutral-500">Strength: 0.2</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <MagneticButton magneticStrength={0.5} magneticRadius={150}>
          Medium
        </MagneticButton>
        <span className="text-xs text-neutral-500">Strength: 0.5</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <MagneticButton magneticStrength={0.8} magneticRadius={200}>
          Strong
        </MagneticButton>
        <span className="text-xs text-neutral-500">Strength: 0.8</span>
      </div>
    </div>
  );
}
