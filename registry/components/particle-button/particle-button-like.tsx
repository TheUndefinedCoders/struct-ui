'use client';
import { useState } from 'react';
import ParticleButton from './particle-button';
import { Heart } from 'lucide-react';

export default function ParticleButtonLike() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(128);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <div className="flex items-center justify-center min-h-[300px] p-8">
      <div className="flex items-center gap-4 p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=300&h=300&fit=crop"
          alt="Post"
          className="w-20 h-20 rounded-xl object-cover"
        />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-neutral-900 dark:text-white">
            Beautiful sunset view
          </span>
          <span className="text-xs text-neutral-500 mb-3">
            @photographer
          </span>
          <div className="flex items-center gap-2">
            <ParticleButton
              variant={liked ? 'gradient' : 'outline'}
              particleShape="heart"
              particleCount={12}
              particleSize={[8, 16]}
              particleColors={['#FF69B4', '#FF1493', '#FF6B6B', '#FFB6C1']}
              burstDirection="explosion"
              spread={80}
              duration={700}
              onClick={handleLike}
              className={`px-4 py-2 ${liked ? 'from-pink-500 to-rose-500' : ''}`}
            >
              <Heart 
                className={`w-4 h-4 mr-2 inline ${liked ? 'fill-current' : ''}`} 
              />
              {liked ? 'Liked' : 'Like'}
            </ParticleButton>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              {likeCount} likes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
