import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Modalidad } from 'src/app/modelo/cuestionamiento';
import { EmpresaOperadora, Materia, Recurso, Servicio } from 'src/app/modelo/denuncia';
import { PersonaDni } from 'src/app/modelo/persona';
import { PersonaDniService } from 'src/app/servicio/persona-dni.service';

@Component({
  selector: 'app-cuest-form',
  templateUrl: './cuest-form.component.html',
  styleUrls: ['./cuest-form.component.css']
})
export class CuestFormComponent implements OnInit {

  persona_dni: PersonaDni = {
    cui: '',
    dni: '',
    first_name: '',
    last_name: '',
    name: ''
  };

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
  ];

  mod: Modalidad[] = [
    {
      id: '1',
      nombre: 'Buzon de custionamiento'
    },
    {
      id: '2',
      nombre: 'Mesa de partes'
    },
    {
      id: '3',
      nombre: 'Reencauzados'
    }
  ]

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private persona: PersonaDniService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  getpersona() {
    this.persona.getPersonaDni(this.persona_dni.dni).subscribe((res: any) => {
      this.persona_dni = res
    });
  }
}