import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/Product/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  type !: any
 allProduct !: any

  constructor(private serv: ProductService, private activateRoute: ActivatedRoute) {
    this.type = this.activateRoute.snapshot.paramMap.get("type")
    console.log(this.type);


    this.serv.get().subscribe(data=>{
      console.log(data)
      this.allProduct = data


    })
  }
}
