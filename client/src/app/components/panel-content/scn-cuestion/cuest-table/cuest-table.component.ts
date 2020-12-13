import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CuestTableDataSource, CuestTableItem } from './cuest-table-datasource';

@Component({
  selector: 'app-cuest-table',
  templateUrl: './cuest-table.component.html',
  styleUrls: ['./cuest-table.component.css']
})
export class CuestTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CuestTableItem>;
  dataSource!: CuestTableDataSource;

  displayedColumns = ['fecha', 'imei', 'operadora', 'estado'];

  ngOnInit() {
    this.dataSource = new CuestTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  
}
