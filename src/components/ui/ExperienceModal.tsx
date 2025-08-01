'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { Experience } from '../../data/experienceData';

interface ExperienceModalProps {
  experience: Experience | null;
  onClose: () => void;
}

const ExperienceModal = ({ experience, onClose }: ExperienceModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !experience) return null;

  const modalContent = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        style={{ 
          zIndex: 60,
          overflow: 'hidden'
        }}
      >
        <motion.div
          initial={{ 
            scale: 0.8, 
            rotateY: -180,
            opacity: 0
          }}
          animate={{ 
            scale: 1, 
            rotateY: 0,
            opacity: 1
          }}
          exit={{ 
            scale: 0.8, 
            rotateY: 180,
            opacity: 0
          }}
          transition={{ 
            duration: 0.6,
            type: "spring",
            stiffness: 100
          }}
          onClick={(e) => e.stopPropagation()}
          className="bg-gray-900/95 backdrop-blur-md rounded-3xl max-w-2xl w-full max-h-[85vh] border border-gray-700/50 shadow-2xl flex flex-col"
          style={{ perspective: '1000px' }}
        >
          {/* Header */}
          <div className="flex-shrink-0 p-6 border-b border-gray-700/30">
            <div className="flex items-center gap-4">
              <img
                src={experience.image}
                alt={experience.company}
                className="w-16 h-16 object-cover rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-16 h-16 bg-gray-600/50 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                {experience.company.charAt(0)}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white">
                  {experience.company}
                </h2>
                <p className="text-blue-300 font-medium">
                  {experience.position}
                </p>
                <p className="text-gray-400 text-sm">
                  {experience.duration}
                </p>
              </div>
              
              <button
                onClick={onClose}
                className="w-8 h-8 bg-gray-700/50 hover:bg-gray-600/50 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors duration-200 flex-shrink-0"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6" style={{ scrollbarWidth: 'thin' }}>
            <div>
              <p className="text-gray-300 leading-relaxed">
                {experience.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Responsibilities
              </h3>
              <ul className="space-y-2">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-2">
                    <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Achievements
              </h3>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-2">
                    <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default ExperienceModal;