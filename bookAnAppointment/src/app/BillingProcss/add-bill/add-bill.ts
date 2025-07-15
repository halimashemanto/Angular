import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Doctor } from '../../dropdown/model/doctorModel';

import { Router } from '@angular/router';
import { BillService } from '../bill-service';
import { PatientDocModel } from '../../patient/model/patientDocModel';
import { DoctorService } from '../../dropdown/doctor-service';
import { Patientdocservice } from '../../patient/patientdocservice';
import { TotalBillModel } from '../model/totalBillModel';



@Component({
  selector: 'app-add-bill',
  standalone: false,
  templateUrl: './add-bill.html',
  styleUrl: './add-bill.css'
})
export class AddBill implements OnInit {
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }







//  bill: TotalBillModel = {
    
//     invoiceDate: new Date(),
//     testName: '',
//     quantity: 1,
//     amount: 0,
//     discount: 0,
//     deliveryDate: new Date(),
//     deliveryTime: 0,
//     totalAmount: 0,
//     totalDiscount: 0,
//     payable: 0,
//     received: 0,
//     due: 0,
//     status: false,
//     preparedBy: ''
//   };


//   doc: Doctor[] = [];
//   patient: PatientDocModel[] = [];


//   billForm!: FormGroup;

//   constructor(
//     private billService: BillService,
//     private doctorService:DoctorService,
//     private patientService:Patientdocservice,
//     private router: Router,
//     private formBuilder: FormBuilder
//   ) { }


//   ngOnInit(): void {

//     this.billForm = this.formBuilder.group({

//       invoiceDate: ['', Validators.required],
//       testName: ['', Validators.required],
//       preparedBy: ['', Validators.required],
//       status: ['', Validators.required],
//       due: [''],
//       received: [''],
//       payable: [''],
//       totalDiscount: [''],
//       totalAmount: [''],
//       deliveryTime: [''],
//       deliveryDate: [''],
//       discount: [''],
//       amount: [''],
//       quantity: [''],
//       total: [''],
//       remarks: [''],

//       doc: this.formBuilder.group({
//         doctorId: ['', Validators.required]
//       }),

//       dep: this.formBuilder.group({
//         patientId: ['', Validators.required]
//       })
//     });

    
  
//     this.loadDoctor();
//     this.loadPatient();
//   }

//    // ngOninit End Here

  


//   loadPatient(): void {
//     this.patientService.getAllPatient().subscribe({
//       next: (patientId) => {
//         this.patient = patientId;
//       },
//       error: (err) => {
//         console.log(err);
//       }
//     });
//   }


  
//   loadDoctor(): void {
//     this.doctorService.getAllDoctorName().subscribe({
//       next: (doctorId) => {
//         this.doc = doctorId;
//       },
//       error: (err) => {
//         console.log(err);
//       }
//     });
//   }




  
 
//   onSubmit(): void {
//     if (this.billForm.invalid) {
//       console.log('Form Invalid');
      
//     }

//     const bill: TotalBillModel = { ...this.billForm.value
  
//       };
    
//     this.billService.saveBill(bill).subscribe({
//       next: (res) => {
//         console.log(res, 'Invoice Successfully Saved!');
//         this.loadDoctor();
//         this.loadPatient();
//         this.billForm.reset();
//         this.router.navigate(['/viewbill']);  
//       },
//       error: (err) => {
//         console.log(err);
//       }
//     })
    
//   }

 


//  calculateInvoice(bill:TotalBillModel) {
   
//     this.bill.totalAmount = this.bill.quantity * this.bill.amount;

//     this.bill.totalDiscount = (this.bill.totalAmount * this.bill.discount) / 100;

//     this.bill.payable = this.bill.totalAmount - this.bill.totalDiscount;

//     this.bill.due = this.bill.payable - this.bill.received;

//     this.bill.status = this.bill.due <= 0;
//   }





}