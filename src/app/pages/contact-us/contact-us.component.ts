import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
name;
email;
subject;
message;
  constructor(private api:ApiService) {
    if(localStorage.getItem('userId')){
      this.api.getUser(localStorage.getItem('userId')).subscribe((res:any)=>{
this.name=res.name;
this.email=res.email;
      })
    }
  }

  ngOnInit() {
  }
  submit(){

  }

}
