'use client';
import MagneticButton from './magnetic-button';

export default function MagneticButtonElastic() {
  return (
    <div className="flex flex-wrap items-center justify-center min-h-[200px] gap-6">
      <div className="flex flex-col items-center gap-2">
        <MagneticButton
          variant="outline"
          springConfig={{ stiffness: 600, damping: 15 }}
        >
          Bouncy
        </MagneticButton>
        <span className="text-xs text-neutral-500">High stiffness, low damping</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <MagneticButton
          variant="outline"
          springConfig={{ stiffness: 150, damping: 10 }}
        >
          Wobbly
        </MagneticButton>
        <span className="text-xs text-neutral-500">Low stiffness, low damping</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <MagneticButton
          variant="outline"
          springConfig={{ stiffness: 300, damping: 30 }}
        >
          Smooth
        </MagneticButton>
        <span className="text-xs text-neutral-500">Balanced</span>
      </div>
    </div>
  );
}
