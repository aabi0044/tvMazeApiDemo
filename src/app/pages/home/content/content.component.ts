import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
shows;
topRated;
p: number = 1;
q:number=1;
  constructor(private api:ApiService,private router:Router) { }

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
showDetails(id){
  if(localStorage.getItem('userId')!=undefined){
this.router.navigate(['home/show-details/'+id]);
  }
  else{
    this.router.navigate(['/login']);
  }
console.log(id);
}
}
