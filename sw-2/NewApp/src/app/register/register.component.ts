import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { AuthService } from '../Services/Auth/auth.service';
import { egyptianPhoneNumberValidator } from '../Models/product';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  registerForm = new FormGroup({
    firstName: new FormControl("", [Validators.required, CustomValidators.rangeLength([2, 25])]),
    lastName: new FormControl("", [Validators.required,CustomValidators.rangeLength([2, 25])]),
    email: new FormControl("", [Validators.required, CustomValidators.email]),
    password: new FormControl("", [Validators.required,CustomValidators.rangeLength([8, 25])]),
    phone: new FormControl("", [Validators.required,egyptianPhoneNumberValidator]),
    address: new FormControl("", [Validators.required]),
    role: new FormControl("", [Validators.required]),

  })

  get myform() {
    return this.registerForm;
  }

  constructor(private serv: AuthService, public router: Router) { }


  createUser() {
    console.log(this.registerForm.value);

    this.serv.post(this.myform.value).subscribe((data: any) => {
      console.log(data);
      let id = data["id"]

      localStorage.setItem("role", 'customer')
      localStorage.setItem("id", id)

      
      setTimeout(() => {
        this.router.navigateByUrl("/home")
      }, 1000);

    })
  }
}
