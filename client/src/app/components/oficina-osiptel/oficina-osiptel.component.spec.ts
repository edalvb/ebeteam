import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinaOsiptelComponent } from './oficina-osiptel.component';

describe('OficinaOsiptelComponent', () => {
  let component: OficinaOsiptelComponent;
  let fixture: ComponentFixture<OficinaOsiptelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OficinaOsiptelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OficinaOsiptelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
