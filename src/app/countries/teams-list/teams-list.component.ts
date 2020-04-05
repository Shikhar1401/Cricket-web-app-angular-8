import { Component, OnInit } from '@angular/core';
import { Route , ActivatedRoute, ParamMap, Router} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CountryService } from '../country.service';
import { Observable } from 'rxjs';
import { Teams} from '../country';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {

  teams: Teams;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private conService: CountryService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    const id = +this.route.snapshot.paramMap.get('cid');
    this.conService.getTeams(id).
        subscribe(team => this.teams = team);
  }

}
