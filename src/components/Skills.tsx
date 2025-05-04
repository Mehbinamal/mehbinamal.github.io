
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
        { name: "React", level: 95 },
        { name: "Vue.js", level: 85 },
        { name: "Angular", level: 80 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "JavaScript/TypeScript", level: 95 },
        { name: "Responsive Design", level: 90 },
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 75 },
        { name: "SQL", level: 80 },
        { name: "GraphQL", level: 85 },
        { name: "RESTful APIs", level: 90 },
      ]
    },
    {
      name: "Tools",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "CI/CD", level: 85 },
        { name: "Webpack", level: 80 },
        { name: "Jest", level: 85 },
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.skills.map((skill, index) => (
                  <Card key={index} className="overflow-hidden border-none shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">{skill.name}</CardTitle>
                        <span className="text-sm font-semibold">{skill.level}%</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="skill-progress">
                        <div 
                          className="transition-all duration-1000 ease-out" 
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 100}ms` 
                          }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="bg-background rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-foreground/80">Projects Completed</div>
          </div>
          <div className="bg-background rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-primary mb-2">30+</div>
            <div className="text-foreground/80">Happy Clients</div>
          </div>
          <div className="bg-background rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-foreground/80">GitHub Repositories</div>
          </div>
          <div className="bg-background rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-foreground/80">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
