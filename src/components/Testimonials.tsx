
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Team Member",
      role: "Hackathon Collaborator",
      content: "Amal is an exceptional developer with a keen eye for detail. His problem-solving skills and dedication to writing clean code make him a valuable team member.",
      rating: 5
    },
    {
      name: "Community Member",
      role: "TinkerHub DCS",
      content: "As Co-Lead, Amal has been instrumental in organizing successful events and fostering a collaborative learning environment. His leadership and technical expertise are truly inspiring.",
      rating: 5
    },
    {
      name: "Peer",
      role: "CUSAT Student",
      content: "Working with Amal on projects has been a great experience. He brings innovative ideas and always delivers high-quality solutions on time.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="relative">
      <div className="animated-bg opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading mx-auto">Testimonials</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mt-4">
            What people say about working with me
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glass-strong border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-primary fill-primary"
                      viewBox="0 0 20 20"
                      aria-label={`${testimonial.rating} stars`}
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-primary/50 mb-4" />
                
                <p className="text-foreground/80 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-primary/10 pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

