
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Wrench, Sparkles } from 'lucide-react';

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
      icon: Code,
      color: "from-primary to-secondary",
      skills: [
        "HTML/CSS", "JavaScript", "React", "Bootstrap", 
        "Tailwind CSS", "UI/UX Design", "Responsive Design"
      ]
    },
    {
      name: "Backend",
      icon: Database,
      color: "from-secondary to-primary",
      skills: [
        "Python", "Node.js", "Express", "MongoDB", 
        "RESTful APIs", "SQL Basics", "Firebase", "Supabase"
      ]
    },
    {
      name: "Tools & Technologies",
      icon: Wrench,
      color: "from-primary to-secondary",
      skills: [
        "Git", "GitHub", "VS Code", "Figma", 
        "Terminal", "NPM", "Agile/Scrum", "Docker"
      ]
    }
  ];

  return (
    <section id="skills" className="relative">
      <div className="animated-bg opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10" id="skills-section">
        <div className="text-center mb-16">
          <h2 className="section-heading mx-auto">Skills & Expertise</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mt-4">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="space-y-12 mb-16">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.name} 
                className={`transition-all duration-500 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <Card className="glass-strong border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} mr-4`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">{category.name}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, i) => (
                        <Badge 
                          key={i} 
                          className={`text-sm py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-110 glass border-primary/20 hover:border-primary/40 hover:bg-primary/10 ${
                            isVisible ? 'opacity-100' : 'opacity-0'
                          }`} 
                          style={{ transitionDelay: `${(idx * 100) + (i * 50)}ms` }}
                          variant="outline"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="glass-strong border-primary/10 hover:border-primary/30 transition-all duration-300 group hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary to-secondary mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">7+</div>
              <div className="text-foreground/80 font-medium">Course Projects</div>
            </CardContent>
          </Card>
          <Card className="glass-strong border-primary/10 hover:border-primary/30 transition-all duration-300 group hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-secondary to-primary mb-4 group-hover:scale-110 transition-transform">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">44+</div>
              <div className="text-foreground/80 font-medium">GitHub Repositories</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
