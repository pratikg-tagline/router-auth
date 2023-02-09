import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReviewComponent } from './review/review.component';
import { HomeComponent } from './home/home.component';
import { DeactivateComponent } from './deactivate/deactivate.component';


@NgModule({
  declarations: [
    ReviewComponent,
    HomeComponent,
    DeactivateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
