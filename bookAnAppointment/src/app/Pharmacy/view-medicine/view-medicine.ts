import { Component, OnInit } from '@angular/core';
import { Medicine } from '../model/medicine';
import { MedicineService } from '../medicine-service';
import { Router } from '@angular/router';
import { Manufacturer } from '../../manufacture/model/manufacture.model';

@Component({
  selector: 'app-view-medicine',
  standalone: false,
  templateUrl: './view-medicine.html',
  styleUrl: './view-medicine.css'
})
export class ViewMedicine implements OnInit {
  medicines: Medicine[] = [];
  manufacturer: Manufacturer = new Manufacturer();
  isLoading = true;

  constructor(private medicineService: MedicineService, 
    private router: Router) {}

  ngOnInit(): void {
    this.fetchMedicines();
  }

  fetchMedicines(): void {
    this.medicineService.getAllMedicines().subscribe({
      next: (response) => {
        if (response) {
          console.log(this.medicines);
          this.router.navigate([''])
        } else {
          alert(response || 'Failed to load medicines');
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        alert('Error fetching medicines');
        this.isLoading = false;
      }
    });
  }

  updateStock(id: number): void {
    const quantity = prompt('Enter the quantity to add/subtract:');
    if (quantity && !isNaN(Number(quantity))) {
      const quantityNumber = Number(quantity);
      if (quantityNumber >= 0) {
        this.medicineService.addStock(id, quantityNumber).subscribe({
          next: (response) => {
            if (response) {
              alert('Stock updated successfully!');
              this.updateLocalMedicine(id, response as Medicine);
            } else {
              alert('Failed to update stock');
            }
          },
          error: (error) => {
            console.error(error);
            alert('Error updating stock');
          }
        });
      } else {
        this.medicineService.subtractStock(id, Math.abs(quantityNumber)).subscribe({
          next: (response) => {
            if (response) {
              alert('Stock updated successfully!');
              this.updateLocalMedicine(id, response as Medicine);
            } else {
              alert('Failed to update stock');
            }
          },
          error: (error) => {
            console.error(error);
            alert('Error updating stock');
          }
        });
      }
    } else {
      alert('Invalid input. Please enter a valid number.');
    }
  }

  updateLocalMedicine(id: number, updatedMedicine: Medicine): void {
    this.medicines = this.medicines.map(med => med.id === id ? updatedMedicine : med);
  }

  navigateToUpdate(id: number): void {
    this.router.navigate([`/medicines/update/${id}`]);
  }
}


