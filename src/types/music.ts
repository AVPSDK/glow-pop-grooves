
export interface Song {
  id: string;
  title: string;
  artist: string;
  cover: string;
  audioFile: string;
  duration: string;
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  songs: Song[];
}

export interface Artist {
  id: string;
  name: string;
  image: string;
}
