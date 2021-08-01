import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOfferPage } from './list-offer.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOfferPageRoutingModule {}
