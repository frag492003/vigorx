import { Component } from '@angular/core';
import { KidsService } from 'src/app/Services/Product/kids.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent {

  kidsProducts!: any
  constructor(private serv: KidsService) {
    this.serv.get().subscribe(data => {
      this.kidsProducts = data
    })
  }
}
