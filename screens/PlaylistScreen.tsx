import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowDownCircle, MoreHorizontal, Play, Shuffle, Disc } from 'lucide-react';
import { Track, GridItem } from '../types';
import { SafeArea } from '../components/ui';
import { PLAYLIST_TRACKS } from '../constants';

interface Props {
    playlistItem: GridItem | null;
    onBack: () => void;
    onPlayTrack: (track: Track) => void;
}

export const PlaylistScreen: React.FC<Props> = ({ playlistItem, onBack, onPlayTrack }) => {
    // Default gradient if no item selected
    const gradient = playlistItem?.color || 'from-green-400 to-emerald-600';
    const title = playlistItem?.title || 'Blond';
    const subtitle = playlistItem?.subtitle || 'Album';
    
    return (
        <SafeArea className="bg-black text-white">
            {/* Header */}
            <div className="px-5 py-4 flex items-center justify-between sticky top-0 bg-black/80 backdrop-blur-xl z-30">
                <button 
                    onClick={onBack} 
                    className="w-10 h-10 flex items-center justify-center rounded-2xl bg-white/10 border border-white/5 hover:bg-white/20 transition-colors backdrop-blur-md"
                >
                    <ArrowLeft size={20} />
                </button>
                <div className="flex gap-3">
                    <button className="w-10 h-10 flex items-center justify-center rounded-2xl bg-white/10 border border-white/5 hover:bg-white/20 transition-colors backdrop-blur-md">
                        <ArrowDownCircle size={20} />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-2xl bg-white/10 border border-white/5 hover:bg-white/20 transition-colors backdrop-blur-md">
                        <MoreHorizontal size={20} />
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
                {/* Hero Section */}
                <div className="flex flex-col items-center px-8 pt-4 pb-8">
                    
                    {/* Placeholder Art - Stylized "Cassette/Pack" */}
                    <div className="relative w-full aspect-square max-w-[300px] mb-8 group cursor-pointer">
                         {/* Back Case Layer */}
                         <div className="absolute inset-0 bg-zinc-900 rounded-[8px] border border-zinc-800 shadow-2xl transform translate-x-3 translate-y-0 group-hover:translate-x-5 transition-transform duration-500 flex items-center justify-end px-4 overflow-hidden">
                            {/* Tape Details */}
                            <div className={`w-12 h-[90%] bg-gradient-to-b ${gradient} opacity-50 rounded-sm`} />
                            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-zinc-700" />
                            <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-zinc-700" />
                         </div>
                         
                         {/* Front Sleeve Layer */}
                         <div className="absolute inset-0 right-4 bg-zinc-100 rounded-[8px] shadow-xl overflow-hidden flex flex-col items-center justify-center border border-zinc-200">
                             {/* Abstract Art on Sleeve */}
                             <div className={`w-[70%] h-[70%] bg-gradient-to-br ${gradient} rounded-sm opacity-90 relative overflow-hidden`}>
                                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                 <Disc className="text-white/20 absolute -bottom-10 -right-10 w-40 h-40 animate-spin-slow" />
                             </div>
                             <div className="mt-4 text-black font-display font-bold text-2xl tracking-tighter uppercase">{title}</div>
                         </div>
                    </div>

                    {/* Title & Info */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center w-full"
                    >
                        <h1 className="text-3xl font-display font-bold text-white mb-2">{title}</h1>
                        <div className="flex items-center justify-center gap-2 text-zinc-500 text-sm font-medium">
                            <span>{playlistItem?.title || 'Artist'}</span>
                            <span className="w-1 h-1 rounded-full bg-zinc-700" />
                            <span>Psychedelic pop</span>
                            <span className="w-1 h-1 rounded-full bg-zinc-700" />
                            <span>2024</span>
                        </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <div className="flex w-full gap-3 mt-8">
                        <button 
                            onClick={() => onPlayTrack(PLAYLIST_TRACKS[0])}
                            className="flex-1 bg-white text-black h-14 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors active:scale-95 shadow-glow"
                        >
                            <Play size={20} fill="currentColor" />
                            Play
                        </button>
                        <button 
                            className="flex-1 bg-zinc-900 border border-zinc-800 text-white h-14 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors active:scale-95"
                        >
                            <Shuffle size={20} />
                            Shuffle
                        </button>
                    </div>
                </div>

                {/* Track List - Matched to Profile Screen styling */}
                <div className="px-5">
                    {PLAYLIST_TRACKS.map((track, index) => (
                        <div 
                            key={track.id}
                            onClick={() => onPlayTrack(track)}
                            className="flex items-center justify-between p-3 -mx-2 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer active:scale-[0.99] duration-200 group"
                        >
                            {/* Left: Index & Title */}
                            <div className="flex items-center gap-4">
                                <span className="w-6 text-zinc-600 font-bold text-sm text-center group-hover:text-white transition-colors">
                                    {index + 1}
                                </span>
                                <div>
                                    <div className="text-white font-bold text-[15px] leading-tight mb-0.5">{track.title}</div>
                                    <div className="text-zinc-500 text-xs font-medium uppercase tracking-wide flex items-center gap-2">
                                        {track.artist}
                                        {index === 0 && <span className="px-1 rounded bg-zinc-800 text-[9px] text-zinc-400">E</span>}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Duration */}
                            <div className="flex items-center gap-3">
                                <span className="text-zinc-600 font-medium text-xs group-hover:text-zinc-400 transition-colors">{track.duration}</span>
                                <MoreHorizontal size={16} className="text-zinc-700 group-hover:text-white transition-colors" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SafeArea>
    );
};