import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service'; // Assuming you have an AuthService to handle HTTP requests

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  authForm = this.fb.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  onSubmit() {
    if (!this.authForm.valid) {
      return;
    }

    const email = this.authForm.get('email').value;
    const password = this.authForm.get('password').value;

    this.authService.login(email, password).subscribe(
      success => {
        // handle success
      },
      error => {
        // handle error
      }
    );
  }

  onSocialLogin(platform: string) {
    this.authService.socialLogin(platform).subscribe(
      success => {
        // handle success
      },
      error => {
        // handle error
      }
    );
  }

}
