import React from 'react';
import { motion } from 'framer-motion';

interface TimelinePhase {
  title: string;
  duration: string;
  activities: string[];
}

const phases: TimelinePhase[] = [
  {
    title: "Project Planning and Design Phase",
    duration: "From 1st to 7th Month",
    activities: [
      "Baseline Survey & Analysis",
      "Local Stakeholder Consultation",
      "Project boundary definition",
      "Nursery SOP and Training",
      "Nursery establishment with community and Women SHGs",
      "Engage & build the capacity of the Field Staff"
    ]
  },
  {
    title: "Initial Implementation Phase",
    duration: "From 8th to 72th Month",
    activities: [
      "Registry Listing",
      "Training and capacity building of the Nursery community",
      "Implement restoration activities",
      "Develop a monitoring plan",
      "Estimate GHG emissions reductions & removals",
      "Co-benefits assessments"
    ]
  },
  {
    title: "Ongoing Implementation Phase",
    duration: "From 73rd - 480th Month (Up to 40 years)",
    activities: [
      "Monitor and document the activities",
      "Monitoring report",
      "Validation & Verification",
      "GHG emissions reductions & removals assessment",
      "Co-benefits assessments",
      "Monetization of Verified Carbon Units"
    ]
  },
  {
    title: "Closing Phase",
    duration: "(40th year)",
    activities: [
      "Committee Formation",
      "Final project report",
      "Project closure",
      "Post-project monitoring (optional)"
    ]
  }
];

const Timeline: React.FC = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-lg text-gray-700 mb-8"
      >
        Project follows a comprehensive framework for developing and implementing land management projects that deliver tangible benefits for climate, communities, and biodiversity.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {phases.map((phase, index) => (
          <motion.div
            key={phase.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="bg-primary p-4">
              <h3 className="text-lg font-bold text-white mb-2">{phase.title}</h3>
              <p className="text-sm text-white/80">{phase.duration}</p>
            </div>
            <div className="p-4">
              <ul className="space-y-3">
                {phase.activities.map((activity, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                    className="flex items-start space-x-2"
                  >
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{activity}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline; 