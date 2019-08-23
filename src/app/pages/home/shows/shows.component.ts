import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  shows;
  topRated;
  backUp;
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit() {
    this.getShows();
  }

  getShows(){
    this.api.getAllShows().subscribe(res=>{
      console.log(res);
      this.shows=res;
      this.backUp=res;


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
  searchShow(event){
    if(event.length!=0){
      this.shows=this.shows.filter((elem:any)=>{
        return elem.name.toLowerCase().includes(event.toLowerCase())

      })

    }
    else{
  this.shows=this.backUp;
    }
  }
}
