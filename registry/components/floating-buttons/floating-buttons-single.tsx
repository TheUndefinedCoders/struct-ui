'use client';

import FloatingButtons from './floating-buttons';
import { MessageCircle } from 'lucide-react';

export default function FloatingButtonsSingle() {
  const buttons = [
    {
      id: 'chat',
      icon: <MessageCircle className="h-5 w-5" />,
      label: 'Chat with us',
      onClick: () => alert('Opening chat...'),
      color: '#6366f1',
      hoverColor: '#4f46e5',
    },
  ];

  return (
    <div className="relative h-[400px] w-full bg-slate-100 dark:bg-slate-900 rounded-xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-slate-500 dark:text-slate-400">
          ← Single button with label always visible →
        </p>
      </div>
      <FloatingButtons
        buttons={buttons}
        position="right"
        verticalPosition={50}
        size="md"
        variant="gradient"
        primaryColor="#6366f1"
        secondaryColor="#8b5cf6"
        shadow="xl"
        borderRadius="lg"
        containerMode
        expanded
        buttonLayout="vertical"
      />
      <FloatingButtons
        buttons={buttons}
        position="left"
        verticalPosition={50}
        size="md"
        variant="gradient"
        primaryColor="#6366f1"
        secondaryColor="#8b5cf6"
        shadow="xl"
        borderRadius="lg"
        containerMode
        expanded
        buttonLayout="vertical"
      />
    </div>
  );
}
