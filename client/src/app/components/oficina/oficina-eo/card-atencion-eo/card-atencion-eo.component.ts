import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-card-atencion-eo',
  templateUrl: './card-atencion-eo.component.html',
  styleUrls: ['./card-atencion-eo.component.css']
})
export class CardAtencionEoComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'call-center',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/call-center.svg'));

      iconRegistry.addSvgIcon(
        'web-eo',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/web-eo.svg'));
   }

  ngOnInit(): void {
  }

}
