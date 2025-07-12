export class BillModel {
    id!: string;
    name!: string;
    age!: number;
    gender!: string;
    phone!: string;
    refdBy!: string;
    invoiceDate!: Date;

    // title part of a invoice 

    serialNo!: number;
    testName!: string;
    quantity!: number;
    amount!: number;
    discount!: number;
    deliveryDate!: Date;
    deliveryTime!: number;


    //  calculation part of a invoice

    totalAmount!: number;
    totalDiscount!: number;
    payable!: number;
    received!: number;
    due!: number;
    status!: boolean;
    preparedBy!:string;
}
