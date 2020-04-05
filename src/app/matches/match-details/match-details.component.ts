import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Matches } from '../match';
import { MatchserviceService } from '../matchservice.service';


@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})
export class MatchDetailsComponent implements OnInit {

  matchDetails: Matches;
  // id :number;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private mtchService: MatchserviceService) { }

  ngOnInit() {
    this.getMatches();
    console.log(this.matchDetails);
  }
  getMatches(): void {
    const id = +this.route.snapshot.params['id'];
    this.mtchService.getMatch(id).subscribe(match => this.matchDetails = match);
  }
}
