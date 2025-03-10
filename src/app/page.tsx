'use client';

import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { Map } from '@/components/Map';
import { StorySection } from '@/components/StorySection';
import { NavigationTabs } from '@/components/NavigationTabs';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { VulnerabilityMap } from '@/components/VulnerabilityMap';
import CarbonSequestrationGraph from '@/components/CarbonSequestrationGraph';
import Timeline from '@/components/Timeline';
import { CoBenefitsAnalysis } from '@/components/CoBenefitsAnalysis';
import { MonitoringVerification } from '@/components/MonitoringVerification';

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <main className="relative font-sans bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      <NavigationTabs />
      
      <Hero
        title="Sri Lanka's East Coast Mangrove Restoration"
        subtitle="Restoring coastal ecosystems in Trincomalee, Batticaloa, and Ampara"
        backgroundImage="/images/mangrove-hero.jpg"
      />

      <StorySection id="intro" title="Project Overview" alignment="left">
        <div className="bg-white/90 dark:bg-black/90 p-8 rounded-xl shadow-lg backdrop-blur-sm">
          <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1589556183130-530470785fab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mangrove ecosystem"
              fill
              className="object-cover"
            />
          </div>
          <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            The project aims to restore 4,527 hectares (+600 ha) of mangroves in Sri Lanka's Eastern Province,
            ensuring biodiversity conservation and carbon sequestration while supporting local communities and their livelihoods.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg text-center shadow-sm">
              <h4 className="text-2xl font-bold text-[#1B4B33] dark:text-green-400">4,527 ha</h4>
              <p className="text-gray-700 dark:text-gray-300">Project Area</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg text-center shadow-sm">
              <h4 className="text-2xl font-bold text-[#1B4B33] dark:text-green-400">7.7M tCO2e</h4>
              <p className="text-gray-700 dark:text-gray-300">Carbon Sequestration</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg text-center shadow-sm">
              <h4 className="text-2xl font-bold text-[#1B4B33] dark:text-green-400">40 Years</h4>
              <p className="text-gray-700 dark:text-gray-300">Project Timeline</p>
            </div>
          </div>
        </div>
      </StorySection>

      <StorySection id="baseline" title="Mangrove Ecosystem Baseline" alignment="center">
        <div className="content-panel w-full max-w-[1400px] mx-auto">
          <div className="space-y-8">
            <div className="bg-white/90 dark:bg-gray-900/90 p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#1B4B33] dark:text-green-400">Mangrove Extent Comparison</h3>
              <Map className="mb-6" />
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Compare historical and current mangrove coverage using the slider above.
                Drag left/right to see the changes over time. Sri Lanka's Eastern province 
                contains 50.84 km² of mangrove ecosystems that have degraded over time.
              </p>
            </div>
          </div>
        </div>
      </StorySection>

      <StorySection id="vulnerability" title="Climate Vulnerability Assessment" alignment="center">
        <div className="content-panel w-full max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 gap-12">
            <div className="bg-white/90 dark:bg-gray-900/90 p-6 sm:p-8 rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold mb-4 text-[#1B4B33] dark:text-green-400">Sea Level Rise Impact</h4>
              <VulnerabilityMap 
                className="mb-6"
                mapType="seaLevel"
              />
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Eastern Province is expected to experience sea level rise of up to 0.5m by 2050,
                impacting mangrove ecosystems and increasing vulnerability to coastal erosion.
                Based on IPCC data supported by the World Bank, the temperature in the local 
                Eastern Province is expected to rise within a range of 2.2°C to 4.8°C.
              </p>
            </div>
            <div className="bg-white/90 dark:bg-gray-900/90 p-6 sm:p-8 rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold mb-4 text-[#1B4B33] dark:text-green-400">Storm Surge Risk</h4>
              <VulnerabilityMap 
                className="mb-6"
                mapType="stormSurge"
              />
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Storm surge modeling shows increased risk of flooding in low-lying areas,
                highlighting the importance of mangrove restoration for coastal protection.
                Mangroves act as natural barriers against extreme weather events, reducing
                the impact on coastal communities.
              </p>
            </div>
          </div>
        </div>
      </StorySection>

      <StorySection id="carbon" title="Carbon Sequestration Potential" alignment="center">
        <div className="content-panel w-full max-w-none">
          <div className="grid grid-cols-1 gap-8">
            <div className="max-w-4xl mx-auto bg-white/90 dark:bg-gray-900/90 p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#1B4B33] dark:text-green-400">Carbon Sequestration</h3>
              <CarbonSequestrationGraph />
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-6 leading-relaxed">
                Projected carbon sequestration over time as mangroves mature and expand.
                By 2040, the project is expected to sequester over 1.5 million tCO2e.
                The VM0033 methodology provides a framework for quantifying these emission reductions
                from wetland restoration and conservation activities.
              </p>
            </div>
          </div>
        </div>
      </StorySection>

      <StorySection id="implementation" title="Project Implementation" alignment="center">
        <div className="bg-white/90 dark:bg-gray-900/90 p-6 sm:p-8 rounded-xl shadow-lg">
          <Timeline />
        </div>
      </StorySection>

      <StorySection id="benefits" title="Co-Benefits Analysis" alignment="right">
        <div className="bg-white/90 dark:bg-gray-900/90 p-6 sm:p-8 rounded-xl shadow-lg">
          <CoBenefitsAnalysis />
        </div>
      </StorySection>

      <StorySection id="monitoring" title="Monitoring & Verification" alignment="center">
        <div className="bg-white/90 dark:bg-gray-900/90 p-6 sm:p-8 rounded-xl shadow-lg">
          <MonitoringVerification />
        </div>
      </StorySection>
      
      <Footer />
    </main>
  );
}
