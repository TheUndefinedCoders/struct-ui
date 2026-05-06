'use client';
import { useState } from 'react';
import ParticleButton from './particle-button';
import { Check, ShoppingCart } from 'lucide-react';

export default function ParticleButtonSuccess() {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-[350px] p-8">
      <div className="flex flex-col items-center gap-8">
        {/* Add to Cart Button */}
        <div className="p-6 bg-neutral-950 rounded-2xl">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop"
              alt="Product"
              className="w-16 h-16 object-contain"
            />
            <div>
              <h4 className="text-white font-medium">Smart Watch Pro</h4>
              <p className="text-emerald-400 font-bold">$299.00</p>
            </div>
          </div>
          <ParticleButton
            variant="gradient"
            particleShape="star"
            particleCount={20}
            particleSize={[6, 12]}
            particleColors={['#10B981', '#34D399', '#6EE7B7', '#A7F3D0']}
            burstDirection="explosion"
            spread={100}
            onClick={handleClick}
            className={`w-full from-emerald-600 to-teal-600 ${added ? 'from-emerald-500 to-emerald-500' : ''}`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4 mr-2 inline" />
                Added to Cart!
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4 mr-2 inline" />
                Add to Cart
              </>
            )}
          </ParticleButton>
        </div>

        {/* Subscribe Button */}
        <div className="p-6 bg-gradient-to-br from-violet-950 to-purple-950 rounded-2xl min-w-[280px]">
          <h4 className="text-white font-bold text-lg mb-1">Newsletter</h4>
          <p className="text-purple-300 text-sm mb-4">Get weekly updates</p>
          <ParticleButton
            variant="neon"
            particleShape="circle"
            particleCount={25}
            particleSize={[4, 10]}
            particleColors={['#A78BFA', '#8B5CF6', '#7C3AED', '#C4B5FD']}
            burstDirection="radial"
            spread={90}
            className="w-full bg-violet-600 shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)]"
          >
            Subscribe Now
          </ParticleButton>
        </div>
      </div>
    </div>
  );
}
