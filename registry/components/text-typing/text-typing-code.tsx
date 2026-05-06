'use client';
import TextTyping from './text-typing';

export default function TextTypingCode() {
  return (
    <div className="flex items-center justify-center min-h-[350px] p-8">
      <div className="w-full max-w-2xl bg-[#1E1E1E] rounded-xl overflow-hidden border border-neutral-700 shadow-2xl">
        {/* Code Editor Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#323233] border-b border-neutral-700">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-neutral-400">app.tsx</span>
          <div className="w-16" />
        </div>

        {/* Code Content */}
        <div className="p-4 font-mono text-sm">
          <div className="flex gap-4">
            {/* Line Numbers */}
            <div className="text-neutral-600 select-none text-right">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <div key={num}>{num}</div>
              ))}
            </div>

            {/* Code */}
            <div className="flex-1">
              <div>
                <span className="text-purple-400">import</span>
                <span className="text-white"> {'{'} </span>
                <span className="text-yellow-300">TextTyping</span>
                <span className="text-white"> {'}'} </span>
                <span className="text-purple-400">from</span>
                <span className="text-green-400"> '@/components/ui'</span>
              </div>
              <div className="text-neutral-600">{'// Empty line'}</div>
              <div>
                <span className="text-purple-400">export default function</span>
                <span className="text-yellow-300"> App</span>
                <span className="text-white">() {'{'}</span>
              </div>
              <div className="pl-4">
                <span className="text-purple-400">return</span>
                <span className="text-white"> (</span>
              </div>
              <div className="pl-8">
                <span className="text-blue-400">{'<'}</span>
                <span className="text-green-300">TextTyping</span>
                <span className="text-cyan-300"> texts</span>
                <span className="text-white">=</span>
                <span className="text-orange-300">{'{['}</span>
              </div>
              <div className="pl-12">
                <TextTyping
                  texts={[
                    '"Hello World!"',
                    '"Smooth Animation"',
                    '"React Component"',
                  ]}
                  className="text-green-400"
                  typingSpeed={60}
                  deletingSpeed={40}
                  cursorStyle="bar"
                  cursorColor="#22D3EE"
                />
              </div>
              <div className="pl-8">
                <span className="text-orange-300">{']}'}</span>
                <span className="text-blue-400"> {'/'}</span>
                <span className="text-blue-400">{'>'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
