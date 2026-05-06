'use client';
import Terminal from './terminal';

export default function TerminalDeploy() {
  return (
    <div className="flex items-center justify-center min-h-[450px] p-8">
      <div className="w-full max-w-2xl">
        <Terminal
          lines={[
            { type: 'command', content: 'vercel --prod', prompt: '~/my-app' },
            { type: 'info', content: 'Vercel CLI 33.0.0', delay: 300 },
            { type: 'output', content: '', delay: 100 },
            { type: 'info', content: '🔍 Inspecting project settings...', delay: 400 },
            { type: 'output', content: '  Framework: Next.js', delay: 200 },
            { type: 'output', content: '  Build Command: next build', delay: 150 },
            { type: 'output', content: '  Output Directory: .next', delay: 150 },
            { type: 'output', content: '', delay: 100 },
            { type: 'info', content: '📦 Building project...', delay: 500 },
            { type: 'output', content: '  Compiling TypeScript...', delay: 300 },
            { type: 'output', content: '  Generating static pages...', delay: 400 },
            { type: 'output', content: '  Optimizing images...', delay: 300 },
            { type: 'success', content: '✓ Build completed in 32s', delay: 500 },
            { type: 'output', content: '', delay: 100 },
            { type: 'info', content: '🚀 Deploying to production...', delay: 400 },
            { type: 'output', content: '  Uploading build artifacts...', delay: 600 },
            { type: 'output', content: '  Configuring edge network...', delay: 400 },
            { type: 'output', content: '', delay: 100 },
            { type: 'success', content: '✓ Production deployment ready', delay: 500 },
            { type: 'output', content: '', delay: 100 },
            { type: 'success', content: '🔗 https://my-app.vercel.app', delay: 200 },
          ]}
          title="Terminal — vercel"
          theme="macos"
          typingSpeed={25}
          height="400px"
        />
      </div>
    </div>
  );
}
