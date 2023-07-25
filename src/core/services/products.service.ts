import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient:HttpClient) {

   }

  //  ********************************************** get all products api *********************
   getProducts():Observable<any>
   {
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/products`)
   }

  //  ********************************************** get specific product api *********************
  getProductById(id:string):Observable<any>
  {
   return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }


   //  ********************************************** get all categories api *********************
   getCategories():Observable<any>
   {
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
   }

}
