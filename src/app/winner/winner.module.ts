import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WinnerRoutingModule } from './winner-routing.module';
import { WinnerdetailsComponent } from './winnerdetails/winnerdetails.component';

@NgModule({
  declarations: [WinnerdetailsComponent],
  imports: [
    CommonModule,
    WinnerRoutingModule
  ]
})
export class WinnerModule { }
