'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StorySectionProps {
  id: string;
  title: string;
  children: ReactNode;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

export const StorySection: React.FC<StorySectionProps> = ({
  id,
  title,
  children,
  alignment = 'left',
  className = '',
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }
    },
  };

  const getTextAlign = () => {
    switch (alignment) {
      case 'left':
        return 'text-left';
      case 'center':
        return 'text-center';
      case 'right':
        return 'text-right';
      default:
        return 'text-left';
    }
  };

  const getContentAlign = () => {
    switch (alignment) {
      case 'left':
        return 'items-start';
      case 'center':
        return 'items-center';
      case 'right':
        return 'items-end';
      default:
        return 'items-start';
    }
  };

  return (
    <section
      id={id}
      className={`py-24 md:py-32 px-4 md:px-8 ${className}`}
      ref={ref}
    >
      <motion.div
        className={`max-w-7xl mx-auto flex flex-col ${getContentAlign()}`}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
      >
        <div className={`w-full mb-12 ${getTextAlign()}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B4B33] dark:text-green-400 font-heading">
            {title}
          </h2>
          <div className="h-1 w-20 bg-[#1B4B33] dark:bg-green-400 mt-4 mx-auto rounded-full"></div>
        </div>

        <div className="w-full">{children}</div>
      </motion.div>
    </section>
  );
}; 