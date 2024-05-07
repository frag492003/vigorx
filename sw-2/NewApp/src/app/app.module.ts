import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' ;
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TopComponent } from './Main/top/top.component';
import { MenComponent } from './Main/men/men.component';
import { WomenComponent } from './Main/women/women.component';
import { KidsComponent } from './Main/kids/kids.component';
import { ExploreComponent } from './Main/explore/explore.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SingleProductComponent } from './Main/single-product/single-product.component';
import { AllProductsComponent } from './Main/all-products/all-products.component';
import { HomeComponent } from './AdminDashboard/home/home.component';
import { AddProductComponent } from './AdminDashboard/add-product/add-product.component';
import { ListProductsComponent } from './AdminDashboard/list-products/list-products.component';
import { UpdateProductComponent } from './AdminDashboard/update-product/update-product.component';
import { AllOrdersComponent } from './AdminDashboard/all-orders/all-orders.component';
import { AboutUsComponent } from './Main/about-us/about-us.component';
import { ContactUsComponent } from './Main/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    ExploreComponent,
    LoginComponent,
    RegisterComponent,
    SingleProductComponent,
    AllProductsComponent,
    HomeComponent,
    AddProductComponent,
    ListProductsComponent,
    UpdateProductComponent,
    AllOrdersComponent,
    AboutUsComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
