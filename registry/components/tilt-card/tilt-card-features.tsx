'use client';
import TiltCard from './tilt-card';

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Lightning Fast',
    description: 'Optimized performance with instant load times',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Secure',
    description: 'Enterprise-grade security for your data',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'Flexible',
    description: 'Customizable to fit your unique needs',
    gradient: 'from-blue-500 to-indigo-600',
  },
];

export default function TiltCardFeatures() {
  return (
    <div className="min-h-[400px] p-8">
      <h3 className="text-center text-2xl font-bold text-neutral-900 dark:text-white mb-2">
        Why Choose Us
      </h3>
      <p className="text-center text-neutral-500 mb-8">Hover over each card to explore</p>
      
      <div className="flex flex-wrap items-center justify-center gap-6 max-w-4xl mx-auto">
        {features.map((feature) => (
          <TiltCard
            key={feature.title}
            className="w-64 h-72 rounded-2xl"
            tiltMaxAngle={15}
            glare={true}
            glareMaxOpacity={0.15}
          >
            <div className="w-full h-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-5 shadow-lg`}>
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {feature.description}
              </p>
              <button className="mt-auto text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                Learn more →
              </button>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}
