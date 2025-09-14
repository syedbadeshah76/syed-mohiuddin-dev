import React from 'react';
import { Code, Zap, Users, Award } from 'lucide-react';

const AboutSection = () => {
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
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer dedicated to creating impactful web solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="animate-slide-in">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a dedicated MERN stack developer with a passion for building innovative web applications 
              that solve real-world problems. My journey in software development has been driven by curiosity 
              and a constant desire to learn and adapt to new technologies.
            </p>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With expertise in React, Node.js, Express, and MongoDB, I focus on creating user-centric 
              applications that are not only functional but also provide exceptional user experiences. 
              I believe in writing clean, maintainable code and following industry best practices.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              When I'm not coding, I enjoy exploring new frameworks, contributing to open-source projects, 
              and sharing knowledge with the developer community. I'm always excited to take on new 
              challenges and collaborate on projects that make a difference.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Problem Solving', 'User Experience', 'Clean Architecture', 'Continuous Learning'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="card-gradient p-6 rounded-lg border border-border hover-lift hover-glow animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <highlight.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
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