import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill-service';

@Component({
  selector: 'app-view-bill',
  standalone: false,
  templateUrl: './view-bill.html',
  styleUrl: './view-bill.css'
})
export class ViewBill  implements OnInit {

  bill: any;

  constructor(
    private billService: BillService,
 
  ) { }

  ngOnInit(): void {
    // this.loadAllBill();
  }

  // loadAllBill() {

  //   this.bill = this.billService.getAllBill();
  // }

}