import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Country } from './country';
import { COUNTRY } from './mock_data';
import { Teams } from './country';
import { TEAMS } from './mock_data';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private messageService: MessageService) { }

  getCountries(): Observable<Country[]>{
    this.messageService.add('HeroService: fetched heroes');
    return of(COUNTRY);
  }

  getTeams(id: number): Observable<Teams> {
    return of(TEAMS.find(team => team.cid === id ));
  }
}
