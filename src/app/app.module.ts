import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BrandComponent } from './brand/brand.component';

import { CategoriesComponent } from './categories/categories.component';
import { FeaturedproductsComponent } from './featuredproducts/featuredproducts.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { SearchProductPipe } from './search-product.pipe';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CheckOutComponent } from './check-out/check-out.component';
import { AllordersComponent } from './allorders/allorders.component';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BrandComponent,
    CategoriesComponent,
    FeaturedproductsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    RegisterComponent,
    ProductsComponent,
    ProductItemComponent,
    MainSliderComponent,
  SearchProductPipe,
  CheckOutComponent,
  AllordersComponent,
  LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CarouselModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
    useClass:HttpInterceptorInterceptor,
  multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
