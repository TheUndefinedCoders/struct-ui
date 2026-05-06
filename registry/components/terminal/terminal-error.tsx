'use client';
import Terminal from './terminal';

export default function TerminalError() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8">
      <div className="w-full max-w-2xl">
        <Terminal
          lines={[
            { type: 'command', content: 'npm run build', prompt: '~/project' },
            { type: 'info', content: 'Creating an optimized production build...', delay: 500 },
            { type: 'output', content: '', delay: 300 },
            { type: 'error', content: 'Failed to compile.', delay: 400 },
            { type: 'output', content: '', delay: 100 },
            { type: 'error', content: './src/components/Button.tsx', delay: 100 },
            { type: 'error', content: "Error: Cannot find module '@/utils/helpers'", delay: 100 },
            { type: 'output', content: '', delay: 100 },
            { type: 'output', content: '  1 | import { cn } from \'@/utils/helpers\'', delay: 50 },
            { type: 'error', content: '    ^', delay: 50 },
            { type: 'output', content: '  2 | ', delay: 50 },
            { type: 'output', content: '  3 | export default function Button() {', delay: 50 },
            { type: 'output', content: '', delay: 200 },
            { type: 'error', content: 'Build failed with 1 error', delay: 300 },
            { type: 'output', content: '', delay: 200 },
            { type: 'command', content: 'mkdir -p src/utils && touch src/utils/helpers.ts', prompt: '~/project', delay: 400 },
            { type: 'command', content: 'npm run build', prompt: '~/project', delay: 300 },
            { type: 'info', content: 'Creating an optimized production build...', delay: 400 },
            { type: 'success', content: '✓ Compiled successfully', delay: 600 },
            { type: 'success', content: '✓ Build completed in 4.2s', delay: 200 },
          ]}
          title="Terminal — build"
          theme="macos"
          typingSpeed={30}
          height="380px"
        />
      </div>
    </div>
  );
}
