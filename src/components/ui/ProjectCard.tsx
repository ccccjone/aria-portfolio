'use client';

import { motion } from 'framer-motion';
import { Project } from '../../data/projectsData';

interface ProjectCardProps {
  project: Project;
  index: number;
  isFocused: boolean;
  onClick: (projectId: number) => void;
}

const ProjectCard = ({ project, index, isFocused, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex-shrink-0 w-96 mx-4 relative overflow-hidden rounded-2xl transition-all duration-500 ${
        isFocused 
          ? 'transform scale-105 shadow-md z-[5]' 
          : 'transform scale-95 cursor-pointer'
      }`}
      onClick={!isFocused ? () => onClick(project.id) : undefined}
      style={{
        transformOrigin: 'center center'
      }}
    >
      {/* Card content */}
      <div className="bg-white/10 backdrop-blur-sm border border-gray-200/20 rounded-2xl overflow-hidden h-[580px] flex flex-col">
        {/* Project image */}
        <div className="relative h-56 overflow-hidden ">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden w-full h-full bg-gradient-to-br from-blue-500/40 to-purple-500/40 flex items-center justify-center text-white font-bold text-4xl">
            {project.title.charAt(0)}
          </div>
        </div>
        
        {/* Card content area */}
        <div className="p-8 flex flex-col flex-1">
          {/* Project title */}
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
          
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex} 
                className="px-2 py-1 bg-blue-500/20 text-blue-700 rounded-md text-xs border border-blue-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Project description */}
          <p className="text-gray-700 text-base leading-relaxed mb-5 flex-1">
            {project.description}
          </p>
          
          {/* Button group */}
          <div className="flex gap-4 mt-auto">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center py-1 px-1 rounded-lg text-base font-medium transition-colors duration-200 ${
                project.status === 'just-github' ? 'flex-1' : 'min-w-[60px]'
              }`}
              onClick={(e) => e.stopPropagation()}
              title="GitHub"
            >
              <img 
                src="/icons/icons8-github.svg" 
                alt="GitHub" 
                className="w-8 h-8 text-gray-700"
              />
              {project.status === 'just-github'}
            </a>
            {project.status !== 'just-github' && (
              <a
                href={project.liveLink || '#'}
                target={project.liveLink ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className={`flex-1 py-3 px-5 rounded-lg text-base font-medium transition-colors duration-200 text-center truncate whitespace-nowrap overflow-hidden ${
                  project.status === 'completed' && project.liveLink
                    ? 'bg-blue-600/80 hover:bg-blue-500/80 text-white border border-blue-500/50'
                    : 'bg-orange-600/60 hover:bg-orange-500/60 text-orange-100 border border-orange-500/50 cursor-not-allowed'
                }`}
                onClick={(e) => e.stopPropagation()}
                title={project.status === 'completed' && project.liveLink ? 'Live View' : 'In Development'}
              >
                {project.status === 'completed' && project.liveLink ? 'Live View' : 'In Development'}
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* White overlay for non-focused cards */}
      {!isFocused && (
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] transition-opacity duration-500" />
      )}
    </motion.div>
  );
};

export default ProjectCard;