'use client';
import { useState, useEffect } from 'react';
import TextTyping from './text-typing';

const messages = [
  { sender: 'user', text: 'Hey! Can you help me with something?' },
  { sender: 'ai', text: 'Of course! I\'d be happy to help. What do you need?' },
  { sender: 'user', text: 'I need a cool typing animation' },
  { sender: 'ai', text: 'Here\'s a smooth typing effect for you! 🎉' },
];

export default function TextTypingChat() {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (visibleMessages < messages.length) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages(prev => prev + 1);
        }, 2000);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [visibleMessages]);

  return (
    <div className="flex items-center justify-center min-h-[450px] p-8">
      <div className="w-full max-w-md bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden">
        {/* Chat Header */}
        <div className="flex items-center gap-3 px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
            AI
          </div>
          <div>
            <h4 className="font-medium text-neutral-900 dark:text-white">AI Assistant</h4>
            <p className="text-xs text-green-500">Online</p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="p-4 h-72 overflow-y-auto space-y-4">
          {messages.slice(0, visibleMessages).map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-br-sm'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-bl-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          
          {/* Typing indicator */}
          {isTyping && visibleMessages < messages.length && (
            <div className="flex justify-start">
              <div className="bg-neutral-100 dark:bg-neutral-800 px-4 py-3 rounded-2xl rounded-bl-sm">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-neutral-200 dark:border-neutral-700">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm text-neutral-900 dark:text-white placeholder-neutral-500 outline-none"
            />
            <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
