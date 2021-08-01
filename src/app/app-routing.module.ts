import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'add-company',
    loadChildren: () => import('./pages/company/add-company/add-company.module').then( m => m.AddCompanyPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'add-offer',
    loadChildren: () => import('./pages/company/add-offer/add-offer.module').then( m => m.AddOfferPageModule)
  },
  {
    path: 'list-company',
    loadChildren: () => import('./pages/company/list-company/list-company.module').then( m => m.ListCompanyPageModule)
  },
  {
    path: 'contribution',
    loadChildren: () => import('./pages/contribution/contribution.module').then( m => m.ContributionPageModule)
  },
  {
    path: 'list-offer',
    loadChildren: () => import('./pages/company/list-offer/list-offer.module').then( m => m.ListOfferPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
