'use client';

import FloatingButtons from './floating-buttons';
import { MessageCircle, Phone, Mail, HelpCircle } from 'lucide-react';

export default function FloatingButtonsDefault() {
  const buttons = [
    {
      id: 'chat',
      icon: <MessageCircle className="h-5 w-5" />,
      label: 'Live Chat',
      onClick: () => alert('Chat clicked!'),
      color: '#6366f1',
      hoverColor: '#4f46e5',
    },
    {
      id: 'call',
      icon: <Phone className="h-5 w-5" />,
      label: 'Call Us',
      onClick: () => alert('Call clicked!'),
      color: '#22c55e',
      hoverColor: '#16a34a',
    },
    {
      id: 'email',
      icon: <Mail className="h-5 w-5" />,
      label: 'Email Us',
      onClick: () => alert('Email clicked!'),
      color: '#f59e0b',
      hoverColor: '#d97706',
    },
    {
      id: 'help',
      icon: <HelpCircle className="h-5 w-5" />,
      label: 'Get Help',
      onClick: () => alert('Help clicked!'),
      color: '#ec4899',
      hoverColor: '#db2777',
    },
  ];

  return (
    <div className="relative h-[400px] w-full bg-slate-100 dark:bg-slate-900 rounded-xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-slate-500 dark:text-slate-400">
          Hover each button to expand →
        </p>
      </div>
      <FloatingButtons
        buttons={buttons}
        position="right"
        verticalPosition={50}
        expandOnHover
        expandDirection="vertical"
        variant="solid"
        shadow="lg"
        borderRadius="lg"
        animation="slide"
        containerMode
      />
    </div>
  );
}
