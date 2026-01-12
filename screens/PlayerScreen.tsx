import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Heart, MoreVertical, Play, Pause, SkipBack, SkipForward, Repeat, Disc } from 'lucide-react';
import { Track } from '../types';
import { SafeArea } from '../components/ui';

interface Props {
    track: Track;
    onClose: () => void;
    isPlaying: boolean;
    onTogglePlay: () => void;
}

export const PlayerScreen: React.FC<Props> = ({ track, onClose, isPlaying, onTogglePlay }) => {
    const [progress, setProgress] = useState(30);
    const [liked, setLiked] = useState(false);
    const [viewMode, setViewMode] = useState<'song' | 'video'>('song');

    // Simulate progress
    useEffect(() => {
        if (!isPlaying) return;
        const interval = setInterval(() => {
            setProgress(p => p >= 100 ? 0 : p + 0.5);
        }, 1000);
        return () => clearInterval(interval);
    }, [isPlaying]);

    return (
        <AnimatePresence>
            <motion.div 
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: "spring", damping: 30, stiffness: 250 }}
                className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none"
            >
                {/* Specific Dark Red Gradient Background */}
                <SafeArea className="h-full pointer-events-auto rounded-none overflow-hidden flex flex-col bg-gradient-to-b from-[#450a0a] to-[#2a0505]">
                    
                    {/* Header */}
                    <div className="px-6 py-6 flex items-center justify-between z-10">
                        <button onClick={onClose} className="w-10 h-10 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm">
                            <ChevronDown size={24} />
                        </button>
                        
                        {/* Segmented Control */}
                        <div className="flex bg-black/30 backdrop-blur-md rounded-full p-1">
                            <button 
                                onClick={() => setViewMode('song')}
                                className={`px-6 py-1.5 rounded-full text-sm font-semibold transition-all ${viewMode === 'song' ? 'bg-white/20 text-white shadow-sm' : 'text-white/60 hover:text-white'}`}
                            >
                                Song
                            </button>
                            <button 
                                onClick={() => setViewMode('video')}
                                className={`px-6 py-1.5 rounded-full text-sm font-semibold transition-all ${viewMode === 'video' ? 'bg-white/20 text-white shadow-sm' : 'text-white/60 hover:text-white'}`}
                            >
                                Video
                            </button>
                        </div>

                        <button className="w-10 h-10 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm">
                            <MoreVertical size={20} />
                        </button>
                    </div>

                    <div className="flex-1 flex flex-col px-6 pb-8 overflow-y-auto no-scrollbar relative">
                        
                        {/* Artwork Area */}
                        <div className="flex-1 flex items-center justify-center relative my-4">
                            {/* Side Peeks (Decoration) */}
                            <div className="absolute left-[-85%] w-full h-[80%] bg-zinc-800 rounded-[2rem] opacity-30 scale-90" />
                            <div className="absolute right-[-85%] w-full h-[80%] bg-zinc-800 rounded-[2rem] opacity-30 scale-90" />

                            <div className="relative w-full aspect-square max-h-[350px] max-w-[350px]">
                                {/* Artwork Shadow/Glow */}
                                <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full scale-110" />
                                
                                <div className="w-full h-full rounded-[2rem] overflow-hidden relative border border-white/10 shadow-2xl z-10">
                                    {/* Placeholder Gradient Album Art */}
                                    <div className="w-full h-full bg-gradient-to-br from-orange-500 via-red-500 to-rose-600 flex items-center justify-center">
                                         <div className="text-white/30">
                                            <Disc size={80} strokeWidth={1} />
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Title & Icons Row */}
                        <div className="flex items-center justify-between mt-6 mb-8">
                             <button className="p-3 text-white/50 hover:text-white transition-colors">
                                <Repeat size={24} />
                             </button>

                             <div className="flex flex-col items-center text-center">
                                <h2 className="text-2xl font-display font-bold text-white mb-1 tracking-wide">{track.title}</h2>
                                <p className="text-white/70 font-medium text-lg">{track.artist}</p>
                             </div>

                             <button onClick={() => setLiked(!liked)} className="p-3 text-white transition-colors">
                                <Heart size={24} fill={liked ? "white" : "none"} />
                             </button>
                        </div>

                        {/* Standard Progress Bar */}
                        <div className="w-full px-2 mb-2 group cursor-pointer relative">
                            {/* Track */}
                            <div className="w-full h-1.5 bg-white/20 rounded-full relative overflow-hidden">
                                {/* Fill */}
                                <div 
                                    className="h-full bg-white rounded-full relative" 
                                    style={{ width: `${progress}%` }} 
                                />
                            </div>
                            {/* Thumb (only visible on hover/active or subtle always) */}
                            <div 
                                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg ml-2"
                                style={{ left: `calc(${progress}% - 8px)` }}
                            />
                        </div>

                        {/* TimeStamps */}
                        <div className="flex justify-between text-xs font-medium text-white/60 mb-12 px-2">
                            <span>2:48</span>
                            <span>3:52</span>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-center gap-10 mb-8">
                            <button className="text-white hover:scale-110 transition-transform">
                                <SkipBack size={36} fill="currentColor" />
                            </button>
                            
                            <motion.button 
                                whileTap={{ scale: 0.95 }}
                                onClick={onTogglePlay}
                                className="w-20 h-20 rounded-full bg-white/10 text-white flex items-center justify-center backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/20 transition-all"
                            >
                                {isPlaying ? (
                                    <Pause size={32} fill="currentColor" />
                                ) : (
                                    <Play size={32} fill="currentColor" className="ml-1" />
                                )}
                            </motion.button>

                            <button className="text-white hover:scale-110 transition-transform">
                                <SkipForward size={36} fill="currentColor" />
                            </button>
                        </div>
                        
                        {/* Bottom Spacer */}
                        <div className="h-4" />
                    </div>
                </SafeArea>
            </motion.div>
        </AnimatePresence>
    );
};