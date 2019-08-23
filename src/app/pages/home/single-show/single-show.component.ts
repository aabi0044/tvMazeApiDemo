import { Component, OnInit, ElementRef, ViewChild, Renderer, ViewChildren } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-show',
  templateUrl: './single-show.component.html',
  styleUrls: ['./single-show.component.scss']
})
export class SingleShowComponent implements OnInit {
  @ViewChildren('tree') tree: ElementRef;
  showId;
  allEpisodes: Array<any> = [];
  showDetail;
  seasons;
  cast;
  crew;
  display='none';
  loading=false;
  open;

  constructor(private api: ApiService, private route: ActivatedRoute,public renderer: Renderer) {
    this.showId = this.route.snapshot.paramMap.get('id');
    // console.log(this.showId);
    // this.getShow(this.showId);
  }

  ngOnInit() {
    this.getShow(this.showId);
    this.getShowCast(this.showId);
    this.getShowCrew(this.showId);
    this.getShowSeasons(this.showId);
  }
  getShow(id) {
    this.loading=true;
    this.api.getSingleShow(id).subscribe(res => {
      console.log(res);
      this.showDetail = res;
      // this.getShowAKA(this.showId);

    })
  }
  getShowSeasons(id) {

    let Episodes = [];
    this.api.getShowSeasons(id).subscribe((res: any) => {
      console.log(res);
      this.seasons = res;
      this.seasons.map((elem) => {
        this.api.getSeasonEpisodes(elem.id).subscribe((responce:any)=>{

          responce.map((elem) => {
            if (elem.image == null) {

              return elem['images'] = '../../../../assets//img/dummy.jpg';
            }
            else{
              return elem['images'] = elem.image.original;
            }
          })
          responce.forEach(element => {
            this.allEpisodes.push(element);
          });

          if (elem.image == null) {

            let a= elem['images'] = '../../../../assets//img/dummy.jpg';
            let b = elem['episodes']=responce
            return {a,b}
          }
          else{
            let a= elem['images'] = elem.image.original;
            let b = elem['episodes']=responce;
            return{a,b}
          }


        })

      })


      this.allEpisodes=Episodes;
      console.log(this.allEpisodes);


    })
  }
  getShowCast(id) {
    this.api.getShowCast(id).subscribe(res => {
      console.log(res);
      this.cast = res;
      this.cast.map((elem) => {
        if (elem.character.image == null) {
          return elem['images'] = '../../../../assets//img/user.png';
        }
        else{
          return elem['images'] = elem.character.image.original;
        }
      })
    })
  }
  getShowCrew(id) {
    this.api.getShowCrew(id).subscribe(res => {
      console.log(res);
      this.loading=false;
      this.crew = res;
      this.crew.map((elem) => {
        if (elem.person.image == null) {
          return elem['image'] = '../../../../assets//img/user.png';
        }
        else{
          return elem['image'] = elem.person.image.original;
        }
      })
    })
  }
  getShowAKA(id) {
    this.api.getShowAKA(id).subscribe(res => {
      console.log(res);
    })
  }
  showPersonDetails(id) {

  }
  openTree(index){
this.open=index
  }
}
