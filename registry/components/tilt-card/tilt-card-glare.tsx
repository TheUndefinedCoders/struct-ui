'use client';
import TiltCard from './tilt-card';

export default function TiltCardGlare() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8">
      <TiltCard 
        className="w-72 h-96 sm:w-80 sm:h-[420px] rounded-2xl"
        glare={true}
        glareMaxOpacity={0.4}
        tiltMaxAngle={20}
      >
        <div className="w-full h-full bg-neutral-900 flex flex-col items-center justify-center text-white p-6 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.15) 2px, transparent 0)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">With Glare Effect</h3>
            <p className="text-neutral-400 text-center text-sm leading-relaxed">
              A shiny light reflection follows your cursor movement
            </p>
            <span className="mt-6 text-xs text-cyan-400 font-medium">PREMIUM EFFECT</span>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}
