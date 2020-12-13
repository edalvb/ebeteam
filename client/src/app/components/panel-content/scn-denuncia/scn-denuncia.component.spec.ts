import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScnDenunciaComponent } from './scn-denuncia.component';

describe('ScnDenunciaComponent', () => {
  let component: ScnDenunciaComponent;
  let fixture: ComponentFixture<ScnDenunciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScnDenunciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScnDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
