import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/authgaurd/auth.guard';
import { RoleGuard } from '../auth/authgaurd/role.guard';
import { DeactivateComponent } from './deactivate/deactivate.component';
import { HomeComponent } from './home/home.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {
    path: 'review',
    component: ReviewComponent,
   
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    component: DeactivateComponent,
    canDeactivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
