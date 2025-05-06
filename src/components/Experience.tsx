
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Tech Innovations Inc.",
      period: "Summer 2024",
      description: "Assisted in developing web applications with React and Node.js. Collaborated with the team to implement new features and fix bugs. Participated in daily stand-up meetings and gained hands-on experience with industry tools.",
      technologies: ["React", "Node.js", "Git", "Agile"]
    },
    {
      title: "Student Researcher",
      company: "University Computer Science Department",
      period: "2023 - Present",
      description: "Working on a research project focusing on machine learning applications for natural language processing. Implementing algorithms and collecting data for analysis.",
      technologies: ["Python", "TensorFlow", "Data Analysis", "Research"]
    },
    {
      title: "President, Coding Club",
      company: "University Student Organization",
      period: "2022 - Present",
      description: "Leading weekly coding workshops and hackathon events for 50+ members. Organizing guest speaker sessions with industry professionals. Managing club budget and coordinating with other student organizations.",
      technologies: ["Leadership", "Event Planning", "Teaching", "Community Building"]
    }
  ];

  return (
    <section id="experience">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Experience & Leadership</h2>
        
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
