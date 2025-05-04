
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const target = document.getElementById('skills-section');
    if (target) {
      observer.observe(target);
    }
    
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React" },
        { name: "Vue.js" },
        { name: "Angular" },
        { name: "HTML5/CSS3" },
        { name: "JavaScript/TypeScript" },
        { name: "Responsive Design" },
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js" },
        { name: "Python" },
        { name: "Java" },
        { name: "SQL" },
        { name: "GraphQL" },
        { name: "RESTful APIs" },
      ]
    },
    {
      name: "Tools",
      skills: [
        { name: "Git" },
        { name: "Docker" },
        { name: "AWS" },
        { name: "CI/CD" },
        { name: "Webpack" },
        { name: "Jest" },
      ]
    }
  ];

  return (
    <section id="skills" className="bg-secondary/30">
      <div className="container mx-auto px-4" id="skills-section">
        <h2 className="section-heading">My Skills</h2>
        
        <Tabs defaultValue={skillCategories[0].name} className="mb-8">
          <TabsList className="w-full overflow-x-auto flex justify-start md:justify-center space-x-2 p-2">
            {skillCategories.map(category => (
              <TabsTrigger key={category.name} value={category.name} className="px-4 py-2">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {skillCategories.map(category => (
            <TabsContent key={category.name} value={category.name}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, index) => (
                  <Card 
                    key={index} 
                    className={`border-none shadow-md transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`} 
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-4 flex items-center justify-center">
                      <Badge variant="secondary" className="text-md py-2 px-4">
                        {skill.name}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="bg-background rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-foreground/80">Projects Completed</div>
          </div>
          <div className="bg-background rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-foreground/80">GitHub Repositories</div>
          </div>
          <div className="bg-background rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-primary mb-2">Student</div>
            <div className="text-foreground/80">Currently Studying</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
