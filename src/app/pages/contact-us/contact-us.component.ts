import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { ToastrService } from 'ngx-toastr';

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
loading=false;
  constructor(private api:ApiService,private toaster:ToastrService) {
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
    if((this.name!=null && this.name!='')&& (this.email!=null && this.email!='')&&
    (this.subject!=null && this.subject!='')&& (this.message!=null&& this.message!='')
    ){
      this.loading=true;
      let data={
        name:this.name,
        email:this.email,
        subject:this.subject,
        message:this.message
      }
      this.api.submitQuery(data).then(res=>{
      this.loading=false;
      this.toaster.success('Submit successfully')
      }).catch(err=>{
      this.loading=false;
      this.toaster.error(err);
      })
    }else{
      this.toaster.warning("Please Fill All Fields");
    }

  }

}
