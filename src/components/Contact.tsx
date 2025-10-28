
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from "emailjs-com"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
  };

  const SERVICE_ID = "service_7c565sj";
  const TEMPLATE_ID = "template_f3mruzl"
  const PUBLIC_KEY = "DebhY9XomUkk4pRV5"

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    toast({
      title: "Failed to send message",
      description: "Please try again or contact me via email.",
      variant: "destructive",
    });
    console.error("Email send error:", error);
  }

  setIsSubmitting(false);


    // Simulate form submission
    // setTimeout(() => {
    //   toast({
    //     title: "Message sent successfully!",
    //     description: "Thank you for reaching out. I'll get back to you soon.",
    //   });
    //   setFormData({ name: '', email: '', subject: '', message: '' });
    //   setIsSubmitting(false);
    // }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'connectxwolfie@gmail.com',
      href: 'mailto:connectxwolfie@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Darshitvara',
      href: 'https://github.com/Darshitvara'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/darshit vara',
      href: 'https://www.linkedin.com/in/darshit-vara-241b55246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
      // href: 'https://linkedin.com/Darshit vara'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Say <span className="text-gradient">hi</span>
            </h2>
            {/* <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I usually reply within 24–48 hours. Tip: tell me what you’re building or which project you liked.
            </p> */}
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-6">Let's connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I’m open to internships, project ideas, or just a quick chat about web dev. 
                Feel free to reach out—short messages are totally fine!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300 group"
                  >
                    <div className="p-2 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                      <info.icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-card rounded-lg border border-border">
                <h4 className="font-semibold mb-2">Response time</h4>
                <p className="text-sm text-muted-foreground">
                  I usually reply within 24–48 hours. For urgent messages, email works best.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your name"
                          className="transition-all duration-300 focus:border-accent"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="you@example.com"
                          className="transition-all duration-300 focus:border-accent"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="What’s this about?"
                        className="transition-all duration-300 focus:border-accent"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell me about your project or just say hello. Short is fine."
                        rows={6}
                        className="transition-all duration-300 focus:border-accent resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-lg font-semibold"
                    >
                      {isSubmitting ? 'Sending…' : 'Send and I’ll reply soon'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
