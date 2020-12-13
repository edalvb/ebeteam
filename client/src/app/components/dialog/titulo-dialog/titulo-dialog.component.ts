import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-dialog',
  template: `
    <mat-list>
      <mat-list-item>
        <div
          mat-list-icon
          style="background-size: cover; width: 50px !important; height: 50px !important;"
          [ngStyle]="{ 'background-image': 'url(' + '/assets/img/'+titulo+'.svg' + ')' }"
        ></div>
        <mat-card-title mat-line style="text-transform: uppercase; font-size: 24px;
    font-weight: bolder;">{{ titulo }}</mat-card-title>
      </mat-list-item>
    </mat-list>
  `,
})
export class TituloDialogComponent {
  @Input('titulo') titulo: string = 'Descripción de canal';
  @Input('imagen') imagen: string =
    'https://ebeteam.s3.us-east-2.amazonaws.com/assets/img/images/presencial.png';

  constructor() { }

}
