import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';


export interface CuestTableItem {
  fecha: string;
  imei: string;
  operadora: string;
  estado: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: CuestTableItem[] = [
  {
    fecha: '19/08/2020',
    imei: '13254664544453435',
    operadora: 'Movistar',
    estado: 'ATENDIDO'
  },
  {
    fecha: '10/08/2020',
    imei: '03254664544453435',
    operadora: 'Claro',
    estado: 'EN TRAMITE'
  },
];

export class CuestTableDataSource extends DataSource<CuestTableItem> {
  data: CuestTableItem[] = EXAMPLE_DATA;
  paginator!: MatPaginator;
  sort!: MatSort;

  constructor() {
    super();
  }

  connect(): Observable<CuestTableItem[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  disconnect() {}

  private getPagedData(data: CuestTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: CuestTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'fecha': return compare(a.fecha, b.fecha, isAsc);
        case 'imei': return compare(+a.imei, +b.imei, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
