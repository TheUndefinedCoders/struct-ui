'use client';
import TextTyping from './text-typing';

export default function TextTypingCursors() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 min-h-[300px] p-8">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xl font-semibold text-neutral-900 dark:text-white">
          <TextTyping
            texts={['Bar Cursor Style']}
            cursorStyle="bar"
            cursorColor="#3B82F6"
            loop={true}
          />
        </span>
        <span className="text-xs text-neutral-500">cursorStyle: "bar"</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xl font-semibold text-neutral-900 dark:text-white">
          <TextTyping
            texts={['Underscore Cursor']}
            cursorStyle="underscore"
            cursorColor="#10B981"
            loop={true}
          />
        </span>
        <span className="text-xs text-neutral-500">cursorStyle: "underscore"</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xl font-semibold text-neutral-900 dark:text-white">
          <TextTyping
            texts={['Block Cursor Mode']}
            cursorStyle="block"
            cursorColor="#8B5CF6"
            loop={true}
          />
        </span>
        <span className="text-xs text-neutral-500">cursorStyle: "block"</span>
      </div>
    </div>
  );
}
