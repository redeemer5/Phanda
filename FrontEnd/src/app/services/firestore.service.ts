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

    return this.firestore.doc(`songList/${id}`).set({
      id,
      order,
    });
  }

  getSongList(): AngularFirestoreCollection<Order> {
    return this.firestore.collection(`songList`);
  }

  getSongDetail(songId: string): AngularFirestoreDocument<Order> {
    return this.firestore.collection('songList').doc(songId);
  }

  deleteSong(songId: string): Promise<void> {
    return this.firestore.doc(`songList/${songId}`).delete();
  }
}
