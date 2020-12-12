import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DenTableDataSource, DenTableItem } from './den-table-datasource';

@Component({
  selector: 'app-den-table',
  templateUrl: './den-table.component.html',
  styleUrls: ['./den-table.component.css']
})
export class DenTableComponent implements AfterViewInit, OnInit {

  @Output() contar = new EventEmitter;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DenTableItem>;
  dataSource!: DenTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['fecha', 'denuncia', 'operadora', 'servicio','actions'];

  ngOnInit() {
    this.dataSource = new DenTableDataSource();
    this.contar.emit(this.dataSource.data.length)
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
