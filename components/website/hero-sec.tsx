'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { motion } from "framer-motion";

function HeroSec() {
  const [blocks, setBlocks] = useState([]);

  const activeDivs = useMemo(
    () => ({
      0: new Set([4, 1]),
      2: new Set([3]),
      4: new Set([2, 5, 8]),
      5: new Set([4]),
      10: new Set([3]),
      12: new Set([7]),
      15: new Set([6]),
      14: new Set([5]),
      13: new Set([4]),
    }),
    []
  );

  useEffect(() => {
    const updateBlocks = () => {
      const { innerWidth, innerHeight } = window;
      const blockSize = innerWidth * 0.06; // Using 6vw for the block size
      const amountOfBlocks = Math.ceil(innerHeight / blockSize);

      const newBlocks = Array.from({ length: 17 }, (_, columnIndex) => (
        <div key={columnIndex} className='w-[6vw] h-full'>
          {Array.from({ length: amountOfBlocks }, (_, rowIndex) => (
            <div
              key={rowIndex}
              className={`h-[6vw] w-full border-[1px] dark:border-[rgba(255,255,255,0.015)] border-gray-50 ${
                // @ts-ignore
                activeDivs[columnIndex]?.has(rowIndex)
                  ? 'dark:bg-[rgba(255,255,255,0.03)] bg-gray-50'
                  : ''
              }`}
              style={{ height: `${blockSize}px` }}
            ></div>
          ))}
        </div>
      ));
      // @ts-ignore
      setBlocks(newBlocks);
    };

    updateBlocks();
    window.addEventListener('resize', updateBlocks);

    return () => window.removeEventListener('resize', updateBlocks);
  }, [activeDivs]);
  return (
    <>
      <section className='min-h-[90vh] py-24 overflow-hidden relative'>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <span className="inline-block px-3 py-1 text-sm rounded-full bg-neutral-900 border border-neutral-700">
                🚀 Introducing Your UI Library
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Build stunning UIs with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  Effortless Precision
                </span>
              </h1>

              <p className="text-lg text-neutral-400 max-w-xl">
                Who love spending hours tweaking CSS and debugging animations?
                Save yourself the headache and grab these components — they're practically begging to make your life easier.
              </p>

              <div className="flex gap-4">
                <a href='/get-started' className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-white text-black hover:bg-neutral-200">
                  Get Started
                </a>
                <a href='/components' className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground h-10 px-4 py-2 border-neutral-700 text-white hover:bg-neutral-900">
                  Custom Components
                </a>
              </div>

              {/* Tech Stack Logos */}
              <div className="flex gap-6 mt-6 opacity-80">
                <span>⚛️ React</span>
                <span>▲ Next.js</span>
                <span>🎨 TailwindCSS</span>
                <span>🎬 Framer Motion</span>
              </div>
            </motion.div>

            {/* Right Content (Showcase cards / preview images) */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              <a href='/components'>
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform">
                  <h3 className="font-semibold">⚡ Beautiful Components</h3>
                  <p className="text-sm text-neutral-400">Build stunning UIs in minutes</p>
                </div>
              </a>

              <a href='/components'>
                <div className="bg-gradient-to-br from-neutral-800 to-black border border-neutral-700 rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform">
                  <h3 className="font-semibold">✨ Animations</h3>
                  <p className="text-sm text-neutral-400">Framer Motion integrated</p>
                </div>
              </a>

              <div className="bg-neutral-950 w-full border border-neutral-800 rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform sm:col-span-2">
                <a href="/components" className="w-full">
                  <h3 className="font-semibold">🚀 Deploy Fast</h3>
                  <p className="text-sm text-neutral-400">Copy, paste, deploy. Done.</p>
                </a>
              </div>

            </motion.div>
          </div>
        <div className='flex h-screen overflow-hidden top-0 left-0  inset-0  -z-10 absolute'>
          {blocks}
        </div>
      </section>
    </>
  );
}

export default HeroSec;
