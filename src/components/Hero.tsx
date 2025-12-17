
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import profileImg from './assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="animated-bg"></div>
      
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4 opacity-0 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Available for opportunities</span>
            </div>
            
            <h2 className="text-xl md:text-2xl font-medium text-primary/80 opacity-0 animate-fade-in">
              Hello, I'm
            </h2>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight opacity-0 animate-fade-in animate-delay-100">
              <span className="gradient-text">Amal</span>
              <br />
              <span className="gradient-text">Mehabin P</span>
            </h1>
            
            <div className="space-y-4 opacity-0 animate-fade-in animate-delay-200">
              <p className="text-2xl md:text-3xl font-semibold text-foreground/90">
                Computer Science Student
              </p>
              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto lg:mx-0">
                Passionate about building innovative web solutions, exploring AI & ML, 
                and creating clean, efficient code. Currently pursuing Integrated MSc in CS 
                with specialization in AI & Data Science.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-0 animate-fade-in animate-delay-300">
              <Button 
                asChild 
                size="lg" 
                className="group bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Get in touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="group glass hover:bg-primary/10 border-primary/20"
              >
                <a href="#projects" className="flex items-center gap-2">
                  View projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="ghost" 
                size="lg"
                className="group"
              >
                <a 
                  href="https://drive.google.com/file/d/17UfmpHcHnE5cykSQfwmo8Ckwmkz7jGwr/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 justify-center lg:justify-start opacity-0 animate-fade-in animate-delay-400">
              <a 
                href="https://www.linkedin.com/in/amal-mehabin-p" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-full glass hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="https://github.com/mehbinamal" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-full glass hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/amal_mehabin/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="p-3 rounded-full glass hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative opacity-0 animate-fade-in animate-delay-500">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary blur-2xl opacity-50 animate-pulse-glow"></div>
              
              {/* Profile Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-strong border-2 border-primary/20 pulse-glow">
                <img 
                  src={profileImg} 
                  alt="Amal Mehabin P - Computer Science Student" 
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full text-sm font-semibold animate-float">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Full Stack Dev
                </span>
              </div>
              <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-full text-sm font-semibold animate-float" style={{ animationDelay: '1s' }}>
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  AI Enthusiast
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
