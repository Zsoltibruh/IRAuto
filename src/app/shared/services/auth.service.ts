import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth, private afs: AngularFirestore) {}

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  getUsername(email: string) {
    return this.afs
      .collection<User>('Users', (ref) =>
        ref.where('email', '==', email).limit(1)
      )
      .valueChanges();
  }

  signup(
    username: string,
    email: string,
    email2: string,
    pw: string,
    pw2: string
  ) {
    return this.auth.createUserWithEmailAndPassword(email, pw);
  }

  logout() {
    return this.auth.signOut();
  }

  isUserLoggedIn() {
    return this.auth.user;
  }
}
