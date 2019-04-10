# react-leaflet-greatcircle

## Installation
It requires React, Leaflet and react-leaflet to be installed.

```
npm install react-leaflet-greatcircle
```

## Usage
```js
import React, { useState, useEffect } from 'react';
import { Map, TileLayer } from 'react-leaflet';

import GreatCircle from 'react-leaflet-greatcircle';

const position = [51.505, -0.09];

export default () => {
  const [radius, setRadius] = useState(500000);
  useEffect(() => {
    if (radius <= 10000000) {
      setTimeout(() => setRadius(radius + 200000), 30);
    }
  }, [radius]);

  return (
    <Map center={position} zoom={1} style={{ height: 600, width: 1200 }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GreatCircle
        center={position}
        radius={radius} /* In meters */
        fill={false}
        /* You can pass all classic properties of Circle */
      />
    </Map>
  );
};

```
