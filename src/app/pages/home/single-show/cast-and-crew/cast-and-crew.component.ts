import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-cast-and-crew',
  templateUrl: './cast-and-crew.component.html',
  styleUrls: ['./cast-and-crew.component.scss']
})
export class CastAndCrewComponent implements OnInit {
showId;
cast;
crew;
showDetail;
loading=false;
backUp;

  constructor(private route:ActivatedRoute,private api:ApiService,private router :Router) {
    this.showId = this.route.snapshot.paramMap.get('id');
    console.log(this.showId);
   }

  ngOnInit() {
    this.getShow(this.showId);

    this.getShowCrewAndCast(this.showId);
  }
  getShow(id) {
    this.loading=true;
    this.api.getSingleShow(id).subscribe(res => {
      console.log(res);
      this.showDetail = res;
      // this.getShowAKA(this.showId);

    })
  }
  getShowCrewAndCast(id) {
    this.api.getShowCrew(id).subscribe(res => {
      console.log(res);
      this.loading=false;
      this.crew = res;
      this.crew.map((elem) => {
        if (elem.person.image == null) {
          return elem['images'] = '../../../../../assets//img/user.png';
        }
        else{
          return elem['images'] = elem.person.image.original;
        }
      })

      this.api.getShowCast(id).subscribe(res => {
        console.log(res);
        this.cast = res;
        this.cast.map((elem) => {
          if (elem.character.image == null) {
            return elem['images'] = '../../../../../assets//img/user.png';
          }
          else{
            return elem['images'] = elem.character.image.original;
          }
        })
        let a =[];
      this.cast.forEach(element => {
        this.crew.push(element);

      });
      console.log(this.crew);
      this.backUp=this.crew;
      })
    })
  }

  showDetails(id){
console.log(id);
if(id.person){
console.log(id.person.id);
this.router.navigate(['/home/people/'+id.person.id])
}
else if(id.character){
  console.log(id.character.id);
  this.router.navigate(['/home/people/'+id.character.id])
}
  }
  search(event){
    if(event.length!=0){
    this.crew=this.crew.filter((elem:any)=>{
if(elem.person){
  return elem.person.name.toLowerCase().includes(event.toLowerCase())
}else if(elem.character){
  return elem.character.name.toLowerCase().includes(event.toLowerCase())
}
    })

  }
  else{
this.crew=this.backUp;
  }
}
}
