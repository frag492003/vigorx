import { Injectable } from '@angular/core';
import { person } from 'src/app/Models/person';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MainService } from '../Main/main.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService extends MainService <person>{

  constructor(public override http: HttpClient, public override router: Router) {
    super("http://localhost:3000/person", http, router)
  }
}
