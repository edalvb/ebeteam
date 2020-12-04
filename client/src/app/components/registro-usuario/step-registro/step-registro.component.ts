import { Component, OnInit } from '@angular/core';
import {CdkStepper} from '@angular/cdk/stepper';

@Component({
  selector: 'app-step-registro',
  templateUrl: './step-registro.component.html',
  styleUrls: ['./step-registro.component.css'],
  providers: [{
    provide: CdkStepper, useExisting: StepRegistroComponent
  }]
})
export class StepRegistroComponent extends CdkStepper{
  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
