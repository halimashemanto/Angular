import { Component, OnInit } from '@angular/core';
import { BillModel } from '../model/billModel';
import { BillService } from '../bill-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-bill',
  standalone: false,
  templateUrl: './add-bill.html',
  styleUrl: './add-bill.css'
})
export class AddBill implements OnInit {


  bill: BillModel = new BillModel();

  totalAmount: number = 0;
  apiError: string | undefined = '';

  constructor(
    private billService: BillService,
   
    private router: Router
  ) { }

  ngOnInit(): void {
   
    this.billService.getAllBill().subscribe({
      next: (response) => {
       console.log(response)
      },
      error: (err) => {
        console.error(err);
        this.apiError = 'Failed to load bill';
      }
    });
  }











 
}

