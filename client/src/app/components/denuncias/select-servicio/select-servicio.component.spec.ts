import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectServicioComponent } from './select-servicio.component';

describe('SelectServicioComponent', () => {
  let component: SelectServicioComponent;
  let fixture: ComponentFixture<SelectServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
