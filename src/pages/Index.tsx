import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import RobotCompanion from '../components/RobotCompanion';
import ParticleSystem from '../components/ParticleSystem';
import CircuitBackground from '../components/CircuitBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Advanced Background Systems */}
      <ParticleSystem />
      <CircuitBackground />
      
      {/* Robot Companion */}
      <RobotCompanion />
      
      {/* Navigation */}
      <Navigation />
      
  {/* Main Content */}
  <main className="relative z-10 pt-20 md:pt-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
