'use client';

import React from 'react';
import Image from 'next/image';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const CoBenefitsAnalysis: React.FC = () => {
  // Actual carbon sequestration data from 2025 to 2063
  const emissionReductionData = {
    labels: Array.from({ length: 39 }, (_, i) => (2025 + i).toString()),
    datasets: [
      {
        label: 'Carbon Sequestration (tonnes CO₂e)',
        data: [
          37795, 108755, 213108, 317461, 421814, 526168, 630521, 734874, 839227, 
          943581, 1047934, 1152287, 1256641, 1360994, 1465348, 1569701, 1674055, 
          1778408, 1882762, 1987115, 2245132, 2304745, 2330907, 2381030, 2431153, 
          2481276, 2531399, 2581522, 2631645, 2681768, 2731891, 2782015, 2832138, 
          2882261, 2932385, 2982509, 3032632, 3082756, 3132879
        ],
        backgroundColor: '#4CAF50',
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Projected Carbon Sequestration Over Time',
        font: {
          size: 16
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${context.parsed.y.toLocaleString()} tonnes`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Tonnes CO₂e'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Year'
        }
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Social & Economic Co-Benefits</h3>
          <p className="mb-4">
            Our East Coast Mangrove Restoration Project delivers significant benefits beyond carbon 
            sequestration, creating lasting positive impacts for communities in Trincomalee, 
            Batticaloa, and Ampara districts.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-white/80 p-4 rounded-lg shadow">
              <h4 className="font-bold text-primary">Sustainable Livelihoods</h4>
              <p>Employment for 250+ local community members in:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Mangrove nursery management</li>
                <li>Planting and monitoring</li>
                <li>Eco-tourism opportunities</li>
                <li>Sustainable fisheries</li>
              </ul>
            </div>
            
            <div className="bg-white/80 p-4 rounded-lg shadow">
              <h4 className="font-bold text-primary">Community Development</h4>
              <ul className="list-disc pl-6">
                <li>Skills training programs for 500+ participants</li>
                <li>Women's empowerment initiatives</li>
                <li>Educational programs in local schools</li>
                <li>Community-based monitoring systems</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-4">Environmental Co-Benefits</h3>
          <p className="mb-4">
            Beyond carbon capture, restored mangrove ecosystems provide crucial environmental services 
            that enhance resilience to climate change and support biodiversity conservation.
          </p>
          
          <div className="relative h-56 mb-4 rounded-lg overflow-hidden">
            <Image 
              src="/images/mangrove-biodiversity.jpg" 
              alt="Mangrove biodiversity" 
              fill 
              className="object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 gap-4 my-6">
            <div className="bg-white/80 p-4 rounded-lg shadow">
              <h4 className="font-bold text-primary">Biodiversity Conservation</h4>
              <p>Mangrove restoration enhances habitats for numerous species, including:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>25 mangrove species native to Sri Lanka's eastern coast</li>
                <li>Critical habitat for threatened bird species</li>
                <li>Nursery habitat for commercially important fish species</li>
                <li>Marine turtle nesting sites</li>
              </ul>
            </div>
            
            <div className="bg-white/80 p-4 rounded-lg shadow">
              <h4 className="font-bold text-primary">Coastal Protection</h4>
              <p>Restored mangroves provide natural barriers against:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Storm surges and tsunamis</li>
                <li>Coastal erosion prevention</li>
                <li>Flood mitigation</li>
                <li>Sea-level rise adaptation</li>
              </ul>
            </div>
            
            <div className="bg-white/80 p-4 rounded-lg shadow">
              <h4 className="font-bold text-primary">Water Quality</h4>
              <p>Mangrove root systems filter pollutants, trap sediments, and improve coastal water quality, 
              benefiting both marine ecosystems and human communities.</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
            <h4 className="font-bold text-primary">SDG Alignment</h4>
            <p className="mb-2">This project directly contributes to multiple UN Sustainable Development Goals:</p>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
              {[1, 5, 13, 14, 15].map(num => (
                <div key={num} className="flex justify-center">
                  <Image 
                    src={`/images/sdg/sdg-${num}.png`} 
                    alt={`SDG ${num}`} 
                    width={50} 
                    height={50}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white/80 p-6 rounded-lg shadow">
        <h3 className="text-2xl font-bold mb-4">Carbon Sequestration</h3>
        <p className="mb-4">
          The East Coast Mangrove Project is projected to sequester a total of 
          <span className="font-bold text-green-700"> 7,09,24,487.29 tonnes of CO₂e</span> over 
          the project lifetime (2025-2063).
        </p>
        <div className="h-[400px]">
          <Bar options={options} data={emissionReductionData} />
        </div>
        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-2">Additional Benefits</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Enhanced biodiversity and habitat for marine species</li>
            <li>Improved water quality in coastal areas</li>
            <li>Reduced coastal erosion and protection against storm surges</li>
            <li>Sustainable livelihoods for local communities</li>
          </ul>
        </div>
      </div>
    </div>
  );
}; 