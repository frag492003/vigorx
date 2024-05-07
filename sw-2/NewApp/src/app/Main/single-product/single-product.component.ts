import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/Services/Order/order.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {
  id !: any
  // Get today's date
 today: Date = new Date();


// Extract year, month, and day
 year: number = this.today.getFullYear();
 month: number = this.today.getMonth() + 1; // Month is zero-based, so add 1
 day: number =this. today.getDate();

// Format to string if needed
todayDateString: string = `${this.year}-${this.month.toString().padStart(2, '0')}-${this.day.toString().padStart(2, '0')}`;





  constructor(private activateRoute: ActivatedRoute,private serv:OrderService) {
    this.id = this.activateRoute.snapshot.paramMap.get("id")
    console.log(this.id);

  }
  add(){
    // Get today's date
const today: Date = new Date();

// Calculate the date after five days
const afterFiveDays: Date = new Date(today);
afterFiveDays.setDate(today.getDate() + 5);

// Extract year, month, and day
const year: number = afterFiveDays.getFullYear();
const month: number = afterFiveDays.getMonth() + 1; // Month is zero-based, so add 1
const day: number = afterFiveDays.getDate();

// Format to string if needed
const afterFiveDaysDateString: string = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;



    let object ={
      "customerId":localStorage.getItem("id"),
      "date":this.todayDateString,
      "delieverdate":afterFiveDaysDateString,
      "productId":this.id


    }
   this.serv.post(object).subscribe(data=> { 
    console.log(data);
   })


  }
}
