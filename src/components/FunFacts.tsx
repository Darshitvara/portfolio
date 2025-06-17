
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Coffee, Music, Chess, Laptop } from 'lucide-react';

const FunFacts = () => {
  const [activeToggle, setActiveToggle] = useState<{ [key: string]: string }>({
    drink: 'coffee',
    time: 'night',
    coding: 'frontend'
  });

  const toggleOptions = [
    {
      id: 'drink',
      title: 'Preferred Drink',
      options: [
        { key: 'coffee', label: 'Coffee', icon: Coffee, color: 'bg-amber-500' },
        { key: 'tea', label: 'Tea', icon: Coffee, color: 'bg-green-500' }
      ]
    },
    {
      id: 'time',
      title: 'Coding Time',
      options: [
        { key: 'morning', label: 'Morning Bird', icon: Laptop, color: 'bg-yellow-500' },
        { key: 'night', label: 'Night Owl', icon: Laptop, color: 'bg-purple-500' }
      ]
    },
    {
      id: 'coding',
      title: 'Coding Focus',
      options: [
        { key: 'frontend', label: 'Frontend', icon: Laptop, color: 'bg-blue-500' },
        { key: 'backend', label: 'Backend', icon: Laptop, color: 'bg-red-500' }
      ]
    }
  ];

  const lifeTimeline = [
    {
      age: '13',
      event: 'First line of code',
      description: 'Started with HTML & CSS, built my first webpage',
      icon: '💻'
    },
    {
      age: '16',
      event: 'Built first mobile app',
      description: 'Created a simple to-do app using React Native',
      icon: '📱'
    },
    {
      age: '18',
      event: 'Started university',
      description: 'Began Computer Science degree, joined programming club',
      icon: '🎓'
    },
    {
      age: '20',
      event: 'First internship',
      description: 'Software engineering intern at a tech startup',
      icon: '💼'
    },
    {
      age: '21',
      event: 'Open source contributor',
      description: 'Started contributing to popular open source projects',
      icon: '🌟'
    }
  ];

  const hobbies = [
    {
      name: 'Photography',
      description: 'Capturing moments and landscapes',
      icon: '📸',
      level: 'Intermediate'
    },
    {
      name: 'Chess',
      description: 'Strategic thinking and problem solving',
      icon: '♟️',
      level: 'Advanced'
    },
    {
      name: 'Music Production',
      description: 'Creating electronic music in my free time',
      icon: '🎵',
      level: 'Beginner'
    },
    {
      name: 'Cooking',
      description: 'Experimenting with international cuisines',
      icon: '👨‍🍳',
      level: 'Intermediate'
    }
  ];

  const handleToggle = (toggleId: string, option: string) => {
    setActiveToggle(prev => ({
      ...prev,
      [toggleId]: option
    }));
  };

  return (
    <section id="fun-facts" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold mb-4 text-gradient">
            Fun Facts & Personal Side
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code. Discover my interests, preferences, and the journey that shaped me.
          </p>
        </div>

        {/* This or That Toggle Cards */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-semibold text-center mb-8">This or That?</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {toggleOptions.map((toggle) => (
              <Card key={toggle.id} className="overflow-hidden animate-fade-in">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{toggle.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {toggle.options.map((option) => {
                    const IconComponent = option.icon;
                    const isActive = activeToggle[toggle.id] === option.key;
                    
                    return (
                      <Button
                        key={option.key}
                        variant={isActive ? "default" : "outline"}
                        className={`w-full justify-start transition-all duration-300 ${
                          isActive ? option.color + ' text-white hover:opacity-90' : ''
                        }`}
                        onClick={() => handleToggle(toggle.id, option.key)}
                      >
                        <IconComponent className="mr-2" size={20} />
                        {option.label}
                        {isActive && <span className="ml-auto">✓</span>}
                      </Button>
                    );
                  })}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Life Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-semibold text-center mb-8">My Journey</h3>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent"></div>
              <div className="space-y-8">
                {lifeTimeline.map((item, index) => (
                  <div key={index} className="relative flex items-start animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl relative z-10">
                      {item.icon}
                    </div>
                    <Card className="ml-6 flex-grow">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">Age {item.age}</Badge>
                          <CardTitle className="text-lg">{item.event}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hobbies & Interests */}
        <div>
          <h3 className="text-2xl font-playfair font-semibold text-center mb-8">Hobbies & Interests</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {hobbies.map((hobby, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="text-4xl mb-2 group-hover:animate-bounce">{hobby.icon}</div>
                  <CardTitle className="text-lg">{hobby.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">{hobby.description}</p>
                  <Badge variant="outline">{hobby.level}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Random Facts */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-playfair font-semibold mb-6">Random Facts</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Card className="p-4 hover:shadow-md transition-shadow">
              <p className="text-sm">🎯 Can solve a Rubik's cube in under 2 minutes</p>
            </Card>
            <Card className="p-4 hover:shadow-md transition-shadow">
              <p className="text-sm">🌮 Tried coding while eating tacos (not recommended)</p>
            </Card>
            <Card className="p-4 hover:shadow-md transition-shadow">
              <p className="text-sm">🎮 Built my first game using Scratch at age 12</p>
            </Card>
            <Card className="p-4 hover:shadow-md transition-shadow">
              <p className="text-sm">📚 Read 15+ programming books this year</p>
            </Card>
            <Card className="p-4 hover:shadow-md transition-shadow">
              <p className="text-sm">🏃‍♂️ Running marathons helps me debug complex problems</p>
            </Card>
            <Card className="p-4 hover:shadow-md transition-shadow">
              <p className="text-sm">🎨 Designed my own personal logo using CSS art</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
