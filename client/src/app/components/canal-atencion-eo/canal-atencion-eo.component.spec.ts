import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalAtencionEoComponent } from './canal-atencion-eo.component';

describe('CanalesComponent', () => {
  let component: CanalAtencionEoComponent;
  let fixture: ComponentFixture<CanalAtencionEoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanalAtencionEoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanalAtencionEoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
