import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/Product/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  ID !: any
  productData !: any

  updateForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    Category: new FormControl("", [Validators.required]),
    image: new FormControl("", [Validators.required]),
    price: new FormControl("", [Validators.required]),

  })
  router: any;

  get myform() {
    return this.updateForm;
  }


  constructor(private serv: ProductService, private activeRoute: ActivatedRoute) {
    this.ID = this.activeRoute.snapshot.paramMap.get("id")
    this.serv.getById(this.ID).subscribe(data=>{
      this.productData = data
      console.log(this.productData);
      
    })
  }

  update(id : any){
    this.serv.put(id, this.myform.value).subscribe(data=>{
      this.productData = data
      console.log(this.productData)
      setTimeout(() => {
        this.router.navigateByUrl("/admin")
      }, 1000);
    })
    
}
}
