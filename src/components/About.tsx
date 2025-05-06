
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
              I am a passionate Computer Science student with a strong interest in web development and machine learning. 
              Currently pursuing my degree, I'm constantly looking for opportunities to apply my knowledge and skills to real-world problems.
            </p>
            
            <p className="text-lg mb-4">
              I enjoy building responsive web applications using modern JavaScript frameworks like React and Vue, 
              and I'm developing my skills in back-end technologies like Node.js and Python. My goal is to create
              clean, efficient code that solves meaningful problems.
            </p>
            
            <p className="text-lg mb-6">
              When I'm not coding or studying, you can find me participating in hackathons, contributing to open-source projects, 
              or leading workshops at our university's coding club. I'm passionate about technology education and helping others learn to code.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="default">
                <a href="#cv" className="inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-background rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-2">3.8</h3>
              <p className="text-foreground/70">GPA</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-2">10+</h3>
              <p className="text-foreground/70">Projects Completed</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-2">5+</h3>
              <p className="text-foreground/70">Hackathons</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-2">2+</h3>
              <p className="text-foreground/70">Student Orgs Led</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
