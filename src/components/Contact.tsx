
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch("https://formsubmit.co/8642331360a92e283baf30f11129a1c5", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Try again later.",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Network Error",
        description: "Please check your connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="animated-bg opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading mx-auto">Get In Touch</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mt-4">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 opacity-0 animate-fade-in-up">
            <div className="glass-strong p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Contact Information</h3>
              <p className="text-lg mb-8 text-foreground/80">
                Feel free to reach out if you have any questions or would like to discuss potential opportunities. 
                I'm always open to new projects and collaborations.
              </p>
              
              <div className="space-y-6">
                <a 
                  href="mailto:mehbinamal6@gmail.com" 
                  className="flex items-center group p-4 rounded-xl glass hover:bg-primary/10 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-secondary mr-4 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email</div>
                    <span className="text-foreground font-medium group-hover:text-primary transition-colors">mehbinamal6@gmail.com</span>
                  </div>
                </a>
                
                <div className="flex items-center p-4 rounded-xl glass">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-secondary to-primary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Location</div>
                    <span className="text-foreground font-medium">Malappuram, Kerala, India</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-strong p-8 rounded-2xl">
              <h4 className="text-xl font-semibold mb-6">Connect With Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/amal-mehabin-p" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-4 rounded-full glass hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
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
                  className="p-4 rounded-full glass hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a> 
                <a 
                  href="https://www.instagram.com/amal_mehabin/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="p-4 rounded-full glass hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="glass-strong border-primary/10 opacity-0 animate-fade-in-up animate-delay-200">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Send Me a Message</CardTitle>
              <CardDescription className="text-foreground/70">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Your Name</label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="John Doe" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      className="glass border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Your Email</label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="john.doe@example.com" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      className="glass border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    placeholder="Project Inquiry" 
                    required 
                    value={formData.subject}
                    onChange={handleChange}
                    className="glass border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="How can I help you?" 
                    rows={5} 
                    required 
                    className="min-h-[120px] glass border-primary/20 focus:border-primary"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
