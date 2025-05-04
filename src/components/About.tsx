
import React from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg mb-4">
              I am a passionate Full-Stack Developer with a strong foundation in both front-end and back-end technologies. 
              My journey in software development started 5 years ago, and I've been building robust, scalable applications ever since.
            </p>
            
            <p className="text-lg mb-4">
              I specialize in creating responsive web applications with modern JavaScript frameworks like React and Vue, 
              paired with powerful back-end technologies such as Node.js and Python. I'm committed to writing clean, 
              maintainable code that solves real-world problems.
            </p>
            
            <p className="text-lg mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or hiking in the great outdoors. I believe in continuous learning and pushing the boundaries of what's possible in tech.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="default">
                <a href="#cv" className="inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download CV
                </a>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-background rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-2">5+</h3>
              <p className="text-foreground/70">Years of Experience</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-2">50+</h3>
              <p className="text-foreground/70">Projects Completed</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-2">30+</h3>
              <p className="text-foreground/70">Happy Clients</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-2">10+</h3>
              <p className="text-foreground/70">Awards Received</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
