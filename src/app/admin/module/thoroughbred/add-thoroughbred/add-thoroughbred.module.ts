import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddThoroughbredRoutingModule } from './add-thoroughbred-routing.module';
import { AddThoroughbredComponent } from './add-thoroughbred.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddThoroughbredComponent],
  imports: [
    CommonModule,
    AddThoroughbredRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class AddThoroughbredModule { }
