import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddThoroughbredComponent } from './add-thoroughbred.component';

const routes: Routes = [{ path: '', component: AddThoroughbredComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddThoroughbredRoutingModule { }
