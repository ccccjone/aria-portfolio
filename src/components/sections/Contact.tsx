'use client';

import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import AnimatedDiv from "../ui/AnimatedDiv";
import Card from "../ui/Card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle 
          title="Let's Work Together" 
          subtitle="Looking for full-time roles as a Software Engineer or Full Stack Developer. Let's chat!"
        />
        
        <AnimatedDiv delay={0.2}>
          <Card className="p-8 text-center">
            <p className="text-lg text-gray-700 mb-6">
              I'm always interested in hearing about new opportunities and interesting projects.
            </p>
            
            <Button href="mailto:ccjwcui@email.com" variant="primary" size="lg">
              Get In Touch
            </Button>
          </Card>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default Contact;