
import React from 'react';
import { Play, Heart, MoreHorizontal } from 'lucide-react';
import { Song } from '../types/music';
import { usePlayer } from '../context/PlayerContext';

interface SongItemProps {
  song: Song;
  index?: number;
  showCover?: boolean;
}

const SongItem = ({ song, index, showCover = true }: SongItemProps) => {
  const { playSong } = usePlayer();

  return (
    <div className="group flex items-center gap-4 p-2 rounded-md hover:bg-white/5 transition-colors">
      {index !== undefined && (
        <div className="w-5 text-center text-gray-400 group-hover:hidden">{index + 1}</div>
      )}
      <button
        onClick={() => playSong(song)}
        className="w-5 h-5 rounded-full bg-glow-purple items-center justify-center hidden group-hover:flex"
      >
        <Play className="h-3 w-3 text-white" fill="white" />
      </button>
      
      {showCover && (
        <div className="h-10 w-10 rounded overflow-hidden flex-shrink-0 bg-gray-800">
          <img 
            src={song.cover || '/placeholder.svg'} 
            alt={song.title} 
            className="h-full w-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg';
            }}
          />
        </div>
      )}
      
      <div className="flex-1 min-w-0">
        <div className="font-medium text-sm truncate">{song.title}</div>
        <div className="text-xs text-gray-400 truncate">{song.artist}</div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="text-gray-400 hover:text-white transition-colors">
          <Heart className="h-4 w-4" />
        </button>
        <div className="text-sm text-gray-400">{song.duration}</div>
        <button className="text-gray-400 hover:text-white transition-colors">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default SongItem;
