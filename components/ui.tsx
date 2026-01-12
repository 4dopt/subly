import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

// --- Types ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
}

// --- Components ---

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  isLoading,
  ...props 
}) => {
  const baseStyles = "relative font-bold rounded-full flex items-center justify-center transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100 z-10";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    secondary: "bg-zinc-800 text-white hover:bg-zinc-700",
    ghost: "bg-transparent text-zinc-400 hover:text-white",
    icon: "bg-zinc-800 text-white hover:bg-zinc-700",
    outline: "bg-transparent border border-zinc-700 text-zinc-300 hover:border-white hover:text-white",
    glass: "bg-white/10 backdrop-blur-md text-white border border-white/10 hover:bg-white/20"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base w-full",
    icon: "w-11 h-11 p-2.5 rounded-full"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : children}
    </button>
  );
};

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => (
  <motion.div 
    whileTap={onClick ? { scale: 0.98 } : {}}
    onClick={onClick}
    className={`bg-zinc-900 rounded-[2rem] overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: any;
}

export const Input: React.FC<InputProps> = ({ icon: Icon, className = '', ...props }) => (
  <div className={`relative flex items-center ${className}`}>
    {Icon && (
      <div className="absolute left-5 text-zinc-400 pointer-events-none">
        <Icon size={20} />
      </div>
    )}
    <input 
      className={`w-full bg-zinc-900 border border-zinc-800 text-white rounded-2xl py-4 ${Icon ? 'pl-12' : 'pl-5'} pr-5 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-all duration-300`}
      {...props}
    />
  </div>
);

interface SafeAreaProps {
  children?: React.ReactNode;
  className?: string;
  top?: boolean;
  bottom?: boolean;
}

export const SafeArea: React.FC<SafeAreaProps> = ({ children, className = '', top = true, bottom = true }) => (
  <div className={`flex flex-col flex-1 w-full max-w-md mx-auto h-full relative overflow-hidden shadow-2xl ${className ? className : 'bg-black text-white'}`}>
    {/* Status Bar Spacer */}
    {top && <div className="h-[env(safe-area-inset-top,20px)] w-full shrink-0 bg-transparent z-50 pointer-events-none" />}
    
    <div className="flex-1 flex flex-col relative overflow-hidden">
        {children}
    </div>

    {/* Home Indicator Spacer */}
    {bottom && <div className="h-[env(safe-area-inset-bottom,20px)] w-full shrink-0 bg-transparent z-50 pointer-events-none" />}
  </div>
);

interface BadgeProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'rose' | 'dark';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary' }) => {
    const styles = {
        primary: "bg-white text-black",
        secondary: "bg-zinc-800 text-zinc-400",
        accent: "bg-blue-500 text-white",
        rose: "bg-rose-500 text-white",
        dark: "bg-black/50 text-white border border-white/20"
    };
    
    return (
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${styles[variant]}`}>
            {children}
        </span>
    );
};