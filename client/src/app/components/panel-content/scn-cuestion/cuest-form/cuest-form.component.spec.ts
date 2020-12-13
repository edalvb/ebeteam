import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestFormComponent } from './cuest-form.component';

describe('CuestFormComponent', () => {
  let component: CuestFormComponent;
  let fixture: ComponentFixture<CuestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
