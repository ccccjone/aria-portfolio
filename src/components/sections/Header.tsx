'use client';

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <>
      <header className="fixed w-full bg-white/20 backdrop-blur-lg z-50 h-20 p-4">
        <div className="font-londrina-solid-light flex flex-row justify-between items-center">
        {/* My Logo */}
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-start h-full "
        >
            <Link href="#" className="block">
            <Image
                src="/aria-logo-header.png"
                alt="Aria Cui Logo"
                width={120}
                height={40}
                className="h-full w-auto object-contain justify-center flex items-center"
                priority
            />
            </Link>
        </motion.div>
        
        {/* My Nav */}
        <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex justify-end items-center"
        >
            {navItems.map((item, index) => (
            <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
            >
                <Link
                href={`#${item.toLowerCase()}`}
                className="px-3 py-2 text-lg font-nanum text-gray-700 hover:text-gray-900 hover:bg-white/30 rounded-lg "
                >
                {item}
                </Link>
            </motion.li>
            ))}
        </motion.ul>

        {/* Hamburger Menu */}
        <div className="md:hidden">
            <button 
            onClick={toggleMobileMenu}
            className="p-3 text-gray-600 hover:text-gray-900 hover:bg-white/30 rounded-md transition-all duration-200"
            aria-label="Toggle mobile menu"
            >
            <Image
                src="/icons/icons8-hamburger-menu.svg"
                alt="Menu"
                width={24}
                height={24}
                className="w-6 h-6"
            />
            </button>
        </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200 z-40 md:hidden"
          >
            <nav className="max-w-6xl mx-auto px-6 py-4">
              <ul className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={`#${item.toLowerCase()}`}
                      onClick={handleNavClick}
                      className="block px-4 py-3 text-lg font-nanum text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Mask */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMobileMenu}
            className="fixed inset-0 bg-black/20 z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;