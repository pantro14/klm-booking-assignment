import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'check-in' },
  { path: 'check-in', loadComponent: () =>
      import('./components/check-in/check-in.component')
        .then(m => m.CheckInComponent) },
  {
    path: 'booking-details/:code',
    loadComponent: () =>
      import('./components/booking-details/booking-details.component')
        .then(m => m.BookingDetailsComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
