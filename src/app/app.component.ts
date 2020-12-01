import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  cambiaTema: boolean = false;

  cambia(e: any){
    this.cambiaTema = e;
  }
}
