'use client';

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

const Card = ({ children, className = "", hover = true, delay = 0 }: CardProps) => {
  const baseClasses = "bg-white rounded-xl border border-gray-200 shadow-sm";
  const hoverClasses = hover ? "hover:shadow-md hover:border-gray-300" : "";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`${baseClasses} ${hoverClasses} transition-all duration-200 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;