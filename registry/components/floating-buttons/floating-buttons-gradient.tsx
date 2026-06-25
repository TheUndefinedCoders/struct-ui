'use client';

import FloatingButtons from './floating-buttons';
import { Sparkles, Zap, Heart, Star, Rocket } from 'lucide-react';

export default function FloatingButtonsGradient() {
  const buttons = [
    {
      id: 'sparkles',
      icon: <Sparkles className="h-5 w-5" />,
      label: 'Magic',
      tooltip: 'Magic Effects',
      onClick: () => alert('Magic!'),
      color: '#f472b6',
      hoverColor: '#c026d3',
    },
    {
      id: 'zap',
      icon: <Zap className="h-5 w-5" />,
      label: 'Power',
      tooltip: 'Boost Power',
      onClick: () => alert('Power!'),
      color: '#fbbf24',
      hoverColor: '#f97316',
    },
    {
      id: 'heart',
      icon: <Heart className="h-5 w-5" />,
      label: 'Love',
      tooltip: 'Spread Love',
      onClick: () => alert('Love!'),
      color: '#ef4444',
      hoverColor: '#ec4899',
    },
    {
      id: 'star',
      icon: <Star className="h-5 w-5" />,
      label: 'Star',
      tooltip: 'Add to Favorites',
      onClick: () => alert('Starred!'),
      color: '#a855f7',
      hoverColor: '#6366f1',
    },
    {
      id: 'rocket',
      icon: <Rocket className="h-5 w-5" />,
      label: 'Launch',
      tooltip: 'Launch Project',
      onClick: () => alert('Launched!'),
      color: '#06b6d4',
      hoverColor: '#3b82f6',
    },
  ];

  return (
    <div className="relative h-[400px] w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-slate-400">
          Gradient buttons with glow effect →
        </p>
      </div>
      <FloatingButtons
        buttons={buttons}
        position="right"
        verticalPosition={50}
        expandOnHover
        expandDirection="vertical"
        variant="gradient"
        shadow="xl"
        borderRadius="full"
        animation="slide"
        gap={3}
        size="lg"
        containerMode
      />
    </div>
  );
}
