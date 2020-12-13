import { Component, ViewChild, Inject, OnDestroy, OnInit, AfterContentInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as eoQL from "../../../graphql/eo";
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dialog-elegir-eo',
  templateUrl: './dialog-elegir-eo.component.html',
  styleUrls: ['./dialog-elegir-eo.component.css']
})
export class DialogElegirEoComponent implements OnDestroy, AfterContentInit, OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  s_eo!: Subscription;

  eo: any;

  columnas: string[] = ['nombre'];

  dataSource!: MatTableDataSource<any>;

  constructor(private apollo: Apollo, public dialogRef: MatDialogRef<DialogElegirEoComponent>, @Inject(MAT_DIALOG_DATA) public my_eo: any) { }

  ngOnInit(): void {
    this.s_eo = this.apollo
      .watchQuery({
        query: eoQL.GET_EOS,
      })
      .valueChanges.subscribe(({ data }) => {
        let dato: any = data;
        this.eo = dato.entidadReferencias;
        this.dataSource = new MatTableDataSource(this.eo)
        this.dataSource.paginator = this.paginator;
      });
  }

  ngAfterContentInit(): void {
    if (this.paginator != null) {
      this.dataSource.paginator = this.paginator;
    }
  }

  seleccionarEO(idEO: any, nombre: any) {
    this.my_eo.id = idEO;
    this.my_eo.nombre = nombre;
  }

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.s_eo.unsubscribe();
  }

  ngOnDestroy(): void {
    this.s_eo.unsubscribe();
  }

}
