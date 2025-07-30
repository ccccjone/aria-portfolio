'use client';

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedDivProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

const AnimatedDiv = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  className = ""
}: AnimatedDivProps) => {
  const directionMap = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;