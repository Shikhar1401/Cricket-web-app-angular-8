import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PointsTableRoutingModule } from './points-table-routing.module';
import { PointsTableComponent } from './points-table/points-table.component';

@NgModule({
  declarations: [PointsTableComponent],
  imports: [
    CommonModule,
    PointsTableRoutingModule
  ]
})
export class PointsTableModule { }
