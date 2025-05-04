
import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, ListMusic } from 'lucide-react';
import { usePlayer } from '../context/PlayerContext';
import { Slider } from '@/components/ui/slider';

const NowPlaying = () => {
  const { currentSong, isPlaying, volume, togglePlayPause, nextSong, prevSong, setVolume } = usePlayer();
  const [progress, setProgress] = useState(30); // For demo purposes

  if (!currentSong) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      {/* Audio progress bar */}
      <div className="h-1 bg-gray-800 relative">
        <div 
          className="absolute h-full bg-gradient-glow" 
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Player controls */}
      <div className="grid grid-cols-3 items-center px-4 py-2 backdrop-blur-xl bg-black/80 border-t border-white/10">
        {/* Song info */}
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded overflow-hidden bg-gray-800 flex-shrink-0">
            <img
              src={currentSong.cover || '/placeholder.svg'}
              alt={currentSong.title}
              className="h-full w-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg';
              }}
            />
          </div>
          <div className="min-w-0">
            <div className="font-medium text-sm truncate">{currentSong.title}</div>
            <div className="text-xs text-gray-400 truncate">{currentSong.artist}</div>
          </div>
          <button className="ml-2 text-gray-400 hover:text-glow-pink transition-colors">
            <Heart className="h-5 w-5" />
          </button>
        </div>

        {/* Playback controls */}
        <div className="flex items-center justify-center gap-4">
          <button className="text-gray-400 hover:text-white transition-colors" onClick={prevSong}>
            <SkipBack className="h-5 w-5" />
          </button>
          <button 
            className="h-10 w-10 rounded-full bg-white flex items-center justify-center hover:bg-opacity-90 transition-colors"
            onClick={togglePlayPause}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5 text-black" />
            ) : (
              <Play className="h-5 w-5 text-black" fill="black" />
            )}
          </button>
          <button className="text-gray-400 hover:text-white transition-colors" onClick={nextSong}>
            <SkipForward className="h-5 w-5" />
          </button>
        </div>

        {/* Volume & extras */}
        <div className="flex items-center justify-end gap-3">
          <button className="text-gray-400 hover:text-white transition-colors lg:flex hidden">
            <ListMusic className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2 lg:w-32 md:w-24 w-20">
            <Volume2 className="h-4 w-4 text-gray-400" />
            <Slider
              value={[volume * 100]}
              max={100}
              step={1}
              className="w-full"
              onValueChange={(value) => setVolume(value[0] / 100)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
