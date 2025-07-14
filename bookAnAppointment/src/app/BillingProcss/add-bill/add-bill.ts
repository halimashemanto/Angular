import { Component, OnInit } from '@angular/core';
import { BillModel } from '../model/billModel';
import { BillService } from '../bill-service';
import { Router } from '@angular/router';
<<<<<<< Updated upstream
import { TotalBillModel } from '../model/totalBillModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientDocModel } from '../../patient/model/patientDocModel';
import { Doctor } from '../../dropdown/model/doctorModel';
=======
import { FormBuilder, FormGroup } from '@angular/forms';
>>>>>>> Stashed changes


@Component({
  selector: 'app-add-bill',
  standalone: false,
  templateUrl: './add-bill.html',
  styleUrl: './add-bill.css'
})
export class AddBill implements OnInit {

<<<<<<< Updated upstream
  patient: PatientDocModel[] = [];
  doctor: Doctor[] = [];
  bill: TotalBillModel= new TotalBillModel();
  billForm!: FormGroup;
  isEditMode = false;
=======

  bill: BillModel = new BillModel();

  billform !:FormGroup;
>>>>>>> Stashed changes
  totalAmount: number = 0;


  constructor(
    private billService: BillService,
<<<<<<< Updated upstream
    private formBuilder: FormBuilder,
=======
   private formBuilder:FormBuilder,
>>>>>>> Stashed changes
    private router: Router
  ) { }

  ngOnInit(): void {
<<<<<<< Updated upstream

    this.billForm = this.formBuilder.group({
      id: [''],
      patientId: ['', Validators.required],
      doctorId: ['', Validators.required],
      invoiceDate: ['', Validators.required],
      testName: ['', Validators.required],
      quantity: ['', Validators.required],
      amount: ['', Validators.required],
      discount: ['', Validators.required],
      deliveryDate: ['', Validators.required],
      deliveryTime: ['', Validators.required],
      totalAmount: ['', Validators.required],
      totalDiscount: ['', Validators.required],
      payable: ['', Validators.required],
      received: ['', Validators.required],
      due: ['', Validators.required],
      status: ['', Validators.required],
      preparedBy: ['', Validators.required]

       
    });
=======
    
    this.billform = this.formBuilder.group({
      name:[''],
      age:[''],
      gender:[''],
      phone:[''],
      refdBy:[''],
      invoiceDate:[''],
      serialNo:[''],
      testName:[''],
      quantity:[''],
      amount:[''],
      discount:[''],
      deliveryDate:[''],
      deliveryTime:[''],
      totalAmount:[''],
      totalDiscount:[''],
      payable:[''],
      received:[''],
      due:[''],
      status:[''],
      preparedBy:[''],
    })
  
  }




  // calculateBill() {
  //   this.bill.totalAmount = (this.bill.totalAmount > 0) ? this.bill.totalAmount : 0;
    
   
  //   this.bill.totalDiscount = (this.bill.totalDiscount > 0) ? this.bill.totalDiscount : 0;
    
  //   this.bill.payable = this.bill.totalAmount - this.bill.totalDiscount;
    
  //   if (this.bill.received >= 0) {
  //     this.bill.due = this.bill.payable - this.bill.received;
  //   } else {
  //     this.bill.due = this.bill.payable;  
  //   }
  // }

  // resetForm() {
  //   this.bill = new BillModel();  
  // }





>>>>>>> Stashed changes

 
    }


    //  loadInvoice(){
    //   this.billService.getAllBills().subscribe(data => {
    //     this.bill = data;
    //   });
    // }

    onSubmit() {
      if (this.billForm.valid) {
        const bill: TotalBillModel = this.billForm.value;
        } 
        
      else {
            // this.loadInvoice();  
            this.billForm.reset();
        }
      }


    }


   
