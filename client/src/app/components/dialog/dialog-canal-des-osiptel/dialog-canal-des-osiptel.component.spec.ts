import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCanalDesOsiptelComponent } from './dialog-canal-des-osiptel.component';

describe('DialogCanalDesOsiptelComponent', () => {
  let component: DialogCanalDesOsiptelComponent;
  let fixture: ComponentFixture<DialogCanalDesOsiptelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCanalDesOsiptelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCanalDesOsiptelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
