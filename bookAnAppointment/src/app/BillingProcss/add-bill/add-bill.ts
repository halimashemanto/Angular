import { Component, OnInit } from '@angular/core';
import { BillModel } from '../model/billModel';
import { BillService } from '../bill-service';
import { Router } from '@angular/router';
import { TotalBillModel } from '../model/totalBillModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientDocModel } from '../../patient/model/patientDocModel';
import { Doctor } from '../../dropdown/model/doctorModel';


@Component({
  selector: 'app-add-bill',
  standalone: false,
  templateUrl: './add-bill.html',
  styleUrl: './add-bill.css'
})
export class AddBill implements OnInit {

  patient: PatientDocModel[] = [];
  doctor: Doctor[] = [];
  bill: TotalBillModel= new TotalBillModel();
  billForm!: FormGroup;
  isEditMode = false;
  totalAmount: number = 0;


  constructor(
    private billService: BillService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

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


   
