import { Component, OnInit } from '@angular/core';
import { Recurso } from 'src/app/modelo/denuncia';

export interface Resolucion{
  id: string;
  nombre: string;
}

@Component({
  selector: 'app-select-recurso',
  templateUrl: './select-recurso.component.html',
  styleUrls: ['./select-recurso.component.css']
})
export class SelectRecursoComponent implements OnInit {

  recs: Recurso[] = [
    {
      id: '1',
      nombre: 'Incumplimiento de resolución de 1era instancia'
    },
    {
      id: '2',
      nombre: 'Incumplimiento de resolución de 2da instancia'
    },
    {
      id: '3',
      nombre: 'Incumplimiento de aplicación de SARA'
    },
    {
      id: '4',
      nombre: 'Incumplimiento de aplicación de SAR'
    }
  ]
  
  res!: string;

  recSeleccionado!: string;

  constructor() { }

  select(e: any){
    this.recSeleccionado = e;
    if(this.recSeleccionado == '1'){
      this.res = 'de 1era Instancia';
    }
    if (this.recSeleccionado == '2') {
      this.res = 'de 2da Instancia';
    } 
    if (this.recSeleccionado == '3') {
      this.res = 'SARA';
    }
    if (this.recSeleccionado == '4') {
      this.res = 'SAR';
    }

  }

  ngOnInit(){
    
  }

}