'use client';

import FloatingButtons from './floating-buttons';
import { Twitter, Github, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function FloatingButtonsSocial() {
  const buttons = [
    {
      id: 'twitter',
      icon: <Twitter className="h-5 w-5" />,
      label: 'Twitter',
      href: 'https://twitter.com',
      color: '#1DA1F2',
      hoverColor: '#0d8bd9',
    },
    {
      id: 'github',
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      href: 'https://github.com',
      color: '#333333',
      hoverColor: '#1a1a1a',
    },
    {
      id: 'linkedin',
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: '#0A66C2',
      hoverColor: '#084d94',
    },
    {
      id: 'instagram',
      icon: <Instagram className="h-5 w-5" />,
      label: 'Instagram',
      href: 'https://instagram.com',
      color: '#E4405F',
      hoverColor: '#d62e4c',
    },
    {
      id: 'youtube',
      icon: <Youtube className="h-5 w-5" />,
      label: 'YouTube',
      href: 'https://youtube.com',
      color: '#FF0000',
      hoverColor: '#cc0000',
    },
  ];

  return (
    <div className="relative h-[400px] w-full bg-slate-100 dark:bg-slate-900 rounded-xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-slate-500 dark:text-slate-400">
          ← Social links - hover to expand
        </p>
      </div>
      <FloatingButtons
        buttons={buttons}
        position="left"
        verticalPosition={50}
        expandOnHover
        expandDirection="vertical"
        variant="solid"
        shadow="lg"
        borderRadius="lg"
        animation="slide"
        gap={2}
        containerMode
      />
    </div>
  );
}
