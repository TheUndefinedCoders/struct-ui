'use client';

import FloatingButtons from './floating-buttons';
import { Home, Bookmark, Share2, MoreHorizontal } from 'lucide-react';

export default function FloatingButtonsHorizontal() {
  const buttons = [
    {
      id: 'home',
      icon: <Home className="h-5 w-5" />,
      label: 'Home',
      tooltip: 'Go Home',
      onClick: () => alert('Home clicked!'),
      color: '#6366f1',
      hoverColor: '#4f46e5',
    },
    {
      id: 'bookmark',
      icon: <Bookmark className="h-5 w-5" />,
      label: 'Save',
      tooltip: 'Save Item',
      onClick: () => alert('Saved!'),
      color: '#6366f1',
      hoverColor: '#4f46e5',
    },
    {
      id: 'share',
      icon: <Share2 className="h-5 w-5" />,
      label: 'Share',
      tooltip: 'Share Item',
      onClick: () => alert('Share dialog!'),
      color: '#6366f1',
      hoverColor: '#4f46e5',
    },
    {
      id: 'more',
      icon: <MoreHorizontal className="h-5 w-5" />,
      label: 'More',
      tooltip: 'More Options',
      onClick: () => alert('More options!'),
      color: '#6366f1',
      hoverColor: '#4f46e5',
    },
  ];

  return (
    <div className="relative h-[400px] w-full bg-slate-100 dark:bg-slate-900 rounded-xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-slate-500 dark:text-slate-400">
          Horizontal layout at bottom →
        </p>
      </div>
      <FloatingButtons
        buttons={buttons}
        position="right"
        verticalPosition={85}
        expandOnHover
        expandDirection="horizontal"
        variant="solid"
        shadow="lg"
        borderRadius="full"
        animation="fade"
        gap={2}
        backdropBlur
        containerMode
      />
    </div>
  );
}
