
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const education = [
    {
      degree: "Higher Secondary (Biology Science)",
      institution: "GHSS KUNNAKKAVU",
      period: "2020 - 2021",
      description: "Studied Biology Science with a strong focus on subjects like Physics, Chemistry, and Biology. Developed analytical and problem-solving skills.",
      achievements: ["98% Marks", "Participated in various quiz competitions"]
    },
    {
      degree: "Master of Science in Computer Science (Integrated MSc)",
      institution: "Cochin University of Science and Technology",
      period: "2023 - Present",
      description: "Currently pursuing a 5-year Integrated MSc in Computer Science with a specialization in AI and Data Science. Gaining expertise in machine learning, data analysis, and web development.",
      achievements: ["Current CGPA: 9.13", "Active Member of TinkerHub DCS"]
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
