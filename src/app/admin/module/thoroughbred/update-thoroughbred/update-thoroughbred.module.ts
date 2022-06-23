import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateThoroughbredRoutingModule } from './update-thoroughbred-routing.module';
import { UpdateThoroughbredComponent } from './update-thoroughbred.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UpdateThoroughbredComponent],
  imports: [
    CommonModule,
    UpdateThoroughbredRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class UpdateThoroughbredModule { }
