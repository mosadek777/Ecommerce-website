import { CartService } from 'src/core/services/cart.service';
import { Product } from './../product';
import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
@Input() product:Product = {} as Product

constructor(private _CartService:CartService,  private _toaster:ToastrService){

}




addProduct(id:string){
this._CartService.addToCart(id).subscribe({
  next:(res)=>{
    console.log(res);
    if (res.status === 'success') {
      // this._toaster.success(res.message,res.status)


this._CartService.numOfCartItems.next(res.numOfCartItems)

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
