import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Cloud, Code, Database, Zap, Award, Users, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Engineer",
      description: "Specializing in TensorFlow, PyTorch, and cutting-edge AI solutions",
      color: "text-neon-purple"
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Expert in AWS, GCP, Azure with Docker & Kubernetes",
      color: "text-neon-blue"
    },
    {
      icon: Code,
      title: "Full-Stack Dev",
      description: "React, Node.js, Spring Boot, and modern web technologies",
      color: "text-primary"
    },
    {
      icon: Database,
      title: "Data Engineer",
      description: "MongoDB, PostgreSQL, and big data processing systems",
      color: "text-accent"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Google Summer of Code 2025",
      description: "Selected contributor at RuxiLab with 50+ merged PRs",
    },
    {
      icon: Users,
      title: "GirlScript Mentor",
      description: "Guiding open-source contributors in GSoC 2025",
    },
    {
      icon: Rocket,
      title: "AWS Cloud Club Lead",
      description: "Leading University of Lucknow cloud computing chapter",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-secondary/30 bg-card/20 backdrop-blur-sm">
            <Brain className="w-4 h-4 text-secondary animate-pulse" />
            <span className="text-sm font-code text-secondary">about.initialize()</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-cyber font-bold mb-6">
            <span className="text-secondary">SYSTEM</span>
            <span className="text-primary ml-4">OVERVIEW</span>
          </h2>
          
          <div className="w-24 h-1 bg-cyber-gradient mx-auto mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Bio */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-cyber font-bold text-primary mb-6">
                <span className="text-accent">&gt;</span> WHO AM I?
              </h3>
              
              <div className="space-y-4 text-card-foreground/80 leading-relaxed">
                <p className="font-code">
                  <span className="text-primary">const</span> sarthak = <span className="text-accent">&#123;</span>
                </p>
                <p className="ml-4 font-code">
                  <span className="text-secondary">role:</span> <span className="text-neon-green">"Full-Stack Developer & AI Engineer"</span>,
                </p>
                <p className="ml-4 font-code">
                  <span className="text-secondary">education:</span> <span className="text-neon-green">"B.Tech CSE (AI) - University of Lucknow"</span>,
                </p>
                <p className="ml-4 font-code">
                  <span className="text-secondary">experience:</span> <span className="text-neon-green">"3+ years"</span>,
                </p>
                <p className="ml-4 font-code">
                  <span className="text-secondary">passion:</span> <span className="text-neon-green">"Building innovative tech solutions"</span>
                </p>
                <p className="font-code">
                  <span className="text-accent">&#125;</span>;
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <p>
                  I'm a passionate technologist who loves turning complex problems into elegant solutions. 
                  With expertise spanning full-stack development, AI/ML, and cloud computing, I've contributed 
                  to major open-source projects and mentored dozens of developers.
                </p>
                
                <p>
                  Currently pursuing B.Tech in Computer Science with AI specialization, maintaining an 8.3 CGPA 
                  while actively contributing to the tech community through GSoC, mentoring, and leadership roles.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-lg text-center">
                <div className="text-2xl font-cyber font-bold text-primary">8.3</div>
                <div className="text-sm text-card-foreground/60 font-code">CGPA</div>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <div className="text-2xl font-cyber font-bold text-accent">25K+</div>
                <div className="text-sm text-card-foreground/60 font-code">Monthly Revenue</div>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="glass-card p-6 rounded-xl hover:bg-card-hover transition-colors group">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-background-secondary ${highlight.color}`}>
                    <highlight.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-cyber font-semibold text-primary mb-2 group-hover:text-primary-glow transition-colors">
                      {highlight.title}
                    </h4>
                    <p className="text-card-foreground/70 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-cyber font-bold text-center mb-12">
            <span className="text-accent">MAJOR</span>
            <span className="text-primary ml-4">ACHIEVEMENTS</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="glass-card border-primary/20 hover:border-primary/40 transition-colors group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-background-secondary rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <achievement.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-cyber font-semibold text-primary mb-3">
                    {achievement.title}
                  </h4>
                  <p className="text-card-foreground/70 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Philosophy */}
        <div className="text-center">
          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-cyber font-bold text-primary mb-6">
              <span className="text-accent">&gt;</span> TECH PHILOSOPHY
            </h3>
            <blockquote className="text-xl text-card-foreground/80 italic leading-relaxed">
              "Technology is not just about writing code—it's about solving real-world problems, 
              empowering communities, and building a future where innovation serves humanity."
            </blockquote>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {['Innovation', 'Open Source', 'Mentorship', 'Problem Solving', 'Community'].map((tag) => (
                <Badge key={tag} variant="outline" className="border-primary/30 text-primary font-code">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default About;