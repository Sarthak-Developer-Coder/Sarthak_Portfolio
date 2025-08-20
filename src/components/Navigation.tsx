import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Terminal, Github, Linkedin, Mail, Download } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-primary/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Terminal className="w-6 h-6 text-primary animate-pulse" />
              <span className="font-cyber text-xl font-bold text-primary">SARTHAK.NAG</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-code text-sm transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-card-foreground/70'
                  }`}
                >
                  <span className="text-accent">&gt;</span> {item.label}
                </button>
              ))}
              {/* Download Resume (Desktop) */}
              <Button asChild size="sm" className="shadow-glow hover:scale-105">
                <a
                  href="https://drive.google.com/file/d/173JXXSyB3kcxtwQLfAlsXEpybuVxVuqv/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Resume"
                >
                  <Download className="w-4 h-4" />
                  <span className="font-code">Download Resume</span>
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://github.com/Sarthak-Developer-Coder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-card-foreground/60 hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sarthak-nag-b91861291"
                target="_blank"
                rel="noopener noreferrer"
                className="text-card-foreground/60 hover:text-secondary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:sarthakthesde@gmail.com"
                className="text-card-foreground/60 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

            {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background-secondary/95 backdrop-blur-md border-b border-primary/20">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left font-code text-sm py-2 transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-card-foreground/70'
                  }`}
                >
                  <span className="text-accent">&gt;</span> {item.label}
                </button>
              ))}
                  {/* Download Resume (Mobile) */}
                  <a
                    href="https://drive.google.com/file/d/173JXXSyB3kcxtwQLfAlsXEpybuVxVuqv/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 w-full justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-glow hover:bg-primary/90 transition-colors"
                    aria-label="Download Resume"
                  >
                    <Download className="w-4 h-4" />
                    <span className="font-code">Download Resume</span>
                  </a>
              
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 pt-4 border-t border-primary/20">
                <a
                  href="https://github.com/Sarthak-Developer-Coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-card-foreground/60 hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sarthak-nag-b91861291"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-card-foreground/60 hover:text-secondary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:sarthakthesde@gmail.com"
                  className="text-card-foreground/60 hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-background-secondary z-50">
        <div 
          className="h-full bg-cyber-gradient transition-all duration-300"
          style={{
            width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
          }}
        />
      </div>
    </>
  );
};

export default Navigation;