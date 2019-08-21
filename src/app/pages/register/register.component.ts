import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
email;
password;

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }
  signup(){
    if(this.email!=null && this.password!=null){
      this.auth.signup(this.email,this.password).then((res:any)=>{

      })
    }
    else{

    }


  }

}
