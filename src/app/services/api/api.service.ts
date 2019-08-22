import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private afs:AngularFirestore) { }
  createUser(uid,data){
   return this.afs.doc('users/'+uid).set(data);
  }
  getUser(uid){
    return this.afs.doc('users/'+uid).valueChanges();
  }
}
