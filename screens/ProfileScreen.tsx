import React from 'react';
import { motion } from 'framer-motion';
import { X, Share, MessageCircle, MoreHorizontal, CheckCircle2, ChevronDown, Disc, Play, Wand2, DollarSign } from 'lucide-react';
import { CreatorProfile, Track } from '../types';
import { SafeArea } from '../components/ui';
import { CREATOR_TRACKS } from '../constants';

interface Props {
    profile: CreatorProfile;
    onBack: () => void;
    onPlayTrack: (track: Track) => void;
}

export const ProfileScreen: React.FC<Props> = ({ profile, onBack, onPlayTrack }) => {
    // Mock data for the "Followed by" section to match reference
    const followedBy = [
        { color: 'bg-blue-500' },
        { color: 'bg-purple-500' },
        { color: 'bg-pink-500' }
    ];

    return (
        <SafeArea className="bg-black text-white" top={false}>
            <div className="flex-1 overflow-y-auto no-scrollbar relative bg-black">
                
                {/* Header Image/Gradient */}
                <div className="h-64 w-full bg-gradient-to-b from-emerald-800 via-emerald-950 to-black relative">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    {/* Green Glow effect similar to reference */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-sm h-40 bg-emerald-500/20 blur-[60px]" />
                </div>

                {/* Top Navigation (Absolute) */}
                <div className="absolute top-0 left-0 right-0 pt-14 px-5 flex items-center justify-between z-50">
                    {/* Close Button */}
                    <button 
                        onClick={onBack} 
                        className="w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity text-white"
                    >
                        <X size={24} />
                    </button>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3">
                        <button className="w-10 h-10 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/5 hover:bg-white/20 transition-colors text-white">
                            <Share size={18} />
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/5 hover:bg-white/20 transition-colors text-white">
                            <MessageCircle size={18} />
                        </button>
                        <button className="h-10 px-6 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors">
                            Follow
                        </button>
                    </div>
                </div>

                {/* Profile Content */}
                <div className="px-5 -mt-20 relative z-10 pb-32">
                    
                    {/* Avatar */}
                    <div className="relative inline-block mb-4">
                        <div className="w-28 h-28 rounded-full border-[4px] border-black bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center overflow-hidden">
                             {profile.imageUrl ? (
                                <img src={profile.imageUrl} alt={profile.name} className="w-full h-full object-cover" />
                             ) : (
                                <span className="text-3xl font-bold text-white/50">{profile.name.charAt(0)}</span>
                             )}
                        </div>
                        {/* TikTok-style Badge */}
                        <div className="absolute bottom-1 right-1 bg-black rounded-full p-1">
                            <div className="bg-emerald-500 rounded-full p-1 text-black">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Name & Bio */}
                    <div className="mb-6">
                        <h1 className="text-[28px] font-display font-bold text-white leading-tight mb-0.5">
                            {profile.name}
                        </h1>
                        <p className="text-emerald-500/80 font-medium text-base mb-3">@{profile.handle}</p>
                        
                        <p className="text-zinc-400 text-[15px] leading-relaxed max-w-sm">
                            {profile.bio}
                        </p>
                    </div>

                    {/* Stats Chips */}
                    <div className="flex flex-wrap gap-2.5 mb-6">
                        <div className="px-4 py-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 flex items-center gap-1.5 hover:bg-zinc-800 transition-colors cursor-pointer">
                            <span className="text-white font-bold text-sm">31</span>
                            <span className="text-zinc-500 text-sm">followers</span>
                        </div>
                        <div className="px-4 py-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 flex items-center gap-1.5 hover:bg-zinc-800 transition-colors cursor-pointer">
                            <span className="text-white font-bold text-sm">50</span>
                            <span className="text-zinc-500 text-sm">following</span>
                        </div>
                        <div className="px-4 py-2.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/50 flex items-center gap-2 hover:bg-zinc-800 transition-colors cursor-pointer">
                            <Disc size={16} className="text-zinc-400" />
                            <span className="text-white font-bold text-sm">3</span>
                            <span className="text-zinc-500 text-sm">playlists</span>
                        </div>
                    </div>

                    {/* Followed By Section */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="flex -space-x-2">
                            {followedBy.map((item, i) => (
                                <div key={i} className={`w-6 h-6 rounded-full border border-black ${item.color}`} />
                            ))}
                        </div>
                        <p className="text-xs text-zinc-500">
                            Followed by <span className="text-zinc-300">dominic.crypto</span>, <span className="text-zinc-300">ryan.crypto</span> and <span className="text-zinc-300">iurevych.crypto</span>
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-[1fr_auto] gap-3 mb-8">
                        <button className="h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center gap-2.5 text-white font-bold hover:bg-zinc-800 transition-all active:scale-95 group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <Wand2 size={20} className="text-purple-400 group-hover:text-purple-300 transition-colors" />
                            <span className="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent group-hover:from-purple-100 group-hover:to-pink-100">
                                Request Custom Subliminal
                            </span>
                        </button>
                        
                        <button className="h-14 px-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center gap-2 text-white font-bold hover:bg-zinc-800 transition-all active:scale-95 text-emerald-400">
                            <DollarSign size={20} />
                            <span className="text-white">Tip</span>
                        </button>
                    </div>

                    {/* Library / Tokens List Section */}
                    <div>
                        <div className="flex items-end justify-between mb-4 px-1">
                            <div className="flex items-baseline gap-2">
                                <h3 className="text-xl font-bold text-white">Library</h3>
                                <span className="text-zinc-500 font-bold text-lg">{CREATOR_TRACKS.length}</span>
                            </div>
                            <span className="text-zinc-500 text-sm font-medium">Total: 48.2k plays</span>
                        </div>

                        <div className="flex flex-col gap-1">
                            {CREATOR_TRACKS.map((track) => (
                                <div 
                                    key={track.id} 
                                    onClick={() => onPlayTrack(track)}
                                    className="flex items-center justify-between p-3 -mx-2 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer active:scale-[0.99] duration-200"
                                >
                                    {/* Left: Icon & Title */}
                                    <div className="flex items-center gap-3.5">
                                        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                                            <Play size={18} fill="currentColor" className="ml-0.5" />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold text-[15px] leading-tight mb-0.5">{track.title}</div>
                                            <div className="text-zinc-500 text-xs font-medium uppercase tracking-wide">{track.category}</div>
                                        </div>
                                    </div>

                                    {/* Right: Value & Change */}
                                    <div className="text-right">
                                        <div className="text-white font-medium text-[15px]">{track.plays?.toLocaleString()}</div>
                                        <div className="text-emerald-500 text-xs font-medium">{track.duration}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Show More Button */}
                        <button className="w-full mt-4 py-4 rounded-3xl bg-zinc-900 flex items-center justify-center gap-2 text-white font-bold text-sm hover:bg-zinc-800 transition-colors">
                            Show more
                            <ChevronDown size={16} />
                        </button>
                    </div>

                </div>
            </div>
        </SafeArea>
    );
};