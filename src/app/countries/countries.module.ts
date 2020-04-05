import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountryListComponent } from './country-list/country-list.component';
import { TeamsListComponent } from './teams-list/teams-list.component';

@NgModule({
  declarations: [CountryListComponent, TeamsListComponent],
  imports: [
    CommonModule,
    FormsModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
