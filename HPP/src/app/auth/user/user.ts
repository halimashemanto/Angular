import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';
import { UserService } from '../../service/user-service';
import { Usermodel } from '../../model/userModel.model';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit{
  
    user: Usermodel | null = null;
  private subscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService, 
    private router: Router,
    private userSer: UserService
  ) { }

  ngOnInit(): void {
   this.loadUserProfile();
  }

  loadUserProfile(): void {
    const sub = this.userSer.getUserProfile().subscribe({
      next: (res) => {
        console.log(res);
        if (res) {
          this.user = res;
        }
      },
      error: (err) => {
        console.error('Error loading user profile:', err);
      }
    });

    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

