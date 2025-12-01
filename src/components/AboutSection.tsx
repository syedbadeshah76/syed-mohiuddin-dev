import React from 'react';
import { Code, Zap, Users, Award } from 'lucide-react';
import { useScrollAnimation, useStaggeredScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.5 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.3 });
  const { containerRef: highlightsRef, visibleItems } = useStaggeredScrollAnimation(4, 0.2);

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code that follows best practices"
    },
    {
      icon: Zap,
      title: "Fast Execution",
      description: "Delivering high-performance applications with optimal user experience"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach to development with strong communication skills"
    },
    {
      icon: Award,
      title: "Quality Focus",
      description: "Commitment to delivering exceptional results that exceed expectations"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-gradient">About Me</span>
          </h2>
          <p className={`text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 transition-all duration-1000 delay-300 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            A passionate developer dedicated to creating impactful web solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* About Content */}
          <div ref={contentRef} className={`order-2 lg:order-1 transition-all duration-1000 transform ${
            contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I'm a dedicated MERN stack developer with a passion for building innovative web applications 
                that solve real-world problems. My journey in software development has been driven by curiosity 
                and a constant desire to learn and adapt to new technologies.
              </p>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                With expertise in React, Node.js, Express, and MongoDB, I focus on creating user-centric 
                applications that are not only functional but also provide exceptional user experiences. 
                I believe in writing clean, maintainable code and following industry best practices.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, I enjoy exploring new frameworks, contributing to open-source projects, 
                and sharing knowledge with the developer community. I'm always excited to take on new 
                challenges and collaborate on projects that make a difference.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
              {['Problem Solving', 'User Experience', 'Clean Architecture', 'Continuous Learning'].map((skill, index) => (
                <span 
                  key={skill} 
                  className={`px-3 sm:px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm sm:text-base transition-all duration-500 transform ${
                    contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 0.1 + 0.5}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div ref={highlightsRef} className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className={`card-gradient p-4 sm:p-6 rounded-lg border border-border hover-lift hover-glow transition-all duration-1000 transform ${
                  visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="mb-3 sm:mb-4">
                  <highlight.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;