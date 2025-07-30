'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import SocialLinks from "../ui/SocialLinks";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Full Stack Engineer",
    "Frontend Developer",
    "Clean Code Advocate",
    "Data-Driven Thinker", 
    "Lover of Code & Aesthetics",
    "Problem Solver",
    "Builder for a Better World" 
  ];

  // 社交链接数据
  const socialLinks = [
    {
      href: "https://linkedin.com/in/aria-ccui",
      icon: "/icons/icons8-linkedin.svg",
      alt: "LinkedIn",
      hoverColor: "blue" as const
    },
    {
      href: "https://github.com/ccccjone",
      icon: "/icons/icons8-github.svg",
      alt: "GitHub",
      hoverColor: "gray" as const
    },
    {
      href: "https://discordapp.com/users/ccccjone",
      icon: "/icons/icons8-discord.svg",
      alt: "Discord",
      hoverColor: "purple" as const
    },
    {
      href: "mailto:ccjwcui@gmail.com",
      icon: "/icons/icons8-email.svg",
      alt: "Email",
      hoverColor: "red" as const,
      isExternal: false
    },
    {
      href: "https://drive.google.com/file/d/1rFL5wrfoSdZwPOD36E3zzjyBIMeE-Bw0/view?usp=sharing",
      icon: "https://img.icons8.com/wired/64/resume.png",
      alt: "Resume",
      hoverColor: "green" as const
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-2"
          >
            <p className="text-2xl text-gray-600 font-londrina-solid-light tracking-wide">
              Hello, I'm
            </p>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-londrina-shadow font-bold text-gray-900 tracking-tight"
          >
            Aria Cui
          </motion.h1>

          {/* Dynamic Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="h-16 flex items-center justify-center"
          >
            <motion.h2
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-londrina-solid-bold font-semibold text-blue-600 tracking-wide"
            >
              {roles[currentRole]}
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 leading-relaxed max-w-5xl mx-auto"
          >
            I create meaningful software that solves real problems and makes <span className="font-semibold text-gray-900 bg-yellow-100 px-2 py-1 rounded">technology more human</span>.
          </motion.p>

          {/* Avatar with enhanced effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative flex justify-center items-center py-8 group"
          >
            {/* Avatar Background */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-0"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="w-52 h-52 rounded-full bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 blur-md opacity-40"
                animate={{
                  scale: [1, 1.37, 1],
                  opacity: [0.25, 0.45, 0.25]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Avatar */}
            <div className="relative z-10 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-blue-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-white relative group">
                <Image
                  src="/aria-avatar.png"
                  alt="Aria Cui"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <SocialLinks links={socialLinks} />
        </div>
      </div>
    </section>
  );
};

export default Hero;