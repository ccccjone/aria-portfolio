'use client';

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import RGBHalo from "../ui/RGBHalo";
import { skillCategories } from "../../data/skillsData";

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Tech Stacks" 
          subtitle="Technologies I work with to bring ideas to life"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-gray-300/50 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300"
            >
              {/* Category Title */}
              <h3 className="text-xl font-semibold font-londrina-solid-bold text-gray-600 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.icon}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                        duration: 0.3, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.02 
                    }}
                    whileHover={{ 
                        scale: 1.15,
                        transition: { duration: 0.2 }
                    }}
                    className="group relative z-10 flex justify-center items-center flex-shrink-0" // ✅ z-10 关键
                    >
                    <RGBHalo size="md" intensity="low" />

                    <div className="relative z-20 flex justify-center items-center w-12 h-12">
                        <img
                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                        alt={skill.name}
                        width="40"
                        height="40"
                        className="transition-all duration-300 rounded-lg drop-shadow-sm object-contain"
                        loading="lazy"
                        />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-600/70 backdrop-blur-md text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-30 shadow-lg"> {/* ✅ z-30 */}
                        {skill.name}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;