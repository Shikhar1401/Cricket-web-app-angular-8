import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PointsTableComponent } from './points-table/points-table.component';

const routes: Routes = [
  {path: 'pointtable', component: PointsTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PointsTableRoutingModule { }
