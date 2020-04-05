import { Component, OnInit } from '@angular/core';
import { MatchserviceService } from '../matchservice.service';
import { Matches } from '../match';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {

  matches: Matches[];
  constructor(private mtchService: MatchserviceService) { }

  ngOnInit() {
    this.getMatches(); 
  }

  getMatches(): void {
    this.mtchService.getMatches()
        .subscribe(match => this.matches = match);
  }

}
