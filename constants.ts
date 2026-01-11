import { Category, Track } from "./types";

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Manifestation', icon: 'Sparkles', trackCount: 124, gradient: 'from-purple-500 to-indigo-500' },
  { id: '2', name: 'Confidence', icon: 'Zap', trackCount: 85, gradient: 'from-amber-400 to-orange-500' },
  { id: '3', name: 'Focus', icon: 'Target', trackCount: 200, gradient: 'from-blue-400 to-cyan-400' },
  { id: '4', name: 'Sleep', icon: 'Moon', trackCount: 340, gradient: 'from-indigo-400 to-purple-600' },
  { id: '5', name: 'Abundance', icon: 'Gem', trackCount: 92, gradient: 'from-emerald-400 to-teal-500' },
  { id: '6', name: 'Self-Love', icon: 'Heart', trackCount: 150, gradient: 'from-rose-400 to-pink-500' },
];

export const TRENDING_TRACKS: Track[] = [
  { id: 't1', title: 'Quantum Wealth Shift', artist: 'Sublyme Originals', duration: '10:00', category: 'Abundance', imageUrl: 'https://picsum.photos/400/400?random=1', plays: 12500 },
  { id: 't2', title: 'Deep Sleep Delta', artist: 'Sleep Well', duration: '45:00', category: 'Sleep', imageUrl: 'https://picsum.photos/400/400?random=2', plays: 8900 },
  { id: 't3', title: 'Instant Confidence', artist: 'Mind Power', duration: '15:00', category: 'Confidence', imageUrl: 'https://picsum.photos/400/400?random=3', plays: 15200 },
  { id: 't4', title: 'Laser Focus 40Hz', artist: 'Brain Waves', duration: '60:00', category: 'Focus', imageUrl: 'https://picsum.photos/400/400?random=4', plays: 6700 },
];

export const MOCK_USER_STATS = {
  daysActive: 42,
  hoursListened: 128,
  streak: 5
};
