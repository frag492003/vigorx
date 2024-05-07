import { Component } from '@angular/core';
import { product } from 'src/app/Models/product';
import { MenService } from 'src/app/Services/Product/men.service';
import { ProductService } from 'src/app/Services/Product/product.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {

  menProducts !: any

  constructor(private serv:ProductService){
  this.serv.get().subscribe(data => {
    this.menProducts = data
    console.log(this.menProducts);
  })}
}
