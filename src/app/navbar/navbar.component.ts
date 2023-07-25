import { AuthService } from 'src/core/services/auth.service';
import { Component } from '@angular/core';
import { CartService } from 'src/core/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
isLoggedIn : boolean = false
numOfCartItems:number = 0

constructor(private _authService:AuthService , private _cartService:CartService){

this._authService.userData.subscribe((res)=>{
  if (this._authService.userData.getValue()) {
    this.isLoggedIn = true
  }
  else{
    this.isLoggedIn = false
  }
})

this._cartService.numOfCartItems.subscribe((res)=>{
  this.numOfCartItems = res
})

}
logOut(){
  this._authService.logOut()
}


}
