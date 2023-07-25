import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  token:string | null
  numOfCartItems:BehaviorSubject<number> = new BehaviorSubject(0)
  cartId:BehaviorSubject<string> = new BehaviorSubject("")

  constructor(private _HttpClient:HttpClient) { 
    this.token=localStorage.getItem("userToken")
    this.getCart().subscribe({
      next:(res)=>{
      this.numOfCartItems.next(res.numOfCartItems)
      this.cartId.next(res.data._id)
      }
    })
  }


addToCart(productId:string):Observable<any>
{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
  {productId:productId}
  )
}



getCart():Observable<any>
{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,
  )
}



updateCart(productId:string,count:number):Observable<any>
{
  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
  {count:count}
  )
}


// !------------------------------------------------> delete specific item <----------------------------
removeSpecificItem(productId:string):Observable<any>
{
  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
   )
}

// **/ ------------------------------------------------> clear cart <----------------------------
clearCart():Observable<any>
{
  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/`,
   )
}



// **/ ------------------------------------------------> payment api <----------------------------
generateOnlinePayment(cartId:string,shippingAddress:any):Observable<any>
{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
  {shippingAddress:shippingAddress}
 )
}


}
