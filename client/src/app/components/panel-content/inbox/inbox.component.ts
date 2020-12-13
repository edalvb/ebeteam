import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Denuncia } from 'src/app/modelo/denuncia';
import { InboxTableDataSource } from './inbox-table-datasource';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements AfterViewInit, OnInit {

  @Output() porleer = new EventEmitter;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Denuncia>;
  dataSource!: InboxTableDataSource;
  
  displayedColumns = ['reg', 'denuncia', 'operadora', 'servicio', 'fecha','actions'];

  ngOnInit() {
    this.dataSource = new InboxTableDataSource();
    this.porleer.emit(this.dataSource.data.length);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
