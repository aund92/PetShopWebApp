import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListThoroughbredComponent } from './list-thoroughbred.component';

const routes: Routes = [{ path: '', component: ListThoroughbredComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListThoroughbredRoutingModule { }
