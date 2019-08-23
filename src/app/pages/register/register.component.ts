import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
email;
name;
password;
loading=false;
  constructor(private auth:AuthService,private toaster:ToastrService,
    private  api:ApiService,private router:Router) { }

  ngOnInit() {
  }
  signUp(){
    this.loading=true;
    if((this.email!='' && this.email!=null) && (this.password!='' && this.password!=null) && (this.name!='' && this.name!=null)){
      this.auth.signup(this.email,this.password).then((res:any)=>{
        let data={
          name:this.name,
          email:this.email,
          password:this.password
        }
        this.api.createUser(res.user.uid,data).then(resp=>{
          localStorage.setItem('userId',res.user.uid);

          this.loading=false;
          this.toaster.success('Registered Successfully ..')
          this.router.navigate(['/home/content'])
        })


      })
      .catch((err)=>{
        this.loading=false;
        this.toaster.error(err)
      })
    }
    else{
      this.loading=false;
      this.toaster.warning('Please fill all fields..')
    }


  }

}
