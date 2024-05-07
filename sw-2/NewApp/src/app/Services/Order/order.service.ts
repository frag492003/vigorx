import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MainService } from '../Main/main.service';
import { order } from 'src/app/Models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends MainService <order>{

  constructor(public override http: HttpClient, public override router: Router) {
    super("http://localhost:3000/order", http, router)
}

}
