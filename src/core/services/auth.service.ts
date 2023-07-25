import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient: HttpClient , private _router:Router , private _toaster:ToastrService  ) {
    // *****************************************check every time if user is logged or not by localStorage
    if (localStorage.getItem("userToken")) {
      this.getUserData()
    }
   }
   userData:BehaviorSubject<any> = new BehaviorSubject(null)
  //  ************************************ decoded and encoded token ***********************
   getUserData(){
    let encodedToken = JSON.stringify(localStorage.getItem("userToken"))
    let encoded = jwtDecode(encodedToken)
    this.userData.next(encoded) 
 
   }

  //  !----------------------------------------------> register Api <----------------------------
   register (userData:object):Observable<any>
   {
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,userData)
   }


  //  !----------------------------------------------> login Api <----------------------------


   login(userData:object):Observable<any>
   {
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,userData)
   }


     //  !----------------------------------------------> logout Api <----------------------------
     logOut(){
      localStorage.removeItem("userToken")
      this.userData.next(null)
      this._toaster.info("BYE 👋👋","Be Back Soon")
      this._router.navigate(['/login'])
     }


          //  !----------------------------------------------> check user by local storage  <----------------------------
checkUser(){
  if (localStorage.getItem("userToken")!=null) {
    this._toaster.warning("you are already registered")
    this._router.navigate(['/home'])
  }
}
}
