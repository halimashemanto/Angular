import { Doctor } from "../../dropdown/model/doctorModel";
import { PatientDocModel } from "../../patient/model/patientDocModel";

export class TotalBillModel {


    id!: string;
    patientId!: PatientDocModel;
    doctorId!: Doctor;
    invoiceDate!: Date;

  
    testName!: string;
    quantity!: number;
    amount!: number;
    discount!: number;
    deliveryDate!: Date;
    deliveryTime!:number;


    //  calculation part of a invoice

    totalAmount!: number;
    totalDiscount!: number;
    payable!: number;
    received!: number;
    due!: number;
    status!: boolean;
    preparedBy!: string;
}