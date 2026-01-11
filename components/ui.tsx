import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

// --- Types ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
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
  const baseStyles = "relative font-semibold rounded-xl flex items-center justify-center transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30 border border-transparent hover:brightness-110",
    secondary: "bg-dark-800 border border-dark-700 text-slate-200 hover:bg-dark-700",
    ghost: "bg-transparent text-slate-400 hover:text-white hover:bg-white/5",
    icon: "bg-dark-800/50 backdrop-blur-md text-white border border-white/10 hover:bg-dark-700/50"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-3 text-sm",
    lg: "px-8 py-4 text-base w-full",
    icon: "w-10 h-10 p-2 rounded-full"
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
    className={`bg-dark-800 border border-dark-700/50 rounded-2xl overflow-hidden ${className}`}
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
      <div className="absolute left-4 text-slate-400 pointer-events-none">
        <Icon size={18} />
      </div>
    )}
    <input 
      className={`w-full bg-dark-800 border border-dark-700 text-slate-100 rounded-xl py-3.5 ${Icon ? 'pl-11' : 'pl-4'} pr-4 placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors`}
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
  <div className={`flex flex-col flex-1 w-full max-w-md mx-auto h-full bg-dark-950 relative overflow-hidden shadow-2xl ${className}`}>
    {/* Status Bar Spacer */}
    {top && <div className="h-[env(safe-area-inset-top,20px)] w-full shrink-0 bg-transparent z-50" />}
    
    <div className="flex-1 flex flex-col relative overflow-hidden">
        {children}
    </div>

    {/* Home Indicator Spacer */}
    {bottom && <div className="h-[env(safe-area-inset-bottom,20px)] w-full shrink-0 bg-transparent z-50" />}
  </div>
);

interface BadgeProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary' }) => {
    const styles = {
        primary: "bg-primary-500/20 text-primary-400 border-primary-500/30",
        secondary: "bg-slate-800 text-slate-400 border-slate-700",
        accent: "bg-secondary-500/20 text-secondary-400 border-secondary-500/30"
    };
    
    return (
        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${styles[variant]}`}>
            {children}
        </span>
    );
};