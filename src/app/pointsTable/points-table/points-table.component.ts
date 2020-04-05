import { Component, OnInit } from '@angular/core';
import { Points } from '../points';
import { PointserviceService } from '../pointservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-points-table',
  templateUrl: './points-table.component.html',
  styleUrls: ['./points-table.component.scss']
})
export class PointsTableComponent implements OnInit {

  points:Points [];
  constructor(private pointService: PointserviceService) { }

  ngOnInit() {
    this.getPointsTable();
  }

  getPointsTable(): void{
    this.pointService.getPoints()
        .subscribe(points => this.points = points);
  }


}
