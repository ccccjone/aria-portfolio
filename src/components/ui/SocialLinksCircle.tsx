
'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { SocialLinkData } from "../../data/socialLinks";

interface SocialLinksCircleProps {
  links: SocialLinkData[];
  radius?: number;
  className?: string;
}

const SocialLinksCircle = ({ 
  links, 
  radius = 180, 
  className = "" 
}: SocialLinksCircleProps) => {
  const hoverColorClasses = {
    blue: 'hover:bg-blue-50 hover:border-blue-300',
    gray: 'hover:bg-gray-50 hover:border-gray-300',
    purple: 'hover:bg-purple-50 hover:border-purple-300',
    red: 'hover:bg-red-50 hover:border-red-300',
    green: 'hover:bg-green-50 hover:border-green-300'
  };

  return (
    <div className={`absolute inset-0 ${className}`}>
      {links.map((link, index) => {
        const angle = (index / links.length) * 2 * Math.PI;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.a
            key={link.href}
            href={link.href}
            target={link.isExternal === false ? undefined : "_blank"}
            rel={link.isExternal === false ? undefined : "noopener noreferrer"}
            title={link.alt}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: index * 0.1 + 0.5,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            whileHover={{ 
              scale: 1.2,
              rotate: 10,
              transition: { duration: 0.1 }
            }}
            className={`
              absolute w-18 h-18 flex items-center justify-center 
              rounded-full bg-white shadow-lg border-2 border-gray-200
              transition-all duration-300 cursor-pointer
              ${link.hoverColor ? hoverColorClasses[link.hoverColor] : 'hover:bg-gray-50'}
            `}
            style={{
              left: `calc(50% + ${x}px - 34px)`,
              top: `calc(50% + ${y}px - 34px)`,
            }}
          >
            {link.icon.startsWith('http') ? (
              <img 
                width="34" 
                height="34" 
                src={link.icon}
                alt={link.alt}
                className="transition-transform duration-300"
              />
            ) : (
              <Image 
                src={link.icon} 
                alt={link.alt} 
                width={34} 
                height={34}
                className="transition-transform duration-300"
              />
            )}
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinksCircle;