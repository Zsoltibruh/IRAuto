import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  collection = 'Users';

  constructor(private afs: AngularFirestore) {}

  create(user: User) {
    return this.afs.collection<User>(this.collection).doc(user.id).set(user);
  }

  updateData(user: User) {
    return this.afs.collection<User>(this.collection).doc(user.id).set(user);
  }

  updatePassword(user: User) {
    return this.afs.collection<User>(this.collection).doc(user.id).set(user);
  }
}
