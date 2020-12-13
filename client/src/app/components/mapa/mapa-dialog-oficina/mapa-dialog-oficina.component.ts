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
          iconSize: [20, 25]
        },
        geometry: {
          type: 'Point' as const,
          coordinates: [-76.3633039, -9.8911106],
        },
      },
      {
        type: 'Feature' as const,
        properties: {
          message: 'Bar',
          iconSize: [20, 25]
        },
        geometry: {
          type: 'Point' as const,
          coordinates: [-77.0802424, -12.0549915],
        },
      },
      {
        type: 'Feature' as const,
        properties: {
          message: 'Baz',
          iconSize: [20, 25]
        },
        geometry: {
          type: 'Point' as const,
          coordinates: [-77.9007062, -6.2181624],
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
      'background-image': 'url(/assets/img/loc-osiptel.svg)',
      width: feature.properties.iconSize[0] + 'px',
      height: feature.properties.iconSize[1] + 'px'
    };
  }

}