import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Search, LayoutGrid, Zap, AlignLeft, Bell, Cog, Disc, User, Heart, Music, Mic, Plus } from 'lucide-react';
import { SplashScreen } from './screens/SplashScreen';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { PlayerScreen } from './screens/PlayerScreen';
import { PlaylistScreen } from './screens/PlaylistScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { SearchScreen } from './screens/SearchScreen';
import { LibraryScreen } from './screens/LibraryScreen';
import { SafeArea } from './components/ui';
import { ScreenName, TabName, Track, GridItem } from './types';
import { LIVE_ARTISTS, GRID_ITEMS, MOCK_USER_STATS, TARGET_TRACK, MOCK_CREATOR_PROFILE } from './constants';

export default function App() {
  const [screen, setScreen] = useState<ScreenName>('splash');
  const [activeTab, setActiveTab] = useState<TabName>('home');
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState<GridItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  
  // Navigation Helper
  const navigate = (scr: ScreenName) => setScreen(scr);

  // Handle Card Click -> Open Playlist
  const openPlaylist = (item: GridItem) => {
    setSelectedPlaylist(item);
    setScreen('playlist');
  };

  // Play Helper
  const playTrack = (track: Track) => {
    // If it's The Weeknd mix card, use the Target Track to show the specific design
    if (track.title.includes('Weeknd')) {
        setCurrentTrack(TARGET_TRACK);
    } else {
        setCurrentTrack(track);
    }
    setIsPlaying(true);
    setIsPlayerOpen(true);
  };

  // --- SUB-COMPONENTS ---

  const Header = () => (
    <div className="px-6 py-4 flex items-center justify-between bg-black sticky top-0 z-30">
       <div className="w-6" /> 
    </div>
  );

  const BottomNav = () => (
      <div className="absolute bottom-0 left-0 right-0 z-40 p-4 pb-8 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none">
          <div className="bg-white/10 backdrop-blur-xl border border-white/5 shadow-2xl rounded-[2.5rem] h-20 flex justify-between items-center px-2 relative overflow-hidden pointer-events-auto">
             
             {/* Background glow for active item */}
             {activeTab === 'home' && (
                 <div className="absolute left-[12%] top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 blur-xl rounded-full pointer-events-none" />
             )}

             <button 
                onClick={() => setActiveTab('home')}
                className={`flex-1 flex flex-col items-center justify-center gap-1 h-full rounded-full transition-all ${activeTab === 'home' ? 'text-white' : 'text-zinc-500'}`}
             >
                <div className={`p-3 rounded-full ${activeTab === 'home' ? 'bg-white/20' : 'bg-transparent'}`}>
                    <Home size={24} fill={activeTab === 'home' ? "currentColor" : "none"} />
                </div>
                {activeTab === 'home' && <span className="text-[10px] font-medium">Home</span>}
             </button>

             {/* Search Tab - Custom styling when active to match the design request slightly (adding the pink accent concept) */}
             <button 
                onClick={() => setActiveTab('search')} 
                className={`flex-1 flex flex-col items-center justify-center gap-1 h-full rounded-full transition-all ${activeTab === 'search' ? 'text-rose-500' : 'text-zinc-500'}`}
             >
                <div className={`p-3 rounded-full ${activeTab === 'search' ? 'bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.5)]' : 'bg-transparent'}`}>
                    {activeTab === 'search' ? <Plus size={24} /> : <Search size={24} />}
                </div>
                 {activeTab === 'search' && <span className="text-[10px] font-medium">Search</span>}
             </button>

             <button 
                onClick={() => setActiveTab('grid')} 
                className={`flex-1 flex flex-col items-center justify-center gap-1 h-full rounded-full transition-all ${activeTab === 'grid' ? 'text-white' : 'text-zinc-500'}`}
             >
                <div className={`p-3 rounded-full ${activeTab === 'grid' ? 'bg-white/20' : 'bg-transparent'}`}>
                    <LayoutGrid size={24} fill={activeTab === 'grid' ? "currentColor" : "none"} />
                </div>
                {activeTab === 'grid' && <span className="text-[10px] font-medium">Library</span>}
             </button>

             <button onClick={() => setActiveTab('activity')} className="flex-1 flex items-center justify-center text-zinc-500 hover:text-zinc-300">
                <Zap size={24} />
             </button>
          </div>
      </div>
  );

  // --- SCREEN CONTENTS ---
  
  const HomeScreen = () => {
    // Gradients for live avatars
    const avatarGradients = [
        'from-pink-400 to-rose-500',
        'from-purple-400 to-indigo-500',
        'from-cyan-400 to-blue-500',
        'from-emerald-400 to-teal-500',
        'from-amber-400 to-orange-500'
    ];

    return (
    <div className="flex flex-col pb-32">
       {/* Top Creators */}
       <div className="mt-4 mb-8">
           <h2 className="text-xl font-display font-bold text-white px-6 mb-4">Top creators</h2>
           <div className="flex gap-4 overflow-x-auto px-6 pb-2 no-scrollbar">
                {LIVE_ARTISTS.map((artist, index) => (
                    <div 
                        key={artist.id} 
                        onClick={() => navigate('profile')}
                        className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group"
                    >
                        <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 group-hover:scale-105 transition-transform">
                             <div className={`w-[72px] h-[72px] rounded-full border-[3px] border-black overflow-hidden bg-gradient-to-br ${avatarGradients[index % avatarGradients.length]} flex items-center justify-center`}>
                                <User size={32} className="text-white/60" />
                             </div>
                        </div>
                        <div className="text-center">
                            <h4 className="text-sm font-bold text-white leading-tight">{artist.name}</h4>
                            <span className="text-[10px] font-medium text-zinc-400">{artist.viewers}</span>
                        </div>
                    </div>
                ))}
           </div>
       </div>

       {/* You may like & Filters - Updated to match Profile Chip styles */}
       <div className="px-6 mb-6">
            <h2 className="text-xl font-display font-bold text-white mb-4">You may like</h2>
            <div className="flex gap-2.5 overflow-x-auto pb-2 no-scrollbar">
                <button className="px-6 py-2.5 rounded-2xl bg-white text-black font-bold text-sm whitespace-nowrap shadow-glow">All</button>
                <button className="px-6 py-2.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 font-bold text-sm whitespace-nowrap hover:bg-zinc-800 hover:text-white transition-colors">Rock</button>
                <button className="px-6 py-2.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 font-bold text-sm whitespace-nowrap hover:bg-zinc-800 hover:text-white transition-colors">Hip-Hop</button>
                <button className="px-6 py-2.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 font-bold text-sm whitespace-nowrap hover:bg-zinc-800 hover:text-white transition-colors">K-pop</button>
                <button className="px-6 py-2.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 font-bold text-sm whitespace-nowrap hover:bg-zinc-800 hover:text-white transition-colors">Classics</button>
            </div>
       </div>

       {/* Masonry Grid */}
       <div className="px-6 grid grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
                {/* Blue Mix Card (Tall) */}
                <div 
                    onClick={() => openPlaylist({id: 'm1', title: 'The Weeknd', subtitle: 'Mix', type: 'mix', color: 'from-sky-400 to-blue-600', artistImage: ''})}
                    className="aspect-[4/5] w-full rounded-[2rem] bg-gradient-to-b from-sky-400 to-blue-600 relative overflow-hidden cursor-pointer active:scale-95 transition-transform"
                >
                     <div className="absolute top-4 left-4 p-2 bg-white/20 rounded-2xl backdrop-blur-md">
                        <Cog size={14} className="text-white opacity-80" />
                     </div>
                     
                     <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                        <h3 className="text-2xl font-display font-bold text-white mb-1">The Weeknd</h3>
                        <span className="text-white/80 text-sm font-medium">Mix</span>
                     </div>
                     
                     {/* Circles at bottom */}
                     <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center">
                         <div className="flex -space-x-3">
                             <div className="w-10 h-10 rounded-full border-2 border-blue-500 overflow-hidden bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center">
                                 <Disc size={16} className="text-white/40" />
                             </div>
                             <div className="w-12 h-12 rounded-full border-2 border-blue-500 overflow-hidden bg-gradient-to-br from-indigo-300 to-indigo-500 z-10 -mt-2 flex items-center justify-center">
                                 <Disc size={20} className="text-white/40" />
                             </div>
                             <div className="w-10 h-10 rounded-full border-2 border-blue-500 overflow-hidden bg-gradient-to-br from-sky-300 to-sky-500 flex items-center justify-center">
                                 <Disc size={16} className="text-white/40" />
                             </div>
                         </div>
                     </div>
                </div>

                {/* Red Liked Songs Card (Short) */}
                 <div 
                    onClick={() => openPlaylist({id: 'g2', title: 'Post Malone', subtitle: 'Liked Songs', type: 'liked', color: 'from-red-500 to-red-700', artistImage: ''})}
                    className="aspect-square w-full rounded-[2rem] bg-gradient-to-b from-red-500 to-red-700 relative overflow-hidden cursor-pointer active:scale-95 transition-transform"
                >
                     <div className="absolute top-4 left-4 p-2 bg-white/20 rounded-2xl backdrop-blur-md z-20">
                        <Cog size={14} className="text-white opacity-80" />
                     </div>
                     <div className="absolute top-6 left-0 right-0 text-center z-20">
                         <h3 className="font-bold text-white text-lg">Post Malone</h3>
                         <span className="text-white/80 text-xs">Liked Songs</span>
                     </div>
                     {/* Placeholder Icon Graphic */}
                     <div className="absolute bottom-[-20px] right-[-20px] opacity-20 transform rotate-12">
                         <Heart size={140} fill="currentColor" className="text-black" />
                     </div>
                 </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
                {/* Pink Liked Songs Card (Short) */}
                <div 
                    onClick={() => openPlaylist({id: 'g3', title: 'Post Malone', subtitle: 'Liked Songs', type: 'liked', color: 'from-pink-500 to-rose-600', artistImage: ''})}
                    className="aspect-square w-full rounded-[2rem] bg-gradient-to-b from-pink-500 to-rose-600 relative overflow-hidden cursor-pointer active:scale-95 transition-transform"
                >
                     <div className="absolute top-4 left-4 p-2 bg-white/20 rounded-2xl backdrop-blur-md z-20">
                        <Cog size={14} className="text-white opacity-80" />
                     </div>
                     <div className="absolute top-6 left-0 right-0 text-center z-20">
                         <h3 className="font-bold text-white text-lg">Post Malone</h3>
                         <span className="text-white/80 text-xs">Liked Songs</span>
                     </div>
                     {/* Placeholder Icon Graphic */}
                     <div className="absolute bottom-[-10px] left-[-10px] opacity-20 transform -rotate-12">
                         <Music size={140} fill="currentColor" className="text-black" />
                     </div>
                 </div>

                 {/* Purple Mix Card (Tall) */}
                 <div 
                    onClick={() => openPlaylist({id: 'g4', title: 'Dua Lipa', subtitle: 'Mix', type: 'mix', color: 'from-fuchsia-500 to-purple-600', artistImage: ''})}
                    className="aspect-[4/5] w-full rounded-[2rem] bg-gradient-to-b from-fuchsia-500 to-purple-600 relative overflow-hidden cursor-pointer active:scale-95 transition-transform"
                >
                     <div className="absolute top-4 left-4 p-2 bg-white/20 rounded-2xl backdrop-blur-md">
                        <Cog size={14} className="text-white opacity-80" />
                     </div>
                     
                     <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                        <h3 className="text-2xl font-display font-bold text-white mb-1">Dua Lipa</h3>
                        <span className="text-white/80 text-sm font-medium">Mix</span>
                     </div>
                     
                     {/* Circles at bottom */}
                     <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center">
                         <div className="flex -space-x-3">
                             <div className="w-10 h-10 rounded-full border-2 border-purple-500 overflow-hidden bg-gradient-to-br from-fuchsia-300 to-fuchsia-500 flex items-center justify-center">
                                 <Disc size={16} className="text-white/40" />
                             </div>
                             <div className="w-12 h-12 rounded-full border-2 border-purple-500 overflow-hidden bg-gradient-to-br from-purple-300 to-purple-500 z-10 -mt-2 flex items-center justify-center">
                                 <Disc size={20} className="text-white/40" />
                             </div>
                             <div className="w-10 h-10 rounded-full border-2 border-purple-500 overflow-hidden bg-gradient-to-br from-pink-300 to-pink-500 flex items-center justify-center">
                                 <Disc size={16} className="text-white/40" />
                             </div>
                         </div>
                     </div>
                </div>
            </div>
       </div>
    </div>
    );
  };

  // --- RENDER LOGIC ---

  if (screen === 'splash') {
    return <SplashScreen onFinish={() => setScreen('onboarding')} />;
  }

  if (screen === 'onboarding') {
    return <OnboardingScreen onComplete={() => setScreen('home')} />;
  }
  
  if (screen === 'playlist') {
      return (
        <PlaylistScreen 
            playlistItem={selectedPlaylist} 
            onBack={() => setScreen('home')} 
            onPlayTrack={playTrack} 
        />
      );
  }

  if (screen === 'profile') {
      return (
        <ProfileScreen 
            profile={MOCK_CREATOR_PROFILE} 
            onBack={() => setScreen('home')} 
            onPlayTrack={playTrack}
        />
      );
  }

  return (
    <SafeArea>
       {/* Main Content Area */}
       <div className="flex-1 overflow-y-auto no-scrollbar bg-black relative">
          <AnimatePresence mode="wait">
            {activeTab === 'home' && <HomeScreen key="home" />}
            {activeTab === 'search' && <SearchScreen key="search" />}
            {activeTab === 'grid' && <LibraryScreen key="library" />}
            {activeTab === 'activity' && <div className="p-10 text-center text-zinc-500 mt-20">Activity</div>}
          </AnimatePresence>
       </div>
       
       <BottomNav />
       
       {/* Full Screen Player Modal */}
       {isPlayerOpen && currentTrack && (
         <PlayerScreen 
            track={currentTrack} 
            isPlaying={isPlaying} 
            onTogglePlay={() => setIsPlaying(!isPlaying)} 
            onClose={() => setIsPlayerOpen(false)} 
         />
       )}
    </SafeArea>
  );
}