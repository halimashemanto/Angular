import { Component } from '@angular/core';

@Component({
  selector: 'app-facility',
  standalone: false,
  templateUrl: './facility.html',
  styleUrl: './facility.css'
})
export class Facility {
 isSidebarOpen = false; // Sidebar is initially closed

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen; // Toggle sidebar state
  }
}
