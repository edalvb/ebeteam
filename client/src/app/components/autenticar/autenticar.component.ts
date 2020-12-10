import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonaDni } from '../../modelo/persona';
import { PersonaDniService } from '../../servicio/persona-dni.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-autenticar',
  templateUrl: './autenticar.component.html',
  styleUrls: ['./autenticar.component.css']
})
export class AutenticarComponent {
  persona_dni: PersonaDni = {
    cui: '',
    dni: '',
    first_name: '',
    last_name: '',
    name: ''
  };

  @Input('link') link = '/home';
  @Output() confirm = new EventEmitter;
  @Output() setpersona =new EventEmitter;

  constructor(private persona: PersonaDniService, private _snackBar: MatSnackBar) { }

  getpersona() {
    this.persona.getPersonaDni(this.persona_dni.dni).subscribe((res: any) => {
      if (res.cui == this.persona_dni.cui) {
        this.setpersona.emit(res);
        this.confirm.emit(true);
      } else {
        this.confirm.emit(false);
        this._snackBar.open("Los datos no corresponden al DNI", "Incorrecto", { duration: 2000 });
      }
    });
  }
}
