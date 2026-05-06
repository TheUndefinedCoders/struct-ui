'use client';
import TextTyping from './text-typing';

export default function TextTypingShowcase() {
  return (
    <div className="min-h-[400px] p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Card 1 - Simple */}
        <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800">
          <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
            <TextTyping
              texts={['Fast', 'Quick', 'Speedy', 'Rapid']}
              typingSpeed={60}
              cursorColor="#3B82F6"
            />
            {' '}Performance
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Optimized animations that run smoothly on any device.
          </p>
        </div>

        {/* Card 2 - Gradient */}
        <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800">
          <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
            Beautiful{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              <TextTyping
                texts={['Design', 'Styles', 'Colors']}
                typingSpeed={80}
                cursorColor="#A855F7"
              />
            </span>
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Customize colors, gradients, and cursor styles easily.
          </p>
        </div>

        {/* Card 3 - Terminal */}
        <div className="p-6 bg-neutral-900 rounded-2xl border border-neutral-700">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="font-mono text-sm">
            <span className="text-green-400">$</span>{' '}
            <TextTyping
              texts={['npm install', 'yarn add', 'pnpm add']}
              className="text-white"
              typingSpeed={70}
              cursorStyle="block"
              cursorColor="#22C55E"
            />
            <span className="text-cyan-400"> struct-ui</span>
          </div>
        </div>

        {/* Card 4 - Emoji */}
        <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl border border-amber-200 dark:border-amber-800">
          <div className="text-2xl mb-4">
            <TextTyping
              texts={['🚀', '✨', '🎉', '💡', '🔥']}
              typingSpeed={200}
              deletingSpeed={100}
              pauseDuration={1000}
              cursor={false}
            />
            &nbsp;
          </div>
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
            Fun & Engaging
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Even emojis work great with the typing animation!
          </p>
        </div>
      </div>
    </div>
  );
}
