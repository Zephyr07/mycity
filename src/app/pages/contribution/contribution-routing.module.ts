import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContributionPage } from './contribution.page';

const routes: Routes = [
  {
    path: '',
    component: ContributionPage
  },
  {
    path: 'list-company',
    loadChildren: () => import('../company/list-company/list-company.module').then( m => m.ListCompanyPageModule)
  },
  {
    path: 'list-offer/:type',
    loadChildren: () => import('../company/list-offer/list-offer.module').then( m => m.ListOfferPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContributionPageRoutingModule {}
