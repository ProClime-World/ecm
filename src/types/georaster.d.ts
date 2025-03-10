declare module 'georaster' {
  const parseGeoraster: any;
  export default parseGeoraster;
}

declare module 'georaster-layer-for-leaflet' {
  import L from 'leaflet';
  
  class GeoRasterLayer extends L.Layer {
    constructor(options: any);
  }
  
  export default GeoRasterLayer;
} 