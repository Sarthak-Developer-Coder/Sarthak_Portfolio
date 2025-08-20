import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, MapPin, Award, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "GirlScript Summer of Code (GSSoC '25)",
      role: "Mentor",
      type: "Open Source",
      duration: "Mar 2025 - Present",
      location: "Remote",
      logo: "🎯",
      description: "Selected as an official mentor to guide contributors in open-source projects during GSSoC 2025",
      achievements: [
        "Mentoring 50+ contributors across multiple projects",
        "Reviewing PRs and ensuring code quality standards",
        "Supporting project onboarding and community collaboration",
        "Participating in mentor calls and driving project success"
      ],
      skills: ["Open Source", "Mentoring", "Code Review", "Community Building"],
      certificate: "https://drive.google.com/file/d/1xbmmYtRFtJvgUgHbK2J7MVzTwo0ylqUH/view?usp=sharing",
      color: "border-accent/40 hover:border-accent"
    },
    {
      company: "Digital Heroes",
      role: "Web Development Intern",
      type: "Internship",
      duration: "May 2025 - Present",
      location: "Remote",
      logo: "🚀",
      description: "Developing high-performance e-commerce solutions and content creation",
      achievements: [
        "Developed 15+ Shopify stores with custom themes",
        "Integrated payment gateways generating ₹25K+ monthly revenue",
        "Created YouTube content with 50K+ views",
        "Enhanced SEO/SEM increasing traffic by 40% using Google Analytics",
        "Designed 20+ high-conversion product pages",
        "Earned stipend hike to ₹6,000/month"
      ],
      skills: ["Shopify", "E-commerce", "SEO/SEM", "YouTube", "Google Analytics"],
      certificate: "https://drive.google.com/file/d/1gM3V9QlPRglByOfcJzis3HM7fdBbEkWi/view?usp=sharing",
      color: "border-primary/40 hover:border-primary"
    },
    {
      company: "Bluestock Fintech",
      role: "SDE Intern",
      type: "Software Engineering",
      duration: "May 2025 - June 2025",
      location: "Remote",
      logo: "💼",
      description: "Engineering scalable fintech APIs and security systems",
      achievements: [
        "Engineered Spring Boot REST APIs handling 1M+ monthly requests",
        "Optimized database performance by 35%",
        "Implemented JWT authentication for secure API access",
        "Reviewed 10+ PRs weekly with fintech-grade security practices",
        "Built financial data processing systems"
      ],
      skills: ["Spring Boot", "REST APIs", "JWT", "Database Optimization", "Fintech"],
      certificate: "https://drive.google.com/file/d/1F1W2kEqR0COZopq0zOnMsMrlH0UHN5zH/view?usp=sharing",
      color: "border-secondary/40 hover:border-secondary"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/30 bg-card/20 backdrop-blur-sm">
            <Building className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-code text-primary">experience.load()</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-cyber font-bold mb-6">
            <span className="text-primary">WORK</span>
            <span className="text-accent ml-4">EXPERIENCE</span>
          </h2>
          
          <div className="w-24 h-1 bg-cyber-gradient mx-auto mb-8" />
          <p className="text-lg text-card-foreground/60 max-w-2xl mx-auto">
            Building impactful solutions across fintech, e-commerce, and open-source communities
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-cyber-gradient" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 animate-pulse-glow" />

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className={`glass-card ${exp.color} transition-all duration-300 hover:shadow-glow group`}>
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="text-3xl">{exp.logo}</div>
                          <div>
                            <h3 className="text-xl font-cyber font-bold text-primary group-hover:text-primary-glow transition-colors">
                              {exp.role}
                            </h3>
                            <p className="text-lg text-secondary font-semibold">{exp.company}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="border-accent/30 text-accent font-code text-xs">
                          {exp.type}
                        </Badge>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-card-foreground/60">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-card-foreground/80 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-cyber font-semibold text-primary mb-2">KEY ACHIEVEMENTS:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-card-foreground/70 flex items-start gap-2">
                              <span className="text-accent text-xs mt-1">▶</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div className="mb-4">
                        <h4 className="text-sm font-cyber font-semibold text-primary mb-2">TECH STACK:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs font-code bg-background-secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Certificate Link */}
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-code"
                        onClick={() => window.open(exp.certificate, '_blank')}
                      >
                        <Award className="w-4 h-4 mr-2" />
                        VIEW CERTIFICATE
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Date Badge */}
                <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="glass-card p-4 rounded-lg text-center max-w-xs mx-auto">
                    <div className="text-sm font-code text-card-foreground/60">TIMELINE</div>
                    <div className="text-lg font-cyber font-bold text-primary">{exp.duration}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-cyber font-bold text-primary mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-card-foreground/70 mb-6">
              I'm always excited to work on innovative projects and contribute to meaningful solutions.
            </p>
            <Button 
              size="lg" 
              className="cyber-button px-8 py-4"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 left-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Experience;