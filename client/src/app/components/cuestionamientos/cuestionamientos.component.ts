import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cuestionamientos',
  templateUrl: './cuestionamientos.component.html',
  styleUrls: ['./cuestionamientos.component.css']
})
export class CuestionamientosComponent implements OnInit {

  confirm: boolean = false;
  constructor( private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  funAlmacenar(e: any){
    this.confirm = e;
  }

  onCreate(){

  }
}
