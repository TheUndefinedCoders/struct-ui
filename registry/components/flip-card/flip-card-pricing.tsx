'use client';
import FlipCard from './flip-card';

export default function FlipCardPricing() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 min-h-[500px] p-8">
      {/* Basic Plan */}
      <div className="w-64 h-[420px] sm:w-72 sm:h-[460px]">
        <FlipCard
          trigger="click"
          front={
            <div className="w-full h-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col items-center p-6">
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wide">Basic</span>
              <div className="flex items-baseline mt-4 mb-6">
                <span className="text-5xl font-bold text-neutral-900 dark:text-white">$9</span>
                <span className="text-neutral-500 ml-1">/month</span>
              </div>
              <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400 w-full">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  5 Projects
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  10GB Storage
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Email Support
                </li>
              </ul>
              <button className="mt-auto w-full py-2.5 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white rounded-lg font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                Get Started
              </button>
              <p className="text-neutral-400 text-xs mt-3">Click to compare</p>
            </div>
          }
          back={
            <div className="w-full h-full bg-neutral-100 dark:bg-neutral-800 flex flex-col items-center justify-center p-6">
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">Why Basic?</h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm text-center leading-relaxed">
                Perfect for individuals and small projects. Get started with essential features at an affordable price.
              </p>
              <div className="mt-6 p-4 bg-white dark:bg-neutral-900 rounded-lg w-full">
                <p className="text-xs text-neutral-500 mb-1">Best for</p>
                <p className="text-sm font-medium text-neutral-900 dark:text-white">Freelancers & Hobbyists</p>
              </div>
            </div>
          }
        />
      </div>

      {/* Pro Plan */}
      <div className="w-64 h-[420px] sm:w-72 sm:h-[460px]">
        <FlipCard
          trigger="click"
          variant="gradient-border"
          front={
            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 flex flex-col items-center p-6 text-white">
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">POPULAR</span>
              <span className="text-sm font-medium mt-3 uppercase tracking-wide opacity-80">Pro</span>
              <div className="flex items-baseline mt-4 mb-6">
                <span className="text-5xl font-bold">$29</span>
                <span className="opacity-70 ml-1">/month</span>
              </div>
              <ul className="space-y-3 text-sm w-full">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Unlimited Projects
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  100GB Storage
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Priority Support
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  API Access
                </li>
              </ul>
              <button className="mt-auto w-full py-2.5 bg-white text-blue-600 rounded-lg font-medium hover:bg-white/90 transition-colors">
                Upgrade Now
              </button>
              <p className="opacity-60 text-xs mt-3">Click to compare</p>
            </div>
          }
          back={
            <div className="w-full h-full bg-gradient-to-br from-purple-700 to-pink-600 flex flex-col items-center justify-center p-6 text-white">
              <h4 className="text-lg font-bold mb-4">Why Pro?</h4>
              <p className="text-sm text-center leading-relaxed opacity-90">
                Scale your business with advanced features, unlimited resources, and priority support.
              </p>
              <div className="mt-6 p-4 bg-white/10 rounded-lg w-full">
                <p className="text-xs opacity-70 mb-1">Best for</p>
                <p className="text-sm font-medium">Growing Teams & Startups</p>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
