import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  role !: any
  id = localStorage.getItem("id")
  userData !: any
  checkAuth() {
    // console.log(this.Auth);
  }
  constructor( private router: Router) {
    this.role = localStorage.getItem("role")
    this.checkAuth();

    // this.serv.getById(this.id).subscribe((data: any) => {
    //   this.userData = data
    //   console.log(this.userData);
      
    // })
  }

  logout() {
    localStorage.removeItem("auth")
    localStorage.removeItem("id")
    setTimeout(() => {
      this.router.navigateByUrl("/login")
    }, 1000);
  }
}
