import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepRegistroComponent } from './step-registro.component';

describe('StepRegistroComponent', () => {
  let component: StepRegistroComponent;
  let fixture: ComponentFixture<StepRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
