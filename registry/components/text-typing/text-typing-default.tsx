'use client';
import TextTyping from './text-typing';

export default function TextTypingDefault() {
  return (
    <div className="flex items-center justify-center min-h-[200px] p-8">
      <div className="text-center">
        <span className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
          I am a{' '}
          <TextTyping
            texts={['Developer', 'Designer', 'Creator', 'Problem Solver']}
            className="text-blue-600 dark:text-blue-400"
            typingSpeed={100}
            deletingSpeed={60}
            pauseDuration={2000}
          />
        </span>
      </div>
    </div>
  );
}
