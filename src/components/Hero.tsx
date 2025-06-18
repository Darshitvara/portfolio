
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <><section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
            <span className="text-gradient">Darshit Codes</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Final-Year Computer Science Student
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about full-stack development, AI, and creating innovative solutions that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce ">
            <a href="#about" className="inline-flex items-center m-4  text-muted-foreground hover:text-foreground transition-colors">
              <span className="mr-2">Scroll to explore</span>
              <ArrowDown size={20} />
            </a>
          </div>
        </div>
        
      </div>
      
    </section>
   
</>
  );
};

export default Hero;
