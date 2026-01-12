import React from 'react';
import { Search, Bell, User, Heart, ArrowDownCircle, ListMusic, Users } from 'lucide-react';
import { SafeArea } from '../components/ui';

export const LibraryScreen: React.FC = () => {
    return (
        <SafeArea className="bg-black text-white" top={true} bottom={false}>
            {/* Header */}
            <div className="px-6 pt-4 pb-6 flex items-center justify-between">
                <h1 className="text-3xl font-display font-bold text-white">Library</h1>
                <div className="flex items-center gap-3">
                    <button className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white hover:bg-zinc-800 transition-colors">
                        <Search size={20} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white hover:bg-zinc-800 transition-colors">
                        <Bell size={20} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white hover:bg-zinc-800 transition-colors">
                        <User size={20} />
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
                {/* Filters */}
                <div className="px-6 mb-6 flex gap-2.5 overflow-x-auto no-scrollbar">
                    {['Recent', 'Playlists', 'Artists', 'Albums'].map((filter, i) => (
                        <button 
                            key={filter}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold border transition-colors whitespace-nowrap ${
                                i === 0 
                                ? 'bg-zinc-800 border-zinc-700 text-white' 
                                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="px-6 grid grid-cols-2 gap-4">
                    {/* Liked Songs */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-5 aspect-square flex flex-col justify-between hover:bg-zinc-800 transition-colors cursor-pointer group active:scale-95 duration-200">
                        <div className="w-12 h-12 rounded-full bg-black border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
                            <Heart size={22} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">Liked Songs</h3>
                            <p className="text-zinc-500 text-xs font-medium uppercase tracking-wide">120 songs</p>
                        </div>
                    </div>

                    {/* Downloads */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-5 aspect-square flex flex-col justify-between hover:bg-zinc-800 transition-colors cursor-pointer group active:scale-95 duration-200">
                        <div className="w-12 h-12 rounded-full bg-black border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
                            <ArrowDownCircle size={22} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">Downloads</h3>
                            <p className="text-zinc-500 text-xs font-medium uppercase tracking-wide">210 songs</p>
                        </div>
                    </div>

                    {/* Playlists */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-5 aspect-square flex flex-col justify-between hover:bg-zinc-800 transition-colors cursor-pointer group active:scale-95 duration-200">
                        <div className="w-12 h-12 rounded-full bg-black border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
                            <ListMusic size={22} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">Playlists</h3>
                            <p className="text-zinc-500 text-xs font-medium uppercase tracking-wide">12 playlists</p>
                        </div>
                    </div>

                    {/* Artists */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-5 aspect-square flex flex-col justify-between hover:bg-zinc-800 transition-colors cursor-pointer group active:scale-95 duration-200">
                        <div className="w-12 h-12 rounded-full bg-black border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
                            <Users size={22} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">Artists</h3>
                            <p className="text-zinc-500 text-xs font-medium uppercase tracking-wide">3 artists</p>
                        </div>
                    </div>
                </div>
            </div>
        </SafeArea>
    );
};