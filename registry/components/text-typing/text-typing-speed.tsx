'use client';
import TextTyping from './text-typing';

export default function TextTypingSpeed() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 min-h-[350px] p-8">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xl font-semibold text-neutral-900 dark:text-white">
          <TextTyping
            texts={['Super fast typing speed']}
            typingSpeed={30}
            deletingSpeed={20}
            cursorColor="#EF4444"
          />
        </span>
        <span className="text-xs text-neutral-500">typingSpeed: 30ms</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xl font-semibold text-neutral-900 dark:text-white">
          <TextTyping
            texts={['Normal typing speed']}
            typingSpeed={80}
            deletingSpeed={50}
            cursorColor="#F97316"
          />
        </span>
        <span className="text-xs text-neutral-500">typingSpeed: 80ms</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xl font-semibold text-neutral-900 dark:text-white">
          <TextTyping
            texts={['Slow dramatic typing']}
            typingSpeed={150}
            deletingSpeed={80}
            cursorColor="#10B981"
          />
        </span>
        <span className="text-xs text-neutral-500">typingSpeed: 150ms</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xl font-semibold text-neutral-900 dark:text-white">
          <TextTyping
            texts={['Very slow and cinematic']}
            typingSpeed={250}
            deletingSpeed={100}
            cursorColor="#8B5CF6"
          />
        </span>
        <span className="text-xs text-neutral-500">typingSpeed: 250ms</span>
      </div>
    </div>
  );
}
