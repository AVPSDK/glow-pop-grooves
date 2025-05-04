
import React from 'react';
import { Home, ListMusic, Heart, Music2, PlayCircle } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: ListMusic, label: 'Explore', active: false },
  { icon: Heart, label: 'Favorites', active: false },
  { icon: Music2, label: 'Playlists', active: false },
];

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col h-full w-60 bg-black/50 backdrop-blur-md border-r border-white/10">
      <div className="p-4 flex-1">
        <div className="space-y-1 mb-8">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`flex items-center w-full gap-3 px-3 py-2 rounded-lg transition-colors ${
                item.active
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className={`h-5 w-5 ${item.active ? 'text-glow-purple' : ''}`} />
              <span>{item.label}</span>
              {item.active && (
                <div className="ml-auto h-1.5 w-1.5 rounded-full bg-glow-purple" />
              )}
            </button>
          ))}
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 mb-3 px-3">Your Library</h3>
          <div className="space-y-1">
            <button className="flex items-center w-full gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
              <span>Recently Played</span>
            </button>
            <button className="flex items-center w-full gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
              <span>Liked Songs</span>
            </button>
            <button className="flex items-center w-full gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
              <span>Your Top</span>
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-400 mb-3 px-3">Your Playlists</h3>
          <div className="space-y-1">
            <button className="flex items-center w-full gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
              <span>Summer Vibes</span>
            </button>
            <button className="flex items-center w-full gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
              <span>Workout Mix</span>
            </button>
            <button className="flex items-center w-full gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
              <span>2023 Favorites</span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-white/10">
        <button className="flex items-center w-full gap-2 p-2 rounded-lg bg-gradient-glow text-white hover:opacity-90 transition-opacity">
          <PlayCircle className="h-5 w-5" />
          <span className="font-medium">Now Playing</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
