import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionEoComponent } from './descripcion-eo.component';

describe('DescripcionEoComponent', () => {
  let component: DescripcionEoComponent;
  let fixture: ComponentFixture<DescripcionEoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionEoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionEoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
