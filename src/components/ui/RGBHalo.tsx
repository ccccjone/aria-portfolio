'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface RGBHaloProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const RGBHalo = ({
  size = 'md',
  intensity = 'medium',
  className = ''
}: RGBHaloProps) => {
  const colorPool = [
    'rgba(99, 102, 241, 0.4)',   // indigo
    'rgba(236, 72, 153, 0.4)',   // pink
    'rgba(34, 197, 94, 0.4)',    // green
    'rgba(253, 224, 71, 0.4)',   // yellow
    'rgba(59, 130, 246, 0.4)',   // blue
    'rgba(244, 114, 182, 0.4)',  // rose
    'rgba(168, 85, 247, 0.4)',   // purple
  ];

  // randomize color selection
  const colors = useMemo(() => {
    const shuffled = [...colorPool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }, []);

  const sizeMap = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40',
  }[size];

  const opacityMap = {
    low: 'group-hover:opacity-40',
    medium: 'group-hover:opacity-70',
    high: 'group-hover:opacity-90',
  }[intensity];

  return (
    <div className={`absolute ${sizeMap} rounded-full opacity-0 ${opacityMap} transition duration-500 ${className}`}>
      {/* outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full blur-sm"
        style={{
          background: `radial-gradient(circle, ${colors[0]} 20%, ${colors[1]} 60%, ${colors[2]} 90%, rgba(255,255,255,0.01) 100%)`,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* center point */}
      <motion.div
        className="absolute inset-4 rounded-full blur-xs"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 80%)'
        }}
        animate={{
          scale: [0.9, 1.1, 0.9],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </div>
  );
};

export default RGBHalo;