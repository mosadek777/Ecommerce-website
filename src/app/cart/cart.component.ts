import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cart } from 'src/core/interfaces/cart';
import { CartService } from 'src/core/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartProducts:any[]=[]
cartDetails:Cart = {} as Cart
constructor(private _CartService:CartService ,   private _toaster:ToastrService){
  
}

ngOnInit(): void {
    this.getCart()
    // todo----------------->   this.checkCart()              المفروض هنا ما تظهرش دي الا لما الكارت تبقى صفر
}
getCart(){
  this._CartService.getCart().subscribe({
    next:(res)=>{
      this.cartDetails = res
    },
    error:(err)=>console.log(err)
  })
}


updateCart(id:string,count:number){
this._CartService.updateCart(id,count).subscribe({
  next:(res)=>{
    this.cartDetails = res 
    
    console.log(res);
    if (res.status === 'success') {
      // this._toaster.success('product Added Successfully',res.status)
      Swal.fire(
        {
         icon: 'success',
         title:res.status,
         timer:1500
        }
       )
      
    
    
    }
   }
})
}


removeSpecificItem(id:string){
this._CartService.removeSpecificItem(id).subscribe({
  next:(res)=>{
    this.cartDetails = res 
    console.log(res);
    if (res.status === 'success') {
      // this._toaster.success('product Added Successfully',res.status)
      Swal.fire(
        {
         icon: 'success',
         title:'product removed successfully',
         timer:1500
        }
       )
      
    
    
    }
   }
})
}

clearCart(){
  this._CartService.clearCart().subscribe({
    next:(res)=>{
      this.cartDetails = res 
      this.cartProducts=[]
                // this._toaster.error('product Added Successfully',res.status)
        Swal.fire(
          {
           icon: 'success',
           title:'cart is empty',
           timer:1500
          }
         )
        
     },
     error:(err)=>{
      if (err.error.statusMsg==="fail") {
    this._toaster.error(err.error.message)
        console.log(err);
      }
     }
  })
}
checkCart(){
  if (this.cartProducts.length <=0) {
    this._toaster.error(`err.error.message`)
    console.log(`eeeeeeeeeeeee`);
   }
}
}
