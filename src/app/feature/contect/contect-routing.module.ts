import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/authgaurd/auth.guard';
import { Click1Component } from './inquary/click1/click1.component';
import { Click2Component } from './inquary/click2/click2.component';
import { InquaryComponent } from './inquary/inquary.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {
    path: '',
    component: InquaryComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'click1',
        component: Click1Component,
      },
      {
        path: 'click2',
        component: Click2Component,
      },
    ],
  },
  {
    path: 'location',
    component: LocationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContectRoutingModule {}
