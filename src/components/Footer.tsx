
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground/5 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Portfolio</h3>
            <p className="text-foreground/80 mb-4 max-w-md">
              A showcase of my skills, projects, and professional experience in software development and web design.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-foreground/80 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#experience" className="text-foreground/80 hover:text-primary transition-colors">Experience</a>
              </li>
              <li>
                <a href="#education" className="text-foreground/80 hover:text-primary transition-colors">Education</a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/80 hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-foreground/80 hover:text-primary transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Connect With Me</h3>
            <div className="flex space-x-4 mb-4">
              <a href="www.linkedin.com/in/amal-mehabin-p" className="bg-foreground/10 p-2 rounded-full hover:bg-primary/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://github.com/Mehbinamal" className="bg-foreground/10 p-2 rounded-full hover:bg-primary/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/amal_mehabin" className="bg-foreground/10 p-2 rounded-full hover:bg-primary/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
            <p className="text-foreground/80">Email: contact@example.com</p>

          </div>
        </div>
        
        <div className="border-t border-foreground/10 mt-8 pt-8 text-center">
          <p className="text-foreground/70">© {year} My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
