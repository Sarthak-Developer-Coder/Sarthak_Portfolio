import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Code, Zap, Filter, Star } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "ATS Resume Builder",
      subtitle: "Smart Resume Screening Tool",
      description: "AI-powered resume builder with ATS optimization, keyword matching, and intelligent suggestions to enhance job application success rates.",
      image: "🎯",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI API", "TailwindCSS"],
      category: "ai",
      features: [
        "ATS-friendly resume templates with scoring system",
        "AI-based keyword matching and optimization suggestions", 
        "Real-time resume analysis and feedback",
        "Export in PDF and Docx formats",
        "Modern, intuitive user interface"
      ],
      github: "https://github.com/Sarthak-Developer-Coder/ATS_RESUME_BUILDER",
      demo: "https://ats-resume-builder-nine.vercel.app/",
      status: "Active Development",
      year: "2025"
    },
    {
      title: "Allify",
      subtitle: "All-in-One Social + Chat App",
      description: "Comprehensive social platform combining real-time messaging, group chats, media sharing, and social networking features.",
      image: "💬",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSockets", "Socket.io"],
      category: "fullstack",
      features: [
        "Real-time messaging with WebSocket integration",
        "Group chat functionality with admin controls",
        "Media sharing and file uploads",
        "User profiles and social features",
        "Responsive design with modern UI"
      ],
      github: "https://github.com/Sarthak-Developer-Coder/Allify",
      demo: "https://allify.vercel.app/",
      status: "Active Development",
      year: "2025"
    },
    {
      title: "LinkiPax",
      subtitle: "Professional Networking Platform",
      description: "LinkedIn-style platform featuring skill-based matchmaking, AI-powered career guidance, and professional networking tools.",
      image: "🔗",
      technologies: ["React.js", "Node.js", "MongoDB", "GraphQL", "WebSockets", "AI/ML"],
      category: "ai",
      features: [
        "AI-powered skill-based professional matchmaking",
        "Real-time messaging with <300ms latency",
        "GraphQL API for efficient data queries",
        "Career guidance and recommendations",
        "Professional profile management"
      ],
      github: "https://github.com/LinkiPax/Linlifys",
      demo: "https://linlifys.vercel.app/",
      status: "Beta Release",
      year: "2025"
    },
    {
      title: "E-Commerce Platform",
      subtitle: "Shopify Store Development",
      description: "Custom Shopify stores with integrated payment gateways, optimized for high conversion rates and seamless user experience.",
      image: "🛒",
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Payment APIs", "SEO"],
      category: "ecommerce",
      features: [
        "15+ custom Shopify store developments",
        "Payment gateway integrations",
        "SEO optimization for 40% traffic increase",
        "High-conversion product page designs",
        "Mobile-responsive themes"
      ],
      github: "#",
      demo: "#",
      status: "Multiple Deployments",
      year: "2025"
    },
    {
      title: "Cloud Infrastructure",
      subtitle: "DevOps & Cloud Solutions",
      description: "Scalable cloud-native applications deployed on AWS, GCP, and Azure with Docker, Kubernetes, and CI/CD pipelines.",
      image: "☁️",
      technologies: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      category: "cloud",
      features: [
        "Multi-cloud deployment strategies",
        "Container orchestration with Kubernetes",
        "Automated CI/CD pipeline implementations",
        "Infrastructure as Code with Terraform",
        "Performance monitoring and scaling"
      ],
      github: "#",
      demo: "#",
      status: "Production",
      year: "2024-2025"
    },
    {
      title: "AI/ML Research Projects",
      subtitle: "Machine Learning Solutions",
      description: "Various AI/ML projects including computer vision, NLP, and predictive analytics using TensorFlow, PyTorch, and modern ML frameworks.",
      image: "🤖",
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Jupyter"],
      category: "ai",
      features: [
        "Computer vision applications",
        "Natural language processing models",
        "Predictive analytics solutions",
        "Deep learning implementations",
        "Research paper implementations"
      ],
      github: "#",
      demo: "#",
      status: "Research",
      year: "2024-2025"
    }
  ];

  const categories = [
    { id: 'all', label: 'ALL PROJECTS', icon: Code },
    { id: 'ai', label: 'AI/ML', icon: Zap },
    { id: 'fullstack', label: 'FULL-STACK', icon: Code },
    { id: 'ecommerce', label: 'E-COMMERCE', icon: Star },
    { id: 'cloud', label: 'CLOUD', icon: Filter }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-accent/30 bg-card/20 backdrop-blur-sm">
            <Code className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm font-code text-accent">projects.showcase()</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-cyber font-bold mb-6">
            <span className="text-accent">FEATURED</span>
            <span className="text-primary ml-4">PROJECTS</span>
          </h2>
          
          <div className="w-24 h-1 bg-cyber-gradient mx-auto mb-8" />
          <p className="text-lg text-card-foreground/60 max-w-2xl mx-auto">
            Innovative solutions spanning AI/ML, full-stack development, and cloud computing
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              className={`font-code text-sm transition-all duration-300 ${
                filter === category.id 
                  ? "bg-primary text-primary-foreground shadow-glow" 
                  : "border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
              onClick={() => setFilter(category.id)}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group">
              <CardContent className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl mb-2">{project.image}</div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="border-accent/30 text-accent font-code text-xs">
                      {project.year}
                    </Badge>
                    <Badge variant="secondary" className="bg-background-secondary text-primary font-code text-xs">
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <h3 className="text-xl font-cyber font-bold text-primary mb-2 group-hover:text-primary-glow transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary font-semibold mb-3">{project.subtitle}</p>
                <p className="text-card-foreground/70 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-xs font-cyber font-semibold text-primary mb-2">KEY FEATURES:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="text-xs text-card-foreground/60 flex items-start gap-2">
                        <span className="text-accent text-xs mt-0.5">▶</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-xs font-cyber font-semibold text-primary mb-2">TECH STACK:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs font-code bg-background-secondary">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs font-code bg-background-secondary">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-code text-xs"
                    onClick={() => window.open(project.github, '_blank')}
                    disabled={project.github === '#'}
                  >
                    <Github className="w-3 h-3 mr-1" />
                    CODE
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-secondary/30 text-secondary hover:bg-secondary hover:text-secondary-foreground font-code text-xs"
                    onClick={() => window.open(project.demo, '_blank')}
                    disabled={project.demo === '#'}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    DEMO
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub Stats */}
        <div className="text-center">
          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-cyber font-bold text-primary mb-6">
              <span className="text-accent">&gt;</span> OPEN SOURCE CONTRIBUTIONS
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-cyber font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-card-foreground/60 font-code">Merged PRs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-cyber font-bold text-accent mb-2">15+</div>
                <div className="text-sm text-card-foreground/60 font-code">Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-cyber font-bold text-secondary mb-2">100+</div>
                <div className="text-sm text-card-foreground/60 font-code">Commits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-cyber font-bold text-neon-green mb-2">5+</div>
                <div className="text-sm text-card-foreground/60 font-code">Organizations</div>
              </div>
            </div>

            <p className="text-card-foreground/70 mb-6">
              Active contributor to major open-source projects including RuxiLab, GirlScript, and various community initiatives.
            </p>

            <Button 
              size="lg" 
              className="cyber-button px-8 py-4"
              onClick={() => window.open('https://github.com/Sarthak-Developer-Coder', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              VIEW GITHUB PROFILE
            </Button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default Projects;