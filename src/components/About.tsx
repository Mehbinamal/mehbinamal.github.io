
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Code, Database, Users, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '9.13', label: 'CGPA', icon: Award, color: 'from-primary to-secondary' },
    { value: '7+', label: 'Projects', icon: Code, color: 'from-secondary to-primary' },
    { value: '3+', label: 'Hackathons', icon: Users, color: 'from-primary to-secondary' },
    { value: '2+', label: 'Leadership Roles', icon: Database, color: 'from-secondary to-primary' }
  ];

  return (
    <section id="about" className="relative">
      <div className="animated-bg opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading mx-auto">About Me</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mt-4">
            Get to know more about my journey, passion, and expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 opacity-0 animate-fade-in-up">
            <div className="glass-strong p-8 rounded-2xl">
              <p className="text-lg leading-relaxed text-foreground/90 mb-4">
                I'm <span className="font-semibold text-primary">Amal Mehabin P</span>, a second-year student at 
                <span className="font-semibold"> Cochin University of Science and Technology</span>, pursuing a 5-year 
                Integrated MSc in Computer Science with a specialization in <span className="font-semibold text-primary">AI and Data Science</span>.
              </p>

              <p className="text-lg leading-relaxed text-foreground/90 mb-4">
                I'm primarily a <span className="font-semibold text-primary">back-end developer</span>, passionate about 
                building efficient and scalable systems. I work with technologies like <span className="font-semibold">Node.js</span>, 
                <span className="font-semibold"> Python</span>, and databases like <span className="font-semibold">PostgreSQL</span> 
                and <span className="font-semibold">MongoDB</span> to power web applications.
              </p>

              <p className="text-lg leading-relaxed text-foreground/90">
                Outside of coding, I actively participate in <span className="font-semibold text-primary">hackathons</span>, 
                contribute to <span className="font-semibold">open-source projects</span>, and lead community events as the 
                <span className="font-semibold"> Co-Lead of TinkerHub DCS</span>. I'm driven by a love for learning and 
                helping others grow through tech.
              </p>
            </div>
            
            <Button 
              asChild 
              variant="default"
              size="lg"
              className="group bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50"
            >
              <a 
                href="https://drive.google.com/file/d/17UfmpHcHnE5cykSQfwmo8Ckwmkz7jGwr/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </a>
            </Button>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 opacity-0 animate-fade-in-up animate-delay-200">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="glass-strong p-8 rounded-2xl group hover:scale-105 transition-all duration-300 hover:border-primary/30 border border-primary/10"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold gradient-text mb-2">{stat.value}</h3>
                  <p className="text-foreground/70 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
