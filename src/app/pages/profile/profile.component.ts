import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FormControl } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  hide = true;
  hide2 = true;

  username: any;
  email: any;
  password = new FormControl('');

  constructor(private auth: AuthService, private userService: UserService) {}

  user?: firebase.default.User | null;

  ngOnInit(): void {
    this.auth.isUserLoggedIn().subscribe(
      (user) => {
        this.user = user;
        this.email = user?.email;
        this.auth.getUsername(user?.email as string).subscribe((name) => {
          this.username = name[0].username;
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  changeData() {
    throw new Error('Nem vót idő');
  }

  changePassword() {
    throw new Error('Nem vót idő');
  }

  deleteProfile() {
    this.user?.delete();
  }
}
