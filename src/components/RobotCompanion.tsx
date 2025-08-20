import { useState, useEffect } from 'react';

const RobotCompanion = () => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const messages = [
    'Hello! I\'m ARIA, your AI companion.',
    'Exploring Sarthak\'s portfolio?',
    'Check out those amazing projects!',
    'Need help navigating?',
    'AI + Robotics = Future!',
    'Beep boop! Processing awesome...',
  ];

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 3000);

    const messageInterval = setInterval(() => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setMessage(randomMessage);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }, 8000);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(messageInterval);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      {/* Speech Bubble */}
      {showMessage && (
        <div className="absolute bottom-full right-0 mb-4 px-4 py-2 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-lg text-sm text-card-foreground animate-[hologram_2s_ease-in-out_infinite] max-w-xs">
          <div className="text-primary animate-pulse">{message}</div>
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary/30"></div>
        </div>
      )}

      {/* Robot Body */}
      <div className="relative animate-robot-hover cursor-pointer transform hover:scale-110 transition-transform duration-300">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-glow"></div>
        
        {/* Main Robot SVG */}
        <svg 
          width="80" 
          height="100" 
          viewBox="0 0 80 100" 
          className="relative z-10 drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]"
        >
          {/* Robot Head */}
          <rect 
            x="20" 
            y="10" 
            width="40" 
            height="35" 
            rx="8" 
            fill="hsl(var(--card))" 
            stroke="hsl(var(--primary))" 
            strokeWidth="2"
            className="animate-neural-pulse"
          />
          
          {/* Eyes */}
          <circle 
            cx="30" 
            cy="25" 
            r="4" 
            fill="hsl(var(--neon-cyan))" 
            className={`animate-glow ${isBlinking ? 'animate-robot-eyes' : ''}`}
          />
          <circle 
            cx="50" 
            cy="25" 
            r="4" 
            fill="hsl(var(--neon-cyan))" 
            className={`animate-glow ${isBlinking ? 'animate-robot-eyes' : ''}`}
          />
          
          {/* Mouth/Display */}
          <rect 
            x="25" 
            y="32" 
            width="30" 
            height="8" 
            rx="4" 
            fill="hsl(var(--background))" 
            stroke="hsl(var(--primary))" 
            strokeWidth="1"
          />
          <rect 
            x="27" 
            y="34" 
            width="26" 
            height="4" 
            rx="2" 
            fill="hsl(var(--primary))" 
            className="animate-shimmer"
          />
          
          {/* Antenna */}
          <line 
            x1="40" 
            y1="10" 
            x2="40" 
            y2="5" 
            stroke="hsl(var(--primary))" 
            strokeWidth="2"
          />
          <circle 
            cx="40" 
            cy="3" 
            r="2" 
            fill="hsl(var(--accent))" 
            className="animate-pulse"
          />
          
          {/* Body */}
          <rect 
            x="15" 
            y="45" 
            width="50" 
            height="40" 
            rx="10" 
            fill="hsl(var(--card))" 
            stroke="hsl(var(--primary))" 
            strokeWidth="2"
            className="animate-hologram"
          />
          
          {/* Chest Panel */}
          <rect 
            x="25" 
            y="55" 
            width="30" 
            height="20" 
            rx="5" 
            fill="hsl(var(--background))" 
            stroke="hsl(var(--secondary))" 
            strokeWidth="1"
          />
          
          {/* Circuit Lines */}
          <path 
            d="M 30 60 L 50 60 M 30 65 L 45 65 M 35 70 L 50 70" 
            stroke="hsl(var(--primary))" 
            strokeWidth="1" 
            fill="none"
            strokeDasharray="2,2"
            className="animate-circuit-flow"
          />
          
          {/* Arms */}
          <rect 
            x="10" 
            y="50" 
            width="8" 
            height="25" 
            rx="4" 
            fill="hsl(var(--card))" 
            stroke="hsl(var(--primary))" 
            strokeWidth="2"
          />
          <rect 
            x="62" 
            y="50" 
            width="8" 
            height="25" 
            rx="4" 
            fill="hsl(var(--card))" 
            stroke="hsl(var(--primary))" 
            strokeWidth="2"
          />
          
          {/* Legs */}
          <rect 
            x="25" 
            y="85" 
            width="12" 
            height="15" 
            rx="6" 
            fill="hsl(var(--card))" 
            stroke="hsl(var(--primary))" 
            strokeWidth="2"
          />
          <rect 
            x="43" 
            y="85" 
            width="12" 
            height="15" 
            rx="6" 
            fill="hsl(var(--card))" 
            stroke="hsl(var(--primary))" 
            strokeWidth="2"
          />
          
          {/* Feet */}
          <ellipse 
            cx="31" 
            cy="95" 
            rx="8" 
            ry="4" 
            fill="hsl(var(--background))" 
            stroke="hsl(var(--primary))" 
            strokeWidth="2"
          />
          <ellipse 
            cx="49" 
            cy="95" 
            rx="8" 
            ry="4" 
            fill="hsl(var(--background))" 
            stroke="hsl(var(--primary))" 
            strokeWidth="2"
          />
        </svg>

        {/* Floating Data Particles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-particle-float opacity-60"
              style={{
                left: `${20 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Interactive Pulse Ring */}
      <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"></div>
    </div>
  );
};

export default RobotCompanion;