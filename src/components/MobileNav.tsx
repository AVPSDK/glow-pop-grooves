
import React from 'react';
import { Home, Search, ListMusic, User } from 'lucide-react';

const MobileNav = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-1 bg-black/90 border-t border-white/10 grid grid-cols-4 gap-1">
      <button className="flex flex-col items-center justify-center py-2 text-white">
        <Home className="h-5 w-5 mb-1" />
        <span className="text-xs">Home</span>
      </button>
      <button className="flex flex-col items-center justify-center py-2 text-gray-400">
        <Search className="h-5 w-5 mb-1" />
        <span className="text-xs">Search</span>
      </button>
      <button className="flex flex-col items-center justify-center py-2 text-gray-400">
        <ListMusic className="h-5 w-5 mb-1" />
        <span className="text-xs">Library</span>
      </button>
      <button className="flex flex-col items-center justify-center py-2 text-gray-400">
        <User className="h-5 w-5 mb-1" />
        <span className="text-xs">Profile</span>
      </button>
    </div>
  );
};

export default MobileNav;
