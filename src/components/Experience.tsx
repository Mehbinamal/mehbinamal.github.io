
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: "Lead a team of developers in creating scalable web applications. Architected and implemented microservices using Node.js and React. Improved system performance by 40% through code optimization.",
      technologies: ["React", "Node.js", "AWS", "MongoDB"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2021",
      description: "Developed full-stack web applications with responsive designs. Collaborated with UX/UI designers to implement user-friendly interfaces. Integrated third-party APIs and payment gateways.",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Docker"]
    },
    {
      title: "Frontend Developer",
      company: "WebCraft Agency",
      period: "2016 - 2018",
      description: "Created interactive and responsive user interfaces. Implemented pixel-perfect designs from Figma mockups. Optimized web performance and improved SEO scores.",
      technologies: ["HTML/CSS", "JavaScript", "Sass", "Webpack"]
    }
  ];

  return (
    <section id="experience">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Professional Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="timeline-item opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="border-l-4 border-l-primary">
                <CardHeader className="pb-2">
                  <div className="flex flex-wrap justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="mt-1">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
