import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
// import { AuthService } from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cambiaTema: boolean = false;
  url = 'https://img.ecartelera.com/noticias/57100/57138-m.jpg';

  constructor(
    private breakpointObserver: BreakpointObserver,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
    /*private authService: AuthService*/) {
    this.agregarIcono('logo', iconRegistry, sanitizer)
  }

  agregarIcono(nombre: string, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      nombre,
      sanitizer.bypassSecurityTrustResourceUrl(`/assets/img/${nombre}.svg`));
  }

  setStyles() {
    return {
      'background-image': `url(${this.url})`
    };
  }

  cambia(e: any) {
    this.cambiaTema = e;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  accede() {
    // return this.authService.acceder()
  }

  cerrarSesion() {
    // this.authService.cerrarSesion();
  }

  cambiarTema() {
    this.cambiaTema = !this.cambiaTema;
  }


}
