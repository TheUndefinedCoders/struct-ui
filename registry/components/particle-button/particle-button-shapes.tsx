'use client';
import ParticleButton from './particle-button';

export default function ParticleButtonShapes() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 min-h-[300px] p-8">
      <ParticleButton 
        particleShape="circle" 
        variant="gradient"
        particleColors={['#FF6B6B', '#FF8E8E', '#FFB4B4']}
      >
        Circles ⭕
      </ParticleButton>
      <ParticleButton 
        particleShape="square" 
        variant="gradient"
        particleColors={['#4ECDC4', '#45B7D1', '#96CEB4']}
      >
        Squares ◾
      </ParticleButton>
      <ParticleButton 
        particleShape="star" 
        variant="gradient"
        particleColors={['#FFD700', '#FFA500', '#FF6347']}
      >
        Stars ⭐
      </ParticleButton>
      <ParticleButton 
        particleShape="heart" 
        variant="gradient"
        particleColors={['#FF69B4', '#FF1493', '#DB7093']}
      >
        Hearts 💖
      </ParticleButton>
      <ParticleButton 
        particleShape="mixed" 
        variant="gradient"
      >
        Mixed 🎊
      </ParticleButton>
    </div>
  );
}
