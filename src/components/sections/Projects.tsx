'use client';

import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const ProjectCard = ({ title, description, link, delay = 0 }: ProjectCardProps) => {
  return (
    <Card delay={delay} className="p-6 group cursor-pointer">
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          {description}
        </p>
        <div className="inline-flex items-center text-blue-600 group-hover:text-blue-700 font-medium text-sm">
          <span>View Project</span>
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </a>
    </Card>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "We Independent",
      description: "Rebuilt homepage, auth, donation system for a nonprofit using React, Next.js, and PayPal SDK.",
      link: "https://weindependent.org"
    },
    {
      title: "LeetNotify",
      description: "A native macOS app delivering daily LeetCode practice prompts.",
      link: "#projects"
    }
  ];
  
  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Projects" 
          subtitle="A selection of projects I've worked on recently"
        />
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              link={project.link}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;