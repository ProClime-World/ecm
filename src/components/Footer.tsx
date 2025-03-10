'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f8f9fa] dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <Link href="https://proclime.world" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center">
                <Image 
                  src="/images/proclime-logo.png" 
                  alt="ProClime Logo" 
                  width={40} 
                  height={40} 
                  className="mr-2"
                />
                <span className="text-xl font-semibold text-[#1B4B33]">ProClime</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              A climate-first unified service provider, focused on facilitating a transition to net zero through Carbon Projects, Carbon Trade, and Climate Investments.
            </p>
            <div className="mt-6">
              <Link 
                href="https://proclime.world" 
                target="_blank"
                rel="noopener noreferrer" 
                className="text-[#1B4B33] hover:text-[#2C7A54] font-medium"
              >
                Visit proclime.world →
              </Link>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Project Information
            </h3>
            <ul className="mt-4 space-y-2">
              {['intro', 'baseline', 'vulnerability', 'carbon', 'implementation', 'benefits', 'monitoring'].map((section) => (
                <li key={section}>
                  <a 
                    href={`#${section}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-[#1B4B33] dark:hover:text-green-400"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a 
                  href="mailto:info@proclime.world" 
                  className="text-gray-600 dark:text-gray-400 hover:text-[#1B4B33] dark:hover:text-green-400"
                >
                  info@proclime.world
                </a>
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Sri Lanka's East Coast Mangroves Restoration Project
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Trincomalee, Batticaloa, and Ampara
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} ProClime. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}; 