import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Github, ExternalLink, Calendar, Users, Zap } from "lucide-react";
import ecommerceImg from "../assets/ecommerce.png";
import portfolioImg from "../assets/portfolio.png";
import collabpointImg from "../assets/collab-point.png";
import auctionPro from "../assets/auction-pro.png";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    // {
    //   title: 'AI-Powered Task Manager',
    //   description: 'A smart productivity app that uses machine learning to prioritize tasks and predict completion times.',
    //   detailedDescription: 'This comprehensive task management application leverages artificial intelligence to revolutionize productivity. The system analyzes user behavior patterns, task complexity, and historical completion data to provide intelligent task prioritization. Features include automated deadline suggestions, workload balancing, smart notifications, and productivity analytics. The ML model continuously learns from user interactions to improve accuracy over time.',
    //   image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    //   category: 'AI/ML',
    //   tech: ['React', 'Python', 'TensorFlow', 'FastAPI'],
    //   github: 'https://github.com/Darshitvara/',
    //   demo: 'https://ai-task-manager-demo.com',
    //   featured: true,
    //   timeline: '3 months',
    //   teamSize: '4 developers',
    //   highlights: ['90% accuracy in deadline prediction', '40% increase in user productivity', 'Real-time collaboration features']
    // },
    {
      title: "Real-Time Auction System",
      description:
        "A comprehensive online auction platform with real-time bidding, user authentication, and admin dashboard for seamless auction management.",
      detailedDescription:
        "This full-stack auction system enables users to participate in live auctions with real-time bidding capabilities. The platform features secure user authentication, dynamic auction listings, live bid updates via WebSocket connections, and comprehensive admin controls. Users can register, browse active auctions, place bids in real-time, and receive instant notifications. The admin dashboard allows auction creation, management, and monitoring with detailed analytics. The system includes automated auction scheduling, winner announcements, and toast notifications for enhanced user experience.",
      image: auctionPro,
      category: "Full-Stack Web Application",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.IO",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
      ],
      github: "https://github.com/Darshitvara/autionpro",
      demo: "https://auctionpro.darshitvara.me",
      featured: true,
      timeline: "2 months",
      teamSize: "1 developer",
      highlights: [
        "Real-time bidding with Socket.IO integration",
        "Responsive design with smooth animations",
        "Secure JWT authentication system",
        "Admin dashboard with auction management",
        "Optimized production build with 68% bundle size reduction",
        "Toast notifications for enhanced UX",
      ],
    },
    {
      title: "Real-time Collaboration Platform",
      description:
        "A web application enabling real-time document editing for remote teams.",
      detailedDescription:
        "A comprehensive collaboration suite designed for modern remote teams. The platform combines real-time document editing and project management tools. Built with scalability in mind, it supports thousands of concurrent users with millisecond-level synchronization. Features include role-based permissions, integration APIs, and advanced security measures.",
      image: collabpointImg,
      category: "Web",
      tech: ["react.js", "WebRTC", "Socket.io", "Porstgresql"],
      github: "https://github.com/Darshitvara/",
      demo: "https://colab-point.darshitvara.me/",
      featured: true,
      timeline: "1 months",
      teamSize: "1 developer",
      highlights: [
        "Sub-100ms latency",
        "99.9% uptime",
        "End-to-end encryption",
      ],
    },
    {
      title: "Phonemax E-commerce Platform",
      description:
        "A full-featured e-commerce web application for a new mobile brand, with product catalog, cart, orders, and secure authentication.",
      detailedDescription:
        "This modern e-commerce solution is designed for a brand-new mobile company, providing a seamless shopping experience. Features include dynamic product listings, add-to-cart functionality, user registration/login, order tracking, admin dashboard for inventory and orders, and dummy payment gateway integration. The frontend is highly responsive with modern animations and UI components. Built with scalability and security in mind.",
      image: ecommerceImg,
      category: "Web",
      tech: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Darshitvara/",
      demo: "https://phonemax.darshitvara.me/",
      featured: true,
      timeline: "1 months",
      teamSize: "1 developers",
      highlights: [
        "Fully functional cart & checkout",
        "Admin panel for managing products/orders",
        "JWT-based authentication and authorization",
      ],
    },
    {
      title: "Portfolio ",
      description:
        "A modern personal portfolio website showcasing my projects, skills, blogs, and contact information.",
      detailedDescription:
        "This personal developer portfolio website is designed to present my professional profile, projects, and technical skills in an engaging and modern format. Built with React and Tailwind CSS for a sleek, responsive design, it features animated sections, dynamic project modals, and a blog section powered by Markdown. The site includes filtering for projects, social media integration, and a contact form. Deployed on Vercel for fast global performance and continuous deployment from GitHub.",
      image: portfolioImg,
      category: "Web",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/Darshitvara/",
      demo: "https://www.darshitvara.me/",
      featured: true,
      timeline: "1 months",
      teamSize: "1 developers",
      highlights: [
        "One-click deployment to vercel Hosting",
        "Custom domain and SEO-friendly pages",
      ],
    },
  ];

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical skills and creative problem-solving
              abilities
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-in-left">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 transition-all duration-300 ${
                  filter === category
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                    : "hover:border-accent hover:text-accent-foreground"
                  // : 'hover:border-accent hover:text-accent'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.title}
                className={`group hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold">
                      Click to view details
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                      {project.category}
                    </span>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12 animate-fade-in hover:bg-transparent ">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg "
              asChild
            >
              <a
                href="https://github.com/Darshitvara"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-2">
                  {selectedProject.title}
                </DialogTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {selectedProject.timeline}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    {selectedProject.teamSize}
                  </div>
                  <span className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs">
                    {selectedProject.category}
                  </span>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Project Overview
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.detailedDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Zap size={20} />
                    Key Highlights
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t">
                  <Button asChild className="flex-1">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="mr-2" />
                      View Repository
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
