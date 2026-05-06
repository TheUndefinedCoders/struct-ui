'use client';
import ParticleButton from './particle-button';
import { Zap, Trophy, Gamepad2 } from 'lucide-react';

export default function ParticleButtonGaming() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 min-h-[350px] p-8 bg-neutral-950 rounded-2xl mx-4">
      {/* Power Up Button */}
      <ParticleButton
        variant="neon"
        particleShape="star"
        particleCount={35}
        particleSize={[6, 14]}
        particleColors={['#FFD700', '#FFA500', '#FF6347', '#FFFF00']}
        burstDirection="explosion"
        spread={140}
        duration={900}
        className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 shadow-[0_0_30px_rgba(255,165,0,0.5)] hover:shadow-[0_0_50px_rgba(255,165,0,0.7)]"
      >
        <Zap className="w-5 h-5 mr-2 inline fill-current" />
        Power Up!
      </ParticleButton>

      {/* Victory Button */}
      <ParticleButton
        variant="gradient"
        particleShape="mixed"
        particleCount={50}
        particleSize={[8, 16]}
        particleColors={[
          '#FFD700', '#FFA500', '#FF6347', 
          '#00CED1', '#FF69B4', '#98FB98',
        ]}
        burstDirection="explosion"
        spread={180}
        duration={1000}
        className="px-8 py-4 text-lg from-amber-500 via-yellow-400 to-amber-500 text-neutral-900 font-bold"
      >
        <Trophy className="w-6 h-6 mr-2 inline" />
        VICTORY!
      </ParticleButton>

      {/* Play Button */}
      <ParticleButton
        variant="neon"
        particleShape="circle"
        particleCount={30}
        particleSize={[5, 12]}
        particleColors={['#00FF00', '#32CD32', '#7CFC00', '#ADFF2F']}
        burstDirection="radial"
        spread={120}
        className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_50px_rgba(34,197,94,0.7)]"
      >
        <Gamepad2 className="w-5 h-5 mr-2 inline" />
        Play Now
      </ParticleButton>
    </div>
  );
}
