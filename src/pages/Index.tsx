
import React from 'react';
import Layout from '../components/Layout';
import { PlayerProvider } from '../context/PlayerContext';
import PlaylistCard from '../components/PlaylistCard';
import SongItem from '../components/SongItem';
import ArtistCard from '../components/ArtistCard';
import { songs, playlists, trendingSongs, recentlyPlayed, trendingArtists } from '../data/mockData';

const Index = () => {
  return (
    <PlayerProvider>
      <Layout>
        <div className="px-4 py-6 md:px-8 space-y-8">
          {/* Hero section */}
          <div className="relative rounded-xl overflow-hidden h-60 md:h-80">
            <div className="absolute inset-0 bg-gradient-glow opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              <h1 className="text-3xl md:text-5xl font-bold text-white text-glow mb-2">Welcome to GlowPop</h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
                Your ultimate destination for vibrant pop music
              </p>
            </div>
            <div className="absolute -bottom-4 right-4 h-20 w-20 md:h-28 md:w-28 rounded-full bg-glow-pink blur-2xl opacity-40 animate-pulse-glow" />
            <div className="absolute top-8 right-20 h-16 w-16 rounded-full bg-glow-blue blur-xl opacity-30 animate-pulse-glow" />
          </div>
          
          {/* Featured playlists */}
          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <span className="h-5 w-1 bg-glow-purple rounded-full mr-2"></span>
              Featured Playlists
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {playlists.map((playlist) => (
                <PlaylistCard key={playlist.id} playlist={playlist} />
              ))}
            </div>
          </section>
          
          {/* Recently played */}
          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <span className="h-5 w-1 bg-glow-pink rounded-full mr-2"></span>
              Recently Played
            </h2>
            <div className="bg-white/5 rounded-lg overflow-hidden">
              <div className="p-4 space-y-1">
                {recentlyPlayed.map((song, index) => (
                  <SongItem key={song.id} song={song} index={index} />
                ))}
              </div>
            </div>
          </section>
          
          {/* Trending artists */}
          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <span className="h-5 w-1 bg-glow-blue rounded-full mr-2"></span>
              Trending Artists
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {trendingArtists.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} />
              ))}
            </div>
          </section>
          
          {/* Trending now */}
          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <span className="h-5 w-1 bg-glow-teal rounded-full mr-2"></span>
              Trending Now
            </h2>
            <div className="bg-white/5 rounded-lg overflow-hidden">
              <div className="p-4 space-y-1">
                {trendingSongs.map((song, index) => (
                  <SongItem key={song.id} song={song} index={index} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </PlayerProvider>
  );
};

export default Index;
