
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/core/services/products.service';
import { Product } from '../product';
import * as Aos from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit  {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay : true,
    autoplayTimeout:5000,
autoplayHoverPause:false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }



  productId:string=""
  productDetails:Product= {} as Product

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! constructor !!!!!!!!!!!!!!!!!!!!!!!!! 
constructor(
  private _activatedRoute:ActivatedRoute ,
   private _productsService:ProductsService,
   private _CartService:CartService,
   private _toaster:ToastrService
   ){
this._activatedRoute.paramMap.subscribe((res:any)=>{
  this.productId=res.params.id
})
this._productsService.getProductById(this.productId).subscribe((res)=>{
this.productDetails=res.data
})
}
ngOnInit(): void {
  Aos.init();
}

addToCart(id:string){
this._CartService.addToCart(id).subscribe({
  next:(res)=>{
console.log(res);
if (res.status === 'success') {
  // this._toaster.success(res.message,res.status)

  Swal.fire(
   {
    icon: 'success',
    title:res.message,
    timer:2500
   }
  )

  // Swal.fire(
  //   'success',
  //    res.message,
  //    res.status,
     
  //  )
}
  }
})
}

}
