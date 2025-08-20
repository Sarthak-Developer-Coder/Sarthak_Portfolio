import { useEffect, useRef } from 'react';

const CircuitBackground = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const updateSize = () => {
      svg.setAttribute('width', window.innerWidth.toString());
      svg.setAttribute('height', window.innerHeight.toString());
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Generate random circuit paths
  const generatePaths = () => {
    const paths = [];
    const width = window.innerWidth || 1920;
    const height = window.innerHeight || 1080;
    
    for (let i = 0; i < 15; i++) {
      const startX = Math.random() * width;
      const startY = Math.random() * height;
      const endX = Math.random() * width;
      const endY = Math.random() * height;
      
      // Create L-shaped path (circuit-like)
      const midX = startX + (endX - startX) * (Math.random() * 0.3 + 0.3);
      const midY = startY;
      
      const pathData = `M ${startX} ${startY} L ${midX} ${midY} L ${midX} ${endY} L ${endX} ${endY}`;
      
      paths.push({
        d: pathData,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
      });
    }
    
    return paths;
  };

  const paths = generatePaths();

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-20"
      style={{ mixBlendMode: 'multiply' }}
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(180, 100%, 50%)" stopOpacity="0.8"/>
          <stop offset="50%" stopColor="hsl(210, 100%, 60%)" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="hsl(140, 100%, 50%)" stopOpacity="0.4"/>
        </linearGradient>
      </defs>
      
      {paths.map((path, index) => (
        <g key={index}>
          {/* Main path */}
          <path
            d={path.d}
            stroke="url(#circuitGradient)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="10,5"
            filter="url(#glow)"
            style={{
              animationDelay: `${path.delay}s`,
              animationDuration: `${path.duration}s`,
            }}
            className="animate-circuit-flow"
          />
          
          {/* Connection nodes */}
          <circle
            cx={path.d.split(' ')[1]}
            cy={path.d.split(' ')[2]}
            r="2"
            fill="hsl(180, 100%, 50%)"
            className="animate-pulse"
            style={{
              animationDelay: `${path.delay + 1}s`,
            }}
          />
          
          {/* Data flow particles */}
          <circle
            cx={path.d.split(' ')[1]}
            cy={path.d.split(' ')[2]}
            r="1"
            fill="hsl(140, 100%, 50%)"
            className="animate-data-stream"
            style={{
              animationDelay: `${path.delay + 0.5}s`,
            }}
          />
        </g>
      ))}
      
      {/* Grid overlay */}
      <defs>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="hsl(180, 100%, 50%)" strokeWidth="0.5" opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
};

export default CircuitBackground;