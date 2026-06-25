'use client';

import FloatingButtons from './floating-buttons';
import { ArrowUp, Minus, ArrowDown } from 'lucide-react';

export default function FloatingButtonsPositions() {
  const topButtons = [
    {
      id: 'top',
      icon: <ArrowUp className="h-5 w-5" />,
      label: '20vh',
      onClick: () => alert('Top position'),
      color: '#22c55e',
    },
  ];

  const middleButtons = [
    {
      id: 'middle',
      icon: <Minus className="h-5 w-5" />,
      label: '50vh',
      onClick: () => alert('Middle position'),
      color: '#6366f1',
    },
  ];

  const bottomButtons = [
    {
      id: 'bottom',
      icon: <ArrowDown className="h-5 w-5" />,
      label: '80vh',
      onClick: () => alert('Bottom position'),
      color: '#ef4444',
    },
  ];

  return (
    <div className="relative h-[400px] w-full bg-slate-100 dark:bg-slate-900 rounded-xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-500 dark:text-slate-400 mb-2">
            Different vertical positions
          </p>
          <p className="text-xs text-slate-400">
            20vh (top) • 50vh (middle) • 80vh (bottom)
          </p>
        </div>
      </div>
      
      <FloatingButtons
        buttons={topButtons}
        position="right"
        verticalPosition={20}
        variant="solid"
        shadow="lg"
        borderRadius="full"
        animation="slide"
        containerMode
      />
      
      <FloatingButtons
        buttons={middleButtons}
        position="right"
        verticalPosition={50}
        variant="solid"
        shadow="lg"
        borderRadius="full"
        animation="slide"
        containerMode
      />
      
      <FloatingButtons
        buttons={bottomButtons}
        position="right"
        verticalPosition={80}
        variant="solid"
        shadow="lg"
        borderRadius="full"
        animation="slide"
        containerMode
      />
    </div>
  );
}
