'use client';
import ParticleButton from './particle-button';

export default function ParticleButtonVariants() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 min-h-[300px] p-8">
      <ParticleButton variant="default">
        Default
      </ParticleButton>
      <ParticleButton variant="gradient">
        Gradient
      </ParticleButton>
      <ParticleButton variant="outline">
        Outline
      </ParticleButton>
      <ParticleButton variant="neon">
        Neon
      </ParticleButton>
      <ParticleButton 
        variant="glass" 
        className="bg-neutral-800"
        particleColors={['#ffffff', '#e0e0e0', '#b0b0b0']}
      >
        Glass
      </ParticleButton>
    </div>
  );
}
