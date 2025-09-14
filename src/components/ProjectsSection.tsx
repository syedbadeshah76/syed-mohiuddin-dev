import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import knowledgeVillageImg from '@/assets/knowledge-village-project.jpg';
import gucciPerfumeImg from '@/assets/gucci-perfume-project.jpg';
import javascriptProjectsImg from '@/assets/javascript-projects.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Knowledge Village Institute",
      description: "A comprehensive educational platform built with React, featuring course management, student enrollment, and interactive learning modules. Designed with modern UI/UX principles for optimal learning experience.",
      image: knowledgeVillageImg,
      technologies: ["React", "JavaScript", "CSS3", "Responsive Design"],
      githubUrl: "https://github.com/syedbadeshah",
      liveUrl: "https://knowledge-village-demo.com",
      featured: true
    },
    {
      title: "Gucci Perfume E-commerce",
      description: "Luxury e-commerce platform showcasing Gucci perfume collection with elegant design, product filtering, shopping cart functionality, and secure checkout process.",
      image: gucciPerfumeImg,
      technologies: ["React", "JavaScript", "CSS3", "E-commerce"],
      githubUrl: "https://github.com/syedbadeshah",
      liveUrl: "https://gucci-perfume-demo.com",
      featured: true
    },
    {
      title: "JavaScript Projects Collection",
      description: "A collection of three creative JavaScript applications: an advanced calculator with scientific functions, a weather dashboard with API integration, and a productivity-focused todo manager.",
      image: javascriptProjectsImg,
      technologies: ["JavaScript", "HTML5", "CSS3", "APIs", "Local Storage"],
      githubUrl: "https://github.com/syedbadeshah",
      liveUrl: "https://js-projects-demo.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-8 items-center animate-fade-up ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group overflow-hidden rounded-lg border border-border hover-lift hover-glow">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button size="sm" variant="outline" className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="card-gradient p-8 rounded-lg border border-border">
                  {project.featured && (
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full mb-4">
                      Featured Project
                    </span>
                  )}
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-accent/10 border border-accent/20 text-accent rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift"
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
                      className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 hover-lift"
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
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift"
            asChild
          >
            <a href="https://github.com/syedbadeshah" target="_blank" rel="noopener noreferrer">
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