'use client';
import OrbitingCircles from './orbiting-circles';
import { Github, Twitter, Linkedin, Instagram, Youtube, Facebook } from 'lucide-react';

export default function OrbitingCirclesSocial() {
  const rings = [
    {
      radius: 90,
      duration: 18,
      reverse: false,
      items: [
        {
          icon: (
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-3 shadow-lg">
              <Instagram className="w-full h-full text-white" />
            </div>
          ),
        },
        {
          icon: (
            <div className="w-12 h-12 rounded-full bg-[#1DA1F2] p-3 shadow-lg">
              <Twitter className="w-full h-full text-white" />
            </div>
          ),
        },
        {
          icon: (
            <div className="w-12 h-12 rounded-full bg-[#0A66C2] p-3 shadow-lg">
              <Linkedin className="w-full h-full text-white" />
            </div>
          ),
        },
      ],
    },
    {
      radius: 160,
      duration: 28,
      reverse: true,
      items: [
        {
          icon: (
            <div className="w-14 h-14 rounded-full bg-[#FF0000] p-3.5 shadow-lg">
              <Youtube className="w-full h-full text-white" />
            </div>
          ),
        },
        {
          icon: (
            <div className="w-14 h-14 rounded-full bg-neutral-900 p-3.5 shadow-lg border border-neutral-700">
              <Github className="w-full h-full text-white" />
            </div>
          ),
        },
        {
          icon: (
            <div className="w-14 h-14 rounded-full bg-[#1877F2] p-3.5 shadow-lg">
              <Facebook className="w-full h-full text-white" />
            </div>
          ),
        },
        {
          icon: (
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 p-3.5 shadow-lg">
              <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-[480px] bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 rounded-2xl p-8">
      <OrbitingCircles
        rings={rings}
        centerContent={
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
            <span className="text-white font-bold text-sm">SOCIAL</span>
          </div>
        }
        showOrbits={true}
        orbitClassName="border-neutral-700/40"
      />
    </div>
  );
}
