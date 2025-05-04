
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/40 z-0"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-xl md:text-2xl font-medium text-primary opacity-0 animate-fade-in">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 opacity-0 animate-fade-in animate-delay-100">
              John Doe
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-0 animate-fade-in animate-delay-200">
              Full-Stack Developer
            </p>
            <p className="text-lg mb-8 text-foreground/80 max-w-lg opacity-0 animate-fade-in animate-delay-300">
              I create elegant and efficient solutions for complex problems. With expertise in modern web technologies, 
              I bring ideas to life through clean, maintainable code and intuitive user experiences.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in animate-delay-400">
              <Button asChild size="lg">
                <a href="#contact">Get in touch</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">View my work</a>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl opacity-0 animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
