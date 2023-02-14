import { PrimeFlexComponent } from './prime-flex.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PrimeFlexComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    InputSwitchModule
  ],
  exports: [
    PrimeFlexComponent
  ]
})
export class PrimeFlexModule { }
