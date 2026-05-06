'use client';
import ParticleButton from './particle-button';

export default function ParticleButtonConfetti() {
  return (
    <div className="flex items-center justify-center min-h-[350px] p-8">
      <ParticleButton
        variant="gradient"
        particleCount={50}
        particleSize={[6, 14]}
        particleShape="mixed"
        burstDirection="explosion"
        spread={180}
        duration={1200}
        particleColors={[
          '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
          '#FFEAA7', '#DDA0DD', '#FF69B4', '#00CED1',
          '#FFD700', '#98FB98', '#FF7F50', '#87CEEB',
        ]}
        className="px-8 py-4 text-lg"
      >
        🎉 Celebrate! 🎉
      </ParticleButton>
    </div>
  );
}
