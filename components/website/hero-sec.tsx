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
              className={`h-[6vw] w-full border-[1px] border-slate-100 dark:border-[rgba(255,255,255,0.015)] ${
                // @ts-ignore
                activeDivs[columnIndex]?.has(rowIndex)
                  ? 'bg-slate-100 dark:bg-[rgba(255,255,255,0.03)]'
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
      <section className='min-h-[90vh] py-16 overflow-hidden relative bg-white dark:bg-neutral-950'>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="inline-block px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-700 border border-blue-200 dark:bg-neutral-900 dark:text-neutral-200 dark:border-neutral-700">
              🚀 Introducing Your UI Library
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 dark:text-white">
              Build stunning UIs with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-purple-600">
                Effortless Precision
              </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-neutral-400 max-w-xl">
              Who love spending hours tweaking CSS and debugging animations?
              Save yourself the headache and grab these components — they&apos;re practically begging to make your life easier.
            </p>

            <div className="flex gap-4">
              <a href='/get-started' className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200">
                Get Started
              </a>
              <a href='/components' className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border h-10 px-4 py-2 border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-900">
                Custom Components
              </a>
            </div>

            {/* Tech Stack Logos */}
            <div className="flex gap-6 mt-6 text-slate-700 dark:text-neutral-300 opacity-90 dark:opacity-80">
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
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-transform dark:bg-neutral-900 dark:border-neutral-800">
                <h3 className="font-semibold text-slate-900 dark:text-white">⚡ Beautiful Components</h3>
                <p className="text-sm text-slate-600 dark:text-neutral-400">Build stunning UIs in minutes</p>
              </div>
            </a>

            <a href='/components'>
              <div className="bg-gradient-to-br from-blue-50 to-violet-50 border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-transform dark:from-neutral-800 dark:to-black dark:border-neutral-700">
                <h3 className="font-semibold text-slate-900 dark:text-white">✨ Animations</h3>
                <p className="text-sm text-slate-600 dark:text-neutral-400">Framer Motion integrated</p>
              </div>
            </a>

            <div className="bg-slate-50 w-full border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-transform sm:col-span-2 dark:bg-neutral-950 dark:border-neutral-800">
              <a href="/components" className="w-full">
                <h3 className="font-semibold text-slate-900 dark:text-white">🚀 Build Fast</h3>
                <p className="text-sm text-slate-600 dark:text-neutral-400">Copy, Paste, Run. Done.</p>
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
