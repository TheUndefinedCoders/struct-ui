'use client';
import OrbitingCircles from './orbiting-circles';
import { Star, Heart, Sparkles, Moon, Sun, Cloud } from 'lucide-react';

export default function OrbitingCirclesGradient() {
  const rings = [
    {
      radius: 85,
      duration: 18,
      reverse: false,
      items: [
        {
          icon: (
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 p-2.5 shadow-lg shadow-pink-500/30">
              <Heart className="w-full h-full text-white" />
            </div>
          ),
        },
        {
          icon: (
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 p-2.5 shadow-lg shadow-amber-500/30">
              <Star className="w-full h-full text-white" />
            </div>
          ),
        },
        {
          icon: (
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 p-2.5 shadow-lg shadow-violet-500/30">
              <Sparkles className="w-full h-full text-white" />
            </div>
          ),
        },
      ],
    },
    {
      radius: 155,
      duration: 28,
      reverse: true,
      items: [
        {
          icon: (
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 p-3 shadow-lg shadow-blue-500/30">
              <Moon className="w-full h-full text-white" />
            </div>
          ),
        },
        {
          icon: (
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 p-3 shadow-lg shadow-yellow-500/30">
              <Sun className="w-full h-full text-white" />
            </div>
          ),
        },
        {
          icon: (
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 p-3 shadow-lg shadow-cyan-500/30">
              <Cloud className="w-full h-full text-white" />
            </div>
          ),
        },
        {
          icon: (
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 p-3 shadow-lg shadow-emerald-500/30">
              <Sparkles className="w-full h-full text-white" />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-[480px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-2xl p-8">
      <OrbitingCircles
        rings={rings}
        centerContent={
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-xl shadow-purple-500/30">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
        }
        showOrbits={true}
        orbitClassName="border-purple-500/20"
      />
    </div>
  );
}
