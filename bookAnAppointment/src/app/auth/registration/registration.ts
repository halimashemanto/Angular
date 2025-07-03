import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';
import { Usermodel } from '../../model/userModel.model';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration {
  regForm!: FormGroup;

  constructor(
            private authService: AuthService,
            private router: Router,
            private formBuilder: FormBuilder
  ){

    this.regForm = formBuilder.group({

      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
      
            
    })
  }

    onSubmit(): void {
    if (this.regForm.valid) {
      
      const user: Usermodel = {
        ...this.regForm.value,
        photo: 'assdfdffsd',
        role: 'user'
      };

      this.authService.registration(user).subscribe({
        next: (res) => {
          console.log('User registered successfully:', res);
          this.authService.storeToken(res.token);
          this.router.navigate(['/home']); 
        },
        error: (err) => {
          console.error('Error registering user:', err);
        }
      });
    }
    else {
      alert("Complte mandatory Field");
    }
  }


























































}
