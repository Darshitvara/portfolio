import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    {
      category: "Backend",
      items: ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Bootstrap"],
    },
    { category: "Tools", items: ["Git", "Docker", "GitHub Actions", "AWS", "Cloudflare"] },
    {
      category: "AI/ML",
      items: ["OpenAI API"],
    },
  ];

  const experiences = [
    // {
    //   title: "Full Stack Intern",
    //   organization: "Tatvasoft(virtual)",
    //   period: "2025 - continue",
    //   description:
    //     "Developed full-stack web applications.",
    // },
    {
      title: "Software Engineering Intern",
      organization: "IBM(virtual)",
      period: "one-month",
      description:
        "contributed to AI-driven features for customer analytics.",
    },
    // ,
    // {
    //   title: 'Teaching Assistant',
    //   organization: 'University CS Department',
    //   period: '2023 - Present',
    //   description: 'Assisted in teaching Data Structures and Algorithms, mentoring 50+ students.'
    // }
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
                  Building full‑stack products with a slight backend lean—APIs, data modeling, auth, performance, and thoughtful UIs.
                </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Story */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-6">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    My journey began with curiosity about how technology shapes our world.
                  </p>
                  <p>
                    I started building because I wanted tools people would actually use. Early projects were messy, but they taught me how systems fail, and how to make them stable and usable.
                  </p>
                  <p>
                    These days I split time between Node.js services (clean REST APIs, auth, data modeling, logs/metrics) and React UIs (accessible, responsive, and simple to navigate).
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                    <div className="p-3 rounded-md border bg-card">Best at: clear API contracts and sensible UI flows</div>
                    <div className="p-3 rounded-md border bg-card">Superpower: debugging race conditions, timeouts, and weird UI states</div>
                    <div className="p-3 rounded-md border bg-card">Non‑tech: chess + chai breaks</div>
                  </div>
              </div>

              {/* Core Values */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Core Values</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Clarity over complexity",
                    "Ship small, learn fast",
                    "Empathy for users & teammates",
                    "Craft and curiosity",
                  ].map((value) => (
                    <div key={value} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills & Experience */}
            <div className="space-y-8">
              {/* Technical Skills */}
              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skillGroup) => (
                    <Card
                      key={skillGroup.category}
                      className="p-4 hover:shadow-lg transition-shadow duration-300"
                    >
                      <CardContent className="p-0">
                        <h4 className="font-semibold text-accent mb-3">
                          {skillGroup.category}
                        </h4>
                        <div className="space-y-1">
                          {skillGroup.items.map((skill) => (
                            <div
                              key={skill}
                              className="text-sm text-muted-foreground"
                            >
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

              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-2xl font-bold mb-6">Experience</h3>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="relative pl-6 border-l-2 border-accent/30"
                    >
                      <div className="absolute w-3 h-3 bg-accent rounded-full -left-2 top-0"></div>
                      <div>
                        <h4 className="font-semibold text-lg">{exp.title}</h4>
                        <p className="text-accent font-medium">
                          {exp.organization}
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
                          {exp.period}
                        </p>
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
