
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
              I'm Amal Mehabin P, a second-year student at Cochin University of Science and Technology, pursuing a 5-year Integrated MSc in Computer Science with a specialization in AI and Data Science.
              I'm mainly a back-end developer, passionate about building efficient and scalable systems.
            </p>

            <p className="text-lg mb-4">
              I work with technologies like Node.js, Python, and databases like PostgreSQL and MongoDB to power web applications. I also enjoy working with APIs, authentication, and deploying back-end services using cloud platforms and tools like Supabase and Docker.
            </p>

            <p className="text-lg mb-6">
              Outside of coding, I actively participate in hackathons, contribute to open-source projects, and lead community events as the Co-Lead of TinkerHub DCS. I’m driven by a love for learning and helping others grow through tech.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="default">
                <a href="https://drive.google.com/file/d/17UfmpHcHnE5cykSQfwmo8Ckwmkz7jGwr/view?usp=sharing" className="inline-flex items-center">
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
              <h3 className="text-2xl font-bold text-primary mb-2">9.08</h3>
              <p className="text-foreground/70">CGPA</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-2">5+</h3>
              <p className="text-foreground/70">Projects Completed</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-2">3+</h3>
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
