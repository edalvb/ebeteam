import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonaDni } from '../../modelo/persona-dni';
import { PersonaDniService } from '../../servicio/persona-dni.service';
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-autenticar',
  templateUrl: './autenticar.component.html',
  styleUrls: ['./autenticar.component.css']
})
export class AutenticarComponent{
  persona_dni: PersonaDni = {
    cui: '',
    dni: '',
    first_name: '',
    last_name: '',
    name: ''
  };

  @Input('link') link = '/home';
  @Output() confirm = new EventEmitter;

  constructor(
    private _http: HttpClient, private persona: PersonaDniService, 
    private router: Router, private _snackBar: MatSnackBar) {

  }

  getpersona() {
    this.persona.getPersonaDni(this.persona_dni.dni).subscribe((res: any) => {
      if (res.cui == this.persona_dni.cui) {
        //this.router.navigate([this.link]);
        this.confirm.emit(true);
      } else {
        this.confirm.emit(false);
        this._snackBar.open("Los datos no corresponden al DNI", "Incorrecto", {duration: 2000});
      }
    });
  }

  almacenar(){
    
  }
}
