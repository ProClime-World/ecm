declare module 'georaster-layer-for-leaflet' {
  import L from 'leaflet';
  
  interface GeoRasterLayerOptions {
    georaster: any;
    opacity?: number;
    resolution?: number;
    debugLevel?: number;
    pixelValuesToColorFn?: (values: number[]) => number[] | null;
  }

  class GeoRasterLayer extends L.Layer {
    constructor(options: GeoRasterLayerOptions);
  }

  export default GeoRasterLayer;
} 