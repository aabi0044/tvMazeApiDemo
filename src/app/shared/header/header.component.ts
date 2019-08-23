import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('menu', {static: false}) menu: ElementRef;
  constructor(public renderer: Renderer,private api:ApiService,private auth:AuthService,
    private router:Router) { }
  user;
loading=false;
shows;
searchResult;
  ngOnInit() {
    // this.getShows();
    if(localStorage.getItem('userId')!=undefined){
      this.getUser();

    }
  }
  openMenu(){
   console.log(this.menu.nativeElement.className);
   if(this.menu.nativeElement.className=='dropdown'){
    this.renderer.setElementProperty(this.menu.nativeElement, 'className', 'dropdown open');
   }
   else{
    this.renderer.setElementProperty(this.menu.nativeElement, 'className', 'dropdown');
   }

  }




  getUser(){

this.loading=true;
this.api.getUser(localStorage.getItem('userId')).subscribe((res:any)=>{
this.user=res;
this.loading=false;
console.log(this.user);
})
  }
  logOut(){
    this.auth.logout();
    localStorage.clear();

    this.getUser();
    this.router.navigate(['/home/content'])

  }


}
