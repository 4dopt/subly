export interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  category: string;
  imageUrl: string;
  plays?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  trackCount: number;
  gradient: string;
}

export type ScreenName = 
  | 'splash'
  | 'onboarding'
  | 'home'
  | 'category'
  | 'search'
  | 'player'
  | 'library'
  | 'profile';

export type TabName = 'home' | 'explore' | 'library' | 'profile';

export interface UserStats {
  daysActive: number;
  hoursListened: number;
  streak: number;
}
