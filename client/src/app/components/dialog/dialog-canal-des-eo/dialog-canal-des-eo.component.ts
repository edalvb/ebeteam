import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-canal-des-eo',
  templateUrl: './dialog-canal-des-eo.component.html',
  styleUrls: ['./dialog-canal-des-eo.component.css']
})
export class DialogCanalDesEoComponent implements OnInit {
  @Input('idEO') idEO: any;

  idDistro: any;

  constructor() { }

  ngOnInit(): void {
  }

  getDistrito(e: any) {
    this.idDistro = e;
  }


}
