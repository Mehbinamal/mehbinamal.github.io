import React, { useState, useRef, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import  icu  from './assets/icu.jpg'
import lifeLink from './assets/lifelink.jpg'
import highFive from './assets/highfive.png'
import attendancePal from './assets/AttendancePal.png'
import studyBuddy from './assets/StudyBuddy.png'
import taskFlow from './assets/TaskFlow.png'
import blogApp from './assets/BlogApp.png'
import bookMyBarber from './assets/BookMyBarber.png'
import projectPlaceholder from './assets/project-placeholder.svg'

const Projects = () => {
  const categories = ["All", "Web Development", "Mobile Apps", "Hackathon"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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
      liveLink: "/in-production",
      githubLink: "https://github.com/Mehbinamal/Task-Flow"
    },
    {
      title:"Study Buddy",
      category: "Hackathon",
      image: studyBuddy,
      description: "A Connectivity Platform for students to connect with each other and share their knowledge.",
      technologies: ["React", "Node", "Tailwind CSS", "Firebase" ],
      liveLink: "/in-production",
      githubLink: "/in-production"
    },
    {
      title: "Fake News Detector",
      category: "Web Development",
      image: projectPlaceholder,
      description: "Fake news detection using an ensemble of Logistic Regression, Naive Bayes, SGD Classifier, and SVM with TF-IDF features, plus a FastAPI interface for real-time predictions with confidence scores.",
      technologies: ["Python", "FastAPI", "scikit-learn", "TF-IDF"],
      liveLink: "/in-production",
      githubLink: "/in-production"
    },
    {
      title: "Hey Delulu - CUSAT Valentine's Confessions",
      category: "Web Development",
      image: projectPlaceholder,
      description: "A Valentine's Day confessions website for CUSAT students to share feelings anonymously, with shareable cards and a polished UI.",
      technologies: ["Vite", "React", "TypeScript", "Tailwind CSS"],
      liveLink: "/in-production",
      githubLink: "/in-production"
    },
    {
      title: "CivicLens 🏛️",
      category: "Hackathon",
      image: projectPlaceholder,
      description: "A civic-tech platform for reporting and managing local issues using AI-powered image analysis, with an interactive map and an admin dashboard.",
      technologies: ["React", "Leaflet", "Firebase", "Tailwind CSS"],
      liveLink: "/in-production",
      githubLink: "/in-production"
    },
    {
      title: "CodeTales - GitHub Repository Storyteller",
      category: "Hackathon",
      image: projectPlaceholder,
      description: "A web app that tells the story behind a public GitHub repository by analyzing commit history, contributors, and evolution over time (React frontend + Express API).",
      technologies: ["React", "TypeScript", "Vite", "Express.js"],
      liveLink: "/in-production",
      githubLink: "/in-production"
    },
    {
      title: "Blog App",
      category: "Mobile Apps",
      image: blogApp,
      description: "A blog app that allows users to create, read, update, and delete blogs.",
      technologies: ["Flutter", "Dart", "Django" ],
      liveLink: "/in-production",
      githubLink: "https://github.com/Mehbinamal/BLOG-APPLICATION"
    },
    {
      title: "Book My Barber",
      category: "Web Development",
      image: bookMyBarber,
      description: "A platform that allows users to book a barber for a haircut.",
      technologies: ["React", "Node", "Tailwind CSS", "AWS COGNITO","AWS Dynamo DB" ,"AWS Amplify"],
      liveLink: "https://main.d1oewni5czjv73.amplifyapp.com/",
      githubLink: "https://github.com/Mehbinamal/BookMyBarber"
    }
    
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  // Check scroll position
  const checkScrollButtons = React.useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -340,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 340,
        behavior: 'smooth'
      });
    }
  };

  // Update scroll buttons on scroll and resize
  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      return () => {
        container.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, [filteredProjects, checkScrollButtons]);

  return (
    <section id="projects" className="relative">
      <div className="animated-bg opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <h2 className="section-heading text-3xl md:text-4xl mb-6">Featured Projects</h2>
            <p className="text-sm text-foreground/60">Swipe or use arrows to explore</p>
          </div>
          
          <Tabs defaultValue="All" onValueChange={setActiveCategory}>
            <TabsList className="glass p-1 inline-flex h-auto gap-1 flex-wrap">
              {categories.map(category => (
                <TabsTrigger 
                  key={category} 
                  value={category} 
                  className="px-3 py-1 text-xs data-[state=active]:bg-primary/20 data-[state=active]:text-primary transition-all duration-300 rounded-md"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        
        {/* Horizontal Scroll Layout with Arrow Buttons */}
        <div className="relative">
          {/* Left Arrow Button - Desktop */}
          <Button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:scale-110 transition-all duration-300 items-center justify-center shadow-xl hover:shadow-2xl disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
          </Button>

          {/* Right Arrow Button - Desktop */}
          <Button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:scale-110 transition-all duration-300 items-center justify-center shadow-xl hover:shadow-2xl disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
          </Button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-6 scrollbar-hide -mx-4 px-4 md:px-16 scroll-smooth"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="flex gap-6 min-w-max">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative opacity-0 animate-fade-in-up flex-shrink-0"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  width: 'min(320px, 85vw)',
                  minWidth: 'min(320px, 85vw)'
                }}
              >
                {/* Modern Card Design */}
                <div className="glass rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 h-full flex flex-col hover:shadow-xl hover:shadow-primary/10">
                  {/* Image with Overlay */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <Badge className="text-xs px-2.5 py-1 glass border-primary/30 font-semibold">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute bottom-3 right-3 flex gap-2 z-10">
                      {project.liveLink === '/in-production' ? (
                        <Button 
                          size="sm" 
                          className="bg-gradient-to-r from-primary to-secondary text-white h-8 w-8 p-0 rounded-full hover:scale-110 transition-transform"
                          onClick={() => navigate('/in-production')}
                          aria-label="Coming soon"
                        >
                          <Sparkles className="w-4 h-4" />
                        </Button>
                      ) : (
                        <Button 
                          asChild 
                          size="sm"
                          className="bg-gradient-to-r from-primary to-secondary text-white h-8 w-8 p-0 rounded-full hover:scale-110 transition-transform"
                          aria-label={`View ${project.title} live demo`}
                        >
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {project.githubLink !== '/in-production' && (
                        <Button 
                          asChild 
                          size="sm" 
                          variant="outline"
                          className="glass border-primary/30 h-8 w-8 p-0 rounded-full hover:scale-110 transition-transform"
                          aria-label={`View ${project.title} source code`}
                        >
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <Badge 
                          key={i} 
                          className="text-xs px-2 py-1 glass border-primary/15 hover:border-primary/30 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge className="text-xs px-2 py-1 glass border-primary/15">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

          {/* Mobile Arrow Buttons - Fixed at bottom */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <Button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:scale-110 transition-all duration-300 shadow-lg disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
            </Button>
            <Button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:scale-110 transition-all duration-300 shadow-lg disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
            </Button>
          </div>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/60 text-sm">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
