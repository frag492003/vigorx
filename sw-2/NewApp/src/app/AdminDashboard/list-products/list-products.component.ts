import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/Models/product';
import { ProductService } from 'src/app/Services/Product/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
Allproducts !: any

constructor(private serv:ProductService , public router: Router){
this.serv.get().subscribe(data=>{
  this.Allproducts = data
  console.log(this.Allproducts);
  
})
}
  delete(id :any ){
    this.serv.delete(id).subscribe(data=>{ 

      setTimeout(() => {
        this.router.navigateByUrl("/admin")
      }, 1000);
    })
  }
}
