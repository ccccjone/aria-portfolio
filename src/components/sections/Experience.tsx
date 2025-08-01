'use client';

import { useState, useEffect } from 'react';
import SectionTitle from '../ui/SectionTitle';
import ExperienceCard from '../ui/ExperienceCard';
import ExperienceModal from '../ui/ExperienceModal';
import { experiences, Experience } from '../../data/experienceData';

const ExperienceSection = () => {
  const [selectedCard, setSelectedCard] = useState<Experience | null>(null);

  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCard]);

  const handleCardClick = (experience: Experience) => {
    setSelectedCard(experience);
  };

  const handleCloseCard = () => {
    setSelectedCard(null);
  };

  return (
    <section id="experience" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Experience" 
          subtitle="My professional journey and work experiences"
        />
        
        <div className="flex flex-wrap justify-center gap-10 mt-12">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>

      <ExperienceModal
        experience={selectedCard}
        onClose={handleCloseCard}
      />
    </section>
  );
};

export default ExperienceSection;