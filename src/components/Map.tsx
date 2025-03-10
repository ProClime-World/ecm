'use client';

import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

interface MapProps {
  className?: string;
}

// Extend HTMLDivElement to include Leaflet properties
interface LeafletHTMLElement extends HTMLDivElement {
  _leaflet_id?: number;
}

export const Map: React.FC<MapProps> = ({ className }) => {
  // Update the ref type to use our extended interface
  const mapRef = useRef<LeafletHTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !mapRef.current) return;
    
    // Import Leaflet dynamically to avoid SSR issues
    const setupMap = async () => {
      try {
        const L = await import('leaflet');
        
        // Import the plugin but handle it in a way that TypeScript won't complain
        await import('leaflet-side-by-side').catch(err => {
          console.warn('Error loading side-by-side plugin:', err);
        });
        
        // Create map
        const map = L.map(mapRef.current!).setView([7.2906, 81.6337], 9);
        
        // Add basemap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap'
        }).addTo(map);
        
        // Add GeoJSON layers
        Promise.all([
          fetch('/data/2000-mangroves.geojson').then(res => res.json()),
          fetch('/data/2020-mangroves.geojson').then(res => res.json())
        ])
        .then(([mangroves2000, mangroves2020]) => {
          const layer2000 = L.geoJSON(mangroves2000, {
            style: {
              color: "#ff0000",
              weight: 1,
              opacity: 0.7,
              fillColor: "#ff0000",
              fillOpacity: 0.5
            }
          });
          
          const layer2020 = L.geoJSON(mangroves2020, {
            style: {
              color: "#00ff00",
              weight: 1,
              opacity: 0.7,
              fillColor: "#00ff00",
              fillOpacity: 0.5
            }
          });
          
          layer2000.addTo(map);
          layer2020.addTo(map);
          
          // Add the side-by-side control if available
          if ((L as any).control && (L as any).control.sideBySide) {
            (L as any).control.sideBySide(layer2000, layer2020).addTo(map);
          }
          
          // Set bounds to fit both layers
          const bounds = layer2000.getBounds().extend(layer2020.getBounds());
          map.fitBounds(bounds);
        })
        .catch(err => {
          console.error('Error loading GeoJSON data:', err);
        });
      } catch (error) {
        console.error('Error setting up map:', error);
      }
    };
    
    setupMap();
    
    return () => {
      // Cleanup function for map
      if (mapRef.current) {
        try {
          // Get the Leaflet map instance if it exists
          const mapContainer = mapRef.current;
          
          // Add proper type checking for Leaflet's dynamically added properties
          if (mapContainer._leaflet_id && typeof window !== 'undefined' && 'L' in window) {
            // Safe casting of window.L to any type to access the non-standard method
            const leaflet = (window as any).L;
            const map = leaflet.Map.getMap(mapContainer._leaflet_id);
            if (map) map.remove();
          }
        } catch (e) {
          console.error('Error cleaning up map:', e);
        }
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
      <div 
        ref={mapRef} 
        className={`w-full h-[600px] ${className || ''}`}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 p-2 text-sm">
        <div className="flex items-center justify-center space-x-5">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-500 opacity-50 mr-2"></div>
            <span>Mangrove Coverage in 2000</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 opacity-50 mr-2"></div>
            <span>Mangrove Coverage in 2020</span>
          </div>
        </div>
      </div>
    </div>
  );
}; 