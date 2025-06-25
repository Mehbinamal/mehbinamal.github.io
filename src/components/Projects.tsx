
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import  icu  from './assets/icu.jpg'
import lifeLink from './assets/lifelink.jpg'
import highFive from './assets/highfive.png'
import attendancePal from './assets/AttendancePal.png'
import studyBuddy from './assets/studybuddy.png'
import taskFlow from './assets/TaskFlow.png'
import blogApp from './assets/blogApp.png'

const Projects = () => {
  const categories = ["All", "Web Development", "Mobile Apps", "Hackathon"];
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "ICU Patient Monitoring Platform",
      category: "Hackathon",
      image: icu , 
      description: "A real-time monitoring system that allows authorized family members to view ICU patient vitals remotely, enhancing transparency and reducing anxiety.",
      technologies: ["Django", "CSS", "HTML"],
      liveLink: "/404",
      githubLink: "https://github.com/Thejuskuku/SINOVA"
    },
    {
      title: "Lifelink Blood Donation System",
      category: "Web Development",
      image: lifeLink,
      description: "A platform to connect blood donors and recipients efficiently. Includes donor registration, request tracking, and automated alerts for urgent needs.",
      technologies: ["React", "Node", "Tailwind CSS", "Mongo DB" ,"Express"],
      liveLink: "https://life-link-blood-donation-system.vercel.app",
      githubLink: "https://github.com/Mehbinamal/Life-Link-Blood-Donation-System"
    },
    {
      title: "Virtual High-Five Generator",
      category: "Hackathon",
      image: highFive, 
      description: "A light-hearted web app where users can give virtual high-fives by clicking on avatars, accompanied by sound effects.",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://boisterous-tarsier-2548a3.netlify.app/",
      githubLink: "https://github.com/Mehbinamal/Virtual-High-Five-Generator"
    },
    {
      title: "My Attendance Pal",
      category: "Web Development",
      image: attendancePal, 
      description: "A user-friendly attendance management system that lets students and faculty easily track and manage attendance data with Supabase integration.",
      technologies: ["React", "Node", "Tailwind CSS", "Supabse" ],
      liveLink: "https://my-attendance-pal.vercel.app/",
      githubLink: "https://github.com/Mehbinamal/myAttendancePal"
    }
    ,{
      title: "Task Flow",
      category: "Web Development",
      image: taskFlow,
      description: "A task management system that allows users to create, assign, and track tasks.",
      technologies: ["React", "Node", "Tailwind CSS", "Firebase" ],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title:"Study Buddy",
      category: "Hackathon",
      image: studyBuddy,
      description: "A Connectivity Platform for students to connect with each other and share their knowledge.",
      technologies: ["React", "Node", "Tailwind CSS", "Firebase" ],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Blog App",
      category: "Mobile Apps",
      image: blogApp,
      description: "A blog app that allows users to create, read, update, and delete blogs.",
      technologies: ["Flutter", "Dart", "Django" ],
      liveLink: "#",
      githubLink: "#"
    }
    
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">My Projects</h2>

        <Tabs defaultValue="All" onValueChange={setActiveCategory} className="mb-8">
          <TabsList className="w-full overflow-x-auto flex justify-start md:justify-center space-x-2 p-2">
            {categories.map(category => (
              <TabsTrigger key={category} value={category} className="px-4 py-2">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group transition-all duration-300 hover:shadow-lg opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <Button asChild size="sm" variant="secondary">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Source Code</a>
                    </Button>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-foreground/80">{project.description}</p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
