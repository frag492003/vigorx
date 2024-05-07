import { Component } from '@angular/core';
import { OrderService } from 'src/app/Services/Order/order.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent {
  AllOrders !: any

  
constructor(private serv:OrderService){
  this.serv.get().subscribe(data=>{
    this.AllOrders = data
    console.log(this.AllOrders);
    
  })
}
  delete(id: any){
    this.serv.delete(id).subscribe(data=>{
    })
  }
}
