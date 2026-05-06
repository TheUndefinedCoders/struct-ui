'use client';
import Terminal from './terminal';

export default function TerminalDefault() {
  return (
    <div className="flex items-center justify-center min-h-[350px] p-8">
      <div className="w-full max-w-2xl">
        <Terminal
          lines={[
            { type: 'command', content: 'npm install struct-ui', prompt: '~' },
            { type: 'output', content: 'Installing dependencies...', delay: 500 },
            { type: 'success', content: '✓ Installed 42 packages in 3.2s', delay: 800 },
            { type: 'command', content: 'npm run dev', prompt: '~', delay: 400 },
            { type: 'info', content: 'Starting development server...', delay: 300 },
            { type: 'success', content: '✓ Ready on http://localhost:3000', delay: 500 },
          ]}
          title="Terminal"
          theme="macos"
        />
      </div>
    </div>
  );
}
