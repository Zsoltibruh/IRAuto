import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../shared/models/User';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  hidepw = true;

  username = new FormControl('');
  email = new FormControl('');
  email2 = new FormControl('');
  password = new FormControl('');
  password2 = new FormControl('');

  errorMsg: any;
  emailErrorMessage: any;
  updateErrorMessage() {
    if (!this.email.valid) {
      this.emailErrorMessage = 'E-mail cím megadása kötelező!';
    }
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  signup() {
    this.authService
      .signup(
        this.username.value as string,
        this.email.value as string,
        this.email2.value as string,
        this.password.value as string,
        this.password2.value as string
      )
      .then((e) => {
        console.log(e);
        const user: User = {
          id: e.user?.uid as string,
          username: this.username.value as string,
          email: this.email.value as string,
        };

        this.userService
          .create(user)
          .then((_) => {
            console.log('Siker!');

            this.router.navigateByUrl('/login');
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
