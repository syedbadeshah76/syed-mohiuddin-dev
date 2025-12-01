import React from 'react';
import { Code, Palette, Heart, Award, Briefcase, Globe } from 'lucide-react';
import { useScrollAnimation, useStaggeredScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.5 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.3 });
  const { containerRef: skillsRef, visibleItems } = useStaggeredScrollAnimation(6, 0.15);

  const skills = [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'MongoDB', level: 75 },
    { name: 'Tailwind CSS', level: 90 },
  ];

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive, modern web applications with React and Node.js"
    },
    {
      icon: Heart,
      title: "Wedding Websites",
      description: "Creating beautiful, personalized wedding invitation websites"
    },
    {
      icon: Briefcase,
      title: "Freelance Services",
      description: "Custom solutions for businesses and individuals"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing elegant, user-friendly interfaces"
    },
    {
      icon: Globe,
      title: "SEO Optimization",
      description: "Optimizing websites for better search engine visibility"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Delivering pixel-perfect, bug-free solutions"
    }
  ];

  const badges = [
    'MERN Stack', 'React.js', 'JavaScript', 'Tailwind CSS', 
    'Node.js', 'MongoDB', 'Express.js', 'Git'
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16 sm:mb-20">
          <span className={`inline-block px-4 py-2 mb-4 text-sm font-medium text-gold bg-gold/10 border border-gold/20 rounded-full transition-all duration-1000 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            About Me
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="font-display">Know Who</span>{' '}
            <span className="text-gradient">I Am</span>
          </h2>
          <p className={`text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 transition-all duration-1000 delay-300 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            A passionate developer dedicated to creating impactful digital solutions
          </p>
        </div>

        {/* About Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left - Bio Card */}
          <div ref={contentRef} className={`transition-all duration-1000 transform ${
            contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="card-premium p-8 rounded-2xl relative overflow-hidden">
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/20 to-transparent rounded-bl-full" />
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 font-display">
                  Hello, I'm <span className="text-gradient-gold">Syed Badeshah</span>
                </h3>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a dedicated MERN stack developer with a passion for building innovative web applications 
                    that solve real-world problems. My journey in software development has been driven by curiosity 
                    and a constant desire to learn and adapt to new technologies.
                  </p>
                  
                  <p>
                    Specializing in <span className="text-foreground font-medium">Wedding Websites</span> and 
                    <span className="text-foreground font-medium"> Business Solutions</span>, I create beautiful, 
                    responsive digital experiences that leave lasting impressions.
                  </p>

                  <p>
                    When I'm not coding, I enjoy exploring new frameworks, contributing to open-source projects, 
                    and sharing knowledge with the developer community.
                  </p>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 mt-8">
                  {badges.map((badge, index) => (
                    <span 
                      key={badge}
                      className={`px-3 py-1.5 text-sm font-medium bg-primary/10 border border-primary/20 rounded-full text-primary transition-all duration-500 transform hover:bg-primary/20 ${
                        contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${index * 0.05 + 0.5}s` }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Skills */}
          <div className={`transition-all duration-1000 delay-300 transform ${
            contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="card-premium p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Code className="h-5 w-5 text-gold" />
                Technical Skills
              </h3>
              
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{skill.name}</span>
                      <span className="text-gold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-gold rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: contentVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 0.1 + 0.5}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div ref={skillsRef}>
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10 font-display">
            What I <span className="text-gradient">Offer</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`card-premium p-6 rounded-xl hover-lift hover-gold group transition-all duration-700 transform ${
                  visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="h-6 w-6 text-gold" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
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
