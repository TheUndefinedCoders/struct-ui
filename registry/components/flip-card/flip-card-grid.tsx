'use client';
import FlipCard from './flip-card';

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    bio: 'Visionary leader with 15+ years in tech',
    color: 'from-violet-600 to-purple-700',
  },
  {
    name: 'Marcus Johnson',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    bio: 'Engineering wizard and problem solver',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Design Lead',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    bio: 'Creating beautiful user experiences',
    color: 'from-pink-600 to-rose-600',
  },
  {
    name: 'David Kim',
    role: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
    bio: 'Turning ideas into products',
    color: 'from-amber-500 to-orange-600',
  },
];

export default function FlipCardGrid() {
  return (
    <div className="min-h-[500px] p-8">
      <h3 className="text-center text-2xl font-bold text-neutral-900 dark:text-white mb-2">
        Meet Our Team
      </h3>
      <p className="text-center text-neutral-500 mb-8">Hover over a card to learn more</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {teamMembers.map((member) => (
          <div key={member.name} className="h-72">
            <FlipCard
              front={
                <div className="w-full h-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center p-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-3 ring-2 ring-neutral-200 dark:ring-neutral-700">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-base font-bold text-neutral-900 dark:text-white">{member.name}</h4>
                  <p className="text-sm text-neutral-500">{member.role}</p>
                </div>
              }
              back={
                <div className={`w-full h-full bg-gradient-to-br ${member.color} flex flex-col items-center justify-center text-white p-4`}>
                  <h4 className="text-base font-bold mb-2">{member.name}</h4>
                  <p className="text-sm opacity-90 text-center mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </button>
                    <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    </button>
                  </div>
                </div>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
