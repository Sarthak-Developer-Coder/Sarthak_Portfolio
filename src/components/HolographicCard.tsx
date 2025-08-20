import { ReactNode } from 'react';

interface HolographicCardProps {
  children: ReactNode;
  className?: string;
  delay?: string;
}

const HolographicCard = ({ children, className = '', delay = '0s' }: HolographicCardProps) => {
  return (
    <div 
      className={`relative group ${className}`}
      style={{ animationDelay: delay }}
    >
      {/* Main card */}
      <div className="relative glass-card p-8 rounded-xl backdrop-blur-lg border border-primary/30 hover:border-primary/60 transition-all duration-500 hover:shadow-glow-lg animate-hologram group-hover:animate-neural-pulse">
        {children}
        
        {/* Holographic overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/50 animate-morphing-border"></div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-particle-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HolographicCard;