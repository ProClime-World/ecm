'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="relative h-screen min-h-[600px] max-h-[800px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center items-center mb-6">
            <Image 
              src="/images/proclime-logo.png" 
              alt="ProClime Logo" 
              width={60} 
              height={60} 
              className="bg-white/90 p-2 rounded-full shadow-lg"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight font-heading">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <a
            href="#intro"
            className="inline-flex items-center px-8 py-4 bg-[#1B4B33] hover:bg-[#2C7A54] text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Project
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg 
            className="w-10 h-10 text-white opacity-70" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}; 