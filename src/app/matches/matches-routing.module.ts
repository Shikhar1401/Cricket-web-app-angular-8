import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { MatchCenterComponent } from './match-center/match-center.component';
import { MatchCenterHomeComponent } from './match-center-home/match-center-home.component';


const matchCenterRoutes: Routes = [
  {
    path: 'match-center',
      component: MatchListComponent,
  },
  {
    path:'match/:id',component:MatchDetailsComponent 
  }
]

@NgModule({
  imports: [RouterModule.forChild(matchCenterRoutes)],
  exports: [RouterModule]
})
export class MatchesRoutingModule { }
