import React from 'react';
import { Search } from 'lucide-react';
import { SafeArea } from '../components/ui';
import { POPULAR_SEARCHES, SEARCH_CATEGORIES, SUGGESTED_ARTISTS } from '../constants';

export const SearchScreen: React.FC = () => {
    return (
        <SafeArea className="bg-black text-white" top={true} bottom={false}>
            <div className="flex-1 overflow-y-auto no-scrollbar pb-32 px-5">
                
                {/* Search Bar */}
                <div className="relative mt-2 mb-8">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                        <Search size={20} />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Velvet Echoes" 
                        className="w-full h-12 pl-12 pr-4 bg-zinc-900/80 rounded-2xl text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-700 text-[15px] font-medium"
                    />
                </div>

                {/* Popular Now Section */}
                <div className="mb-8">
                    <h2 className="text-xl font-display font-bold text-white mb-4">It's Popular now</h2>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[15px] font-medium text-zinc-300 leading-relaxed">
                        {POPULAR_SEARCHES.map((item, index) => (
                            <React.Fragment key={index}>
                                <span className="hover:text-white cursor-pointer transition-colors">{item}</span>
                                <span className="text-rose-500 text-lg leading-none">•</span>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Categories Section */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-display font-bold text-white">Categories</h2>
                        <button className="text-sm font-bold text-rose-500 hover:text-rose-400 transition-colors">See All</button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2.5">
                        {SEARCH_CATEGORIES.map((category, index) => (
                            <button 
                                key={index}
                                className="px-5 py-3 rounded-2xl bg-zinc-900 text-zinc-300 text-sm font-medium hover:bg-zinc-800 hover:text-white transition-colors active:scale-95"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* You Might Like It Section */}
                <div>
                    <h2 className="text-xl font-display font-bold text-white mb-4">You migth like it</h2>
                    <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-5 px-5">
                        {SUGGESTED_ARTISTS.map((artist, index) => (
                            <div key={index} className="flex-shrink-0 w-36 h-48 rounded-[2rem] overflow-hidden relative group cursor-pointer">
                                {/* Gradient Placeholder for Image */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${artist.color} group-hover:scale-110 transition-transform duration-500`} />
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                {/* Content */}
                                <div className="absolute bottom-4 left-4 right-4">
                                     {/* Simple decorative lines/shapes like in the image */}
                                     <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-2">
                                         <div className="w-3 h-3 bg-white rounded-full" />
                                     </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </SafeArea>
    );
};