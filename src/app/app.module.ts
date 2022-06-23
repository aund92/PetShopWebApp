import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeUserComponent } from './component/home-user/home-user.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderAdminComponent } from './admin/component/header-admin/header-admin.component';
import { SidebarComponent } from './admin/component/sidebar/sidebar.component';
import { HomeAdminComponent } from './admin/component/home-admin/home-admin.component';
import { authInterceptorProviders } from './helper/auth-interceptor';
import {LoginComponent} from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { ShoppingPaymentComponent } from './component/shopping-payment/shopping-payment.component';
import { OrderComponent } from './admin/component/order/order.component';
import { OrderDetailComponent } from './admin/component/order/order-detail/order-detail.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ProfileOrderComponent } from './component/profile/profile-order/profile-order.component';
import { NewsDetailComponent } from './component/news-detail/news-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewsListComponent } from './component/news-list/news-list.component';
import { MaterialListComponent } from './admin/component/material/material-list/material-list.component';
import { MaterialAddComponent } from './admin/component/material/material-add/material-add.component';
import { MaterialUpdateComponent } from './admin/component/material/material-update/material-update.component';
import { KpiListComponent } from './admin/component/kpi/kpi-list/kpi-list.component';
import { KpiAddComponent } from './admin/component/kpi/kpi-add/kpi-add.component';
import { KpiUpdateComponent } from './admin/component/kpi/kpi-update/kpi-update.component';
import { IncomeListComponent } from './admin/component/income/income-list/income-list.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeUserComponent,
    FooterComponent,
    HeaderAdminComponent,
    SidebarComponent,
    HomeAdminComponent,
    LoginComponent,
    RegisterComponent,
    ProductListComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    ShoppingPaymentComponent,
    OrderComponent,
    OrderDetailComponent,
    ProfileComponent,
    ProfileOrderComponent,
    NewsDetailComponent,
    NewsListComponent,
    MaterialListComponent,
    MaterialAddComponent,
    MaterialUpdateComponent,
    KpiListComponent,
    KpiAddComponent,
    KpiUpdateComponent,
    IncomeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [authInterceptorProviders,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
