import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Moon, Heart, Sparkles, Target, Shield, Bell } from 'lucide-react';
import { Button, SafeArea } from '../components/ui';

interface Props {
    onComplete: () => void;
}

export const OnboardingScreen: React.FC<Props> = ({ onComplete }) => {
    const [step, setStep] = useState(0);

    const nextStep = () => {
        if (step < 2) setStep(step + 1);
        else onComplete();
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <SafeArea className="bg-black text-white">
            <div className="flex-1 relative flex flex-col justify-between p-8">
                {/* Background Noise Texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />

                <div className="absolute top-6 right-6 z-20">
                    <button onClick={onComplete} className="text-zinc-500 text-sm font-medium hover:text-white transition-colors">Skip</button>
                </div>

                <div className="flex-1 flex flex-col justify-center relative overflow-hidden z-10">
                    <AnimatePresence initial={false} custom={1} mode="wait">
                        {step === 0 && (
                            <motion.div 
                                key="step1"
                                custom={1}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="w-full aspect-square max-w-[280px] bg-zinc-900 rounded-full flex items-center justify-center mb-10 relative border border-zinc-800">
                                    <div className="absolute inset-4 border border-zinc-800 rounded-full animate-pulse opacity-50" />
                                    <div className="absolute inset-12 border border-zinc-800 rounded-full opacity-30" />
                                    {/* Placeholder Gradient */}
                                    <div className="w-48 h-48 rounded-full shadow-[0_0_50px_rgba(79,70,229,0.2)] z-10 bg-gradient-to-tr from-indigo-900 via-purple-900 to-black border border-white/10 flex items-center justify-center">
                                        <Sparkles className="text-white w-20 h-20 opacity-80" />
                                    </div>
                                </div>
                                <h2 className="text-3xl font-display font-bold text-white mb-4">
                                    Subliminals under<br/>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">your music</span>
                                </h2>
                                <p className="text-zinc-400 leading-relaxed max-w-xs text-base">
                                    Listen to your favorite songs while absorbing powerful affirmations in the background.
                                </p>
                            </motion.div>
                        )}

                        {step === 1 && (
                            <motion.div 
                                key="step2"
                                custom={1}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="flex flex-col w-full"
                            >
                                <h2 className="text-2xl font-display font-bold text-white mb-8 text-center">
                                    Choose your focus
                                </h2>
                                <div className="grid grid-cols-2 gap-3 w-full">
                                    {[
                                        { name: 'Manifest', icon: Sparkles, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
                                        { name: 'Confidence', icon: Zap, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
                                        { name: 'Sleep', icon: Moon, color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20' },
                                        { name: 'Self-Love', icon: Heart, color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20' },
                                        { name: 'Success', icon: Target, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
                                        { name: 'Protection', icon: Shield, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
                                    ].map((cat) => (
                                        <button key={cat.name} className={`flex flex-col items-center justify-center p-4 rounded-2xl border ${cat.bg} hover:bg-zinc-800 transition-all active:scale-95 group`}>
                                            <cat.icon className={`w-8 h-8 mb-2 ${cat.color} group-hover:scale-110 transition-transform`} />
                                            <span className="text-sm font-semibold text-zinc-300">{cat.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div 
                                key="step3"
                                custom={1}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="flex flex-col items-center text-center w-full"
                            >
                                <div className="w-24 h-24 bg-zinc-900 rounded-3xl flex items-center justify-center mb-8 border border-zinc-800 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                                    <Bell size={40} className="text-white" />
                                </div>
                                <h2 className="text-2xl font-display font-bold text-white mb-4">
                                    Stay consistent
                                </h2>
                                <p className="text-zinc-400 leading-relaxed mb-8 max-w-xs">
                                    Allow notifications to get daily reminders and track your streaks.
                                </p>
                                <div className="w-full bg-zinc-900 p-4 rounded-2xl border border-zinc-800 shadow-sm flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-zinc-800">
                                            <Bell size={20} className="text-white" />
                                        </div>
                                        <div className="text-left">
                                            <div className="text-sm font-bold text-white">Notifications</div>
                                            <div className="text-xs text-zinc-500">Daily reminders</div>
                                        </div>
                                    </div>
                                    <div className="w-12 h-6 bg-emerald-500 rounded-full relative">
                                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="mt-8 z-20">
                    <Button onClick={nextStep} size="lg" className="w-full flex items-center justify-center gap-2 group rounded-2xl bg-white text-black hover:bg-zinc-200">
                        {step === 2 ? "Get Started" : "Continue"}
                        {step !== 2 && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                    </Button>
                    <div className="flex justify-center gap-2 mt-6">
                        {[0, 1, 2].map((i) => (
                            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-white' : 'w-1.5 bg-zinc-800'}`} />
                        ))}
                    </div>
                </div>
            </div>
        </SafeArea>
    );
};