'use client';
import Terminal from './terminal';

export default function TerminalLineNumbers() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8">
      <div className="w-full max-w-2xl">
        <Terminal
          lines={[
            { type: 'command', content: 'cat package.json | head -15', prompt: '~' },
            { type: 'output', content: '{', delay: 200 },
            { type: 'output', content: '  "name": "my-awesome-app",', delay: 50 },
            { type: 'output', content: '  "version": "1.0.0",', delay: 50 },
            { type: 'output', content: '  "description": "An awesome application",', delay: 50 },
            { type: 'output', content: '  "main": "index.js",', delay: 50 },
            { type: 'output', content: '  "scripts": {', delay: 50 },
            { type: 'output', content: '    "dev": "next dev",', delay: 50 },
            { type: 'output', content: '    "build": "next build",', delay: 50 },
            { type: 'output', content: '    "start": "next start"', delay: 50 },
            { type: 'output', content: '  },', delay: 50 },
            { type: 'output', content: '  "dependencies": {', delay: 50 },
            { type: 'output', content: '    "next": "^14.0.0",', delay: 50 },
            { type: 'output', content: '    "react": "^18.2.0"', delay: 50 },
            { type: 'output', content: '  }', delay: 50 },
            { type: 'output', content: '}', delay: 50 },
          ]}
          title="Terminal — cat"
          theme="minimal"
          showLineNumbers={true}
          typingSpeed={30}
          height="350px"
        />
      </div>
    </div>
  );
}
