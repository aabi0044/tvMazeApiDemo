import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient,HttpHeaders  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
// readonly getAllShows='http://api.tvmaze.com/shows'
  constructor(private afs:AngularFirestore ,private http:HttpClient) { }
  createUser(uid,data){
   return this.afs.doc('users/'+uid).set(data);
  }
  getUser(uid){
    return this.afs.doc('users/'+uid).valueChanges();
  }
  getAllShows(){
    return this.http.get<any>('http://api.tvmaze.com/shows');
  }
  getSingleShow(id){
    return this.http.get<any>('http://api.tvmaze.com/shows/'+id);
  }
  getShowSeasons(id){
    return this.http.get<any>('http://api.tvmaze.com/shows/'+id+'/seasons');
  }
  getShowCast(id){
    return this.http.get<any>('http://api.tvmaze.com/shows/'+id+'/cast');
  }
  getShowCrew(id){
    return this.http.get<any>('http://api.tvmaze.com/shows/'+id+'/crew');
  }
  getShowAKA(id){
    return this.http.get<any>('http://api.tvmaze.com/shows/'+id+'/akas');
  }
  getSeasonEpisodes(id){
    return this.http.get<any>('http://api.tvmaze.com/seasons/'+id+'/episodes');
  }

  getAllPeople(){
    return this.http.get<any>('http://api.tvmaze.com/people');
  }
  getUpdates(){
    return this.http.get<any>('http://api.tvmaze.com/shows/1/crew');
  }
}
