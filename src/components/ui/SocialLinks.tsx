'use client';

import { motion } from "framer-motion";
import Image from "next/image";

interface SocialLinkData {
  href: string;
  icon: string;
  alt: string;
  hoverColor?: 'blue' | 'gray' | 'purple' | 'red' | 'green';
  isExternal?: boolean;
}

interface SocialLinksProps {
  links: SocialLinkData[];
  className?: string;
  delay?: number;
  gap?: string;
  itemDelay?: number; // time lag between each item
}

const SocialLinks = ({ 
  links, 
  className = "flex justify-center gap-6 pt-4", 
  delay = 0.6,
  gap = "gap-6",
  itemDelay = 0.1
}: SocialLinksProps) => {
  const hoverColorClasses = {
    blue: 'hover:bg-blue-50',
    gray: 'hover:bg-gray-50',
    purple: 'hover:bg-purple-50',
    red: 'hover:bg-red-50',
    green: 'hover:bg-green-50'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={className}
    >
      {links.map((link, index) => {
        const linkProps = link.isExternal !== false ? {
          target: "_blank",
          rel: "noopener noreferrer"
        } : {};

        return (
          <motion.a
            key={link.alt}
            href={link.href}
            {...linkProps}
            className={`group relative p-1 lg:p-4 bg-white rounded-2xl ${hoverColorClasses[link.hoverColor || 'blue']} transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-100`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + index * itemDelay }}
          >
            
            {link.icon.startsWith('http') ? (
              <img 
                width="32" 
                height="32" 
                src={link.icon}
                alt={link.alt}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <Image
                src={link.icon}
                alt={link.alt}
                width={32}
                height={32}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            )}
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default SocialLinks;