import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'add-company',
    loadChildren: () => import('../company/add-company/add-company.module').then( m => m.AddCompanyPageModule)
  },
  {
    path: 'add-offer',
    loadChildren: () => import('../company/add-offer/add-offer.module').then( m => m.AddOfferPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
