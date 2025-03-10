'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Fix the CanvasJS import to use dynamic import with require
const CanvasJSReact = typeof window !== 'undefined' ? require('@canvasjs/react-charts') : null;
// Only access CanvasJSChart when in browser environment
const CanvasJSChart = typeof window !== 'undefined' ? CanvasJSReact?.CanvasJSChart : null;

const CarbonSequestrationGraph: React.FC = () => {
  // Complete data from 2024 to 2064
  const data = [
    { x: new Date(2025, 0), y: 37.795, label: "2025" },
    { x: new Date(2026, 0), y: 108.755, label: "2026" },
    { x: new Date(2027, 0), y: 213.108, label: "2027" },
    { x: new Date(2028, 0), y: 317.461, label: "2028" },
    { x: new Date(2029, 0), y: 421.814, label: "2029" },
    { x: new Date(2030, 0), y: 526.168, label: "2030" },
    { x: new Date(2031, 0), y: 630.521, label: "2031" },
    { x: new Date(2032, 0), y: 734.874, label: "2032" },
    { x: new Date(2033, 0), y: 839.227, label: "2033" },
    { x: new Date(2034, 0), y: 943.581, label: "2034" },
    { x: new Date(2035, 0), y: 1047.934, label: "2035" },
    { x: new Date(2036, 0), y: 1152.287, label: "2036" },
    { x: new Date(2037, 0), y: 1256.641, label: "2037" },
    { x: new Date(2038, 0), y: 1360.994, label: "2038" },
    { x: new Date(2039, 0), y: 1465.348, label: "2039" },
    { x: new Date(2040, 0), y: 1569.701, label: "2040" },
    { x: new Date(2041, 0), y: 1674.055, label: "2041" },
    { x: new Date(2042, 0), y: 1778.408, label: "2042" },
    { x: new Date(2043, 0), y: 1882.762, label: "2043" },
    { x: new Date(2044, 0), y: 1971.009, label: "2044" },
    { x: new Date(2045, 0), y: 2245.132, label: "2045" },
    { x: new Date(2046, 0), y: 2304.745, label: "2046" },
    { x: new Date(2047, 0), y: 2330.907, label: "2047" },
    { x: new Date(2048, 0), y: 2381.030, label: "2048" },
    { x: new Date(2049, 0), y: 2431.153, label: "2049" },
    { x: new Date(2050, 0), y: 2481.276, label: "2050" },
    { x: new Date(2051, 0), y: 2531.399, label: "2051" },
    { x: new Date(2052, 0), y: 2581.522, label: "2052" },
    { x: new Date(2053, 0), y: 2631.645, label: "2053" },
    { x: new Date(2054, 0), y: 2681.768, label: "2054" },
    { x: new Date(2055, 0), y: 2731.891, label: "2055" },
    { x: new Date(2056, 0), y: 2782.015, label: "2056" },
    { x: new Date(2057, 0), y: 2832.138, label: "2057" },
    { x: new Date(2058, 0), y: 2882.262, label: "2058" },
    { x: new Date(2059, 0), y: 2932.385, label: "2059" },
    { x: new Date(2060, 0), y: 2982.509, label: "2060" },
    { x: new Date(2061, 0), y: 3032.632, label: "2061" },
    { x: new Date(2062, 0), y: 3082.756, label: "2062" },
    { x: new Date(2063, 0), y: 3132.880, label: "2063" }
  ];

  const options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Carbon Sequestration Projection",
      fontSize: 24,
      fontFamily: "Sora, sans-serif",
      fontWeight: "bold"
    },
    axisX: {
      title: "Year",
      valueFormatString: "YYYY",
      minimum: new Date(2024, 0),
      maximum: new Date(2064, 0),
      interval: 5,
      intervalType: "year",
      labelFontFamily: "Inter, sans-serif"
    },
    axisY: {
      title: "Carbon Sequestration",
      titleFontFamily: "Inter, sans-serif",
      labelFontFamily: "Inter, sans-serif",
      includeZero: true,
      suffix: "k tCO2e",
      gridColor: "#e5e7eb"
    },
    data: [{
      type: "area",
      name: "Carbon Sequestration",
      xValueFormatString: "YYYY",
      yValueFormatString: "#,##0.00k tCO2e",
      showInLegend: true,
      legendText: "Cumulative Carbon Sequestration",
      legendMarkerType: "square",
      fillOpacity: 0.3,
      color: "#1B4B33",
      lineColor: "#1B4B33",
      markerSize: 0,
      dataPoints: data
    }]
  };

  // Fallback content if CanvasJS isn't available (like during SSR)
  if (!CanvasJSChart) {
    return (
      <div className="w-full py-4 bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-xl font-bold mb-4">Carbon Sequestration Projection</h3>
        <p>Loading chart data...</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      <div className="h-[600px] w-full">
        <CanvasJSChart options={options} />
      </div>
      <p className="text-sm text-gray-600 mt-4 text-center">
        Projected cumulative carbon sequestration from 2025 to 2063
      </p>
    </motion.div>
  );
};

export default CarbonSequestrationGraph; 