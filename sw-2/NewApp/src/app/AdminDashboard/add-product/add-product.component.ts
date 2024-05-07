import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { minPriceValidator } from 'src/app/Models/product';
import { ProductService } from 'src/app/Services/Product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  
  productData !: any

  addForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    Category: new FormControl("", [Validators.required]),
    image: new FormControl("", [Validators.required,CustomValidators.url]),
    price: new FormControl("", [Validators.required,CustomValidators.rangeLength([1, 500000]),
    minPriceValidator(4)]),

  })
  router: any;

  get myform() {
    return this.addForm;
  }
  constructor(private serv: ProductService){}

  add(){
    this.serv.post(this.myform.value).subscribe(data=>{
      this.productData = data
      console.log(this.productData);
      setTimeout(() => {
        this.router.navigateByUrl("/admin")
      }, 1000);
    })
  }
}
