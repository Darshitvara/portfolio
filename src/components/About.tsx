
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = [
    { 
      category: 'Frontend Development', 
      items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
      description: 'Modern web interfaces'
    },
    { 
      category: 'Backend Development', 
      items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express'],
      description: 'Scalable server solutions'
    },
    { 
      category: 'AI & Machine Learning', 
      items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API', 'Pandas'],
      description: 'Intelligent systems'
    },
    { 
      category: 'DevOps & Tools', 
      items: ['Git', 'Docker', 'AWS', 'Figma', 'Linux'],
      description: 'Development workflow'
    },
  ];

  const experiences = [
    {
      title: 'Computer Science Student',
      organization: 'University of Technology',
      period: '2021 - 2025',
      description: 'Pursuing Bachelor of Science in Computer Science with focus on AI and Software Engineering. Maintaining a 3.8 GPA while actively participating in research projects.',
      achievements: ['Dean\'s List 2023-2024', 'Research Assistant in AI Lab', 'President of CS Club']
    },
    {
      title: 'Software Engineering Intern',
      organization: 'TechCorp Solutions',
      period: 'Summer 2024',
      description: 'Developed full-stack web applications and contributed to AI-driven features for customer analytics platform serving 10,000+ users.',
      achievements: ['Improved app performance by 30%', 'Led junior developer mentoring', 'Implemented ML recommendation engine']
    },
    {
      title: 'Teaching Assistant',
      organization: 'University CS Department',
      period: '2023 - Present',
      description: 'Assisted in teaching Data Structures and Algorithms, mentoring 50+ students and conducting weekly lab sessions.',
      achievements: ['95% student satisfaction rating', 'Created interactive coding tutorials', 'Reduced student failure rate by 20%']
    }
  ];

  const coreValues = [
    { value: 'Innovation', description: 'Pushing boundaries with creative solutions' },
    { value: 'Collaboration', description: 'Building together for better outcomes' },
    { value: 'Continuous Learning', description: 'Growing through curiosity and practice' },
    { value: 'User-Centric Design', description: 'Creating with empathy and purpose' }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced section header */}
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="lead max-w-3xl mx-auto">
              A passionate computer science student with a drive to create innovative solutions that bridge technology and human needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Enhanced personal story */}
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold mb-8 text-gradient">My Journey</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  I'm a final-year Computer Science student at the University of Technology, 
                  where I've developed a deep passion for software engineering and artificial intelligence. 
                  My journey began with curiosity about how technology shapes our world.
                </p>
                <p>
                  Through hands-on internships, challenging personal projects, and rigorous academic pursuits, 
                  I've gained comprehensive experience in full-stack development, machine learning, and 
                  collaborative software development. I believe in writing clean, efficient code and 
                  creating user-centered solutions that make a real impact.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring emerging technologies, contributing to 
                  open-source projects, or sharing knowledge with fellow students as a teaching assistant. 
                  I'm driven by the belief that technology should serve humanity's greatest challenges.
                </p>
              </div>

              {/* Enhanced core values */}
              <div className="mt-10">
                <h4 className="text-xl font-semibold mb-6">Core Values</h4>
                <div className="grid grid-cols-1 gap-4">
                  {coreValues.map((item, index) => (
                    <div key={item.value} className="flex items-start space-x-3 group">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 group-hover:scale-150 elegant-transition"></div>
                      <div>
                        <span className="font-medium text-foreground">{item.value}</span>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced technical skills */}
            <div className="animate-fade-in stagger-delay-2">
              <h3 className="text-3xl font-bold mb-8 text-gradient">Technical Expertise</h3>
              <div className="grid gap-6">
                {skills.map((skillGroup, index) => (
                  <Card key={skillGroup.category} className="classic-card p-6">
                    <CardContent className="p-0">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-lg text-foreground">{skillGroup.category}</h4>
                        <Badge variant="outline" className="text-xs">{skillGroup.description}</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <Badge key={skill} variant="secondary" className="hover:bg-accent hover:text-accent-foreground elegant-transition">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced experience timeline */}
          <div className="animate-fade-in stagger-delay-3">
            <h3 className="text-3xl font-bold text-center mb-12 text-gradient">Professional Experience</h3>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <Card key={index} className="classic-card p-8 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-l-lg"></div>
                    <CardContent className="p-0 pl-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-bold text-xl mb-2">{exp.title}</h4>
                          <p className="text-accent font-semibold mb-1">{exp.organization}</p>
                          <Badge variant="outline">{exp.period}</Badge>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {exp.description}
                          </p>
                          <div className="space-y-2">
                            <h5 className="font-medium text-sm text-foreground">Key Achievements:</h5>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                  <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
