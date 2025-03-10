'use client';

import React from 'react';
import Image from 'next/image';

export const CoBenefitsAnalysis: React.FC = () => {
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
              <h4 className="font-bold text-primary">Community Livelihoods</h4>
              <p>8,000+ people will experience improved livelihoods through direct employment, skills 
              development, and alternative income sources.</p>
            </div>
            <div className="bg-white/80 p-4 rounded-lg shadow">
              <h4 className="font-bold text-primary">Women's Empowerment</h4>
              <p>1,000+ women benefit from employment in nursery management, mangrove planting, 
              and local business development initiatives.</p>
            </div>
            <div className="bg-white/80 p-4 rounded-lg shadow">
              <h4 className="font-bold text-primary">Food Security</h4>
              <p>Enhanced fisheries production through mangrove nursery habitat restoration 
              improves food security and nutrition in coastal communities.</p>
            </div>
            <div className="bg-white/80 p-4 rounded-lg shadow">
              <h4 className="font-bold text-primary">Education</h4>
              <p>Early childhood education programs enable women to work while providing 
              children with vital learning opportunities.</p>
            </div>
          </div>
          
          <h4 className="text-xl font-bold mt-6 mb-2">Economic Impact</h4>
          <p>
            In the Batticaloa, Ampara, and Trincomalee districts, 95% of coastal communities 
            primarily depend on fishing and farming for their livelihoods, earning an average of just 
            $1 to $1.50 per day. Our project creates sustainable economic alternatives through:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Mangrove nursery management and planting jobs</li>
            <li>Sustainable fishing practices training</li>
            <li>Capacity-building workshops for climate resilience</li>
            <li>Eco-tourism development opportunities</li>
            <li>Alternative livelihood development for farmers and fishermen</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-4">Environmental Co-Benefits</h3>
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
    </div>
  );
}; 