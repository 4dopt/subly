import { Category, Track, Artist, GridItem, CreatorProfile } from "./types";

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Manifestation', icon: 'Sparkles', trackCount: 124, gradient: 'from-purple-500 to-indigo-500' },
  { id: '2', name: 'Confidence', icon: 'Zap', trackCount: 85, gradient: 'from-amber-400 to-orange-500' },
  { id: '3', name: 'Focus', icon: 'Target', trackCount: 200, gradient: 'from-blue-400 to-cyan-400' },
  { id: '4', name: 'Sleep', icon: 'Moon', trackCount: 340, gradient: 'from-indigo-400 to-purple-600' },
];

export const LIVE_ARTISTS: Artist[] = [
    { id: 'a1', name: 'The Weeknd', imageUrl: '', viewers: '108k viewers' },
    { id: 'a2', name: 'Post Malone', imageUrl: '', viewers: '93k viewers' },
    { id: 'a3', name: 'TAEMIN', imageUrl: '', viewers: '312k viewers' },
    { id: 'a4', name: 'ZHU', imageUrl: '', viewers: '264k viewers' },
    { id: 'a5', name: 'Doja Cat', imageUrl: '', viewers: '150k viewers' },
];

export const GRID_ITEMS: GridItem[] = [
    { 
        id: 'g1', 
        title: 'The Weeknd', 
        subtitle: 'Mix', 
        type: 'mix', 
        color: 'from-sky-400 to-blue-600', 
        artistImage: '', 
        subImages: [] 
    },
    { 
        id: 'g2', 
        title: 'Post Malone', 
        subtitle: 'Liked Songs', 
        type: 'liked', 
        color: 'from-pink-500 to-rose-600', 
        artistImage: '', 
    },
    { 
        id: 'g3', 
        title: 'Post Malone', 
        subtitle: 'Liked Songs', 
        type: 'liked', 
        color: 'from-red-500 to-red-700', 
        artistImage: '', 
    },
    { 
        id: 'g4', 
        title: 'Dua Lipa', 
        subtitle: 'Mix', 
        type: 'mix', 
        color: 'from-fuchsia-500 to-purple-600', 
        artistImage: '',
        subImages: [] 
    },
];

export const MOCK_USER_STATS = {
  daysActive: 42,
  hoursListened: 128,
  streak: 5
};

// Add specific track matching the image for testing
export const TARGET_TRACK: Track = {
    id: 'target1',
    title: 'Take My Breath',
    artist: 'The Weeknd',
    duration: '3:52',
    category: 'Pop',
    imageUrl: '' 
};

export const PLAYLIST_TRACKS: Track[] = [
    { id: 't1', title: 'Nikes', artist: 'Frank Ocean', duration: '5:14', category: 'Pop', imageUrl: '' },
    { id: 't2', title: 'Ivy', artist: 'Frank Ocean', duration: '4:09', category: 'Pop', imageUrl: '' },
    { id: 't3', title: 'Pink + White', artist: 'Frank Ocean', duration: '3:04', category: 'Pop', imageUrl: '' },
    { id: 't4', title: 'Be Yourself', artist: 'Frank Ocean', duration: '1:27', category: 'Pop', imageUrl: '' },
    { id: 't5', title: 'Solo', artist: 'Frank Ocean', duration: '4:17', category: 'Pop', imageUrl: '' },
    { id: 't6', title: 'Skyline To', artist: 'Frank Ocean', duration: '3:04', category: 'Pop', imageUrl: '' },
    { id: 't7', title: 'Self Control', artist: 'Frank Ocean', duration: '4:09', category: 'Pop', imageUrl: '' },
    { id: 't8', title: 'Good Guy', artist: 'Frank Ocean', duration: '1:06', category: 'Pop', imageUrl: '' },
    { id: 't9', title: 'Nights', artist: 'Frank Ocean', duration: '5:07', category: 'Pop', imageUrl: '' },
    { id: 't10', title: 'Solo (Reprise)', artist: 'Frank Ocean', duration: '1:18', category: 'Pop', imageUrl: '' },
];

export const MOCK_CREATOR_PROFILE: CreatorProfile = {
    id: 'c1',
    name: 'Luna Frequency',
    handle: 'luna.freq',
    imageUrl: '', // Will use placeholder
    viewers: '12k',
    followers: '45.2k',
    following: '120',
    bio: 'Sound healer & hypnotherapist. Creating 432Hz binaural beats for deep subconscious reprogramming.',
    gradient: 'from-emerald-600 to-teal-900',
    tags: ['Verified Creator', 'Top 1%']
};

export const CREATOR_TRACKS: Track[] = [
    { id: 'ct1', title: 'Quantum Leap Manifestation', artist: 'Luna Frequency', duration: '10:00', category: 'Wealth', imageUrl: '', plays: 12500 },
    { id: 'ct2', title: 'Self Concept Overhaul', artist: 'Luna Frequency', duration: '8:44', category: 'Confidence', imageUrl: '', plays: 8900 },
    { id: 'ct3', title: 'Detach & Let Go', artist: 'Luna Frequency', duration: '12:20', category: 'Peace', imageUrl: '', plays: 6400 },
    { id: 'ct4', title: 'Deep Sleep Delta Waves', artist: 'Luna Frequency', duration: '45:00', category: 'Sleep', imageUrl: '', plays: 32000 },
    { id: 'ct5', title: 'Attract Specific Person', artist: 'Luna Frequency', duration: '11:11', category: 'Love', imageUrl: '', plays: 15600 },
];

export const POPULAR_SEARCHES = [
    "Cinderella",
    "Little Red Riding Hood",
    "Snow White and the Seven Dwarfs",
    "Sleeping Beauty",
    "Rapunzel",
    "Tom Thumb",
    "Mulan-a Chinese legend Popular in many"
];

export const SEARCH_CATEGORIES = [
    "Echoes of the Drum",
    "Soul of the Motherland",
    "Heartbeat of Africa",
    "Golden Sunset Beats",
    "Jungle Pulse",
    "Spirit of Ubuntu",
    "Crave",
    "Velvet Night",
    "Linger",
    "Afterglow",
    "Rhythms of the Savannah"
];

export const SUGGESTED_ARTISTS = [
    { name: "Velvet Echoes", color: "from-pink-500 to-rose-600" },
    { name: "Neon Dreams", color: "from-purple-500 to-indigo-600" },
    { name: "Cyber Pulse", color: "from-blue-500 to-cyan-600" }
];