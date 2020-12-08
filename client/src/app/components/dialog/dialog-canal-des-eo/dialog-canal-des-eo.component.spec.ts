import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCanalDesEoComponent } from './dialog-canal-des-eo.component';

describe('DialogCanalDesEoComponent', () => {
  let component: DialogCanalDesEoComponent;
  let fixture: ComponentFixture<DialogCanalDesEoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCanalDesEoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCanalDesEoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
