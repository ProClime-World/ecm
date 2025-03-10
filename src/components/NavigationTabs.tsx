import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Section {
  id: string;
  title: string;
}

const sections: Section[] = [
  { id: 'intro', title: 'Introduction' },
  { id: 'baseline', title: 'Ecosystem Baseline' },
  { id: 'vulnerability', title: 'Climate Vulnerability' },
  { id: 'carbon', title: 'Carbon Sequestration' },
  { id: 'implementation', title: 'Implementation' },
  { id: 'benefits', title: 'Co-Benefits' },
  { id: 'monitoring', title: 'Monitoring' },
];

export const NavigationTabs: React.FC = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : -20 
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-sm"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col">
            {/* Main Title Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 h-20 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center space-x-4">
                <Link href="https://proclime.world" target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center">
                    <Image 
                      src="/images/proclime-logo.png" 
                      alt="ProClime Logo" 
                      width={32} 
                      height={32} 
                      className="mr-2"
                    />
                    <span className="text-xl font-bold text-[#1B4B33] dark:text-green-400">East Coast Mangrove Project</span>
                  </div>
                </Link>
              </div>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Navigation Tabs */}
            <div className="hidden md:flex items-center px-6 h-14 overflow-x-auto">
              <div className="flex space-x-6">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`
                      relative px-3 py-4 text-sm font-medium transition-all duration-300
                      ${
                        activeSection === section.id
                          ? 'text-[#1B4B33]'
                          : 'text-gray-600 hover:text-[#1B4B33] dark:text-gray-300 dark:hover:text-white'
                      }
                    `}
                  >
                    {section.title}
                    {activeSection === section.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1B4B33] rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg border-t border-gray-100 dark:border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`
                    block px-3 py-2 rounded-md text-base font-medium w-full text-left
                    ${
                      activeSection === section.id
                        ? 'bg-green-50 text-[#1B4B33]'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-[#1B4B33]'
                    }
                  `}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.nav>

      {/* Side navigation dots - MOBILE ONLY */}
      <div className="md:hidden fixed right-4 top-1/2 transform -translate-y-1/2 space-y-2 z-40">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`
              w-3 h-3 rounded-full transition-all duration-200
              ${
                activeSection === section.id
                  ? 'bg-[#1B4B33] scale-125'
                  : 'bg-gray-400 hover:bg-gray-600'
              }
            `}
            title={section.title}
          />
        ))}
      </div>
    </>
  );
}; 