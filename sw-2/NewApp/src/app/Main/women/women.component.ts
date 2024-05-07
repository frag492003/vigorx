import { Component } from '@angular/core';
import { product } from 'src/app/Models/product';
import { ProductService } from 'src/app/Services/Product/product.service';
import { WomenService } from 'src/app/Services/Product/women.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {
 
  womenProducts!: any
  constructor(private serv: WomenService) {
    this.serv.get().subscribe(data => {
      this.womenProducts = data
    })
  }

}
