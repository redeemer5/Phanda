import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Order } from '../model/order.interface';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) { }

  createSong(
    order:string
  ): Promise<void> {
    const id = this.firestore.createId();

    return this.firestore.doc(`Order/${id}`).set({
      id,
      order,
    });
  }

  getSongList(): AngularFirestoreCollection<Order> {
    return this.firestore.collection(`Order`);
  }

  getSongDetail(songId: string): AngularFirestoreDocument<Order> {
    return this.firestore.collection('Order').doc(songId);
  }

  deleteSong(songId: string): Promise<void> {
    return this.firestore.doc(`Order/${songId}`).delete();
  }
}
