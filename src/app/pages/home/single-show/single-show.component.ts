import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-show',
  templateUrl: './single-show.component.html',
  styleUrls: ['./single-show.component.scss']
})
export class SingleShowComponent implements OnInit {
showId;
allEpisodes:Array<any>=[];
showDetail;
seasons;
cast;
crew;

  constructor(private api:ApiService,private route:ActivatedRoute) {
    this.showId=this.route.snapshot.paramMap.get('id');
    // console.log(this.showId);
    // this.getShow(this.showId);
   }

  ngOnInit() {
    this.getShow(this.showId)
  }
  getShow(id){
this.api.getSingleShow(id).subscribe(res=>{
  console.log(res);
  this.showDetail=res;
  this.getShowAKA(this.showId);
  this.getShowCast(this.showId);
  this.getShowCrew(this.showId);
  this.getShowSeasons(this.showId);
})
  }
  getShowSeasons(id){
    this.allEpisodes=[];
    this.api.getShowSeasons(id).subscribe((res:any)=>{
      console.log(res);
      this.seasons=res;
      res.forEach(elements => {
        this.api.getSeasonEpisodes(elements.id).subscribe((resp:any)=>{
          console.log(resp);
          resp.forEach(element => {
            this.allEpisodes.push(element);
          });

        })

      });
      console.log(this.allEpisodes);
    })
      }
      getShowCast(id){
        this.api.getShowCast(id).subscribe(res=>{
          console.log(res);
          this.cast=res;
        })
          }
          getShowCrew(id){
            this.api.getShowCrew(id).subscribe(res=>{
              console.log(res);
              this.crew=res;
            })
              }
              getShowAKA(id){
                this.api.getShowAKA(id).subscribe(res=>{
                  console.log(res);
                })
                  }


}
