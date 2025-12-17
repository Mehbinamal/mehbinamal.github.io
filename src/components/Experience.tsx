
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar } from 'lucide-react';

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
      period: "2024 - 2025",
      description: "Organizing technical workshops, hackathons, and mentorship sessions to foster peer learning. Building partnerships and engaging the tech community to promote coding and innovation.",
      technologies: ["Event Planning", "Community Engagement", "Leadership", "Tech Education"]
    },
    {
      title: "Organizer, Make-A-Ton 7.0",
      company: "CITTIC CUSAT",
      period: "2024",
      description: "Worked in the sponsorship and curation teams of Kerala's Largest Hackathon. Managed outreach to potential sponsors and coordinated with mentors and judges to ensure a successful hackathon experience.",
      technologies: ["Sponsorship Management", "Event Coordination", "Team Collaboration", "Networking"]
    },
    {
      title: "Intern",
      company: "LeaLabs Technologies",
      period: "MAY 2025 - JULY 2025",
      description: "Contributed to the development of advanced Retrieval-Augmented Generation (RAG) systems using the AutoGen library. Integrated Large Language Models (LLMs) for automated data workflows and built supporting applications using Django and Flutter.",
      technologies: ["AutoGen", "LLMs", "RAG Systems", "Django", "Flutter", "Python"]
    },
    {
      title: "Operations Team Member",
      company: "IEDC CUSAT",
      period: "2025 - present",
      description: "Worked in the operations team of IEDC CUSAT. Managed the operations of the club and the events of the club.",
      technologies: ["Operations Management", "Event Coordination", "Team Collaboration", "Networking"]
    }
  ];

  return (
    <section id="experience" className="relative">
      <div className="animated-bg opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading mx-auto">Experience & Leadership</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mt-4">
            My professional journey and leadership roles
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="timeline-item opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="glass-strong border-l-4 border-l-primary hover:border-l-secondary transition-all duration-300 hover:scale-[1.02]">
                <CardHeader className="pb-4">
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary">
                          <Briefcase className="w-5 h-5 text-white" />
                        </div>
                        <CardTitle className="text-2xl">{exp.title}</CardTitle>
                      </div>
                      <p className="text-foreground/70 text-lg font-medium ml-11">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="glass border-primary/20 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-foreground/80 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary"
                        className="glass border-primary/10 hover:border-primary/30 transition-colors"
                      >
                        {tech}
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

export default Experience;
