import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
shows;
topRated;
  constructor(private api:ApiService) { }

  ngOnInit() {
    // this.getUpdates();
    this.getShows();
  }
getUpdates(){
  this.api.getUpdates().subscribe(res=>{
    console.log(res);
  })
}
getShows(){
  this.api.getAllShows().subscribe(res=>{
    console.log(res);
    this.shows=res;
    this.topRatedShows();
  })
}
topRatedShows(){

 this.topRated=  this.shows.filter((elem:any)=>{
  return elem.rating.average >= 8;
})
console.log(this.topRated);
}
}
