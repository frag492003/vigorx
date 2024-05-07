import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from './Main/top/top.component';
import { SingleProductComponent } from './Main/single-product/single-product.component';
import { AllProductsComponent } from './Main/all-products/all-products.component';
import { HomeComponent } from './AdminDashboard/home/home.component';
import { ListProductsComponent } from './AdminDashboard/list-products/list-products.component';
import { AddProductComponent } from './AdminDashboard/add-product/add-product.component';
import { UpdateProductComponent } from './AdminDashboard/update-product/update-product.component';
import { AllOrdersComponent } from './AdminDashboard/all-orders/all-orders.component';
import { AboutUsComponent } from './Main/about-us/about-us.component';
import { ContactUsComponent } from './Main/contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "", component: TopComponent },
  { path: "home", component: TopComponent },
  { path: "product/:id", component: SingleProductComponent },
  { path: "allProduct/:type", component: AllProductsComponent },
  { path: "aboutus", component: AboutUsComponent },
  { path: "contactus", component: ContactUsComponent },
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},

  //Admin
  { path: "admin", component: HomeComponent },
  { path: "addProduct", component: AddProductComponent },
  { path: "allProducts", component: ListProductsComponent },
  { path: "updateProduct/:id", component: UpdateProductComponent },

  { path: "allOrders", component: AllOrdersComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
