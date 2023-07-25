import { CheckOutComponent } from './check-out/check-out.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BrandComponent } from './brand/brand.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { AllordersComponent } from './allorders/allorders.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:'home',canActivate:[AuthGuard], component:HomeComponent, title:'home'},
  {path:'about',canActivate:[AuthGuard], component:AboutComponent, title:'about'},
  {path:'brands',canActivate:[AuthGuard], component:BrandComponent, title:'brands'},
  {path:'products',canActivate:[AuthGuard],component:ProductsComponent,title:'products'},
  {path:'categories',canActivate:[AuthGuard], component:CategoriesComponent, title:'categories'},
  {path:"productDetails/:id",canActivate:[AuthGuard], component:ProductDetailsComponent,title:"productDetails"},





  {path:"checkout/:cartId", component:CheckOutComponent, title:'checkOut'},
  {path:'allorders', component:AllordersComponent, title:'allorders'},
  
  {path:'login', component:LoginComponent, title:'login'},

  {path:'register', component:RegisterComponent, title:'register'},
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },


  {path:'**', component:NotFoundComponent, title:'not found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
