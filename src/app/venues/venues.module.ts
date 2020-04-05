import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenuesRoutingModule } from './venues-routing.module';
import { VenueComponent } from './venue/venue.component';

@NgModule({
  declarations: [VenueComponent],
  imports: [
    CommonModule,
    VenuesRoutingModule
  ]
})
export class VenuesModule { }
