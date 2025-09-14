import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const HeroSection = () => {
  const { ref: heroRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto text-center w-full">
        {/* Hero Content */}
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-gradient block sm:inline">Syed Badeshah</span>
            <br className="hidden sm:block" />
            <span className="text-foreground block sm:inline">Mohiuddin</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 sm:mb-4 font-medium px-4">
            MERN Stack Developer
          </p>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Passionate about crafting user-friendly web applications with React, Node.js, Express, and MongoDB. 
            I transform ideas into powerful digital solutions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4 transition-all duration-1000 delay-300 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 text-base sm:text-lg font-medium hover-lift">
            <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 px-6 sm:px-8 py-3 text-base sm:text-lg font-medium hover-lift">
            <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Download CV
          </Button>
        </div>

        {/* Social Links */}
        <div className={`flex justify-center space-x-4 sm:space-x-6 px-4 transition-all duration-1000 delay-500 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-card/80 hover-lift hover-glow transition-all duration-300"
          >
            <Github className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-card/80 hover-lift hover-glow transition-all duration-300"
          >
            <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="p-2 sm:p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-card/80 hover-lift hover-glow transition-all duration-300"
          >
            <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;