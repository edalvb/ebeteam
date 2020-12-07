import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PersonaDni } from '../../modelo/persona';
import { PersonaDniService } from '../../servicio/persona-dni.service';
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css'],
})
export class RegistroUsuarioComponent {

  persona_dni: PersonaDni = {
    cui: '',
    dni: '',
    first_name: '',
    last_name: '',
    name: ''
  };

  constructor(
    private _http: HttpClient, private persona: PersonaDniService, 
    private router: Router, private _snackBar: MatSnackBar) {

  }

  getpersona() {
    this.persona.getPersonaDni(this.persona_dni.dni).subscribe((res: any) => {
      if (res.cui == this.persona_dni.cui) {
        this.router.navigate(['/home']);
      } else {
        this._snackBar.open("Los datos no corresponden al DNI", "Incorrecto", {duration: 2000});
      }
    });
  }
}
