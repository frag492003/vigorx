import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { AuthService } from '../Services/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  Message1 = ''
  Message2 = ''

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, CustomValidators.email]),
    password: new FormControl("", [Validators.required,CustomValidators.rangeLength([8, 15])]),
  })

  get myform() {
    return this.loginForm;
  }


  constructor(private serv: AuthService, public router: Router) { }

  Login() {
    console.log(this.loginForm.value);
    let id !: any
    let role !: any

    this.serv.get().subscribe((data: any) => {
      console.log(data);

      let user = data.find((userData: any) => {
        id = userData.id
        role = userData.role
        return userData.email == this.loginForm.controls.email.value && userData.password == this.loginForm.controls.password.value
      })
      console.log(id);




      if (user) {
        if (role == "customer") {
          localStorage.setItem("role", role)
          localStorage.setItem("id", id)
          setTimeout(() => {
            this.router.navigateByUrl("/home")
          }, 1000);
        }
        else if (role == "admin") {
          localStorage.setItem("role", role)
          localStorage.setItem("id", id)
          setTimeout(() => {
            this.router.navigateByUrl("/admin")
          }, 1000);
        }
      } else {
        this.Message2 = 'email not found sign up first and try again'
        setTimeout(() => {
          this.router.navigateByUrl("/register")
        }, 2000);
      }


    })

















    // for doctor login (search in doctor table)

    // this.serv.get().subscribe((data: any) => {
    //   console.log(data);

    // let user = data.find((userData: any) => {
    //   return userData.email == this.loginForm.controls.email.value && userData.Password == this.loginForm.controls.password.value 
    // })

    // if (user) {
    //   this.Message1 = 'Loged in successfully'
    //   localStorage.setItem("auth" , 'user')
    //   setTimeout(()=>{
    //     this.router.navigateByUrl("/Home")
    //   }, 1000);
    // } else {
    //   this.Message2 = 'email not found sign up first and try again'
    // setTimeout(()=>{
    //     this.router.navigateByUrl("/register")
    //   }, 2000);
    // }


    // })


    // for admin login (search in admin table)

    // this.serv.get().subscribe((data: any) => {
    //   console.log(data);

    // let user = data.find((userData: any) => {
    //   return userData.email == this.loginForm.controls.email.value && userData.Password == this.loginForm.controls.password.value 
    // })

    // if (user) {
    //   this.Message1 = 'Loged in successfully'
    //   localStorage.setItem("auth" , 'user')
    //   setTimeout(()=>{
    //     this.router.navigateByUrl("/Home")
    //   }, 1000);
    // } else {
    //   this.Message2 = 'email not found sign up first and try again'
    // setTimeout(()=>{
    //     this.router.navigateByUrl("/register")
    //   }, 2000);
    // }


    // })
  }
}
