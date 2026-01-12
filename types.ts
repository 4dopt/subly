
export interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  category: string;
  imageUrl: string;
  plays?: number;
  likes?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  trackCount: number;
  gradient: string;
}

export interface Artist {
    id: string;
    name: string;
    imageUrl: string;
    viewers?: string;
}

export interface CreatorProfile extends Artist {
    handle: string;
    bio: string;
    followers: string;
    following: string;
    gradient: string;
    tags: string[];
}

export interface GridItem {
    id: string;
    title: string;
    subtitle: string;
    type: 'mix' | 'liked';
    color: string; // e.g., 'bg-blue-500'
    artistImage: string;
    subImages?: string[]; // For mixes (3 circles)
}

export type ScreenName = 
  | 'splash'
  | 'onboarding'
  | 'home'
  | 'category'
  | 'search'
  | 'player'
  | 'library'
  | 'profile'
  | 'playlist';

export type TabName = 'home' | 'search' | 'grid' | 'activity';

export interface UserStats {
  daysActive: number;
  hoursListened: number;
  streak: number;
}
