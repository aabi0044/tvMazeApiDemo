import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
personId;
person;
loading=false;
  constructor(private route:ActivatedRoute,private api:ApiService) {
    this.loading=true;
    this.personId = this.route.snapshot.paramMap.get('id');
this.api.getSinglePeople(this.personId).subscribe(res=>{
  console.log(res);
  this.loading=false;
  this.person=res;
})
   }

  ngOnInit() {
  }

}
