
import { Song, Playlist, Artist } from "../types/music";

export const songs: Song[] = [
  {
    id: "1",
    title: "Blinding Lights",
    artist: "The Weeknd",
    cover: "/images/blinding-lights.jpg",
    audioFile: "/audio/sample-audio.mp3",
    duration: "3:20"
  },
  {
    id: "2",
    title: "As It Was",
    artist: "Harry Styles",
    cover: "/images/as-it-was.jpg",
    audioFile: "/audio/sample-audio.mp3",
    duration: "2:47"
  },
  {
    id: "3",
    title: "Bad Guy",
    artist: "Billie Eilish",
    cover: "/images/bad-guy.jpg",
    audioFile: "/audio/sample-audio.mp3",
    duration: "3:14"
  },
  {
    id: "4",
    title: "Don't Start Now",
    artist: "Dua Lipa",
    cover: "/images/dont-start-now.jpg",
    audioFile: "/audio/sample-audio.mp3",
    duration: "3:03"
  },
  {
    id: "5",
    title: "Stay",
    artist: "The Kid LAROI, Justin Bieber",
    cover: "/images/stay.jpg",
    audioFile: "/audio/sample-audio.mp3",
    duration: "2:21"
  },
  {
    id: "6",
    title: "Levitating",
    artist: "Dua Lipa",
    cover: "/images/levitating.jpg",
    audioFile: "/audio/sample-audio.mp3",
    duration: "3:23"
  },
  {
    id: "7",
    title: "Butter",
    artist: "BTS",
    cover: "/images/butter.jpg",
    audioFile: "/audio/sample-audio.mp3",
    duration: "2:42"
  },
  {
    id: "8",
    title: "Save Your Tears",
    artist: "The Weeknd",
    cover: "/images/save-your-tears.jpg",
    audioFile: "/audio/sample-audio.mp3",
    duration: "3:35"
  }
];

export const playlists: Playlist[] = [
  {
    id: "1",
    title: "Pop Hits 2023",
    description: "The biggest pop hits of the year",
    coverImage: "/images/pop-hits.jpg",
    songs: [songs[0], songs[1], songs[3], songs[5]]
  },
  {
    id: "2",
    title: "Dance Pop Fever",
    description: "Upbeat dance pop tracks",
    coverImage: "/images/dance-pop.jpg",
    songs: [songs[3], songs[5], songs[6]]
  },
  {
    id: "3",
    title: "Chill Pop",
    description: "Relaxing pop songs",
    coverImage: "/images/chill-pop.jpg",
    songs: [songs[1], songs[2], songs[4]]
  },
  {
    id: "4",
    title: "Pop Workout",
    description: "Energetic pop for your workout",
    coverImage: "/images/pop-workout.jpg",
    songs: [songs[0], songs[3], songs[4], songs[6]]
  }
];

export const trendingArtists: Artist[] = [
  {
    id: "1",
    name: "The Weeknd",
    image: "/images/weeknd.jpg"
  },
  {
    id: "2",
    name: "Dua Lipa",
    image: "/images/dua-lipa.jpg"
  },
  {
    id: "3",
    name: "Harry Styles",
    image: "/images/harry-styles.jpg"
  },
  {
    id: "4",
    name: "Billie Eilish",
    image: "/images/billie-eilish.jpg"
  },
  {
    id: "5",
    name: "BTS",
    image: "/images/bts.jpg"
  }
];

export const trendingSongs = songs.slice(0, 5);
export const recentlyPlayed = [songs[2], songs[5], songs[0], songs[6]];
