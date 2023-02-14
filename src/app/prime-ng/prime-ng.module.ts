import { PrimeNgComponent } from './prime-ng.component';
import { SliderModule } from 'primeng/slider';
import { KnobModule } from 'primeng/knob';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PrimeNgComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    KnobModule,
    SliderModule,
  ],
  exports:[
    PrimeNgComponent
  ]
})
export class PrimeNgModule { }
