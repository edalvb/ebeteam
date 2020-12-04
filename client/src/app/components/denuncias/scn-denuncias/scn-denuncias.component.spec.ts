import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScnDenunciasComponent } from './scn-denuncias.component';

describe('ScnDenunciasComponent', () => {
  let component: ScnDenunciasComponent;
  let fixture: ComponentFixture<ScnDenunciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScnDenunciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScnDenunciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
