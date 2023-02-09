import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContectRoutingModule } from './contect-routing.module';
import { LocationComponent } from './location/location.component';
import { InquaryComponent } from './inquary/inquary.component';
import { Click1Component } from './inquary/click1/click1.component';
import { Click2Component } from './inquary/click2/click2.component';


@NgModule({
  declarations: [
    LocationComponent,
    InquaryComponent,
    Click1Component,
    Click2Component
  ],
  imports: [
    CommonModule,
    ContectRoutingModule
  ]
})
export class ContectModule { }
