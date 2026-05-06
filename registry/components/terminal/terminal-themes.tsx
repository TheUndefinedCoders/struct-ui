'use client';
import Terminal from './terminal';

const sampleLines = [
  { type: 'command' as const, content: 'echo "Hello World"', prompt: '~' },
  { type: 'output' as const, content: 'Hello World', delay: 300 },
  { type: 'command' as const, content: 'ls -la', prompt: '~', delay: 200 },
  { type: 'output' as const, content: 'drwxr-xr-x  5 user  staff  160 May  6 12:00 .', delay: 100 },
];

export default function TerminalThemes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[500px] p-8">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-neutral-500 font-medium">macOS Theme</span>
        <Terminal
          lines={sampleLines}
          title="Terminal — bash"
          theme="macos"
          height="180px"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <span className="text-sm text-neutral-500 font-medium">Windows Theme</span>
        <Terminal
          lines={sampleLines}
          title="Command Prompt"
          theme="windows"
          height="180px"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <span className="text-sm text-neutral-500 font-medium">Linux Theme</span>
        <Terminal
          lines={sampleLines}
          title="Terminal"
          theme="linux"
          height="180px"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <span className="text-sm text-neutral-500 font-medium">Minimal Theme</span>
        <Terminal
          lines={sampleLines}
          title="shell"
          theme="minimal"
          height="180px"
        />
      </div>
    </div>
  );
}
