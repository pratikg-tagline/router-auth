import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/authgaurd/auth.guard';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [{
  path:'',
  component: ServiceComponent,
  canDeactivate:[AuthGuard],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
