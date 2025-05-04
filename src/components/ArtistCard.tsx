
import React from 'react';
import { Artist } from '../types/music';

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
  return (
    <div className="flex flex-col items-center group">
      <div className="w-full aspect-square rounded-full overflow-hidden bg-gray-800 mb-3 relative">
        <img
          src={artist.image || '/placeholder.svg'}
          alt={artist.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-30 transition-opacity" />
      </div>
      <h3 className="text-sm font-medium text-center truncate w-full">{artist.name}</h3>
    </div>
  );
};

export default ArtistCard;
