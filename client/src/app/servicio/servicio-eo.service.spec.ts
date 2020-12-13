import { TestBed } from '@angular/core/testing';

import { ServicioEoService } from './servicio-eo.service';

describe('ServicioEoService', () => {
  let service: ServicioEoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioEoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
