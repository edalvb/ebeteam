import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinaEoComponent } from './oficina-eo.component';

describe('OficinaEoComponent', () => {
  let component: OficinaEoComponent;
  let fixture: ComponentFixture<OficinaEoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OficinaEoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OficinaEoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});