import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email;
password;
loading=false;
  constructor(private auth:AuthService,private toaster:ToastrService,
    private router:Router) { }

  ngOnInit() {
  }
  login(){
    this.loading=true;

    if((this.email!='' && this.email!=null) && (this.password!='' && this.password!=null)){
      this.auth.login(this.email,this.password).then((res:any)=>{
        localStorage.setItem('userId',res.user.uid);
        this.loading=false;
        this.toaster.success('Login Successfully..')
        this.router.navigate(['/home/content'])

console.log(res.user);
      }).catch((err)=>{
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
