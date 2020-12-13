import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Denuncia } from 'src/app/modelo/denuncia';
  
  const ELEMENT_DATA: Denuncia[] = [
    {
      fecha: '08/01/2019',
      denuncia: '001-2019-LN/DEN',
      operadora: 'TELEFÓNICA DEL PERÚ S.A.A.',
      recurso: 'Incumplimiento de resolución de primera instancia',
      servicio: 'Servicios empaquetados',
      materia: 'Derechos reconocidos',
      estado: 'CONCLUIDO'
    },
    {
      fecha: '10/02/2019',
      denuncia: '002-2019-LN/DEN',
      operadora: 'CLARO',
      recurso: 'Incumplimiento de resolución de primera instancia',
      servicio: 'Servicios empaquetados',
      materia: 'Derechos reconocidos',
      estado: 'EN TRAMITE'
    },
    {
      fecha: '08/01/2019',
      denuncia: '001-2019-LN/DEN',
      operadora: 'TELEFÓNICA DEL PERÚ S.A.A.',
      recurso: 'Incumplimiento de resolución de primera instancia',
      servicio: 'Servicios empaquetados',
      materia: 'Derechos reconocidos',
      estado: 'CONCLUIDO'
    },
    {
      fecha: '10/02/2019',
      denuncia: '002-2019-LN/DEN',
      operadora: 'CLARO',
      recurso: 'Incumplimiento de resolución de primera instancia',
      servicio: 'Servicios empaquetados',
      materia: 'Derechos reconocidos',
      estado: 'EN TRAMITE'
    },
    {
      fecha: '08/01/2019',
      denuncia: '001-2019-LN/DEN',
      operadora: 'TELEFÓNICA DEL PERÚ S.A.A.',
      recurso: 'Incumplimiento de resolución de primera instancia',
      servicio: 'Servicios empaquetados',
      materia: 'Derechos reconocidos',
      estado: 'CONCLUIDO'
    },
    {
      fecha: '10/02/2019',
      denuncia: '002-2019-LN/DEN',
      operadora: 'CLARO',
      recurso: 'Incumplimiento de resolución de primera instancia',
      servicio: 'Servicios empaquetados',
      materia: 'Derechos reconocidos',
      estado: 'EN TRAMITE'
    }
  ];
  
  export class InboxTableDataSource extends DataSource<Denuncia> {
    data: Denuncia[] = ELEMENT_DATA;
    paginator!: MatPaginator;
    sort!: MatSort;
  
    constructor() {
      super();
    }
  
    connect(): Observable<Denuncia[]> {
      
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
  
    private getPagedData(data: Denuncia[]) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    }
  
    private getSortedData(data: Denuncia[]) {
      if (!this.sort.active || this.sort.direction === '') {
        return data;
      }
  
      return data.sort((a, b) => {
        const isAsc = this.sort.direction === 'asc';
        switch (this.sort.active) {
          case 'fecha': return compare(a.fecha, b.fecha, isAsc);
          case 'denuncia': return compare(+a.denuncia, +b.denuncia, isAsc);
          default: return 0;
        }
      });
    }
  }
  
  function compare(a: string | number, b: string | number, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }