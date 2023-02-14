import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { PrimeFlexComponent } from './prime-flex/prime-flex.component';
import { PrimeNgComponent } from './prime-ng/prime-ng.component';

const routes: Routes = [
  { path: 'primeNg', component: PrimeNgComponent },
  { path: 'primeFlex', component: PrimeFlexComponent },
  { path: 'calendar', component: CalendarComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
