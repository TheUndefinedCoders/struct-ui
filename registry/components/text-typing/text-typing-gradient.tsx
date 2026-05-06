'use client';
import TextTyping from './text-typing';

export default function TextTypingGradient() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 min-h-[350px] p-8">
      {/* Gradient Text */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            <TextTyping
              texts={['Stunning Gradients', 'Beautiful Colors', 'Smooth Animations']}
              typingSpeed={80}
              cursorColor="#EC4899"
            />
          </span>
        </h2>
      </div>

      {/* Neon Effect */}
      <div className="text-center">
        <h2 
          className="text-3xl sm:text-4xl font-bold text-cyan-400"
          style={{
            textShadow: '0 0 10px #22D3EE, 0 0 20px #22D3EE, 0 0 40px #22D3EE',
          }}
        >
          <TextTyping
            texts={['Neon Glow Effect', 'Cyberpunk Style', 'Retro Vibes']}
            typingSpeed={90}
            cursorColor="#22D3EE"
          />
        </h2>
      </div>

      {/* Rainbow */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-blue-500 to-emerald-500 animate-gradient bg-[length:200%_auto]">
          <TextTyping
            texts={['Rainbow Animation', 'Colorful Design', 'Creative Text']}
            typingSpeed={85}
            cursorColor="#8B5CF6"
          />
        </h2>
      </div>
    </div>
  );
}
