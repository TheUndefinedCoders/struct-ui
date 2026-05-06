'use client';
import TiltCard from './tilt-card';

export default function TiltCardProfile() {
  return (
    <div className="flex items-center justify-center min-h-[450px] p-8">
      <TiltCard 
        className="w-72 h-[400px] sm:w-80 sm:h-[440px] rounded-2xl"
        glare={true}
        glareMaxOpacity={0.2}
        tiltMaxAngle={10}
      >
        <div className="w-full h-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
          {/* Cover Image */}
          <div className="h-28 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          </div>
          
          {/* Profile Content */}
          <div className="relative px-6 pb-6">
            {/* Avatar */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <div className="w-24 h-24 rounded-full border-4 border-white dark:border-neutral-900 overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="pt-14 text-center">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Numan Ahmed</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Software Engineer</p>
              
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Creating delightful user experiences through thoughtful design and attention to detail.
              </p>

              {/* Stats */}
              <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <div className="text-center">
                  <p className="text-lg font-bold text-neutral-900 dark:text-white">248</p>
                  <p className="text-xs text-neutral-500">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-neutral-900 dark:text-white">12.5k</p>
                  <p className="text-xs text-neutral-500">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-neutral-900 dark:text-white">156</p>
                  <p className="text-xs text-neutral-500">Following</p>
                </div>
              </div>

              {/* Action */}
              <div className="w-full flex">
                <a href="https://numan-dev.web.app" target="_blank" className="mt-4 w-full py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}
