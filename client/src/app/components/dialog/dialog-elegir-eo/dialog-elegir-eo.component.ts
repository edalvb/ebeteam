import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-dialog-elegir-eo',
  templateUrl: './dialog-elegir-eo.component.html',
  styleUrls: ['./dialog-elegir-eo.component.css']
})
export class DialogElegirEoComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  bien1 = [
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
    {
      id: 1,
      nombre: 'Algo 1'
    }, {
      id: 2,
      nombre: 'Algo 2'
    },
  ];

  bien: any;

  columnas: string[] = ['nombre'];

  dataSource!: MatTableDataSource<any>;

  constructor() {
    this.getsBien();
  }

  getsBien() {
    this.dataSource = new MatTableDataSource(this.bien1)
    this.bien = this.bien1;
  }

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
