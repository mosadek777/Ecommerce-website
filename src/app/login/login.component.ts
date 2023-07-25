import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  

constructor( private _authService:AuthService , private _toaster:ToastrService , private _router:Router){

this._authService.checkUser()

}


loginForm:FormGroup = new FormGroup({

  email:new FormControl(null,[Validators.required, Validators.email]),
  password:new FormControl(null,[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),

})


isLoading:Boolean = false;
handleLoginForm(loginForm:FormGroup){
this.isLoading = true
 if (loginForm.valid) {
  this._authService.login(loginForm.value).subscribe({
    next:(res)=>{
      if (res.message === 'success') {
        localStorage.setItem("userToken",res.token)
        this._authService.getUserData()
        this.isLoading = false
        this._toaster.success(res.message,'successful login')
        this._router.navigate(['/home'])
      }
    },
    error:(error)=>{ 
      console.log(error);
      if (error.error.statusMsg === 'fail') {
     this._toaster.warning(error.error.message,`warning`)
     this.isLoading = false
      } else {
        this._toaster.error(error.error.errors.msg, 'error')
        this.isLoading = false
  console.log(`error is here`);
      }
     
    }
  })
 }
}
}
