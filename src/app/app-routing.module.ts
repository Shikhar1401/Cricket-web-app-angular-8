import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',   redirectTo: '/countries', pathMatch: 'full' },
  {
    path: 'pointtable' ,
    loadChildren: () => import('./pointsTable/points-table.module').then(m => m.PointsTableModule),
    data: { preload: true }
  },
  // {
  //   path:'matches', redirectTo: '/matches', pathMatch: 'full'
  // },
  // { path: 'crisis-center', component: CrisisListComponent },
  // // { path: 'countries', component: CountryListComponent },
  // { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
