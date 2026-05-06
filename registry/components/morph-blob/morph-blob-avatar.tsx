'use client';
import MorphBlob from './morph-blob';

const users = [
  {
    name: 'Sarah Chen',
    role: 'Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    colors: ['#EC4899', '#F97316'] as [string, string],
  },
  {
    name: 'Alex Kim',
    role: 'Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    colors: ['#3B82F6', '#8B5CF6'] as [string, string],
  },
  {
    name: 'Emma Davis',
    role: 'Product',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    colors: ['#10B981', '#06B6D4'] as [string, string],
  },
];

export default function MorphBlobAvatar() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 min-h-[350px] p-8 bg-neutral-950 rounded-2xl mx-4">
      {users.map((user) => (
        <div key={user.name} className="flex flex-col items-center">
          {/* Avatar with Blob Background */}
          <div className="relative w-32 h-32 mb-4">
            {/* Morphing blob background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <MorphBlob
                size={130}
                variant="organic"
                gradientColors={user.colors}
                duration={8}
              />
            </div>
            {/* Avatar image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={user.image}
                alt={user.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-neutral-950"
              />
            </div>
          </div>
          <h4 className="text-white font-medium">{user.name}</h4>
          <p className="text-neutral-500 text-sm">{user.role}</p>
        </div>
      ))}
    </div>
  );
}
