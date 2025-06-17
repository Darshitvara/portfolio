
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma'] },
    { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API'] },
  ];

  const experiences = [
    {
      title: 'Computer Science Student',
      organization: 'University of Technology',
      period: '2021 - 2025',
      description: 'Pursuing Bachelor of Science in Computer Science with focus on AI and Software Engineering.'
    },
    {
      title: 'Software Engineering Intern',
      organization: 'TechCorp Solutions',
      period: 'Summer 2024',
      description: 'Developed full-stack web applications and contributed to AI-driven features for customer analytics.'
    },
    {
      title: 'Teaching Assistant',
      organization: 'University CS Department',
      period: '2023 - Present',
      description: 'Assisted in teaching Data Structures and Algorithms, mentoring 50+ students.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A passionate computer science student with a drive to create innovative solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Story */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-6">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a final-year Computer Science student at the University of Technology, 
                  where I've developed a deep passion for software engineering and artificial intelligence. 
                  My journey began with curiosity about how technology shapes our world.
                </p>
                <p>
                  Through internships, personal projects, and academic pursuits, I've gained experience 
                  in full-stack development, machine learning, and collaborative software development. 
                  I believe in writing clean, efficient code and creating user-centered solutions.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with fellow students as a teaching assistant.
                </p>
              </div>

              {/* Core Values */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Core Values</h4>
                <div className="grid grid-cols-2 gap-4">
                  {['Innovation', 'Collaboration', 'Continuous Learning', 'User-Centric Design'].map((value) => (
                    <div key={value} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills & Experience */}
            <div className="space-y-8">
              {/* Technical Skills */}
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skillGroup) => (
                    <Card key={skillGroup.category} className="p-4 hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <h4 className="font-semibold text-accent mb-3">{skillGroup.category}</h4>
                        <div className="space-y-1">
                          {skillGroup.items.map((skill) => (
                            <div key={skill} className="text-sm text-muted-foreground">
                              {skill}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Experience Timeline */}
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-2xl font-bold mb-6">Experience</h3>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-accent/30">
                      <div className="absolute w-3 h-3 bg-accent rounded-full -left-2 top-1"></div>
                      <div>
                        <h4 className="font-semibold text-lg">{exp.title}</h4>
                        <p className="text-accent font-medium">{exp.organization}</p>
                        <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
