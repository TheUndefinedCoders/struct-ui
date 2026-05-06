'use client';
import Terminal from './terminal';

export default function TerminalMultiline() {
  return (
    <div className="flex items-center justify-center min-h-[450px] p-8">
      <div className="w-full max-w-2xl">
        <Terminal
          lines={[
            { type: 'command', content: 'git status', prompt: '~/project' },
            { type: 'output', content: 'On branch main', delay: 200 },
            { type: 'output', content: 'Your branch is up to date with \'origin/main\'.', delay: 100 },
            { type: 'output', content: '', delay: 50 },
            { type: 'output', content: 'Changes not staged for commit:', delay: 100 },
            { type: 'output', content: '  modified:   src/components/Button.tsx', delay: 50 },
            { type: 'output', content: '  modified:   src/styles/globals.css', delay: 50 },
            { type: 'output', content: '', delay: 50 },
            { type: 'command', content: 'git add .', prompt: '~/project', delay: 300 },
            { type: 'command', content: 'git commit -m "feat: add new button component"', prompt: '~/project', delay: 200 },
            { type: 'success', content: '[main 7a8b9c0] feat: add new button component', delay: 400 },
            { type: 'output', content: ' 2 files changed, 45 insertions(+), 12 deletions(-)', delay: 100 },
            { type: 'command', content: 'git push origin main', prompt: '~/project', delay: 300 },
            { type: 'info', content: 'Enumerating objects: 8, done.', delay: 200 },
            { type: 'info', content: 'Counting objects: 100% (8/8), done.', delay: 150 },
            { type: 'success', content: 'To github.com:user/project.git', delay: 200 },
            { type: 'success', content: '   abc1234..7a8b9c0  main -> main', delay: 100 },
          ]}
          title="Terminal — git"
          theme="macos"
          typingSpeed={40}
          height="320px"
        />
      </div>
    </div>
  );
}
