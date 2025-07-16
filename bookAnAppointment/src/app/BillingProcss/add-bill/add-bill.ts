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



  bill: TotalBillModel[] = [];

  invoiceDate!: '';
  testName!: '';
  quantity!: 1;
  amount!: 0;
  discount!: 0;
  deliveryDate!: Date;
  deliveryTime!: 0;
  totalAmount!: 0;
  totalDiscount!: number;
  payable!: 0;
  received!: 0;
  due!: 0;
  status!: false;
  preparedBy!: ''



  doc: Doctor[] = [];
  patient: PatientDocModel[] = [];


  billForm!: FormGroup;

  constructor(
    private billService: BillService,
    private doctorService: DoctorService,
    private patientService: Patientdocservice,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {

    this.billForm = this.formBuilder.group({

      invoiceDate: ['', Validators.required],
      testName: ['', Validators.required],
      preparedBy: ['', Validators.required],
      status: ['', Validators.required],
      due: [''],
      received: [''],
      payable: [''],
      totalDiscount: [''],
      totalAmount: [''],
      deliveryTime: [''],
      deliveryDate: [''],
      discount: [''],
      amount: [''],
      quantity: [''],
      total: [''],
      remarks: [''],

      doc: this.formBuilder.group({
        doctorId: ['', Validators.required]
      }),

      dep: this.formBuilder.group({
        patientId: ['', Validators.required]
      })
    });



    this.loadDoctor();
    this.loadPatient();
  }

  // ngOninit End Here




  loadPatient(): void {
    this.patientService.getAllPatient().subscribe({
      next: (patientId) => {
        this.patient = patientId;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }



  loadDoctor(): void {
    this.doctorService.getAllDoctorName().subscribe({
      next: (doctorId) => {
        this.doc = doctorId;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }






  onSubmit(): void {
    if (this.billForm.invalid) {
      console.log('Form Invalid');

    }

    const bill: TotalBillModel = {
      ...this.billForm.value

    };

    this.billService.saveBill(bill).subscribe({
      next: (res) => {
        console.log(res, 'Invoice Successfully Saved!');
        this.loadDoctor();
        this.loadPatient();
        this.billForm.reset();
        this.router.navigate(['/viewbill']);
      },
      error: (err) => {
        console.log(err);
      }
    })

  }




  calculateInvoice(): void {
    // Get values from the form
    const quantity = this.billForm.get('quantity')?.value || 0;
    const amount = this.billForm.get('amount')?.value || 0;
    const discount = this.billForm.get('discount')?.value || 0;
    const received = this.billForm.get('received')?.value || 0;

    // 1. Calculate total amount
    const totalAmount = quantity * amount;

    // 2. Calculate total discount
    const totalDiscount = totalAmount * (discount / 100);

    // 3. Calculate payable
    const payable = totalAmount - totalDiscount;

    // 4. Calculate due
    const due = payable - received;

    // 5. Determine status (paid if due <= 0)
    const status = due <= 0;

    // Update form controls
    this.billForm.patchValue({
      totalAmount,
      totalDiscount,
      payable,
      due,
      status
    });

    console.log('Invoice calculated:', {
      totalAmount,
      totalDiscount,
      payable,
      due,
      status
    });
  }




}