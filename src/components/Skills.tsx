import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, Database, Cloud, Brain, Wrench, Monitor, 
  Server, Smartphone, Palette, Shield, GitBranch, Cpu
} from 'lucide-react';

const Skills = () => {
  const [animatedProgress, setAnimatedProgress] = useState<{[key: string]: number}>({});

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "text-primary",
      skills: [
        { name: "JavaScript/TypeScript", level: 95, color: "bg-primary" },
        { name: "Python", level: 90, color: "bg-accent" },
        { name: "Java", level: 85, color: "bg-secondary" },
        { name: "C/C++", level: 80, color: "bg-neon-purple" }
      ]
    },
    {
      title: "Frontend Development",
      icon: Monitor,
      color: "text-secondary",
      skills: [
        { name: "React.js/Next.js", level: 95, color: "bg-primary" },
        { name: "Vue.js/Angular", level: 85, color: "bg-secondary" },
        { name: "HTML5/CSS3", level: 90, color: "bg-accent" },
        { name: "Tailwind CSS", level: 92, color: "bg-neon-cyan" }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "text-accent",
      skills: [
        { name: "Node.js/Express.js", level: 92, color: "bg-primary" },
        { name: "Spring Boot", level: 88, color: "bg-accent" },
        { name: "Django/Flask", level: 82, color: "bg-secondary" },
        { name: "GraphQL/REST APIs", level: 90, color: "bg-neon-green" }
      ]
    },
    {
      title: "Database Systems",
      icon: Database,
      color: "text-neon-green",
      skills: [
        { name: "MongoDB", level: 90, color: "bg-primary" },
        { name: "PostgreSQL/MySQL", level: 88, color: "bg-accent" },
        { name: "Redis", level: 85, color: "bg-secondary" },
        { name: "Firebase", level: 87, color: "bg-neon-purple" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "text-neon-blue",
      skills: [
        { name: "AWS/GCP/Azure", level: 88, color: "bg-primary" },
        { name: "Docker/Kubernetes", level: 85, color: "bg-secondary" },
        { name: "CI/CD Pipelines", level: 82, color: "bg-accent" },
        { name: "Terraform", level: 78, color: "bg-neon-cyan" }
      ]
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      color: "text-neon-purple",
      skills: [
        { name: "TensorFlow/PyTorch", level: 85, color: "bg-primary" },
        { name: "Scikit-learn", level: 88, color: "bg-accent" },
        { name: "OpenCV", level: 80, color: "bg-secondary" },
        { name: "NLP/Computer Vision", level: 82, color: "bg-neon-green" }
      ]
    }
  ];

  const tools = [
    { name: "Git/GitHub", icon: GitBranch },
    { name: "VS Code", icon: Code2 },
    { name: "Postman", icon: Server },
    { name: "Figma", icon: Palette },
    { name: "Jira", icon: Wrench },
    { name: "Linux", icon: Cpu }
  ];

  const certifications = [
    {
      title: "AICTE + Shell: AI & Data Analytics",
      issuer: "Edunet Foundation",
      year: "2025",
      type: "AI/ML"
    },
    {
      title: "Full Stack Web Development",
      issuer: "CollegeTips",
      year: "2025",
      type: "Development"
    },
    {
      title: "Web Development Specialist",
      issuer: "InternPe",
      year: "2025",
      type: "Frontend"
    },
    {
      title: "Microsoft & AICTE Internship",
      issuer: "Edunet Foundation",
      year: "2025",
      type: "Cloud"
    }
  ];

  // Animate progress bars on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const progressValues: {[key: string]: number} = {};
      skillCategories.forEach(category => {
        category.skills.forEach(skill => {
          progressValues[skill.name] = skill.level;
        });
      });
      setAnimatedProgress(progressValues);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-secondary/30 bg-card/20 backdrop-blur-sm">
            <Cpu className="w-4 h-4 text-secondary animate-pulse" />
            <span className="text-sm font-code text-secondary">skills.enumerate()</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-cyber font-bold mb-6">
            <span className="text-secondary">TECHNICAL</span>
            <span className="text-primary ml-4">ARSENAL</span>
          </h2>
          
          <div className="w-24 h-1 bg-cyber-gradient mx-auto mb-8" />
          <p className="text-lg text-card-foreground/60 max-w-2xl mx-auto">
            Comprehensive expertise across modern technologies and frameworks
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-background-secondary ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-cyber font-bold text-primary group-hover:text-primary-glow transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-code text-card-foreground/80">{skill.name}</span>
                        <span className="text-xs font-cyber font-bold text-primary">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={animatedProgress[skill.name] || 0} 
                        className="h-2 bg-background-tertiary"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="mb-16">
          <h3 className="text-3xl font-cyber font-bold text-center mb-12">
            <span className="text-accent">TOOLS &</span>
            <span className="text-primary ml-4">PLATFORMS</span>
          </h3>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="glass-card p-6 rounded-xl text-center hover:bg-card-hover transition-colors group">
                <tool.icon className="w-8 h-8 mx-auto text-primary mb-3 group-hover:text-primary-glow transition-colors" />
                <span className="text-sm font-code text-card-foreground/70">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-3xl font-cyber font-bold text-center mb-12">
            <span className="text-primary">CERTIFICATIONS &</span>
            <span className="text-accent ml-4">ACHIEVEMENTS</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="glass-card border-accent/20 hover:border-accent/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="outline" className="border-accent/30 text-accent font-code text-xs">
                      {cert.type}
                    </Badge>
                    <span className="text-sm text-card-foreground/60 font-code">{cert.year}</span>
                  </div>
                  <h4 className="text-lg font-cyber font-bold text-primary mb-2">{cert.title}</h4>
                  <p className="text-secondary font-semibold">{cert.issuer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="text-center">
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-cyber font-bold text-primary mb-6">
              <span className="text-accent">&gt;</span> PROFICIENCY OVERVIEW
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-cyber font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-card-foreground/60 font-code">Programming Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-cyber font-bold text-accent mb-2">25+</div>
                <div className="text-sm text-card-foreground/60 font-code">Frameworks & Libraries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-cyber font-bold text-secondary mb-2">15+</div>
                <div className="text-sm text-card-foreground/60 font-code">Cloud Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-cyber font-bold text-neon-green mb-2">8+</div>
                <div className="text-sm text-card-foreground/60 font-code">Database Systems</div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="text-card-foreground/70 mb-6 leading-relaxed">
                Continuously expanding skillset through hands-on projects, open-source contributions, 
                and staying current with emerging technologies in web development, AI/ML, and cloud computing.
              </p>
              
              <div className="font-code text-sm text-card-foreground/60 border border-primary/20 rounded-lg p-4 bg-background-secondary/20">
                <span className="text-accent">$</span> while(learning) &#123; skills++; impact++; &#125;
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-40 left-20 w-56 h-56 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Skills;