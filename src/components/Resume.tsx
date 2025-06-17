
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Download, GraduationCap, Briefcase, Award, User } from 'lucide-react';

const Resume = () => {
  const resumeData = {
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "University of Technology",
        period: "2021 - Present",
        gpa: "3.8/4.0",
        coursework: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering", "AI & Machine Learning"]
      },
      {
        degree: "High School Diploma",
        school: "City High School",
        period: "2017 - 2021",
        gpa: "3.9/4.0",
        achievements: ["Valedictorian", "National Honor Society", "Programming Club President"]
      }
    ],
    experience: [
      {
        title: "Software Engineering Intern",
        company: "TechCorp Solutions",
        period: "June 2023 - August 2023",
        location: "San Francisco, CA",
        responsibilities: [
          "Developed and maintained React-based web applications",
          "Collaborated with senior developers on API integration",
          "Implemented responsive design using Tailwind CSS",
          "Participated in daily standups and code reviews"
        ]
      },
      {
        title: "Full-Stack Developer (Part-time)",
        company: "Local Startup Inc.",
        period: "January 2023 - Present",
        location: "Remote",
        responsibilities: [
          "Built e-commerce platform using MERN stack",
          "Designed and implemented RESTful APIs",
          "Optimized database queries improving performance by 40%",
          "Mentored 2 junior developers"
        ]
      }
    ],
    certifications: [
      {
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "March 2023",
        id: "AWS-CCP-001"
      },
      {
        name: "Google Analytics Certified",
        issuer: "Google",
        date: "January 2023",
        id: "GA-CERT-456"
      }
    ],
    skills: {
      soft: ["Leadership", "Problem Solving", "Communication", "Team Collaboration", "Time Management", "Critical Thinking"]
    }
  };

  const handleDownloadResume = () => {
    // This would typically download a PDF version
    console.log("Downloading resume...");
    // For demo purposes, we'll just show an alert
    alert("Resume download would start here! (PDF not included in demo)");
  };

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold mb-4 text-gradient">
            Resume
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Comprehensive overview of my educational background, professional experience, and achievements.
          </p>
          <Button onClick={handleDownloadResume} className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Download className="mr-2" size={16} />
            Download PDF Resume
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible defaultValue="education" className="space-y-4">
            <AccordionItem value="education" className="border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-accent" size={24} />
                  <span className="text-xl font-semibold">Education</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-4">
                  {resumeData.education.map((edu, index) => (
                    <Card key={index} className="animate-fade-in">
                      <CardHeader>
                        <CardTitle className="text-lg">{edu.degree}</CardTitle>
                        <CardDescription className="text-base">
                          {edu.school} • {edu.period}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">GPA:</span>
                            <Badge variant="secondary">{edu.gpa}</Badge>
                          </div>
                          {edu.coursework && (
                            <div>
                              <span className="font-medium block mb-2">Relevant Coursework:</span>
                              <div className="flex flex-wrap gap-2">
                                {edu.coursework.map((course, i) => (
                                  <Badge key={i} variant="outline">{course}</Badge>
                                ))}
                              </div>
                            </div>
                          )}
                          {edu.achievements && (
                            <div>
                              <span className="font-medium block mb-2">Achievements:</span>
                              <div className="flex flex-wrap gap-2">
                                {edu.achievements.map((achievement, i) => (
                                  <Badge key={i} variant="outline">{achievement}</Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="experience" className="border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <Briefcase className="text-accent" size={24} />
                  <span className="text-xl font-semibold">Work Experience</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-4">
                  {resumeData.experience.map((exp, index) => (
                    <Card key={index} className="animate-fade-in">
                      <CardHeader>
                        <CardTitle className="text-lg">{exp.title}</CardTitle>
                        <CardDescription className="text-base">
                          {exp.company} • {exp.location} • {exp.period}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="certifications" className="border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <Award className="text-accent" size={24} />
                  <span className="text-xl font-semibold">Certifications</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  {resumeData.certifications.map((cert, index) => (
                    <Card key={index} className="animate-fade-in">
                      <CardHeader>
                        <CardTitle className="text-lg">{cert.name}</CardTitle>
                        <CardDescription>
                          {cert.issuer} • {cert.date}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Badge variant="outline">ID: {cert.id}</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="skills" className="border rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <User className="text-accent" size={24} />
                  <span className="text-xl font-semibold">Skills</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-4">
                  <Card className="animate-fade-in">
                    <CardHeader>
                      <CardTitle className="text-lg">Soft Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {resumeData.skills.soft.map((skill, index) => (
                          <Badge key={index} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Resume;
