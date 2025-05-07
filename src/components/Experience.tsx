
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "NSS Leader",
      company: "GHSS KUNNAKKAVU (Plus Two)",
      period: "2020 - 2022",
      description: "Led social outreach initiatives as part of the National Service Scheme. Coordinated campus clean-up drives, awareness campaigns, and community service programs, fostering leadership and team collaboration.",
      technologies: ["Leadership", "Community Outreach", "Team Management"]
    },
    {
      title: "Co-Lead, TinkerHub DCS",
      company: "Cochin University of Science and Technology",
      period: "2024 - Present",
      description: "Organizing technical workshops, hackathons, and mentorship sessions to foster peer learning. Building partnerships and engaging the tech community to promote coding and innovation.",
      technologies: ["Event Planning", "Community Engagement", "Leadership", "Tech Education"]
    },
    {
      title: "Organizer, Make-A-Ton 7.0",
      company: "IEDC CUSAT,CITTIC CUSAT",
      period: "2024",
      description: "Worked in the sponsorship and curation teams of Kerala’s Largest Hackathon. Managed outreach to potential sponsors and coordinated with mentors and judges to ensure a successful hackathon experience.",
      technologies: ["Sponsorship Management", "Event Coordination", "Team Collaboration", "Networking"]
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
