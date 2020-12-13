import { Component } from '@angular/core';
import { EmpresaOperadora, Materia, Recurso, Servicio } from 'src/app/modelo/denuncia';

@Component({
  selector: 'app-form-denuncia',
  templateUrl: './form-denuncia.component.html',
  styleUrls: ['./form-denuncia.component.css']
})

export class FormDenunciaComponent {

  nombre: String;
  dni: String;
  paterno: String;
  materno: String;

  autorizo: boolean = false;

  eos: EmpresaOperadora[] = [
    {
      id: '1',
      nombre: 'Telfónica'
    },
    {
      id: '2',
      nombre: 'Claro'
    },
    {
      id: '3',
      nombre: 'Bitel'
    }
  ]
 
  constructor() {
    let persona = JSON.parse(sessionStorage.getItem('usuario') as string);
    this.dni = persona.dni;
    this.nombre = persona.name;
    this.paterno = persona.first_name;
    this.materno = persona.last_name;
  }

}
