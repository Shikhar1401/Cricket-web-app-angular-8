import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesRoutingModule } from './matches-routing.module';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { MatchCenterComponent } from './match-center/match-center.component';
import { MatchCenterHomeComponent } from './match-center-home/match-center-home.component';

@NgModule({
  declarations: [MatchListComponent, MatchDetailsComponent, MatchCenterComponent, MatchCenterHomeComponent],
  imports: [
    CommonModule,
    MatchesRoutingModule
  ]
})
export class MatchesModule { }
