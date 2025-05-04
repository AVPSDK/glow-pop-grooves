
import React from 'react';
import { Input } from '@/components/ui/input';
import { Music } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-30 w-full py-2 px-4 md:px-6 backdrop-blur-xl bg-black/50 border-b border-white/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gradient-glow flex items-center justify-center animate-pulse-glow">
            <Music className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-glow">
            GlowPop
          </span>
        </div>
        
        <div className="hidden md:flex flex-1 max-w-md mx-auto">
          <Input
            type="search"
            placeholder="Search for songs, artists, or playlists..."
            className="bg-white/5 border-white/10 focus-visible:ring-glow-purple/50 w-full"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="hidden md:block px-4 py-1.5 text-sm font-medium rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            Sign In
          </button>
        </div>
      </div>
      
      <div className="md:hidden mt-2">
        <Input
          type="search"
          placeholder="Search..."
          className="bg-white/5 border-white/10 focus-visible:ring-glow-purple/50 w-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
