import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mapa-oficina',
  templateUrl: './mapa-oficina.component.html',
  styleUrls: ['./mapa-oficina.component.css']
})
export class MapaOficinaComponent implements OnInit {
  @Input() center: number[] = [0, 0];

  geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature' as const,
        properties: {
          message: 'Foo',
          iconSize: [60, 60],
          urlIcono: 'url(https://placekitten.com/g/'
        },
        geometry: {
          type: 'Point' as const,
          coordinates: [-66.324462890625, -16.024695711685304],
        },
      },
      {
        type: 'Feature' as const,
        properties: {
          message: 'Bar',
          iconSize: [50, 50],
          urlIcono: 'url(https://placekitten.com/g/'
        },
        geometry: {
          type: 'Point' as const,
          coordinates: [-61.2158203125, -15.97189158092897],
        },
      },
      {
        type: 'Feature' as const,
        properties: {
          message: 'Baz',
          iconSize: [40, 40],
          urlIcono: 'url(https://placekitten.com/g/'
        },
        geometry: {
          type: 'Point' as const,
          coordinates: [-63.29223632812499, -18.28151823530889],
        },
      },
    ],
  };

  constructor() { }

  ngOnInit(): void { }

  alert(message: string) {
    alert(message);
  }

  estilos(feature: any) {
    return {
      'background-image': feature.properties.urlIcono + feature.properties.iconSize.join('/') + '/)',
      width: feature.properties.iconSize[0] + 'px',
      height: feature.properties.iconSize[1] + 'px'
    };
  }

}