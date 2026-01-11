import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ActivityIndicator } from 'lucide-react';
import { SafeArea } from '../components/ui';

interface Props {
    onFinish: () => void;
}

export const SplashScreen: React.FC<Props> = ({ onFinish }) => {
    useEffect(() => {
        const timer = setTimeout(onFinish, 2500);
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <SafeArea className="items-center justify-center bg-dark-950">
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center"
            >
                {/* Logo Placeholder */}
                <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-primary-600 to-secondary-400 flex items-center justify-center shadow-2xl shadow-primary-500/20 mb-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="z-10">
                        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" strokeLinecap="round"/>
                    </svg>
                </div>

                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-4xl font-display font-bold text-white mb-2 tracking-tight"
                >
                    Sublyme
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-slate-400 text-sm tracking-wide uppercase"
                >
                    Layer your intentions
                </motion.p>
            </motion.div>

            <motion.div 
                className="absolute bottom-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <div className="w-6 h-6 border-2 border-primary-500/30 border-t-primary-500 rounded-full animate-spin" />
            </motion.div>
        </SafeArea>
    );
};
