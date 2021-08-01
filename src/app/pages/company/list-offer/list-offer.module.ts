import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOfferPageRoutingModule } from './list-offer-routing.module';

import { ListOfferPage } from './list-offer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListOfferPageRoutingModule
  ],
  declarations: [ListOfferPage]
})
export class ListOfferPageModule {}
