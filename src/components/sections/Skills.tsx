'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

const Skills = () => {
  const skills = ['js','ts','react','nextjs','tailwind','nodejs','docker','aws','gcp','cpp','java','figma'];
  
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle 
          title="Tech Stacks" 
          subtitle="Technologies I work with to bring ideas to life"
        />
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="p-4 text-center" delay={index * 0.02}>
                <Image
                  src={`https://skillicons.dev/icons?i=${skill}`}
                  alt={skill}
                  width={40}
                  height={40}
                  className="mx-auto"
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;