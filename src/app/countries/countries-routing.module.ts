import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { TeamsListComponent } from './teams-list/teams-list.component';

const routes: Routes = [
  { path: 'countries',  component: CountryListComponent },
  { path: 'teams/:cid', component: TeamsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
