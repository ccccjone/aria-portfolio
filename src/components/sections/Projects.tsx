'use client';

import { useState, useEffect } from 'react';
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { projects } from '../../data/projectsData';

const Projects = () => {
  const [focusedProjectId, setFocusedProjectId] = useState(projects[0]?.id || 0);
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
      }
    };

    handleResize();
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handlePrevious = () => {
    const currentIndex = projects.findIndex(p => p.id === focusedProjectId);
    const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    setFocusedProjectId(projects[prevIndex].id);
  };

  const handleNext = () => {
    const currentIndex = projects.findIndex(p => p.id === focusedProjectId);
    const nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    setFocusedProjectId(projects[nextIndex].id);
  };

  const handleCardClick = (projectId: number) => {
    setFocusedProjectId(projectId);
  };

  const focusedIndex = projects.findIndex(p => p.id === focusedProjectId);

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="Projects" 
          subtitle="A selection of projects I've worked on recently"
        />
        
        <div className="relative mt-10">
          <div className="overflow-hidden relative py-6">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(50% - ${focusedIndex * (windowWidth < 640 ? 336 : 416) + (windowWidth < 640 ? 168 : 208)}px))`,
              }}
            >
              {projects.map((project, index) => {
                const isFocused = project.id === focusedProjectId;
                
                return (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    isFocused={isFocused}
                    onClick={(projectId: number) => handleCardClick(projectId)}
                  />
                );
              })}
            </div>
          </div>
          
          <div className="flex justify-center items-center gap-8 mt-8">
            <button
              onClick={handlePrevious}
              className="p-3 bg-gray-800/30 rounded-full hover:bg-gray-800/50 transition-all duration-200 text-white hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            
            <button
              onClick={handleNext}
              className="p-3 bg-gray-800/30 rounded-full hover:bg-gray-800/50 transition-all duration-200 text-white hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
