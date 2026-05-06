'use client';
import ParticleButton from './particle-button';

export default function ParticleButtonDefault() {
  return (
    <div className="flex items-center justify-center min-h-[300px] p-8">
      <ParticleButton>
        Click Me ✨
      </ParticleButton>
    </div>
  );
}
