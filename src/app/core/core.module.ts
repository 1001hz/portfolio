import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from 'ng2-scroll-to-el';

import { NavComponent } from './nav/nav.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FooterSocialComponent } from './footer-social/footer-social.component';
import { FooterContactComponent } from './footer-contact/footer-contact.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ScrollToModule.forRoot()
  ],
  exports: [
    NavComponent,
    FooterSocialComponent,
    FooterContactComponent
  ],
  declarations: [NavComponent, FooterSocialComponent, FooterContactComponent]
})
export class CoreModule { }
