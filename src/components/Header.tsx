
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'education', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass-strong shadow-lg border-b border-primary/10' 
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <a 
            href="#home" 
            className="text-2xl font-bold font-display text-primary transition-all duration-300 hover:scale-105"
            aria-label="Home"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            AM
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                  }`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-primary"></span>
                  )}
                </a>
              );
            })}
            <Button 
              asChild 
              variant="outline" 
              className="ml-4 glass hover:bg-primary/10 border-primary/20"
            >
              <a 
                href="https://drive.google.com/file/d/17UfmpHcHnE5cykSQfwmo8Ckwmkz7jGwr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span className="hidden lg:inline">CV</span>
              </a>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg glass hover:bg-primary/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 glass-strong rounded-lg mt-2 mb-2" role="navigation" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                    }`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.name}
                  </a>
                );
              })}
              <Button 
                asChild 
                variant="outline" 
                className="mx-4 mt-2 glass border-primary/20"
              >
                <a 
                  href="https://drive.google.com/file/d/17UfmpHcHnE5cykSQfwmo8Ckwmkz7jGwr/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
