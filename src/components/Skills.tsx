
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Wrench } from 'lucide-react';

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
      icon: <Code className="h-5 w-5 mr-2" />,
      skills: [
        "HTML/CSS", "JavaScript", "React", "Bootstrap", 
        "Tailwind CSS", "UI/UX Design", "Responsive Design"
      ]
    },
    {
      name: "Backend",
      icon: <Database className="h-5 w-5 mr-2" />,
      skills: [
        "Python", "Node.js", "Express", "MongoDB", 
        "RESTful APIs", "SQL Basics", "Firebase"
      ]
    },
    {
      name: "Tools & Technologies",
      icon: <Wrench className="h-5 w-5 mr-2" />,
      skills: [
        "Git", "GitHub", "VS Code", "Figma", 
        "Terminal", "NPM", "Agile/Scrum"
      ]
    }
  ];

  return (
    <section id="skills" className="bg-secondary/30">
      <div className="container mx-auto px-4" id="skills-section">
        <h2 className="section-heading">My Skills</h2>
        
        <div className="space-y-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.name} 
              className={`transition-all duration-300 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-lg mr-2">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <Badge 
                    key={i} 
                    className={`text-base py-2 px-4 rounded-md transition-all duration-200 hover:scale-105 bg-background border border-primary/20 hover:bg-primary hover:text-white ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`} 
                    style={{ transitionDelay: `${(idx * 50) + (i * 30)}ms` }}
                    variant="outline"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          <div className="bg-background rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-foreground/80">Course Projects</div>
          </div>
          <div className="bg-background rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-primary mb-2">8+</div>
            <div className="text-foreground/80">GitHub Repositories</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
