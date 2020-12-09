import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionamientosComponent } from './cuestionamientos.component';

describe('CuestionamientosComponent', () => {
  let component: CuestionamientosComponent;
  let fixture: ComponentFixture<CuestionamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuestionamientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuestionamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
