
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, Award } from 'lucide-react';

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
    <section id="education" className="relative">
      <div className="animated-bg opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading mx-auto">Education</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mt-4">
            My academic background and achievements
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="timeline-item opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="glass-strong border-l-4 border-l-secondary hover:border-l-primary transition-all duration-300 hover:scale-[1.02]">
                <CardHeader className="pb-4">
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-secondary to-primary">
                          <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                        <CardTitle className="text-2xl">{edu.degree}</CardTitle>
                      </div>
                      <p className="text-foreground/70 text-lg font-medium ml-11">{edu.institution}</p>
                    </div>
                    <Badge variant="outline" className="glass border-secondary/20 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-foreground/80 leading-relaxed">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary"
                        className="glass border-secondary/10 hover:border-secondary/30 transition-colors flex items-center gap-2"
                      >
                        <Award className="w-3 h-3" />
                        {achievement}
                      </Badge>
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
