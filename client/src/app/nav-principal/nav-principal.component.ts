import { Component, HostBinding, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-nav-principal',
  templateUrl: './nav-principal.component.html',
  styleUrls: ['./nav-principal.component.css']
})
export class NavPrincipalComponent {

  @Output() setOption = new EventEmitter;

  cambia: boolean = false;
  url = 'https://www.osiptel.gob.pe/repositorioaps/data/1/1/1/not/comunicado-osiptel-amplia-plazo-inscripcion-ceu/images/osiptel-3.jpg';

  @HostBinding('class') componentCssClass: any;
  
  constructor(
    public overlayContainer: OverlayContainer ,
    private breakpointObserver: BreakpointObserver,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
    /*private authService: AuthService*/) {
    this.agregarIcono('osiptel', iconRegistry, sanitizer),
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


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  accede() {
    this.setOption.emit('2');
    // return this.authService.acceder()
  }

  public onSetTheme(){
    if(this.cambia==false){
      this.cambia=!this.cambia;
      this.overlayContainer.getContainerElement().classList.add('temadark');
    this.componentCssClass = 'temadark';
    }
    else{
      this.cambia=!this.cambia;
      this.overlayContainer.getContainerElement().classList.add('temaLight');
    this.componentCssClass = 'temaLight';
    }
    
  }

}

