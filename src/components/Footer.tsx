import { Github, Linkedin, Mail, Terminal, Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Sarthak-Developer-Coder',
      icon: Github,
      color: 'hover:text-primary'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sarthak-nag-b91861291',
      icon: Linkedin,
      color: 'hover:text-secondary'
    },
    {
      name: 'Email',
      href: 'mailto:sarthakthesde@gmail.com',
      icon: Mail,
      color: 'hover:text-accent'
    }
  ];

  const stats = [
    { label: 'Projects Built', value: '15+' },
    { label: 'Open Source PRs', value: '50+' },
    { label: 'Years Experience', value: '3+' },
    { label: 'Technologies', value: '25+' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-4 border-t border-primary/20 bg-background-secondary/50 backdrop-blur-sm">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-8 h-8 text-primary animate-pulse" />
              <div>
                <h3 className="text-2xl font-cyber font-bold text-primary">SARTHAK NAG</h3>
                <p className="text-sm font-code text-secondary">Full-Stack Developer & AI Engineer</p>
              </div>
            </div>
            
            <p className="text-card-foreground/70 mb-6 leading-relaxed max-w-md">
              Passionate about building innovative technology solutions that make a difference. 
              Specializing in full-stack development, AI/ML, and cloud computing.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-3 rounded-lg text-center">
                  <div className="text-lg font-cyber font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-card-foreground/60 font-code">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg bg-background-secondary transition-all duration-300 text-card-foreground/60 ${link.color} hover:scale-110 hover:shadow-glow`}
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-cyber font-bold text-primary mb-6">
              <span className="text-accent">&gt;</span> NAVIGATION
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-card-foreground/70 hover:text-primary transition-colors font-code text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-cyber font-bold text-primary mb-6">
              <span className="text-accent">&gt;</span> CONTACT
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-card-foreground/60 font-code">Email:</span>
                <br />
                <a 
                  href="mailto:sarthakthesde@gmail.com"
                  className="text-card-foreground hover:text-primary transition-colors font-code"
                >
                  sarthakthesde@gmail.com
                </a>
              </div>
              <div>
                <span className="text-card-foreground/60 font-code">Phone:</span>
                <br />
                <a 
                  href="tel:+918840715940"
                  className="text-card-foreground hover:text-primary transition-colors font-code"
                >
                  +91-8840715940
                </a>
              </div>
              <div>
                <span className="text-card-foreground/60 font-code">Location:</span>
                <br />
                <span className="text-card-foreground font-code">Lucknow, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-cyber-gradient mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-card-foreground/60 font-code">
            <span>© {currentYear} Sarthak Nag. Built with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>using</span>
            <Code className="w-4 h-4 text-primary" />
            <span>React,</span>
            <span className="text-accent">TypeScript</span>
            <span>&</span>
            <Coffee className="w-4 h-4 text-secondary" />
          </div>

          <div className="flex items-center gap-6 text-xs text-card-foreground/50 font-code">
            <span>Available for freelance work</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
              <span>Currently open to opportunities</span>
            </div>
          </div>
        </div>

        {/* Tech Quote */}
        <div className="text-center mt-8 pt-8 border-t border-primary/10">
          <div className="glass-card p-4 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm font-code text-card-foreground/60 italic">
              "Code is like humor. When you have to explain it, it's bad." 
              <span className="text-primary ml-2">- Cory House</span>
            </p>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </footer>
  );
};

export default Footer;