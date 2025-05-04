
import React from 'react';
import { Play } from 'lucide-react';
import { Playlist } from '../types/music';
import { usePlayer } from '../context/PlayerContext';

interface PlaylistCardProps {
  playlist: Playlist;
}

const PlaylistCard = ({ playlist }: PlaylistCardProps) => {
  const { playSong } = usePlayer();
  
  const handlePlay = () => {
    if (playlist.songs.length > 0) {
      playSong(playlist.songs[0]);
    }
  };
  
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white/5 p-4 transition-all hover:bg-white/10">
      <div className="aspect-square mb-4 rounded-md overflow-hidden bg-gray-800 relative">
        <img 
          src={playlist.coverImage || '/placeholder.svg'} 
          alt={playlist.title}
          className="h-full w-full object-cover transition-all group-hover:scale-105 group-hover:opacity-70"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
        <button
          onClick={handlePlay}
          className="absolute bottom-2 right-2 h-10 w-10 rounded-full bg-glow-purple flex items-center justify-center opacity-0 shadow-lg transform translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0"
        >
          <Play className="h-5 w-5 text-white" fill="white" />
        </button>
      </div>
      <h3 className="font-bold text-sm truncate">{playlist.title}</h3>
      <p className="text-xs text-gray-400 mt-1 line-clamp-2">{playlist.description}</p>
    </div>
  );
};

export default PlaylistCard;
