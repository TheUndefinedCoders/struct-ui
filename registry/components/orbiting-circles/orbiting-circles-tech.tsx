'use client';
import OrbitingCircles from './orbiting-circles';
import Image from 'next/image';

export default function OrbitingCirclesTech() {
  const rings = [
    {
      radius: 70,
      duration: 15,
      reverse: false,
      items: [
        {
          id: 'react',
          title: 'React',
          icon: (
            <div className="w-10 h-10 rounded-full bg-white p-2 shadow-lg">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width={24} height={24} />
            </div>
          ),
        },
        {
          id: 'vue',
          title: 'Vue.js',
          icon: (
            <div className="w-10 h-10 rounded-full bg-white p-2 shadow-lg">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue" width={24} height={24} />
            </div>
          ),
        },
        {
          id: 'angular',
          title: 'Angular',
          icon: (
            <div className="w-10 h-10 rounded-full bg-white p-2 shadow-lg">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" width={24} height={24} />
            </div>
          ),
        },
      ],
    },
    {
      radius: 130,
      duration: 25,
      reverse: true,
      items: [
        {
          id: 'nextjs',
          title: 'Next.js',
          icon: (
            <div className="w-12 h-12 rounded-full bg-black p-2.5 shadow-lg border border-neutral-700">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" width={28} height={28} className="invert" />
            </div>
          ),
        },
        {
          id: 'typescript',
          title: 'TypeScript',
          icon: (
            <div className="w-12 h-12 rounded-full bg-white p-2.5 shadow-lg">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width={28} height={28} />
            </div>
          ),
        },
        {
          id: 'nodejs',
          title: 'Node.js',
          icon: (
            <div className="w-12 h-12 rounded-full bg-white p-2.5 shadow-lg">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width={28} height={28} />
            </div>
          ),
        },
        {
          id: 'tailwind',
          title: 'Tailwind CSS',
          icon: (
            <div className="w-12 h-12 rounded-full bg-[#06B6D4] p-2.5 shadow-lg">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
              </svg>
            </div>
          ),
        },
      ],
    },
    {
      radius: 190,
      duration: 35,
      reverse: false,
      items: [
        {
          id: 'docker',
          title: 'Docker',
          icon: (
            <div className="w-11 h-11 rounded-full bg-white p-2 shadow-lg">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" width={28} height={28} />
            </div>
          ),
        },
        {
          id: 'aws',
          title: 'AWS',
          icon: (
            <div className="w-11 h-11 rounded-full bg-[#FF9900] p-2 shadow-lg">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS" width={28} height={28} />
            </div>
          ),
        },
        {
          id: 'github',
          title: 'GitHub',
          icon: (
            <div className="w-11 h-11 rounded-full bg-white p-2 shadow-lg">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width={28} height={28} />
            </div>
          ),
        },
        {
          id: 'mongodb',
          title: 'MongoDB',
          icon: (
            <div className="w-11 h-11 rounded-full bg-white p-2 shadow-lg">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" width={28} height={28} />
            </div>
          ),
        },
        {
          id: 'postgresql',
          title: 'PostgreSQL',
          icon: (
            <div className="w-11 h-11 rounded-full bg-white p-2 shadow-lg">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" width={28} height={28} />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-[550px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8">
      <OrbitingCircles
        rings={rings}
        centerContent={
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center shadow-xl shadow-cyan-500/30">
            <span className="text-white font-bold text-xl">TECH</span>
          </div>
        }
        showOrbits={true}
        orbitClassName="border-slate-600/30"
      />
    </div>
  );
}
