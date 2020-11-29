import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Output() tema = new EventEmitter();

  cambiaTema: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarTema() {
    this.cambiaTema = !this.cambiaTema;
    this.tema.emit(this.cambiaTema);
  }

}
export class IconSvgLogo {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'logo',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/logo.svg'));
  }
}
