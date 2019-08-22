import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
user;
loading=false;
  constructor(private api:ApiService) { }

  ngOnInit() {
    // this.getShows();
    // this.getPeople();
// if(localStorage.getItem('userId')!=undefined){
//   this.getUser();
// }
  }
  getUser(){
    this.loading=true;

this.api.getUser(localStorage.getItem('userId')).subscribe((res:any)=>{
this.user=res;
this.loading=false;
console.log(this.user);
})
  }
getShows(){
  this.api.getAllShows().subscribe(res=>{
    console.log(res);
  })
}
getPeople(){
  this.api.getAllPeople().subscribe(res=>{
    console.log(res);
  })
}
}
