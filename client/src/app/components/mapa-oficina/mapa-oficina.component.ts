import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Mapbox from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa-oficina',
  templateUrl: './mapa-oficina.component.html',
  styleUrls: ['./mapa-oficina.component.css']
})
export class MapaOficinaComponent implements OnInit {
  // @ViewChild("map_mapbox") map_mapbox: ElementRef;

  // map: Mapbox.Map;

  geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          message: 'Foo',
          iconSize: [60, 60],
        },
        geometry: {
          type: 'Point',
          coordinates: [-66.324462890625, -16.024695711685304],
        },
      },
      {
        type: 'Feature',
        properties: {
          message: 'Bar',
          iconSize: [50, 50],
        },
        geometry: {
          type: 'Point',
          coordinates: [-61.2158203125, -15.97189158092897],
        },
      },
      {
        type: 'Feature',
        properties: {
          message: 'Baz',
          iconSize: [40, 40],
        },
        geometry: {
          type: 'Point',
          coordinates: [-63.29223632812499, -18.28151823530889],
        },
      },
    ],
  };

  constructor() {
    // this.map_mapbox.nativeElement = new ElementRef();

    // (Mapbox as any).accessToken = environment.mapboxKey;

    // this.map = new Mapbox.Map({
    //   container: 'mapbox',
    //   style: "mapbox://styles/mapbox/streets-v11",
    //   center: [-78.5042653, -5.64935], // LON, LAT
    //   zoom: 9 // starting zoom
    // })
  }

  ngOnInit(): void { }

  alert(message: string) {
    alert(message);
  }

}