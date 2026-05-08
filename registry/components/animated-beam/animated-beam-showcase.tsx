'use client';

import { forwardRef, useRef } from 'react';
import { cn } from '@/lib/utils';
import { AnimatedBeam } from './animated-beam';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; title?: string }
>(({ className, children, title }, ref) => {
  const content = (
    <div
      ref={ref}
      className={cn(
        'z-10 flex size-12 items-center justify-center rounded-full border-2 border-neutral-200 bg-white p-2.5 shadow-lg transition-transform hover:scale-110',
        'dark:border-neutral-700 dark:bg-neutral-900',
        className
      )}
    >
      {children}
    </div>
  );

  if (title) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{content}</TooltipTrigger>
        <TooltipContent side="top">
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  return content;
});

Circle.displayName = 'Circle';

const Icons = {
  slack: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"/>
      <path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"/>
      <path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"/>
      <path fill="#ECB22E" d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
    </svg>
  ),
  github: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  figma: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="#F24E1E" d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"/>
      <path fill="#A259FF" d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"/>
      <path fill="#F24E1E" d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"/>
      <path fill="#FF7262" d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"/>
      <path fill="#1ABCFE" d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"/>
    </svg>
  ),
  notion: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 2.028c-.42-.326-.98-.7-2.055-.607L3.01 2.586c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.886l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.22.186c-.094-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.453-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.513.28-.886.747-.933zM2.591 1.267l13.497-1c1.635-.14 2.055-.047 3.08.7l4.25 2.986c.7.513.933.653.933 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.127-4.06c-.56-.746-.793-1.306-.793-1.96V2.62c0-.838.374-1.54 1.26-1.353z" />
    </svg>
  ),
  openai: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6099-1.4997Z" />
    </svg>
  ),
  linear: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#5E6AD2" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.03 10.456a9.432 9.432 0 0 0-.031.514 8.99 8.99 0 0 0 17.949.514h.031c.014-.17.022-.344.022-.52a8.99 8.99 0 0 0-8.99-8.99 8.99 8.99 0 0 0-8.99 8.99c0 .176.008.35.022.52l-.013-.028zm.492-1.478a8.99 8.99 0 0 1 16.966 0l-8.483 8.483a8.99 8.99 0 0 1-8.483-8.483z"/>
    </svg>
  ),
  vercel: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 22.525H0l12-21.05 12 21.05z" />
    </svg>
  ),
  stripe: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#635BFF" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.939 3.39 1.615 3.39 2.636 0 1.024-.865 1.58-2.302 1.58-1.92 0-4.79-.877-6.904-2.027l-.89 5.555C5.17 23.155 7.933 24 11.132 24c2.617 0 4.796-.664 6.349-1.939 1.662-1.367 2.519-3.37 2.519-5.852 0-4.068-2.521-5.782-6.024-7.059z"/>
    </svg>
  ),
};

export default function AnimatedBeamShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const input1Ref = useRef<HTMLDivElement>(null);
  const input2Ref = useRef<HTMLDivElement>(null);
  const input3Ref = useRef<HTMLDivElement>(null);
  const input4Ref = useRef<HTMLDivElement>(null);
  
  const aiRef = useRef<HTMLDivElement>(null);
  
  const output1Ref = useRef<HTMLDivElement>(null);
  const output2Ref = useRef<HTMLDivElement>(null);
  const output3Ref = useRef<HTMLDivElement>(null);
  const output4Ref = useRef<HTMLDivElement>(null);

  return (
    <TooltipProvider delayDuration={0}>
      <div
        className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10"
        ref={containerRef}
      >
        <div className="flex size-full max-w-2xl flex-row items-stretch justify-between gap-10">
          {/* Input nodes */}
          <div className="flex flex-col justify-center gap-4">
            <Circle ref={input1Ref} title="Slack" className="dark:bg-neutral-800">
              <Icons.slack />
            </Circle>
            <Circle ref={input2Ref} title="GitHub" className="dark:bg-neutral-800">
              <Icons.github />
            </Circle>
            <Circle ref={input3Ref} title="Figma" className="dark:bg-neutral-800">
              <Icons.figma />
            </Circle>
            <Circle ref={input4Ref} title="Notion" className="dark:bg-neutral-800">
              <Icons.notion />
            </Circle>
          </div>

          {/* Central AI node */}
          <div className="flex flex-col justify-center">
            <Circle 
              ref={aiRef}
              title="OpenAI"
              className="size-20 bg-gradient-to-br from-violet-500 to-purple-600 border-0 shadow-2xl shadow-purple-500/25"
            >
              <Icons.openai />
            </Circle>
          </div>

          {/* Output nodes */}
          <div className="flex flex-col justify-center gap-4">
            <Circle ref={output1Ref} title="Linear" className="dark:bg-neutral-800">
              <Icons.linear />
            </Circle>
            <Circle ref={output2Ref} title="Vercel" className="dark:bg-neutral-800">
              <Icons.vercel />
            </Circle>
            <Circle ref={output3Ref} title="Stripe" className="dark:bg-neutral-800">
              <Icons.stripe />
            </Circle>
            <Circle ref={output4Ref} title="GitHub" className="dark:bg-neutral-800">
              <Icons.github />
            </Circle>
          </div>
        </div>

      {/* Input beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={input1Ref}
        toRef={aiRef}
        curvature={-40}
        pathColor="rgba(147, 51, 234, 0.2)"
        gradientStartColor="#a855f7"
        gradientStopColor="#6366f1"
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={input2Ref}
        toRef={aiRef}
        curvature={-20}
        pathColor="rgba(147, 51, 234, 0.2)"
        gradientStartColor="#8b5cf6"
        gradientStopColor="#3b82f6"
        duration={3}
        delay={0.5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={input3Ref}
        toRef={aiRef}
        curvature={20}
        pathColor="rgba(147, 51, 234, 0.2)"
        gradientStartColor="#ec4899"
        gradientStopColor="#8b5cf6"
        duration={3}
        delay={1}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={input4Ref}
        toRef={aiRef}
        curvature={40}
        pathColor="rgba(147, 51, 234, 0.2)"
        gradientStartColor="#f43f5e"
        gradientStopColor="#a855f7"
        duration={3}
        delay={1.5}
      />

      {/* Output beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={aiRef}
        toRef={output1Ref}
        curvature={-40}
        pathColor="rgba(59, 130, 246, 0.2)"
        gradientStartColor="#06b6d4"
        gradientStopColor="#3b82f6"
        duration={3}
        delay={0.25}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={aiRef}
        toRef={output2Ref}
        curvature={-20}
        pathColor="rgba(59, 130, 246, 0.2)"
        gradientStartColor="#10b981"
        gradientStopColor="#06b6d4"
        duration={3}
        delay={0.75}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={aiRef}
        toRef={output3Ref}
        curvature={20}
        pathColor="rgba(59, 130, 246, 0.2)"
        gradientStartColor="#22c55e"
        gradientStopColor="#10b981"
        duration={3}
        delay={1.25}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={aiRef}
        toRef={output4Ref}
        curvature={40}
        pathColor="rgba(59, 130, 246, 0.2)"
        gradientStartColor="#84cc16"
        gradientStopColor="#22c55e"
        duration={3}
        delay={1.75}
      />
      </div>
    </TooltipProvider>
  );
}
