import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WinnerdetailsComponent } from './winnerdetails/winnerdetails.component';

const routes: Routes = [
  { path: 'winnerdetails', component: WinnerdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WinnerRoutingModule { }
