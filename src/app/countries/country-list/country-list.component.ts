import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryService } from '../country.service';
import { Country } from '../country';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  country:Country[];
  selectedCountry: Country;

  constructor(private conService:CountryService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.getCountries();
  }

  onSelect(con: Country): void {
    this.selectedCountry = con;
    this.messageService.add(`HeroService: Selected hero id=${con.cid}`);
  }

  getCountries(): void {
    this.conService.getCountries()
        .subscribe(country => this.country = country);
  }

  
}
