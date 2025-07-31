'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  external = false,
  className = '',
  type = 'button',
  disabled = false
}: ButtonProps) => {
  const baseClasses = "font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-gray-600 hover:bg-gray-700 text-white shadow-sm hover:shadow-md",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200",
    ghost: "hover:bg-gray-100 text-gray-700 hover:text-gray-900",
    outline: "border border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50"
  };
  
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  
  const MotionComponent = motion.div;
  
  if (href) {
    return (
      <MotionComponent
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={classes}
        >
          {children}
        </Link>
      </MotionComponent>
    );
  }
  
  return (
    <MotionComponent
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
    >
      <button 
        onClick={onClick} 
        className={classes}
        type={type}
        disabled={disabled}
      >
        {children}
      </button>
    </MotionComponent>
  );
};

export default Button;