import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContributionPageRoutingModule } from './contribution-routing.module';

import { ContributionPage } from './contribution.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContributionPageRoutingModule
  ],
  declarations: [ContributionPage]
})
export class ContributionPageModule {}
