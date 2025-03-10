'use client';

import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

interface MapProps {
  className?: string;
}

export const Map: React.FC<MapProps> = ({ className }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null); // To store the map instance

  useEffect(() => {
    // Make sure we have window available and the ref is attached
    if (typeof window === 'undefined' || !mapRef.current) return;
    
    // Cleanup any existing map first
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }
    
    // Import Leaflet dynamically to avoid SSR issues
    import('leaflet').then((L) => {
      // Check if map container already has a map initialized
      if (mapRef.current && mapRef.current._leaflet_id) {
        try {
          const existingMap = L.Map.getMap(mapRef.current._leaflet_id);
          if (existingMap) {
            existingMap.remove();
          }
        } catch (e) {
          console.log("No existing map to clean up");
        }
      }
      
      import('leaflet-side-by-side').then(() => {
        // Create map
        const map = L.map(mapRef.current!).setView([7.2906, 81.6337], 9);
        mapInstanceRef.current = map; // Store map instance for cleanup
        
        // Basic OSM layer (left)
        const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap'
        }).addTo(map);
        
        // Satellite layer (right)
        const satelliteLayer = L.tileLayer(
          'https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
          {
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            maxZoom: 20,
            attribution: '© Google'
          }
        ).addTo(map);
        
        // Add the side-by-side control
        const sideBySideControl = new (L.Control as any).SideBySide(osmLayer, satelliteLayer);
        sideBySideControl.addTo(map);
        
        // Add boundary after a delay to ensure map is ready
        setTimeout(() => {
          fetch('/data/ecm-project-boundary.geojson')
            .then(response => response.json())
            .then(data => {
              const boundaryLayer = L.geoJSON(data, {
                style: {
                  color: "#1B4B33",
                  weight: 2,
                  opacity: 1,
                  fillColor: "#4CAF50",
                  fillOpacity: 0.3
                }
              }).addTo(map);
              
              // Fit map to boundary
              map.fitBounds(boundaryLayer.getBounds());
            })
            .catch(err => console.error("Error loading boundary:", err));
        }, 100);
        
        // Force resize after a delay
        setTimeout(() => {
          map.invalidateSize();
        }, 100);
      });
    });
    
    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
        } catch (e) {
          console.error("Error cleaning up map:", e);
        }
      }
    };
  }, []);

  return (
    <div className="w-full border border-gray-300 rounded overflow-hidden">
      <div 
        ref={mapRef} 
        style={{ height: '800px', width: '100%' }}
        className={`${className || ''}`}
      />
      <div className="p-4 bg-white text-gray-700">
        <p>Drag the slider to compare landuse (left) and satellite imagery (right).</p>
      </div>
    </div>
  );
}; 