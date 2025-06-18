
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
      {/* Enhanced floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full animate-float blur-sm"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float blur-sm stagger-delay-1"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent/10 rounded-full animate-float blur-sm stagger-delay-2"></div>
      <div className="absolute top-60 left-1/3 w-8 h-8 bg-accent/5 rounded-full animate-float blur-sm stagger-delay-3"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced hero content */}
          <div className="animate-fade-in">
            <h1 className="mb-6 tracking-tight">
              <span className="block text-gradient-gold mb-2">Alex Johnson</span>
            </h1>
            <p className="lead mb-4 animate-fade-in stagger-delay-1">
              Final-Year Computer Science Student
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in stagger-delay-2">
              Passionate about full-stack development, artificial intelligence, and creating innovative solutions that make a meaningful difference in the digital world.
            </p>
          </div>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in stagger-delay-3">
            <Button 
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground elegant-transition group px-8 py-3"
            >
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="elegant-transition group px-8 py-3"
            >
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Enhanced scroll indicator */}
          <div className="animate-fade-in stagger-delay-4">
            <a 
              href="#about" 
              className="inline-flex flex-col items-center text-muted-foreground hover:text-foreground elegant-transition group"
            >
              <span className="text-sm font-medium mb-2 tracking-wide uppercase">Discover More</span>
              <ArrowDown size={20} className="animate-bounce group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
