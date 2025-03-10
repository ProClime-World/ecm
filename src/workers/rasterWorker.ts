import parseGeoraster from 'georaster';

self.onmessage = async (e) => {
  try {
    const { data, type } = e.data;
    
    // Process the raster data
    const georaster = await parseGeoraster({
      noDataValue: data.noDataValue,
      pixelWidth: data.pixelWidth,
      pixelHeight: data.pixelHeight,
      xmin: data.bbox[0],
      ymin: data.bbox[1],
      xmax: data.bbox[2],
      ymax: data.bbox[3],
      values: [new Float32Array(data.values)],
      width: data.width,
      height: data.height,
      projection: data.projection || 4326
    });

    self.postMessage({ georaster, type });
  } catch (error) {
    self.postMessage({ error: error.message });
  }
}; 