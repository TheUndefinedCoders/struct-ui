'use client';
import TextTyping from './text-typing';

export default function TextTypingTerminal() {
  return (
    <div className="flex items-center justify-center min-h-[350px] p-8">
      <div className="w-full max-w-2xl bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-neutral-800 border-b border-neutral-700">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-4 text-sm text-neutral-400">terminal</span>
        </div>

        {/* Terminal Content */}
        <div className="p-4 font-mono text-sm">
          <div className="text-neutral-400 mb-2">
            <span className="text-green-400">user@dev</span>
            <span className="text-neutral-500">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-neutral-500">$ </span>
            <span className="text-white">npm install struct-ui</span>
          </div>
          
          <div className="text-neutral-400 mb-2">
            <span className="text-green-400">user@dev</span>
            <span className="text-neutral-500">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-neutral-500">$ </span>
            <TextTyping
              texts={[
                'Building amazing UI components...',
                'Installing dependencies...',
                'Compiling assets...',
                'Ready to ship! 🚀',
              ]}
              className="text-green-400"
              typingSpeed={50}
              deletingSpeed={30}
              pauseDuration={1500}
              cursorStyle="block"
              cursorColor="#22C55E"
            />
          </div>

          <div className="mt-4 p-3 bg-neutral-800 rounded border border-neutral-700">
            <p className="text-emerald-400 mb-1">✓ Success!</p>
            <p className="text-neutral-400 text-xs">
              Package installed successfully. Run{' '}
              <span className="text-cyan-400">npm run dev</span> to start.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
