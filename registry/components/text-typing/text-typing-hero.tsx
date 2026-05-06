'use client';
import TextTyping from './text-typing';
import MagneticButton from '../magnetic-button/magnetic-button';
import ParticleButton from '../particle-button/particle-button';
import { Sparkles } from 'lucide-react';

export default function TextTypingHero() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 rounded-2xl mx-4">
      <div className="text-center max-w-3xl">
        <span className="inline-block px-4 py-1.5 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
          Welcome
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Hi, I'm Numan.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            <TextTyping
              texts={[
                'Full Stack Dev',
                'Frontend Dev',
                'Backend Dev',
                'Software Engineer',
              ]}
              typingSpeed={70}
              deletingSpeed={40}
              pauseDuration={2500}
              cursorColor="#A78BFA"
            />
          </span>
        </h1>
        <p className="text-neutral-400 text-lg max-w-xl mx-auto mb-8">
          I build beautiful, performant web applications with modern technologies.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <MagneticButton
            variant="glow"
            springConfig={{ stiffness: 600, damping: 15 }}
          >
            View Projects
          </MagneticButton>
          <ParticleButton
            variant="glass"
            particleShape="star"
            particleCount={20}
            particleColors={['#A78BFA', '#8B5CF6', '#C4B5FD', '#DDD6FE']}
            burstDirection="explosion"
            spread={80}
          >
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Contact Me
          </ParticleButton>
        </div>
      </div>
    </div>
  );
}
