import { Component, OnInit, afterNextRender } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  username: any;

  constructor(private auth: AuthService) {}

  user?: firebase.default.User | null;

  ngOnInit() {
    this.auth.isUserLoggedIn().subscribe(
      (user) => {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.auth.getUsername(user?.email as string).subscribe((name) => {
          this.username = name[0].username;
        });
      },
      (error) => {
        localStorage.setItem('user', JSON.stringify('null'));
        console.error(error);
      }
    );
  }

  logout() {
    this.auth
      .logout()
      .then((e) => {
        console.log('Sikeres kijelentkezés');
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
