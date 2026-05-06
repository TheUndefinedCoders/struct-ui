'use client';
import TiltCard from './tilt-card';

const projects = [
  {
    title: 'Mobile App',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    color: 'from-violet-600 to-purple-600',
  },
  {
    title: 'Dashboard',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'E-Commerce',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    color: 'from-emerald-600 to-teal-600',
  },
  {
    title: 'AI Platform',
    category: 'Machine Learning',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    color: 'from-orange-600 to-red-600',
  },
];

export default function TiltCardGrid() {
  return (
    <div className="min-h-[500px] p-8">
      <h3 className="text-center text-2xl font-bold text-neutral-900 dark:text-white mb-2">
        Featured Projects
      </h3>
      <p className="text-center text-neutral-500 mb-8">Hover to interact with each card</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <TiltCard
            key={project.title}
            className="h-64 rounded-xl"
            tiltMaxAngle={12}
            glare={true}
            glareMaxOpacity={0.2}
          >
            <div className="w-full h-full rounded-xl overflow-hidden relative group cursor-pointer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
              
              <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                <span className="text-xs font-medium text-white/70 mb-1">{project.category}</span>
                <h4 className="text-lg font-bold">{project.title}</h4>
              </div>
              
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}
