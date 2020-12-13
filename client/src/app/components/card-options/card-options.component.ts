import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card-options',
  templateUrl: './card-options.component.html',
  styleUrls: ['./card-options.component.css']
})
export class CardOptionsComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
    /*private authService: AuthService*/) {
    this.agregarIcono('qimichu', iconRegistry, sanitizer)
  }

  agregarIcono(nombre: string, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      nombre,
      sanitizer.bypassSecurityTrustResourceUrl(`/assets/img/${nombre}.svg`));
  }
  
  ngOnInit(): void {
  }

}
