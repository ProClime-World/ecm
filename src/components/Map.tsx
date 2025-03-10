'use client';

import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";

interface MapProps {
  className?: string;
}

// Define an interface for HTMLElement with Leaflet properties
interface LeafletHTMLElement extends HTMLElement {
  _leaflet_id?: number | null;
}

export const Map: React.FC<MapProps> = ({ className }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    // Make sure we have window available and the ref is attached
    if (typeof window === 'undefined' || !mapRef.current) return;
    
    // Clean up first to ensure we don't have multiple instances
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    let mapInstance: any = null;
    
    // We need to make sure the DOM is fully ready before initializing the map
    const initMap = async () => {
      try {
        // Import dynamically
        const L = await import('leaflet');
        
        // Check for any existing map instance on this element and remove it
        if (mapRef.current) {
          try {
            // Find and remove any existing map instance
            const maps = L.DomUtil.get(mapRef.current) as LeafletHTMLElement;
            if (maps && maps._leaflet_id) {
              maps._leaflet_id = null;
            }
          } catch (e) {
            console.log("No existing map to clean up");
          }
          
          // Now create a new map
          const sidePlugin = await import('leaflet-side-by-side').catch(() => {
            console.warn('Side-by-side plugin could not be loaded, using fallback');
            return null;
          });
          
          // Create map with a slight delay to ensure DOM is ready
          setTimeout(() => {
            if (!mapRef.current || mapInstanceRef.current) return;
            
            mapInstance = L.map(mapRef.current).setView([7.2906, 81.6337], 9);
            mapInstanceRef.current = mapInstance;
            
            // Basic OSM layer (left)
            const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              maxZoom: 19,
              attribution: '© OpenStreetMap'
            }).addTo(mapInstance);
            
            // Satellite layer (right)
            const satelliteLayer = L.tileLayer(
              'https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
              {
                subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
                maxZoom: 20,
                attribution: '© Google'
              }
            ).addTo(mapInstance);
            
            // Add the side-by-side control if plugin loaded
            const SideBySideControl = (L.Control as any).SideBySide;
            if (SideBySideControl) {
              new SideBySideControl(osmLayer, satelliteLayer).addTo(mapInstance);
            }
            
            // Load project boundary
            fetch('/data/ecm-project-boundary.geojson')
              .then(response => response.json())
              .then(data => {
                if (!mapInstance) return;
                
                const boundaryLayer = L.geoJSON(data, {
                  style: {
                    color: "#1B4B33",
                    weight: 2,
                    opacity: 1,
                    fillColor: "#4CAF50",
                    fillOpacity: 0.3
                  }
                }).addTo(mapInstance);
                
                // Fit map to boundary
                mapInstance.fitBounds(boundaryLayer.getBounds());
                
                // Force resize
                mapInstance.invalidateSize();
                
                setMapReady(true);
              })
              .catch(err => console.error("Error loading boundary:", err));
          }, 100);
        }
      } catch (err) {
        console.error("Error initializing map:", err);
      }
    };
    
    initMap();
    
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