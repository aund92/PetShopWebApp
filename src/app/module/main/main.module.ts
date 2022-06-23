import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MainPipe } from './main-pipe/main-pipe';
import {LoginComponent} from '../../component/login/login.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [MainComponent, MainPipe],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgbCarouselModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
