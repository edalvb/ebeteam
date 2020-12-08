import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  nombre: string;
  name: string;
}

@Component({
  selector: 'app-dialog-canal-des-osiptel',
  templateUrl: './dialog-canal-des-osiptel.component.html',
  styleUrls: ['./dialog-canal-des-osiptel.component.css']
})
export class DialogCanalDesOsiptelComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public canal: DialogData) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
