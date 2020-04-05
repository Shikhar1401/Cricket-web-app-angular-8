import { Injectable } from '@angular/core';
import { Matches } from './match';
import { MATCHES } from './mockmatch_data';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchserviceService {

  constructor() { }

  getMatches(): Observable<Matches[]> {
    return of(MATCHES);
  }

  getMatch(id): Observable<Matches>{
    return of(MATCHES.find(match => match.mno === id));
  }
}
