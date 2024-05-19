import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { merge } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { log } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  hide = true;

  email = new FormControl<string>('');
  password = new FormControl<string>('');
  errorMessage = '';

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    this.authService
      .login(this.email.value as string, this.password.value as string)
      .then((e) => {
        this.router.navigateByUrl('/main');
      });
  }

  /*   email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = '';
  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'Üres mező!';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Nem érvényes e-mail cím!';
    } else {
      this.errorMessage = '';
    }
  } */
}
