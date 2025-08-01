'use client';

import { motion } from 'framer-motion';
import { Experience } from '../../data/experienceData';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  onClick: (experience: Experience) => void;
}

const ExperienceCard = ({ experience, index, onClick }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      onClick={() => onClick(experience)}
      className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden cursor-pointer border border-gray-200/20 hover:border-gray-300/30 transition-all duration-300 shadow-lg hover:shadow-xl w-80 h-96"
      style={{ aspectRatio: '2/3' }}
    >
      <div className="relative h-full flex flex-col">
        <div className="relative h-full overflow-hidden">
          <img
            src={experience.image}
            alt={experience.company}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden w-full h-full bg-gradient-to-br from-blue-500/40 to-purple-500/40 flex items-center justify-center text-white font-bold text-4xl">
            {experience.company.charAt(0)}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-xl font-bold mb-2 line-clamp-1 drop-shadow-lg">
              {experience.company}
            </h3>
            <p className="text-blue-200 font-medium text-base drop-shadow-md">
              {experience.position}
            </p>
            <p className="text-gray-200 text-sm drop-shadow-md">
              {experience.duration}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;