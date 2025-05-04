
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      period: "2014 - 2016",
      description: "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on Neural Networks for Natural Language Processing.",
      achievements: ["GPA: 3.9/4.0", "Dean's List", "Research Assistant"]
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Massachusetts Institute of Technology",
      period: "2010 - 2014",
      description: "Focused on software development methodologies and programming paradigms. Participated in numerous hackathons and coding competitions.",
      achievements: ["GPA: 3.8/4.0", "Scholarship Recipient", "First Place in Coding Competition"]
    },
    {
      degree: "Advanced Certification in Cloud Computing",
      institution: "AWS Academy",
      period: "2018",
      description: "Comprehensive training in AWS services and cloud architecture. Hands-on experience with deploying scalable applications on AWS.",
      achievements: ["AWS Certified Solutions Architect", "AWS Certified Developer"]
    }
  ];

  return (
    <section id="education" className="bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Education</h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="timeline-item opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="border-l-4 border-l-primary">
                <CardHeader className="pb-2">
                  <div className="flex flex-wrap justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                    <Badge variant="outline" className="mt-1">
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <Badge key={i} variant="secondary">{achievement}</Badge>
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

export default Education;
