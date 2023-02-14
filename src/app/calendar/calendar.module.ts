import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './calendar.component';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    OrganizationChartModule,
    FormsModule
  ]
})
export class CalendarModule { }
