import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-scn-denuncia',
  templateUrl: './scn-denuncia.component.html',
  styleUrls: ['./scn-denuncia.component.css']
})
export class ScnDenunciaComponent implements OnInit {
  
  badge: any;
  @Output() porleer = new EventEmitter;

  constructor() { }

  contar(e: any){
    this.badge=e;
  }

  ngOnInit(){
    this.porleer.emit(this.badge);
    
  }

}
