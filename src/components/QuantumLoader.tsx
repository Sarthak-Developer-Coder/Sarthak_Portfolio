interface QuantumLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const QuantumLoader = ({ size = 'md', className = '' }: QuantumLoaderProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Outer rotating ring */}
      <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-rotate"></div>
      
      {/* Middle ring */}
      <div className="absolute inset-2 border-2 border-secondary/50 rounded-full animate-[rotate_3s_linear_infinite_reverse]"></div>
      
      {/* Inner core */}
      <div className="absolute inset-4 bg-accent rounded-full animate-quantum-spin"></div>
      
      {/* Quantum particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-particle-float"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: '0 0',
              transform: `rotate(${i * 60}deg) translateX(20px)`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Central glow */}
      <div className="absolute inset-6 bg-primary/20 rounded-full blur-sm animate-pulse-glow"></div>
    </div>
  );
};

export default QuantumLoader;