import { Component, EventEmitter, HostBinding, Output } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-panel-control',
  templateUrl: './panel-control.component.html',
  styleUrls: ['./panel-control.component.css']
})
export class PanelControlComponent {

  @Output() setOption = new EventEmitter;
  
  @HostBinding('class') componentCssClass: any;

  hidden = false;
  badgeDen: any;
  badgeInbox: any;
  badgeCuest: any;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  public child = "1";

  cambia: boolean = false;
  url = 'https://img.ecartelera.com/noticias/57100/57138-m.jpg';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(public overlayContainer: OverlayContainer ,private breakpointObserver: BreakpointObserver,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.agregarIcono('osiptel-v', iconRegistry, sanitizer)
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
  funChild(e: any){
    this.child=e;
  }

  newsLeer(e: any){
    this.badgeInbox=e;
  }

  newsCuest(e: any){
    this.badgeCuest=e;
  }

  newsDen(e: any){
    this.badgeDen=e;
  }
  
  cerrarSesion() {
    // this.authService.cerrarSesion();
    this.setOption.emit('1');
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
