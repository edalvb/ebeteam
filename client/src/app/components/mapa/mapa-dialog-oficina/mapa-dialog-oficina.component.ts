import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mapa-dialog-oficina',
  templateUrl: './mapa-dialog-oficina.component.html',
  styleUrls: ['./mapa-dialog-oficina.component.css']
})
export class MapaDialogOficinaComponent implements OnInit {
  @Input() center: number[] = [0, 0];

  geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature' as const,
        properties: {
          message: 'Foo',
          iconSize: [40, 40]
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
          iconSize: [40, 40]
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
          iconSize: [40, 40]
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

  estilosMarcador(feature: any) {
    return {
      'background-image': 'url(/assets/img/logo.svg)',
      width: feature.properties.iconSize[0] + 'px',
      height: feature.properties.iconSize[1] + 'px'
    };
  }

}