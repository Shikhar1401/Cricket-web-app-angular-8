import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamPlayersRoutingModule } from './team-players-routing.module';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';

@NgModule({
  declarations: [TeamsComponent, PlayersComponent],
  imports: [
    CommonModule,
    TeamPlayersRoutingModule
  ]
})
export class TeamPlayersModule { }
