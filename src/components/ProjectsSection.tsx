import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation, useStaggeredScrollAnimation } from '@/hooks/useScrollAnimation';
import knowledgeVillageImg from '@/assets/knowledge-village-project.jpg';
import gucciPerfumeImg from '@/assets/gucci-perfume-project.jpg';
import javascriptProjectsImg from '@/assets/javascript-projects.jpg';

const ProjectsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.5 });
  const { containerRef: projectsRef, visibleItems } = useStaggeredScrollAnimation(3, 0.4);

  const projects = [
    {
      title: "Knowledge Village Institute",
      description: "A comprehensive educational platform built with React, featuring course management, student enrollment, and interactive learning modules. Designed with modern UI/UX principles for optimal learning experience.",
      image: knowledgeVillageImg,
      technologies: ["React", "JavaScript", "CSS3", "Responsive Design"],
      githubUrl: "https://github.com/syedbadeshah76/knowledge-village-nexus",
      liveUrl: "https://knowledge-village-institute.onrender.com/",
      featured: true
    },
    {
      title: "Gucci Perfume E-commerce",
      description: "Luxury e-commerce platform showcasing Gucci perfume collection with elegant design, product filtering, shopping cart functionality.",
      image: gucciPerfumeImg,
      technologies: ["React", "JavaScript", "CSS3", "E-commerce"],
      githubUrl: "https://github.com/syedbadeshah76/aroma-perfume/",
      liveUrl: "https://syedbadeshah76.github.io/aroma-perfume/",
      featured: true
    },
    {
      title: "TECHLYNX ",
      description: "Innovating the Future with Cutting Edge Technology",
      image: javascriptProjectsImg,
      technologies: ["JavaScript", "HTML5", "CSS3", "JAVASCRIPT"],
      githubUrl: "https://github.com/syedbadeshah76/techvex-project",
      liveUrl: "https://syedbadeshah76.github.io/techvex-project/",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className={`text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 transition-all duration-1000 delay-300 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div ref={projectsRef} className="space-y-12 lg:space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-6 lg:gap-8 items-center transition-all duration-1000 transform ${
                visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} order-1 lg:order-none`}>
                <div className="relative group overflow-hidden rounded-lg border border-border hover-lift hover-glow">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs sm:text-sm">
                          <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                         <a href={project.liveUrl}> Demo</a>
                        </Button>
                        <Button size="sm" variant="outline" className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 text-xs sm:text-sm">
                          <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                           <a href={project.githubUrl}>  Code </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} order-2 lg:order-none`}>
                <div className="card-gradient p-6 sm:p-8 rounded-lg border border-border">
                  {project.featured && (
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full mb-4">
                      Featured Project
                    </span>
                  )}
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-accent/10 border border-accent/20 text-accent rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground hover-lift"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full sm:w-auto border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 hover-lift"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-muted-foreground mb-6 text-sm sm:text-base">
            Want to see more of my work?
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift"
            asChild
          >
            <a href="https://github.com/syedbadeshah76" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;