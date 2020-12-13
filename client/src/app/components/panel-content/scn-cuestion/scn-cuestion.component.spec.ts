import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScnCuestionComponent } from './scn-cuestion.component';

describe('ScnCuestionComponent', () => {
  let component: ScnCuestionComponent;
  let fixture: ComponentFixture<ScnCuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScnCuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScnCuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
