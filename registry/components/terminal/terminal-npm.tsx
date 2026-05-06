'use client';
import Terminal from './terminal';

export default function TerminalNpm() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8">
      <div className="w-full max-w-2xl">
        <Terminal
          lines={[
            { type: 'command', content: 'npx create-next-app@latest my-app', prompt: '~' },
            { type: 'info', content: 'Creating a new Next.js app in /Users/dev/my-app', delay: 600 },
            { type: 'output', content: '', delay: 100 },
            { type: 'output', content: 'Installing dependencies:', delay: 200 },
            { type: 'output', content: '- react', delay: 100 },
            { type: 'output', content: '- react-dom', delay: 80 },
            { type: 'output', content: '- next', delay: 80 },
            { type: 'output', content: '', delay: 100 },
            { type: 'info', content: 'Installing devDependencies:', delay: 200 },
            { type: 'output', content: '- typescript', delay: 80 },
            { type: 'output', content: '- @types/node', delay: 80 },
            { type: 'output', content: '- @types/react', delay: 80 },
            { type: 'output', content: '- tailwindcss', delay: 80 },
            { type: 'output', content: '', delay: 100 },
            { type: 'success', content: '✓ Success! Created my-app at /Users/dev/my-app', delay: 500 },
            { type: 'output', content: '', delay: 100 },
            { type: 'info', content: 'Inside that directory, you can run:', delay: 200 },
            { type: 'output', content: '  npm run dev    - Starts the development server', delay: 100 },
            { type: 'output', content: '  npm run build  - Builds the app for production', delay: 100 },
            { type: 'output', content: '  npm run start  - Runs the built app', delay: 100 },
          ]}
          title="Terminal — npm"
          theme="macos"
          typingSpeed={35}
          height="350px"
        />
      </div>
    </div>
  );
}
