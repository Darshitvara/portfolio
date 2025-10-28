
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Code, Database, Globe, Settings, Star } from 'lucide-react';

const TechStack = () => {
  const [filter, setFilter] = useState('all');

  const technologies = {
    languages: [
      { name: 'JavaScript', level: 'Advanced', experience: '4 years', projects: 15 },
      { name: 'TypeScript', level: 'Advanced', experience: '3 years', projects: 12 },
      { name: 'Python', level: 'Intermediate', experience: '2 years', projects: 8 },
      { name: 'Java', level: 'Intermediate', experience: '2 years', projects: 6 },
    ],
    frameworks: [
      // Frontend
      { name: 'React', level: 'Advanced', experience: '3 years', projects: 12 },
      { name: 'Next.js', level: 'Intermediate', experience: '2 years', projects: 8 },
      // Backend
      { name: 'Express.js', level: 'Advanced', experience: '2+ years', projects: 9 },
      { name: 'NestJS', level: 'Intermediate', experience: '1 year', projects: 4 },
      { name: 'Socket.IO', level: 'Intermediate', experience: '1.5 years', projects: 5 },
    ],
    tools: [
      { name: 'Git & GitHub', level: 'Advanced', experience: '4 years', projects: 20 },
      { name: 'Docker', level: 'Intermediate', experience: '1+ year', projects: 6 },
      { name: 'GitHub Actions', level: 'Intermediate', experience: '1 year', projects: 4 },
      { name: 'PostgreSQL', level: 'Intermediate', experience: '1.5 years', projects: 5 },
      { name: 'MongoDB', level: 'Intermediate', experience: '2 years', projects: 6 },
      { name: 'Redis', level: 'Beginner', experience: '6 months', projects: 2 },
      { name: 'Nginx', level: 'Beginner', experience: '6 months', projects: 2 },
    ]
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced': return 'text-green-600 dark:text-green-400';
      case 'Intermediate': return 'text-blue-600 dark:text-blue-400';
      case 'Beginner': return 'text-orange-600 dark:text-orange-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getStars = (level: string) => {
    const count = level === 'Advanced' ? 3 : level === 'Intermediate' ? 2 : 1;
    return Array.from({ length: 3 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < count ? 'fill-accent text-accent' : 'text-muted-foreground'}
      />
    ));
  };

  const filteredTechs = (category: any[]) => {
    if (filter === 'all') return category;
    return category.filter(tech => tech.level.toLowerCase() === filter);
  };

  return (
    <section id="tech-stack" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold mb-4 text-gradient">
            Technologies & Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tools I use to build reliable backends and clean, accessible UIs.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex gap-2 p-1 bg-background rounded-lg border">
            {['all', 'advanced', 'intermediate', 'beginner'].map((level) => (
              <button
                key={level}
                onClick={() => setFilter(level)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === level
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <Tabs defaultValue="languages" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="languages" className="flex items-center gap-2">
              <Code size={16} />
              Languages
            </TabsTrigger>
            <TabsTrigger value="frameworks" className="flex items-center gap-2">
              <Globe size={16} />
              Frameworks
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex items-center gap-2">
              <Settings size={16} />
              Tools
            </TabsTrigger>
          </TabsList>

          <TooltipProvider>
            <TabsContent value="languages" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTechs(technologies.languages).map((tech, index) => (
                  <Tooltip key={tech.name}>
                    <TooltipTrigger asChild>
                      <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{tech.name}</CardTitle>
                            <div className="flex gap-1">
                              {getStars(tech.level)}
                            </div>
                          </div>
                          <CardDescription className={getLevelColor(tech.level)}>
                            {tech.level}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Experience:</span>
                              <span>{tech.experience}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Projects:</span>
                              <Badge variant="secondary">{tech.projects}</Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Used in {tech.projects} projects over {tech.experience}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="frameworks" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTechs(technologies.frameworks).map((tech, index) => (
                  <Tooltip key={tech.name}>
                    <TooltipTrigger asChild>
                      <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{tech.name}</CardTitle>
                            <div className="flex gap-1">
                              {getStars(tech.level)}
                            </div>
                          </div>
                          <CardDescription className={getLevelColor(tech.level)}>
                            {tech.level}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Experience:</span>
                              <span>{tech.experience}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Projects:</span>
                              <Badge variant="secondary">{tech.projects}</Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Used in {tech.projects} projects over {tech.experience}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tools" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTechs(technologies.tools).map((tech, index) => (
                  <Tooltip key={tech.name}>
                    <TooltipTrigger asChild>
                      <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{tech.name}</CardTitle>
                            <div className="flex gap-1">
                              {getStars(tech.level)}
                            </div>
                          </div>
                          <CardDescription className={getLevelColor(tech.level)}>
                            {tech.level}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Experience:</span>
                              <span>{tech.experience}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Projects:</span>
                              <Badge variant="secondary">{tech.projects}</Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Used in {tech.projects} projects over {tech.experience}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TabsContent>
          </TooltipProvider>
        </Tabs>
      </div>
    </section>
  );
};

export default TechStack;
