import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('menu', {static: false}) menu: ElementRef;
  constructor(public renderer: Renderer,private api:ApiService) { }
  user;
loading=false;
shows;
searchResult;
  ngOnInit() {
    this.getShows();
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
  getShows(){
    this.api.getAllShows().subscribe(res=>{
      this.shows=res;
      console.log(this.shows);
    })
  }
  onSearchChange(event){
console.log(event);
console.log(event.length);
if(event.length==0){
  this.searchResult=[];
}else{
  let a = this.shows.filter((elem)=>{
    return elem.name.toLowerCase().includes(event.toLowerCase())
  })
  this.searchResult=a;
  console.log(a);
    }
}


}
