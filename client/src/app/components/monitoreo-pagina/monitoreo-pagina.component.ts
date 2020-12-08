import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { MonitoreoPaginaService } from "../../servicio/monitoreo-pagina.service";

@Component({
  selector: 'app-monitoreo-pagina',
  templateUrl: './monitoreo-pagina.component.html',
  styleUrls: ['./monitoreo-pagina.component.css'],
  providers: [MonitoreoPaginaService]
})
export class MonitoreoPaginaComponent implements OnInit {

  constructor(private monitoreo: MonitoreoPaginaService) { }

  ngOnInit() {

  }

  verPagina() {
    this.monitoreo.getPagina('https://bitel.com.pe/atencion-reclamos').subscribe(
      (res1: any) => {
        console.log(res1);
      },
      err => console.log(err));
  }

}
