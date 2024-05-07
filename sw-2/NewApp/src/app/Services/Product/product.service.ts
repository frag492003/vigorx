import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MainService } from '../Main/main.service';
import { product } from 'src/app/Models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService extends MainService <product>{

  constructor(public override http: HttpClient, public override router: Router) {
    super("http://localhost:3000/product", http, router)
  }
}
