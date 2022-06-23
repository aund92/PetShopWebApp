import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListThoroughbredRoutingModule } from './list-thoroughbred-routing.module';
import { ListThoroughbredComponent } from './list-thoroughbred.component';


@NgModule({
  declarations: [ListThoroughbredComponent],
  imports: [
    CommonModule,
    ListThoroughbredRoutingModule
  ]
})
export class ListThoroughbredModule { }
