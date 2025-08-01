'use client';

import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import AnimatedDiv from "../ui/AnimatedDiv";
import Card from "../ui/Card";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know me better"
        />
        
        <div className="grid grid-cols-12 gap-8">
          <AnimatedDiv delay={0.2} direction="left" className="col-span-12 md:col-span-4">
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white h-[600px] sticky top-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/aria-about-image.png"
                alt="Aria Cui"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </motion.div>
          </AnimatedDiv>
          
          <AnimatedDiv delay={0.3} direction="right" className="col-span-12 md:col-span-8">
            <Card className="p-0 h-[600px] overflow-hidden">
              <div className="p-8 h-full overflow-y-auto">
                <div className="prose prose-lg max-w-none">
                  
                  {/* title */}
                  <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
                      👋 <span className="ml-2">Hi, I'm Aria</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      A passionate <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">Full Stack Developer</span> with a Master's degree in Computer Science (GPA 4.0, Phi Kappa Phi) from the University of the Pacific.
                    </p>
                  </div>

                  {/* subtitle */}
                  <div className="bg-gray-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
                    <p className="text-gray-700 italic text-lg leading-relaxed m-0">
                      "I'm passionate about building thoughtful, scalable applications that make technology more human."
                    </p>
                  </div>

                  {/* skills */}
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                      💻 <span className="ml-2">Technical Expertise</span>
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      I work across the full stack with modern technologies, focusing on clean code, intuitive interfaces, and shipping features that actually help people.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {['React', 'Next.js', 'TypeScript', 'Node.js', 'Docker', 'AWS', 'GCP', 'CI/CD'].map((tech) => (
                        <span key={tech} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* security */}
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                      🔐 <span className="ml-2">Security Focus</span>
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      I bring a systems-thinking mindset and integrate security early into development, with hands-on experience using tools like <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">Kali Linux</code>, <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">Wireshark</code>, and <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">Nmap</code>.
                    </p>
                  </div>

                  {/* work */}
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                      🤝 <span className="ml-2">Professional Experience</span>
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      My past roles at <span className="font-medium text-gray-900">TP-Link</span> and <span className="font-medium text-gray-900">Sacred Sun</span> taught me how to collaborate across functions, align engineering with business goals, and launch impactful enterprise tools.
                    </p>
                  </div>

                  {/* available */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <h2 className="text-xl font-semibold text-green-800 mb-2 flex items-center">
                      🚀 <span className="ml-2">Currently Available</span>
                    </h2>
                    <p className="text-green-700 leading-relaxed m-0">
                      I'm currently open to full-time roles as a <strong>Software Engineer</strong> or <strong>Full Stack Developer</strong>. If you're looking for someone who builds with care and thinks end-to-end — let's connect!
                    </p>
                  </div>

                  {/* hobby */}
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                      🎮 <span className="ml-2">Beyond Coding</span>
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      When I'm not coding, I'm probably out on a hiking trail, tracing new corners of the world like a curious cartographer, lost in melodies or deep into a beautifully crafted game world.
                    </p>
                  </div>

                </div>
              </div>
            </Card>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
};

export default About;