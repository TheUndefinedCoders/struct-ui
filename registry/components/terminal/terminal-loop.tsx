'use client';
import Terminal from './terminal';

export default function TerminalLoop() {
  return (
    <div className="flex items-center justify-center min-h-[350px] p-8">
      <div className="w-full max-w-2xl">
        <Terminal
          lines={[
            { type: 'command', content: 'npx shadcn@latest add "https://ui-struct.vercel.app/r/terminal"', prompt: '~' },
            { type: 'info', content: 'Fetching component...', delay: 400 },
            { type: 'output', content: 'Installing terminal component...', delay: 300 },
            { type: 'success', content: '✓ Component installed successfully', delay: 500 },
            { type: 'success', content: '✓ Dependencies updated', delay: 200 },
          ]}
          title="Terminal"
          theme="macos"
          loop={true}
          typingSpeed={45}
        />
      </div>
    </div>
  );
}
