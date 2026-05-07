'use client';
import OrbitingCircles from './orbiting-circles';

export default function OrbitingCirclesMinimal() {
  const rings = [
    {
      radius: 80,
      duration: 20,
      reverse: false,
      items: [
        { icon: <div className="w-3 h-3 rounded-full bg-white" /> },
        { icon: <div className="w-3 h-3 rounded-full bg-white" /> },
        { icon: <div className="w-3 h-3 rounded-full bg-white" /> },
      ],
    },
    {
      radius: 130,
      duration: 25,
      reverse: true,
      items: [
        { icon: <div className="w-4 h-4 rounded-full bg-white/80" /> },
        { icon: <div className="w-4 h-4 rounded-full bg-white/80" /> },
        { icon: <div className="w-4 h-4 rounded-full bg-white/80" /> },
        { icon: <div className="w-4 h-4 rounded-full bg-white/80" /> },
      ],
    },
    {
      radius: 180,
      duration: 35,
      reverse: false,
      items: [
        { icon: <div className="w-2 h-2 rounded-full bg-white/60" /> },
        { icon: <div className="w-2 h-2 rounded-full bg-white/60" /> },
        { icon: <div className="w-2 h-2 rounded-full bg-white/60" /> },
        { icon: <div className="w-2 h-2 rounded-full bg-white/60" /> },
        { icon: <div className="w-2 h-2 rounded-full bg-white/60" /> },
        { icon: <div className="w-2 h-2 rounded-full bg-white/60" /> },
      ],
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-[500px] bg-black rounded-2xl p-8">
      <OrbitingCircles
        rings={rings}
        centerContent={
          <div className="w-6 h-6 rounded-full bg-white shadow-lg shadow-white/30" />
        }
        showOrbits={true}
        orbitClassName="border-white/10"
      />
    </div>
  );
}
