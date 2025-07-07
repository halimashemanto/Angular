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
  user!: Usermodel;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

    this.regForm = formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    if (this.regForm.valid) {

      const user: Usermodel = {
        ...this.regForm.value,
        role: 'user'
      };

      this.authService.registration(user).subscribe({
        next: (res) => {
          console.log(res);
          this.authService.storeToken(res.token);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
    else {
      alert("Complte mandatory Field");
    }
  }


























































}
