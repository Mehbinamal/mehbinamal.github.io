import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const InProduction = () => {
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleConnectClick = () => {
    navigate('/', { state: { scrollToContact: true } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 dark:bg-blue-400/20 rounded-full animate-bounce" style={{ animationDuration: '3s', animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200/30 dark:bg-purple-400/20 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-green-200/30 dark:bg-green-400/20 rounded-full animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-yellow-200/30 dark:bg-yellow-400/20 rounded-full animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>

        {/* Animated Gears */}
        <div className="absolute top-1/4 right-10">
          <div className="w-24 h-24 border-4 border-gray-300/40 dark:border-gray-600/40 rounded-full animate-spin" style={{ animationDuration: '8s' }}>
            <div className="absolute inset-2 border-2 border-gray-400/30 dark:border-gray-500/30 rounded-full">
              <div className="absolute inset-2 border border-gray-500/20 dark:border-gray-400/20 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-1/4 left-16">
          <div className="w-16 h-16 border-4 border-indigo-300/40 dark:border-indigo-600/40 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
            <div className="absolute inset-1 border-2 border-indigo-400/30 dark:border-indigo-500/30 rounded-full">
              <div className="absolute inset-1 border border-indigo-500/20 dark:border-indigo-400/20 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute top-1/3 left-1/4 opacity-20 dark:opacity-10">
          <div className="animate-pulse" style={{ animationDuration: '2s' }}>
            <div className="text-2xl font-mono text-gray-600 dark:text-gray-400">&lt;/&gt;</div>
          </div>
        </div>

        <div className="absolute top-2/3 right-1/4 opacity-20 dark:opacity-10">
          <div className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }}>
            <div className="text-xl font-mono text-gray-600 dark:text-gray-400">{ }</div>
          </div>
        </div>

        {/* Gradient Mesh */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent dark:via-white/2 animate-pulse" style={{ animationDuration: '4s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Card Container */}
          <Card className={`backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border-0 shadow-2xl transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <CardContent className="p-8 md:p-12">
              
              {/* Construction Icon */}
              <div className={`mb-8 transform transition-all duration-1000 delay-300 ${mounted ? 'scale-100 rotate-0' : 'scale-50 rotate-180'}`}>
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg">
                  <span className="text-4xl animate-bounce" style={{ animationDuration: '2s' }}>🚧</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className={`text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 transform transition-all duration-1000 delay-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                This Project is Still in Production
              </h1>

              {/* Subtitle with Animation */}
              <div className={`mb-8 transform transition-all duration-1000 delay-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="relative inline-block">
                  <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                    We're working hard to bring this idea to life.
                  </p>
                                     <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Description */}
              <p className={`text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed transform transition-all duration-1000 delay-900 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                Exciting things are on the way! ✨ This project is being crafted with attention to detail and cutting-edge technology.
              </p>

              {/* Call to Action Section */}
              <div className={`mb-8 transform transition-all duration-1000 delay-1100 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Want to know more or get early access?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Let's connect! 🚀
                </p>
              </div>

              {/* Action Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-1300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <Button 
                  onClick={handleConnectClick}
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Connect with Me
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Button>

                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('mailto:mehbinamal6@gmail.com', '_blank')}
                  className="group border-2 border-indigo-300 dark:border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    Stay in the Loop
                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                </Button>
              </div>

              {/* Social Links */}
              <div className={`mt-10 pt-8 border-t border-gray-200 dark:border-gray-700 transform transition-all duration-1000 delay-1500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Or connect with me on social media</p>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://www.linkedin.com/in/amal-mehabin-p" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/mehbinamal" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/amal_mehabin/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full hover:from-purple-200 hover:to-pink-200 dark:hover:from-purple-800/50 dark:hover:to-pink-800/50 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Rocket Animation */}
          <div className={`mt-12 transform transition-all duration-1000 delay-1700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block animate-bounce" style={{ animationDuration: '3s' }}>
              <span className="text-6xl">🚀</span>
            </div>
          </div>

        </div>
      </div>


    </div>
  );
};

export default InProduction;
