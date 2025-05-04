
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Song } from '../types/music';

interface PlayerContextProps {
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number;
  playSong: (song: Song) => void;
  pauseSong: () => void;
  togglePlayPause: () => void;
  nextSong: () => void;
  prevSong: () => void;
  setVolume: (volume: number) => void;
  queue: Song[];
  addToQueue: (song: Song) => void;
}

const PlayerContext = createContext<PlayerContextProps | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolumeState] = useState<number>(0.7);
  const [queue, setQueue] = useState<Song[]>([]);

  const playSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    // In a real app, we would play the actual audio file here
    console.log(`Now playing: ${song.title} by ${song.artist}`);
  };

  const pauseSong = () => {
    setIsPlaying(false);
    // In a real app, we would pause the audio playback here
    console.log('Paused playback');
  };

  const togglePlayPause = () => {
    if (!currentSong) return;
    
    if (isPlaying) {
      pauseSong();
    } else {
      setIsPlaying(true);
      // In a real app, we would resume audio playback here
      console.log(`Resuming: ${currentSong.title}`);
    }
  };

  const nextSong = () => {
    if (queue.length === 0) return;
    
    const nextSong = queue[0];
    const newQueue = queue.slice(1);
    setQueue(newQueue);
    playSong(nextSong);
  };

  const prevSong = () => {
    // In a real app, we would implement going to previous song
    console.log('Previous song');
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
    // In a real app, we would adjust the audio volume here
    console.log(`Volume set to ${newVolume}`);
  };

  const addToQueue = (song: Song) => {
    setQueue([...queue, song]);
    console.log(`Added to queue: ${song.title}`);
  };

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        volume,
        playSong,
        pauseSong,
        togglePlayPause,
        nextSong,
        prevSong,
        setVolume,
        queue,
        addToQueue,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};
