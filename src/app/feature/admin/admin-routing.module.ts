import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/authgaurd/auth.guard';

import { DeactivateComponent } from './deactivate/deactivate.component';
import { HomeComponent } from './home/home.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {
    path: 'review',
    component: ReviewComponent,
   canActivate:[AuthGuard],
   canDeactivate:[AuthGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuard],
    canDeactivate:[AuthGuard],
  },
  {
    path: '',
    component: DeactivateComponent,
    canActivate:[AuthGuard],
    canDeactivate:[AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
