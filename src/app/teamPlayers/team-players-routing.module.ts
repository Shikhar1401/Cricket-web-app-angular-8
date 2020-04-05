import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';

const routes: Routes = [
  {
    path: 'teamsinfo', component: TeamsComponent
  },
  {
    path: 'player/:pid', component: PlayersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamPlayersRoutingModule { }
