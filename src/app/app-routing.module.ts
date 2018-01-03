import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';

let appRoutes = [
  { path: '', component: LandingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
      //{ enableTracing: true } // <-- debugging purposes only
    ),
  ],
  declarations: []
})
export class AppRoutingModule { }
