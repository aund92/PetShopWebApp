import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateThoroughbredComponent } from './update-thoroughbred.component';

const routes: Routes = [{ path: '', component: UpdateThoroughbredComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateThoroughbredRoutingModule { }
