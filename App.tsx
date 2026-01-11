import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Compass, Library, User, Search, Play, Pause, X } from 'lucide-react';
import { SplashScreen } from './screens/SplashScreen';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { PlayerScreen } from './screens/PlayerScreen';
import { Card, Input, SafeArea, Badge, Button } from './components/ui';
import { ScreenName, TabName, Track, Category } from './types';
import { CATEGORIES, TRENDING_TRACKS } from './constants';

export default function App() {
  const [screen, setScreen] = useState<ScreenName>('splash');
  const [activeTab, setActiveTab] = useState<TabName>('home');
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  
  // Navigation Helper
  const navigate = (scr: ScreenName) => setScreen(scr);

  // Play Helper
  const playTrack = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    setIsPlayerOpen(true);
  };

  // --- SUB-COMPONENTS (IN-FILE FOR SIMPLICITY) ---

  const Header = () => (
    <div className="px-6 py-4 flex items-center justify-between bg-dark-950/80 backdrop-blur-md sticky top-0 z-30">
      <div className="flex items-center gap-2">
         <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-400 flex items-center justify-center text-white font-bold text-xs">S</div>
         <span className="font-display font-bold text-xl tracking-tight">Sublyme</span>
      </div>
      <button onClick={() => navigate('profile')} className="w-9 h-9 rounded-full bg-dark-800 border border-dark-700 overflow-hidden">
        <img src="https://i.pravatar.cc/150?u=sublyme" alt="Profile" className="w-full h-full object-cover" />
      </button>
    </div>
  );

  const BottomNav = () => (
    <div className="absolute bottom-0 left-0 right-0 bg-dark-900/90 backdrop-blur-lg border-t border-dark-700/50 pb-[env(safe-area-inset-bottom,20px)] pt-2 px-6 flex justify-between items-center z-40">
      {[
        { id: 'home', icon: Home, label: 'Home' },
        { id: 'explore', icon: Compass, label: 'Explore' },
        { id: 'library', icon: Library, label: 'Library' },
        { id: 'profile', icon: User, label: 'Profile' }
      ].map((item) => (
        <button 
          key={item.id}
          onClick={() => setActiveTab(item.id as TabName)}
          className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-colors ${activeTab === item.id ? 'text-primary-400' : 'text-slate-500 hover:text-slate-300'}`}
        >
          <item.icon size={24} strokeWidth={activeTab === item.id ? 2.5 : 2} />
          <span className="text-[10px] font-medium">{item.label}</span>
        </button>
      ))}
    </div>
  );

  const MiniPlayer = () => {
    if (!currentTrack) return null;
    return (
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="absolute bottom-[90px] left-4 right-4 bg-dark-800/95 backdrop-blur-md border border-white/10 rounded-2xl p-2 pr-4 shadow-xl z-30 flex items-center gap-3"
        onClick={() => setIsPlayerOpen(true)}
      >
        <img src={currentTrack.imageUrl} alt={currentTrack.title} className="w-10 h-10 rounded-lg object-cover" />
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-bold text-white truncate">{currentTrack.title}</h4>
          <p className="text-xs text-slate-400 truncate">{currentTrack.artist}</p>
        </div>
        <button 
            onClick={(e) => { e.stopPropagation(); setIsPlaying(!isPlaying); }}
            className="w-10 h-10 rounded-full bg-white text-dark-950 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
        >
            {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
        </button>
      </motion.div>
    );
  };

  // --- SCREEN CONTENTS ---
  
  const HomeScreen = () => (
    <div className="flex flex-col pb-32">
       <Header />
       <div className="px-6 mb-8">
         <div onClick={() => navigate('search')}>
            <Input icon={Search} placeholder="What do you want to manifest?" readOnly className="pointer-events-none" />
         </div>
       </div>

       {/* Hero Card */}
       <div className="px-6 mb-8">
         <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/20 group cursor-pointer" onClick={() => playTrack(TRENDING_TRACKS[0])}>
           <img src="https://picsum.photos/800/600?random=hero" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Featured" />
           <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
           <div className="absolute bottom-0 left-0 p-6 w-full">
              <Badge variant="accent">Featured</Badge>
              <h2 className="text-2xl font-display font-bold text-white mt-2 mb-1">Quantum Reality Shift</h2>
              <p className="text-slate-300 text-sm mb-4 line-clamp-2">Reprogram your subconscious for limitless possibilities while you sleep.</p>
              <div className="flex items-center gap-3">
                  <Button size="sm" className="rounded-full pl-3 pr-4">
                     <Play size={16} fill="currentColor" className="mr-2" /> Play Now
                  </Button>
                  <span className="text-xs text-slate-400 font-medium bg-black/40 px-2 py-1 rounded-md backdrop-blur-sm">45 min</span>
              </div>
           </div>
         </div>
       </div>

       {/* Categories */}
       <div className="px-6 mb-8">
          <div className="flex items-center justify-between mb-4">
             <h3 className="text-lg font-bold text-white">Explore Categories</h3>
             <button className="text-primary-400 text-xs font-bold uppercase tracking-wider">See All</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
             {CATEGORIES.slice(0, 4).map((cat) => (
                <Card key={cat.id} className="p-4 flex flex-col items-start gap-3 bg-dark-800/50 hover:bg-dark-800 transition-colors" onClick={() => navigate('category')}>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-white shadow-lg`}>
                        {/* Icons would be dynamic here, simplified for demo */}
                        <span className="text-lg font-bold">{cat.name[0]}</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-sm">{cat.name}</h4>
                        <p className="text-xs text-slate-500">{cat.trackCount} tracks</p>
                    </div>
                </Card>
             ))}
          </div>
       </div>

       {/* Trending */}
       <div className="px-6">
          <h3 className="text-lg font-bold text-white mb-4">Trending Now</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar">
             {TRENDING_TRACKS.map((track) => (
                 <div key={track.id} className="flex-shrink-0 w-36 group cursor-pointer" onClick={() => playTrack(track)}>
                    <div className="w-36 h-36 rounded-2xl overflow-hidden mb-3 relative">
                       <img src={track.imageUrl} alt={track.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                       <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black">
                             <Play size={18} fill="currentColor" className="ml-0.5" />
                          </div>
                       </div>
                    </div>
                    <h4 className="text-sm font-bold text-slate-200 truncate">{track.title}</h4>
                    <p className="text-xs text-slate-500 truncate">{track.artist}</p>
                 </div>
             ))}
          </div>
       </div>
    </div>
  );

  const ExploreScreen = () => (
      <div className="flex flex-col p-6 pb-32">
          <h1 className="text-3xl font-display font-bold mb-6">Explore</h1>
          <Input icon={Search} placeholder="Search categories, moods..." className="mb-6" />
          <div className="grid grid-cols-2 gap-4">
              {CATEGORIES.map((cat) => (
                <div key={cat.id} className="aspect-[4/3] rounded-2xl relative overflow-hidden group cursor-pointer">
                    <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />
                    <div className="absolute inset-0 p-4 flex flex-col justify-end">
                        <h3 className="text-white font-bold text-lg">{cat.name}</h3>
                        <p className="text-white/80 text-xs">{cat.trackCount} tracks</p>
                    </div>
                </div>
              ))}
          </div>
      </div>
  );

  const LibraryScreen = () => (
      <div className="flex flex-col p-6 pb-32">
          <h1 className="text-3xl font-display font-bold mb-6">Library</h1>
          <div className="flex gap-6 border-b border-dark-700 mb-6">
              <button className="pb-3 border-b-2 border-primary-500 text-white font-medium">Favorites</button>
              <button className="pb-3 border-b-2 border-transparent text-slate-500 font-medium hover:text-slate-300">Playlists</button>
              <button className="pb-3 border-b-2 border-transparent text-slate-500 font-medium hover:text-slate-300">History</button>
          </div>
          <div className="space-y-4">
              {TRENDING_TRACKS.slice(0,3).map(track => (
                  <div key={track.id} className="flex items-center gap-4 bg-dark-800/50 p-3 rounded-xl border border-transparent hover:border-dark-700 cursor-pointer" onClick={() => playTrack(track)}>
                      <img src={track.imageUrl} className="w-14 h-14 rounded-lg object-cover" />
                      <div className="flex-1">
                          <h4 className="font-bold text-white">{track.title}</h4>
                          <p className="text-xs text-slate-400">{track.artist}</p>
                      </div>
                      <button className="p-2 text-primary-400"><Play size={20} fill="currentColor" /></button>
                  </div>
              ))}
          </div>
      </div>
  );

  // --- RENDER LOGIC ---

  if (screen === 'splash') {
    return <SplashScreen onFinish={() => setScreen('onboarding')} />;
  }

  if (screen === 'onboarding') {
    return <OnboardingScreen onComplete={() => setScreen('home')} />;
  }

  if (screen === 'player' || isPlayerOpen) {
      // Handled by conditional rendering below for modal effect
  }

  return (
    <SafeArea>
       {/* Main Content Area */}
       <div className="flex-1 overflow-y-auto no-scrollbar bg-dark-950">
          {activeTab === 'home' && <HomeScreen />}
          {activeTab === 'explore' && <ExploreScreen />}
          {activeTab === 'library' && <LibraryScreen />}
          {activeTab === 'profile' && (
              <div className="p-6 flex flex-col items-center justify-center h-full text-center">
                  <div className="w-24 h-24 rounded-full bg-dark-800 mb-4 overflow-hidden border-2 border-primary-500">
                      <img src="https://i.pravatar.cc/150?u=sublyme" className="w-full h-full object-cover" />
                  </div>
                  <h2 className="text-2xl font-bold">Alex Doe</h2>
                  <p className="text-slate-500 mb-8">Premium Member</p>
                  <Button variant="secondary" className="w-full mb-3">Account Settings</Button>
                  <Button variant="ghost" className="w-full text-red-400 hover:text-red-300 hover:bg-red-500/10">Log Out</Button>
              </div>
          )}
       </div>

       {/* Components Layered on Top */}
       <MiniPlayer />
       <BottomNav />
       
       {/* Search Overlay (Simplified) */}
       {screen === 'search' && (
         <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="absolute inset-0 z-50 bg-dark-950 flex flex-col"
         >
             <div className="p-4 flex items-center gap-3 border-b border-dark-800">
                 <button onClick={() => setScreen('home')}><X className="text-slate-400" /></button>
                 <Input autoFocus placeholder="Search..." className="flex-1" />
             </div>
             <div className="p-6 flex-1 flex flex-col items-center justify-center text-slate-500">
                 <Search size={48} className="mb-4 opacity-20" />
                 <p>Search specifically for...</p>
             </div>
         </motion.div>
       )}

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
