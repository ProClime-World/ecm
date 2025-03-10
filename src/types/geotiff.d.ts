declare module 'geotiff' {
  export function fromArrayBuffer(arrayBuffer: ArrayBuffer): Promise<GeoTIFF>;
  export function fromUrl(url: string): Promise<GeoTIFF>;
  
  interface GeoTIFF {
    getImage(index?: number): Promise<GeoTIFFImage>;
  }
  
  interface GeoTIFFImage {
    getWidth(): number;
    getHeight(): number;
    getBoundingBox(): [number, number, number, number];
    getFileDirectory(): any;
    readRasters(options?: {
      window?: [number, number, number, number];
      width?: number;
      height?: number;
      bbox?: [number, number, number, number];
      interleave?: boolean;
    }): Promise<any[]>;
  }
}

declare module 'proj4' {
  function proj4(fromProjection: string, toProjection: string, coordinates: [number, number]): [number, number];
  export = proj4;
} 