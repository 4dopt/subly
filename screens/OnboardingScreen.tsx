import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Zap, Moon, Heart, Sparkles, Target, Shield, Bell } from 'lucide-react';
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
        <SafeArea>
            <div className="flex-1 relative flex flex-col justify-between p-6">
                <div className="absolute top-6 right-6 z-20">
                    <button onClick={onComplete} className="text-slate-500 text-sm font-medium hover:text-white transition-colors">Skip</button>
                </div>

                <div className="flex-1 flex flex-col justify-center relative overflow-hidden">
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
                                <div className="w-full aspect-square max-w-[280px] bg-gradient-to-b from-primary-500/20 to-transparent rounded-full flex items-center justify-center mb-8 relative">
                                    <div className="absolute inset-4 border border-primary-500/30 rounded-full animate-pulse" />
                                    <div className="absolute inset-12 border border-secondary-400/30 rounded-full" />
                                    <img src="https://picsum.photos/300/300?random=10" alt="Illustration" className="w-48 h-48 rounded-full object-cover shadow-2xl shadow-primary-500/20 z-10" />
                                </div>
                                <h2 className="text-3xl font-display font-bold text-white mb-4">
                                    Subliminals under<br/>
                                    <span className="text-primary-400">your music</span>
                                </h2>
                                <p className="text-slate-400 leading-relaxed max-w-xs">
                                    Listen to your favorite songs while absorbing powerful affirmations in the background. Manifest while you vibe.
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
                                <h2 className="text-2xl font-display font-bold text-white mb-6 text-center">
                                    Choose your <span className="text-secondary-400">focus</span>
                                </h2>
                                <div className="grid grid-cols-2 gap-4 w-full">
                                    {[
                                        { name: 'Manifest', icon: Sparkles, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
                                        { name: 'Confidence', icon: Zap, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
                                        { name: 'Sleep', icon: Moon, color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20' },
                                        { name: 'Self-Love', icon: Heart, color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20' },
                                        { name: 'Success', icon: Target, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
                                        { name: 'Protection', icon: Shield, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
                                    ].map((cat) => (
                                        <button key={cat.name} className={`flex flex-col items-center justify-center p-4 rounded-2xl border ${cat.bg} hover:brightness-110 transition-all active:scale-95`}>
                                            <cat.icon className={`w-8 h-8 mb-2 ${cat.color}`} />
                                            <span className="text-sm font-medium text-slate-200">{cat.name}</span>
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
                                <div className="w-24 h-24 bg-dark-800 rounded-3xl flex items-center justify-center mb-6 border border-dark-700">
                                    <Bell size={40} className="text-primary-400" />
                                </div>
                                <h2 className="text-2xl font-display font-bold text-white mb-4">
                                    Stay consistent
                                </h2>
                                <p className="text-slate-400 leading-relaxed mb-8 max-w-xs">
                                    Subliminals work best with repetition. Allow notifications to get daily reminders and track your streaks.
                                </p>
                                <div className="w-full bg-dark-800 p-4 rounded-xl border border-dark-700 flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                                            <Bell size={20} className="text-primary-400" />
                                        </div>
                                        <div className="text-left">
                                            <div className="text-sm font-bold text-white">Notifications</div>
                                            <div className="text-xs text-slate-400">Daily reminders</div>
                                        </div>
                                    </div>
                                    <div className="w-12 h-6 bg-primary-500 rounded-full relative">
                                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="mt-8 z-20">
                    <Button onClick={nextStep} size="lg" className="w-full flex items-center justify-center gap-2 group">
                        {step === 2 ? "Get Started" : "Continue"}
                        {step !== 2 && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                    </Button>
                    <div className="flex justify-center gap-2 mt-6">
                        {[0, 1, 2].map((i) => (
                            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-white' : 'w-1.5 bg-dark-700'}`} />
                        ))}
                    </div>
                </div>
            </div>
        </SafeArea>
    );
};
