
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import NowPlaying from './NowPlaying';
import MobileNav from './MobileNav';
import { usePlayer } from '../context/PlayerContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { currentSong } = usePlayer();
  const hasNowPlaying = !!currentSong;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto pb-24 md:pb-16">
          {children}
        </main>
      </div>
      {hasNowPlaying && <NowPlaying />}
      <MobileNav />
    </div>
  );
};

export default Layout;
