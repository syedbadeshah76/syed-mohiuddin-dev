import React from 'react';
import { useScrollAnimation, useStaggeredScrollAnimation } from '@/hooks/useScrollAnimation';

const SkillsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.5 });
  const { containerRef: skillsRef, visibleItems } = useStaggeredScrollAnimation(3, 0.3);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 80 }
      ]
    },
    {
      title: "Backend Development", 
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 75 },
        { name: "JWT Authentication", level: 85 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Firebase", level: 80 }
      ]
    }
  ];

  const additionalSkills = [
    'Responsive Design', 'Cross-browser Compatibility', 'Performance Optimization',
    'SEO Best Practices', 'Agile Development', 'Code Review',
    'Unit Testing', 'Debugging', 'Version Control'
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className={`text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 transition-all duration-1000 delay-300 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`card-gradient p-6 sm:p-8 rounded-lg border border-border hover-lift transition-all duration-1000 transform ${
                visibleItems[categoryIndex] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-primary">
                {category.title}
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className={`transition-all duration-500 transform ${
                    visibleItems[categoryIndex] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${skillIndex * 0.1 + 0.5}s` }}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground text-sm sm:text-base">{skill.name}</span>
                      <span className="text-xs sm:text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5 sm:h-2">
                      <div 
                        className={`bg-gradient-primary h-1.5 sm:h-2 rounded-full transition-all duration-2000 ease-out ${
                          visibleItems[categoryIndex] ? 'w-full' : 'w-0'
                        }`}
                        style={{ 
                          width: visibleItems[categoryIndex] ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 0.1 + 1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto px-4">
            {additionalSkills.map((skill, index) => (
              <span
                key={skill}
                className={`px-4 sm:px-6 py-2 sm:py-3 bg-accent/10 border border-accent/20 rounded-full text-accent font-medium text-sm sm:text-base hover:bg-accent/20 transition-all duration-1000 transform ${
                  titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 0.1 + 0.8}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;