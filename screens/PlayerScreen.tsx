import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Heart, MoreHorizontal, Play, Pause, SkipBack, SkipForward, Volume2, Plus, Share2 } from 'lucide-react';
import { Track } from '../types';
import { Button, SafeArea } from '../components/ui';

interface Props {
    track: Track;
    onClose: () => void;
    isPlaying: boolean;
    onTogglePlay: () => void;
}

export const PlayerScreen: React.FC<Props> = ({ track, onClose, isPlaying, onTogglePlay }) => {
    const [progress, setProgress] = useState(30);
    const [liked, setLiked] = useState(false);

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
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none"
            >
                <SafeArea className="h-full bg-dark-900 pointer-events-auto rounded-t-3xl overflow-hidden border-t border-white/10">
                    {/* Background Blur Image */}
                    <div className="absolute inset-0 z-0">
                        <img src={track.imageUrl} alt="" className="w-full h-full object-cover opacity-20 blur-3xl" />
                        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/50 via-dark-950/80 to-dark-950" />
                    </div>

                    <div className="relative z-10 flex flex-col h-full p-6">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8 pt-4">
                            <button onClick={onClose} className="p-2 -ml-2 text-slate-300 hover:text-white rounded-full hover:bg-white/10">
                                <ChevronDown size={28} />
                            </button>
                            <span className="text-xs font-bold tracking-widest uppercase text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                Now Playing
                            </span>
                            <button className="p-2 -mr-2 text-slate-300 hover:text-white rounded-full hover:bg-white/10">
                                <MoreHorizontal size={24} />
                            </button>
                        </div>

                        {/* Artwork */}
                        <div className="flex-1 flex items-center justify-center mb-10">
                            <div className="relative w-full aspect-square max-w-[320px] rounded-3xl overflow-hidden shadow-2xl shadow-primary-500/20 border border-white/10">
                                <img src={track.imageUrl} alt={track.title} className="w-full h-full object-cover" />
                                {/* Visualizer Overlay */}
                                {isPlaying && (
                                    <div className="absolute inset-0 flex items-center justify-center gap-1 bg-black/20">
                                        {[1, 2, 3, 4, 5].map((bar) => (
                                            <motion.div 
                                                key={bar}
                                                animate={{ height: [20, 60, 30, 80, 40] }}
                                                transition={{ 
                                                    repeat: Infinity, 
                                                    duration: 1.5, 
                                                    delay: bar * 0.1,
                                                    ease: "easeInOut"
                                                }}
                                                className="w-2 bg-white/80 rounded-full"
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Info */}
                        <div className="flex items-end justify-between mb-8">
                            <div>
                                <h2 className="text-2xl font-display font-bold text-white mb-1 leading-tight">{track.title}</h2>
                                <p className="text-lg text-slate-400">{track.artist}</p>
                            </div>
                            <div className="flex gap-4">
                                <button onClick={() => setLiked(!liked)} className={`p-2 rounded-full transition-colors ${liked ? 'text-rose-500 bg-rose-500/10' : 'text-slate-400 hover:text-white'}`}>
                                    <Heart size={24} fill={liked ? "currentColor" : "none"} />
                                </button>
                                <button className="p-2 text-slate-400 hover:text-white rounded-full">
                                    <Share2 size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Progress */}
                        <div className="mb-10 group">
                            <div className="relative h-1.5 bg-dark-700 rounded-full overflow-hidden mb-2 cursor-pointer group-hover:h-2 transition-all">
                                <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-400 to-secondary-400" style={{ width: `${progress}%` }} />
                            </div>
                            <div className="flex justify-between text-xs font-medium text-slate-500">
                                <span>{Math.floor((progress / 100) * 600 / 60)}:{String(Math.floor((progress / 100) * 600 % 60)).padStart(2, '0')}</span>
                                <span>{track.duration}</span>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-between mb-10">
                            <button className="text-slate-400 hover:text-white transition-colors">
                                <Volume2 size={24} />
                            </button>
                            
                            <div className="flex items-center gap-6">
                                <button className="text-white hover:text-primary-300 transition-colors">
                                    <SkipBack size={32} fill="currentColor" />
                                </button>
                                <button 
                                    onClick={onTogglePlay}
                                    className="w-20 h-20 rounded-full bg-white text-dark-950 flex items-center justify-center shadow-lg shadow-white/10 hover:scale-105 active:scale-95 transition-all"
                                >
                                    {isPlaying ? (
                                        <Pause size={32} fill="currentColor" />
                                    ) : (
                                        <Play size={32} fill="currentColor" className="ml-1" />
                                    )}
                                </button>
                                <button className="text-white hover:text-primary-300 transition-colors">
                                    <SkipForward size={32} fill="currentColor" />
                                </button>
                            </div>

                            <button className="text-slate-400 hover:text-white transition-colors">
                                <Plus size={28} />
                            </button>
                        </div>
                        
                        <div className="mt-auto pb-4">
                             <div className="flex items-center justify-center gap-2 text-xs text-primary-300 bg-primary-500/10 py-2 px-4 rounded-full border border-primary-500/20 w-fit mx-auto">
                                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse" />
                                Playing in background enabled
                             </div>
                        </div>
                    </div>
                </SafeArea>
            </motion.div>
        </AnimatePresence>
    );
};
