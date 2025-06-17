
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import FunFacts from '@/components/FunFacts';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Resume />
      <FunFacts />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
