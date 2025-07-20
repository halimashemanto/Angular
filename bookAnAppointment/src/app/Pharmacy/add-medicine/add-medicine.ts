import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine-service';
import { Router } from '@angular/router';
import { Manufacturer } from '../../manufacture/model/manufacture.model';
import { ManufectureService } from '../../manufacture/manufecture-service';

@Component({
  selector: 'app-add-medicine',
  standalone: false,
  templateUrl: './add-medicine.html',
  styleUrl: './add-medicine.css'
})
export class AddMedicine implements OnInit {
  manufacturer: Manufacturer = new Manufacturer();
  manufacturers: Manufacturer[] = [];

  medicine: {
    medicineStrength: string;
    instructions: string;
    price: number;
    dosageForm: string;
    id: number;
    stock: number;
    medicineName: string;
    manufacturer: { id: number }
  } = {
      id: 0,
      medicineName: '',
      dosageForm: '',
      instructions: '',
      medicineStrength: '',
      price: 0,
      stock: 0,
      manufacturer: { id: 0 }
    };

  constructor(
    private medicineService: MedicineService,
    private router: Router,
    private manufacturerService: ManufectureService
  ) { }

  ngOnInit(): void {
    this.manufacturerService.getManufacturers().subscribe({
      next: (response) => {
        this.manufacturers = response.data['manufacturers']; 
      },
      error: (error) => {
        console.error("Error fetching manufacturers", error);
        alert('Failed to load manufacturers.');
      }
    });
  }

  onSubmit(): void {
    //this.medicine.manufacturer.id = this.manufacturer.id;
    if (!this.medicine.manufacturer.id) {
      alert('Please select a manufacturer.');
      return;
    }

    this.medicineService.addMedicine(this.medicine).subscribe({
      next: () => {
        alert('Medicine added successfully!');
        this.router.navigate(['/medicines']); 
      },
      error: (error) => {
        console.error(error);
        alert('Failed to add medicine.');
      },
    });
  }
}
