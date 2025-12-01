import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const services = [
    'Wedding Websites',
    'Business Websites',
    'E-commerce Solutions',
    'Web Applications'
  ];

  return (
    <>
      <footer className="relative py-16 px-4 border-t border-border bg-card/50">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold font-display mb-4">
                <span className="text-gradient-gold">Syed Badeshah</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Web Developer & Wedding Website Designer. Creating premium digital experiences that leave lasting impressions.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="https://github.com/syedbadeshah76"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-muted/50 border border-border hover:border-gold/50 hover:bg-gold/10 transition-all duration-300 group"
                >
                  <Github className="h-5 w-5 group-hover:text-gold transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/syed-badeshah-mohiuddin-a30805367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-muted/50 border border-border hover:border-gold/50 hover:bg-gold/10 transition-all duration-300 group"
                >
                  <Linkedin className="h-5 w-5 group-hover:text-gold transition-colors" />
                </a>
                <a
                  href="mailto:badeshah786@gmail.com"
                  className="p-3 rounded-xl bg-muted/50 border border-border hover:border-gold/50 hover:bg-gold/10 transition-all duration-300 group"
                >
                  <Mail className="h-5 w-5 group-hover:text-gold transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <button 
                      onClick={() => scrollToSection(link.toLowerCase())}
                      className="text-muted-foreground hover:text-gold transition-colors duration-300"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a href="mailto:badeshah786@gmail.com" className="hover:text-gold transition-colors">
                    badeshah786@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+919573362314" className="hover:text-gold transition-colors">
                    +91 9573362314
                  </a>
                </li>
                <li>Hyderabad, India</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm flex items-center gap-1">
                © {currentYear} Syed Badeshah. Made with 
                <Heart className="h-4 w-4 text-gold fill-gold" />
                in India
              </p>
              <p className="text-muted-foreground text-sm">
                Web Developer • Wedding Website Designer • Freelancer
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full btn-gold shadow-gold transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        size="icon"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </>
  );
};

export default Footer;
