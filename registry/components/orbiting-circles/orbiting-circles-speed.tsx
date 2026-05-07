'use client';
import OrbitingCircles from './orbiting-circles';
import { Zap, Rocket, Flame, Sparkles } from 'lucide-react';

export default function OrbitingCirclesSpeed() {
  const rings = [
    {
      radius: 60,
      duration: 5,
      reverse: false,
      items: [
        {
          icon: (
            <div className="w-8 h-8 rounded-full bg-yellow-500 p-1.5 shadow-lg">
              <Zap className="w-full h-full text-white" />
            </div>
          ),
        },
        {
          icon: (
            <div className="w-8 h-8 rounded-full bg-yellow-500 p-1.5 shadow-lg">
              <Zap className="w-full h-full text-white" />
            </div>
          ),
        },
      ],
    },
    {
      radius: 100,
      duration: 15,
      reverse: true,
      items: [
        {
          icon: (
            <div className="w-10 h-10 rounded-full bg-orange-500 p-2 shadow-lg">
              <Rocket className="w-full h-full text-white" />
            </div>
          ),
        },
        {
          icon: (
            <div className="w-10 h-10 rounded-full bg-orange-500 p-2 shadow-lg">
              <Flame className="w-full h-full text-white" />
            </div>
          ),
        },
        {
          icon: (
            <div className="w-10 h-10 rounded-full bg-orange-500 p-2 shadow-lg">
              <Sparkles className="w-full h-full text-white" />
            </div>
          ),
        },
      ],
    },
    {
      radius: 150,
      duration: 30,
      reverse: false,
      items: [
        {
          icon: (
            <div className="w-10 h-10 rounded-full bg-red-500 p-2 shadow-lg">
              <Flame className="w-full h-full text-white" />
            </div>
          ),
        },
        {
          icon: (
            <div className="w-10 h-10 rounded-full bg-red-500 p-2 shadow-lg">
              <Flame className="w-full h-full text-white" />
            </div>
          ),
        },
        {
          icon: (
            <div className="w-10 h-10 rounded-full bg-red-500 p-2 shadow-lg">
              <Flame className="w-full h-full text-white" />
            </div>
          ),
        },
        {
          icon: (
            <div className="w-10 h-10 rounded-full bg-red-500 p-2 shadow-lg">
              <Flame className="w-full h-full text-white" />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-[450px] bg-gradient-to-br from-neutral-950 to-neutral-900 rounded-2xl p-8">
      <div className="text-center space-y-4">
        <OrbitingCircles
          rings={rings}
          centerContent={
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/40">
              <Zap className="w-7 h-7 text-white" />
            </div>
          }
          showOrbits={true}
          orbitClassName="border-orange-500/20"
        />
        <p className="text-neutral-400 text-sm mt-8">Inner: 5s • Middle: 15s • Outer: 30s</p>
      </div>
    </div>
  );
}
