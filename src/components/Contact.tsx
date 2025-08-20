import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, Phone, MapPin, Github, Linkedin, Twitter, 
  Send, Download, Calendar, MessageSquare, ExternalLink 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sarthakthesde@gmail.com",
      link: "mailto:sarthakthesde@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8840715940",
      link: "tel:+918840715940",
      color: "text-accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lucknow, India",
      link: "#",
      color: "text-secondary"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@Sarthak-Developer-Coder",
      link: "https://github.com/Sarthak-Developer-Coder",
      color: "text-primary",
      description: "50+ repositories, 100+ commits"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "@sarthak-nag-b91861291",
      link: "https://www.linkedin.com/in/sarthak-nag-b91861291",
      color: "text-secondary",
      description: "Professional networking & updates"
    },
    {
      icon: Twitter,
      label: "Twitter",
      username: "@SarthakNag",
      link: "#",
      color: "text-accent",
      description: "Tech insights & thoughts"
    }
  ];

  const availability = [
    { type: "Full-time Opportunities", status: "Open", color: "text-neon-green" },
    { type: "Freelance Projects", status: "Available", color: "text-primary" },
    { type: "Consulting", status: "Available", color: "text-accent" },
    { type: "Open Source", status: "Always", color: "text-secondary" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
  const rawBase = (import.meta as unknown as { env?: { VITE_API_BASE_URL?: string } }).env?.VITE_API_BASE_URL || '';
  const base = rawBase.replace(/\/$/, '');
  const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to send message');
      }
      const data = await res.json();
      toast({
        title: 'Message Sent Successfully!',
        description: `Thanks ${data?.received?.name || 'there'} — I'll get back to you within 24 hours.`,
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadResumeUrl =
    "https://drive.google.com/file/d/173JXXSyB3kcxtwQLfAlsXEpybuVxVuqv/view?usp=sharing";

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/30 bg-card/20 backdrop-blur-sm">
            <MessageSquare className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-code text-primary">contact.init()</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-cyber font-bold mb-6">
            <span className="text-primary">GET IN</span>
            <span className="text-accent ml-4">TOUCH</span>
          </h2>
          
          <div className="w-24 h-1 bg-cyber-gradient mx-auto mb-8" />
          <p className="text-lg text-card-foreground/60 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-cyber font-bold text-primary mb-6">
                  <span className="text-accent">&gt;</span> SEND MESSAGE
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-code text-card-foreground/80 mb-2">
                        Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background-secondary border-primary/30 focus:border-primary font-code"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-code text-card-foreground/80 mb-2">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background-secondary border-primary/30 focus:border-primary font-code"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-code text-card-foreground/80 mb-2">
                      Subject *
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-background-secondary border-primary/30 focus:border-primary font-code"
                      placeholder="Project discussion, collaboration, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-code text-card-foreground/80 mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-background-secondary border-primary/30 focus:border-primary font-code resize-none"
                      placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full cyber-button py-4 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2" />
                        SENDING...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        SEND MESSAGE
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-8 p-4 rounded-lg bg-background-secondary/20 border border-primary/20">
                  <p className="text-sm text-card-foreground/70 font-code">
                    <span className="text-accent">Response Time:</span> Usually within 24 hours
                    <br />
                    <span className="text-primary">Languages:</span> English, Hindi
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="glass-card border-secondary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-cyber font-bold text-secondary mb-6">
                  CONTACT INFO
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-background-secondary ${contact.color}`}>
                        <contact.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-card-foreground/60 font-code">{contact.label}</div>
                        <a 
                          href={contact.link}
                          className="text-card-foreground hover:text-primary transition-colors font-code"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-card border-accent/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-cyber font-bold text-accent mb-6">
                  SOCIAL LINKS
                </h3>
                
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-background-secondary ${social.color}`}>
                        <social.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-cyber font-semibold text-primary">{social.label}</span>
                          <ExternalLink className="w-3 h-3 text-card-foreground/60" />
                        </div>
                        <a 
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-card-foreground/70 hover:text-primary transition-colors font-code block"
                        >
                          {social.username}
                        </a>
                        <p className="text-xs text-card-foreground/50 font-code mt-1">
                          {social.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="glass-card border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-cyber font-bold text-primary mb-6">
                  AVAILABILITY
                </h3>
                
                <div className="space-y-3">
                  {availability.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-code text-card-foreground/70">
                        {item.type}
                      </span>
                      <Badge 
                        variant="outline" 
                        className={`border-current ${item.color} font-code text-xs`}
                      >
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-primary/20">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-code"
                  >
                    <a
                      href={downloadResumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Download Resume"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      DOWNLOAD RESUME
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-card border-accent/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-cyber font-bold text-accent mb-6">
                  QUICK ACTIONS
                </h3>
                
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-secondary/30 text-secondary hover:bg-secondary hover:text-secondary-foreground font-code"
                    onClick={() => window.open('https://calendly.com/sarthak', '_blank')}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    SCHEDULE MEETING
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-code"
                    onClick={() => window.open('mailto:sarthakthesde@gmail.com', '_blank')}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    DIRECT EMAIL
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-cyber font-bold text-primary mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-card-foreground/70 mb-6 leading-relaxed">
              Whether you need a full-stack web application, AI/ML solution, cloud infrastructure, 
              or technical consultation, I'm here to help bring your ideas to life.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm font-code">
              <div className="text-center">
                <div className="text-primary font-bold">24h</div>
                <div className="text-card-foreground/60">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-accent font-bold">100%</div>
                <div className="text-card-foreground/60">Project Success</div>
              </div>
              <div className="text-center">
                <div className="text-secondary font-bold">3+</div>
                <div className="text-card-foreground/60">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Contact;