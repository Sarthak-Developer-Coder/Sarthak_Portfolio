import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Terminal, Code2, Zap, Brain, Cpu, Download } from 'lucide-react';
import heroImage from '@/assets/hero-tech-portrait.jpg';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Enhanced matrix rain effect with multiple character sets
    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];
    const colors = ['#00ffff', '#00ff00', '#ff00ff', '#ffff00', '#ff6600'];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(13, 16, 23, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const colorIndex = Math.floor(i / 5) % colors.length;
        ctx.fillStyle = colors[colorIndex];
        ctx.font = `${fontSize}px 'Fira Code', monospace`;
        
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Add glow effect
        ctx.shadowColor = colors[colorIndex];
        ctx.shadowBlur = 10;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        ctx.shadowBlur = 0;

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Create ripple effect at mouse position
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.fill();
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(interval);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Layers */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-20 pointer-events-none"
      />
      
      {/* Dynamic Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 animate-pulse"></div>
      
      {/* Quantum Floating Elements */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-primary rounded-full animate-float animate-morphing-border opacity-80" />
      <div className="absolute top-40 right-20 w-8 h-8 bg-accent rounded-full animate-float animate-quantum-spin opacity-70" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-20 w-4 h-4 bg-secondary rounded-full animate-float animate-neural-pulse opacity-90" style={{ animationDelay: '2s' }} />
      <div className="absolute top-60 left-1/3 w-5 h-5 bg-neon-green rounded-full animate-float animate-robot-hover opacity-60" style={{ animationDelay: '3s' }} />

      <div ref={containerRef} className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Enhanced Main Content */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full border border-primary/40 bg-card/30 backdrop-blur-lg shadow-glow-lg">
            <Terminal className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-code text-primary animate-shimmer">system.boot() → AI_MODE_ACTIVATED</span>
            <Cpu className="w-4 h-4 text-accent animate-robot-hover" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-cyber font-bold mb-8">
            <span className="text-neon-cyan glitch animate-hologram" data-text="SARTHAK">SARTHAK</span>
            <br />
            <span className="text-primary typing-animation border-r-2 border-primary animate-glow">NAG</span>
          </h1>

          <div className="text-xl md:text-3xl text-card-foreground/90 mb-8 font-code">
            <div className="mb-2 animate-[hologram_2s_ease-in-out_infinite]">
              <span className="text-accent animate-pulse">&gt;</span> 
              <span className="ml-2 animate-shimmer">Full-Stack Developer</span>
              <Brain className="inline-block w-6 h-6 ml-2 text-neon-blue animate-neural-pulse" />
            </div>
            <div className="mb-2 animate-[hologram_2s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }}>
              <span className="text-secondary animate-pulse">&gt;</span> 
              <span className="ml-2 animate-shimmer">AI Engineer</span>
              <Cpu className="inline-block w-6 h-6 ml-2 text-neon-green animate-quantum-spin" />
            </div>
            <div className="animate-[hologram_2s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}>
              <span className="text-primary animate-pulse">&gt;</span> 
              <span className="ml-2 animate-shimmer">Open Source Contributor</span>
              <Code2 className="inline-block w-6 h-6 ml-2 text-neon-purple animate-robot-hover" />
            </div>
          </div>

          <p className="text-lg md:text-xl text-card-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed animate-[hologram_3s_ease-in-out_infinite] backdrop-blur-sm">
            🚀 Building the future with cutting-edge technology. Specializing in React, Node.js, AI/ML, 
            and cloud-native applications. Google Summer of Code contributor with 50+ merged PRs.
            <span className="block mt-2 text-accent font-code text-sm animate-shimmer">
              [ STATUS: READY_TO_INNOVATE ]
            </span>
          </p>
        </div>

        {/* Enhanced Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="cyber-button px-10 py-5 text-lg hover:scale-110 transition-all duration-300 hover:shadow-glow-lg animate-neural-pulse"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Code2 className="w-6 h-6 mr-3 animate-robot-hover" />
            EXPLORE PROJECTS
            <div className="absolute inset-0 bg-primary/20 rounded blur animate-pulse-glow"></div>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="px-10 py-5 text-lg border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground hover:scale-110 transition-all duration-300 hover:shadow-glow animate-hologram"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Zap className="w-6 h-6 mr-3 animate-quantum-spin" />
            CONNECT NOW
            <div className="absolute inset-0 bg-secondary/10 rounded blur animate-pulse"></div>
          </Button>

          <Button asChild size="lg" className="px-10 py-5 text-lg hover:scale-110 transition-all duration-300 hover:shadow-glow">
            <a
              href="https://drive.google.com/file/d/173JXXSyB3kcxtwQLfAlsXEpybuVxVuqv/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
            >
              <Download className="w-6 h-6 mr-3" />
              DOWNLOAD RESUME
            </a>
          </Button>
        </div>

        {/* Enhanced Stats with Quantum Effects */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="glass-card p-8 rounded-xl hover:bg-card-hover transition-all duration-300 group animate-morphing-border">
            <div className="text-4xl font-cyber font-bold text-primary mb-3 animate-neural-pulse group-hover:animate-quantum-spin">50+</div>
            <div className="text-sm text-card-foreground/70 font-code animate-shimmer">Open Source PRs</div>
            <div className="absolute inset-0 bg-primary/5 rounded-xl blur-xl group-hover:bg-primary/10 transition-all duration-300"></div>
          </div>
          <div className="glass-card p-8 rounded-xl hover:bg-card-hover transition-all duration-300 group animate-morphing-border" style={{ animationDelay: '1s' }}>
            <div className="text-4xl font-cyber font-bold text-accent mb-3 animate-neural-pulse group-hover:animate-robot-hover">15+</div>
            <div className="text-sm text-card-foreground/70 font-code animate-shimmer">Projects Built</div>
            <div className="absolute inset-0 bg-accent/5 rounded-xl blur-xl group-hover:bg-accent/10 transition-all duration-300"></div>
          </div>
          <div className="glass-card p-8 rounded-xl hover:bg-card-hover transition-all duration-300 group animate-morphing-border" style={{ animationDelay: '2s' }}>
            <div className="text-4xl font-cyber font-bold text-secondary mb-3 animate-neural-pulse group-hover:animate-hologram">3+</div>
            <div className="text-sm text-card-foreground/70 font-code animate-shimmer">Years Experience</div>
            <div className="absolute inset-0 bg-secondary/5 rounded-xl blur-xl group-hover:bg-secondary/10 transition-all duration-300"></div>
          </div>
          <div className="glass-card p-8 rounded-xl hover:bg-card-hover transition-all duration-300 group animate-morphing-border" style={{ animationDelay: '3s' }}>
            <div className="text-4xl font-cyber font-bold text-neon-green mb-3 animate-neural-pulse group-hover:animate-data-stream">10+</div>
            <div className="text-sm text-card-foreground/70 font-code animate-shimmer">Certifications</div>
            <div className="absolute inset-0 bg-neon-green/5 rounded-xl blur-xl group-hover:bg-neon-green/10 transition-all duration-300"></div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="group relative animate-bounce hover:text-primary transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-10 h-10 mx-auto text-card-foreground/70 group-hover:text-primary animate-neural-pulse" />
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/40 transition-all duration-300"></div>
        </button>
      </div>

      {/* Enhanced Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-morphing-border" style={{ animationDelay: '2s' }} />
      
      {/* Data Stream Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-4 bg-primary/60 animate-data-stream"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;