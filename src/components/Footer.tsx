
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-playfair font-bold text-gradient mb-4">
                Alex Johnson
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Final-year Computer Science student passionate about creating 
                innovative solutions through technology and code.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { href: '#home', label: 'Home' },
                  { href: '#about', label: 'About' },
                  { href: '#projects', label: 'Projects' },
                  { href: '#contact', label: 'Contact' }
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold mb-4">Let's Connect</h4>
              <div className="flex space-x-4 mb-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:alex.johnson@email.com"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Always open to new opportunities and collaborations
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Alex Johnson. Designed and built with passion using React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
