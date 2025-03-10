'use client';

import React from 'react';
import Image from 'next/image';

export const MonitoringVerification: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Monitoring & Verification Framework</h3>
          <p className="mb-4">
            Following VM0033 Verra methodology requirements for "Tidal Wetland and Seagrass Restoration," 
            our comprehensive monitoring framework ensures accurate carbon accounting, ecological restoration 
            success, and transparent reporting.
          </p>
          
          <div className="bg-white/80 p-4 rounded-lg shadow my-6">
            <h4 className="font-bold text-primary">Carbon Stock Monitoring</h4>
            <p className="mb-2">Adhering to VM0033 methodology, we measure and monitor:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Above-ground biomass (trees, shrubs)</li>
              <li>Below-ground biomass (roots)</li>
              <li>Soil organic carbon</li>
              <li>Dead wood and litter</li>
              <li>Carbon flux measurements</li>
            </ul>
          </div>
          
          <div className="bg-white/80 p-4 rounded-lg shadow my-6">
            <h4 className="font-bold text-primary">Remote Sensing Technologies</h4>
            <p className="mb-2">Employing cutting-edge remote monitoring:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>High-resolution satellite imagery to track vegetation cover and health</li>
              <li>Drone surveys for detailed site-specific monitoring</li>
              <li>LiDAR scanning to measure biomass and structural complexity</li>
              <li>Automated change detection algorithms</li>
            </ul>
          </div>
          
          <div className="bg-white/80 p-4 rounded-lg shadow my-6">
            <h4 className="font-bold text-primary">Field-Based Monitoring</h4>
            <p className="mb-2">Comprehensive on-the-ground measurements:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Permanent sample plots for growth measurements</li>
              <li>Soil sampling and carbon content analysis</li>
              <li>Sedimentation and accretion rates</li>
              <li>Hydrological monitoring (tidal exchange, salinity)</li>
              <li>Community-based participatory monitoring</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-4">Verification & Reporting Process</h3>
          <div className="relative h-56 mb-4 rounded-lg overflow-hidden">
            <Image 
              src="/images/monitoring-verification.jpg" 
              alt="Monitoring and verification activities" 
              fill 
              className="object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 gap-4 my-6">
            <div className="bg-white/80 p-4 rounded-lg shadow">
              <h4 className="font-bold text-primary">Third-Party Verification</h4>
              <p>Our project follows Verra's robust verification requirements:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Initial validation by accredited third-party auditors</li>
                <li>Regular verification audits (every 2-5 years)</li>
                <li>Transparent documentation of methodologies</li>
                <li>Public stakeholder consultation periods</li>
                <li>Verification against CCB Standards for co-benefits</li>
              </ul>
            </div>
            
            <div className="bg-white/80 p-4 rounded-lg shadow">
              <h4 className="font-bold text-primary">Advanced Monitoring Technologies</h4>
              <p>Implementation of innovative monitoring solutions:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>IoT environmental sensors for real-time data collection</li>
                <li>Wildlife camera traps to document biodiversity returns</li>
                <li>Mobile apps for community-based field monitoring</li>
                <li>Cloud-based data platforms and dashboards</li>
                <li>Blockchain-based carbon credit verification</li>
              </ul>
            </div>
            
            <div className="bg-white/80 p-4 rounded-lg shadow">
              <h4 className="font-bold text-primary">Biodiversity Monitoring</h4>
              <p>Comprehensive ecological assessment:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Species diversity indices (flora and fauna)</li>
                <li>Habitat quality assessment</li>
                <li>Ecosystem function indicators</li>
                <li>Invasive species monitoring</li>
                <li>Ecological connectivity evaluation</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
            <h4 className="font-bold text-primary">Reporting & Transparency</h4>
            <p className="mb-2">Our commitment to transparent reporting includes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Annual monitoring reports publicly available</li>
              <li>Regular stakeholder updates and community feedback sessions</li>
              <li>Comprehensive validation and verification reports</li>
              <li>Open-access project documentation</li>
              <li>Real-time monitoring dashboard for key metrics</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white/90 p-6 rounded-lg shadow-md mt-8">
        <h3 className="text-xl font-bold mb-3">VM0033 Methodology Implementation Timeline</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-primary text-white">
                <th className="py-2 px-4 text-left">Phase</th>
                <th className="py-2 px-4 text-left">Activities</th>
                <th className="py-2 px-4 text-left">Timeline</th>
                <th className="py-2 px-4 text-left">Verification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-2 px-4">Baseline Establishment</td>
                <td className="py-2 px-4">Field surveys, remote sensing analysis, carbon stock estimation</td>
                <td className="py-2 px-4">Year 0-1</td>
                <td className="py-2 px-4">Initial validation</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Initial Restoration</td>
                <td className="py-2 px-4">Site preparation, planting, hydrological restoration</td>
                <td className="py-2 px-4">Year 1-3</td>
                <td className="py-2 px-4">Implementation verification</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Monitoring Period 1</td>
                <td className="py-2 px-4">Initial growth monitoring, carbon stock changes, biodiversity assessment</td>
                <td className="py-2 px-4">Year 3-5</td>
                <td className="py-2 px-4">First verification audit</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Monitoring Period 2-8</td>
                <td className="py-2 px-4">Continued monitoring, adaptive management</td>
                <td className="py-2 px-4">Years 5-40</td>
                <td className="py-2 px-4">Regular verification cycles</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}; 