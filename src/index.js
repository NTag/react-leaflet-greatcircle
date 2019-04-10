import { withLeaflet, Path } from 'react-leaflet';
import greatCircle from './src/Leaflet.greatCircle';

class GreatCircle extends Path {
  createLeafletElement({ center, leaflet, ...options }) {
    const circle = new greatCircle(center, options);
    return circle;
  }

  updateLeafletElement(fromProps, toProps) {
    const { fromCenter, fromRadius } = fromProps;
    const { toCenter, toRadius, ...toStyle } = toProps;

    if (fromCenter !== toCenter) {
      this.leafletElement.setLatLng(toCenter);
    }
    if (fromRadius !== toRadius) {
      this.leafletElement.setRadius(toRadius);
    }
    this.leafletElement.setStyle(toStyle);
  }
}

export default withLeaflet(GreatCircle);
