import { Injectable } from '@angular/core';
import { Part } from '../models/Part';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PartService {
  collection = 'Parts';

  constructor(private afs: AngularFirestore) {}

  getBrands() {
    return this.afs.collection<Part>(this.collection).valueChanges();
  }

  getTypesByBrand(brand: string) {
    return this.afs
      .collection<Part>(this.collection, (ref) =>
        ref.where('brand', '==', brand).orderBy('brand', 'asc')
      )
      .valueChanges();
  }

  getParts(brand: string, type: string) {
    return this.afs
      .collection<Part>(this.collection, (ref) =>
        ref
          .where('brand', '==', brand)
          .where('brand_type', '==', type)
          .orderBy('name', 'asc')
      )
      .valueChanges();
  }
}
