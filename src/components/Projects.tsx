
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Projects = () => {
  const categories = ["All", "Web Development", "Mobile Apps", "UI/UX Design"];
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1287&auto=format&fit=crop",
      description: "A full-featured e-commerce platform with product management, shopping cart, and secure checkout.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Health & Fitness App",
      category: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1287&auto=format&fit=crop",
      description: "A mobile application for tracking fitness goals, nutrition, and providing personalized workout plans.",
      technologies: ["React Native", "Firebase", "GraphQL"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Financial Dashboard",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1287&auto=format&fit=crop",
      description: "An intuitive dashboard for financial data visualization with real-time updates and interactive charts.",
      technologies: ["Figma", "Adobe XD", "Sketch"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Social Media Analytics",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1287&auto=format&fit=crop",
      description: "A comprehensive analytics platform for tracking social media performance across multiple platforms.",
      technologies: ["Vue.js", "Django", "D3.js", "PostgreSQL"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management System",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1287&auto=format&fit=crop",
      description: "A collaborative task management system with real-time updates and team collaboration features.",
      technologies: ["Angular", "Firebase", "Material UI"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Travel Planning App",
      category: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1287&auto=format&fit=crop",
      description: "A mobile app for planning trips, booking accommodations, and discovering local attractions.",
      technologies: ["Flutter", "Google Maps API", "Firebase"],
      liveLink: "#",
      githubLink: "#"
    },
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
