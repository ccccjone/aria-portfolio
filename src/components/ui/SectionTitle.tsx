'use client';

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  size?: 'sm' | 'md' | 'lg';
}

const SectionTitle = ({ title, subtitle, size = 'md' }: SectionTitleProps) => {
  const sizeClasses = {
    sm: 'text-3xl',
    md: 'text-4xl',
    lg: 'text-5xl'
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-center mb-10"
    >
      <h2 className={`${sizeClasses[size]} font-londrina-solid-bold text-gray-900 mb-3`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 font-londrina-solid-light max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionTitle;