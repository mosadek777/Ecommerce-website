import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

constructor( private _authService:AuthService , private _toaster:ToastrService , private _router:Router){
  this._authService.checkUser()
}


registerForm:FormGroup = new FormGroup({
  name:new FormControl(null,[Validators.required , Validators.minLength(3), Validators.maxLength(11)]),
  email:new FormControl(null,[Validators.required, Validators.email]),
  password:new FormControl(null,[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
  rePassword:new FormControl(null,[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
  phone:new FormControl(null,[Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
})


isLoading:Boolean = false;
handleRegisterForm(registerForm:FormGroup){
this.isLoading = true
 if (registerForm.valid) {
  this._authService.register(registerForm.value).subscribe({
    next:(res)=>{
      if (res.message === 'success') {
        this.isLoading = false
        this._toaster.success(res.message,'successful register')
        this._router.navigate(['/login'])
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
