'use client';
import ParticleButton from './particle-button';

export default function ParticleButtonDirections() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 min-h-[350px] p-8">
      <div className="flex flex-col items-center gap-3">
        <ParticleButton 
          burstDirection="radial" 
          variant="neon"
          particleCount={24}
        >
          Radial Burst
        </ParticleButton>
        <span className="text-xs text-neutral-500">Even distribution</span>
      </div>
      
      <div className="flex flex-col items-center gap-3">
        <ParticleButton 
          burstDirection="explosion" 
          variant="gradient"
          particleCount={40}
          spread={150}
        >
          Explosion
        </ParticleButton>
        <span className="text-xs text-neutral-500">Random chaos</span>
      </div>
      
      <div className="flex flex-col items-center gap-3">
        <ParticleButton 
          burstDirection="upward" 
          variant="default"
          particleCount={20}
          spread={100}
        >
          Upward Burst
        </ParticleButton>
        <span className="text-xs text-neutral-500">Fountain effect</span>
      </div>
    </div>
  );
}
