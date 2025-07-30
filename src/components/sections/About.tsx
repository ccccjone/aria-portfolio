'use client';

import SectionTitle from "../ui/SectionTitle";
import AnimatedDiv from "../ui/AnimatedDiv";
import Card from "../ui/Card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know me better"
        />
        <AnimatedDiv delay={0.2}>
          <Card className="p-8">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Hey there! 👋 I'm Aria, a Full Stack Developer with a Master's degree in Computer Science from the University of the Pacific (GPA 4.0, Phi Kappa Phi). I specialize in building scalable web applications and secure infrastructure that solve real-world problems.
            </p>
          </Card>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default About;