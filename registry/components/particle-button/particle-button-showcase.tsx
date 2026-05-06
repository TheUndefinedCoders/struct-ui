'use client';
import ParticleButton from './particle-button';
import { Sparkles, Send, Download, Rocket, Star } from 'lucide-react';

export default function ParticleButtonShowcase() {
  return (
    <div className="min-h-[400px] p-8">
      <h3 className="text-center text-2xl font-bold text-neutral-900 dark:text-white mb-2">
        Interactive Buttons
      </h3>
      <p className="text-center text-neutral-500 mb-8">Click each button to see the particle effect</p>
      
      <div className="flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto">
        {/* Magic Button */}
        <ParticleButton
          variant="gradient"
          particleShape="star"
          particleCount={25}
          particleColors={['#A78BFA', '#8B5CF6', '#DDA0DD', '#E9D5FF']}
          burstDirection="explosion"
          spread={100}
          className="from-violet-600 to-fuchsia-600"
        >
          <Sparkles className="w-4 h-4 mr-2 inline" />
          Magic
        </ParticleButton>

        {/* Send Button */}
        <ParticleButton
          variant="gradient"
          particleShape="circle"
          particleCount={20}
          particleColors={['#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE']}
          burstDirection="radial"
          spread={80}
          className="from-blue-600 to-cyan-600"
        >
          <Send className="w-4 h-4 mr-2 inline" />
          Send
        </ParticleButton>

        {/* Download Button */}
        <ParticleButton
          variant="gradient"
          particleShape="square"
          particleCount={18}
          particleColors={['#10B981', '#34D399', '#6EE7B7']}
          burstDirection="upward"
          spread={90}
          className="from-emerald-600 to-teal-600"
        >
          <Download className="w-4 h-4 mr-2 inline" />
          Download
        </ParticleButton>

        {/* Launch Button */}
        <ParticleButton
          variant="gradient"
          particleShape="mixed"
          particleCount={35}
          particleColors={['#F97316', '#FB923C', '#FDBA74', '#FED7AA']}
          burstDirection="upward"
          spread={120}
          className="from-orange-600 to-red-600"
        >
          <Rocket className="w-4 h-4 mr-2 inline" />
          Launch
        </ParticleButton>

        {/* Star Button */}
        <ParticleButton
          variant="gradient"
          particleShape="star"
          particleCount={30}
          particleColors={['#FBBF24', '#FCD34D', '#FDE68A', '#FEF3C7']}
          burstDirection="explosion"
          spread={110}
          className="from-amber-500 to-yellow-500 text-neutral-900"
        >
          <Star className="w-4 h-4 mr-2 inline fill-current" />
          Star
        </ParticleButton>
      </div>
    </div>
  );
}
