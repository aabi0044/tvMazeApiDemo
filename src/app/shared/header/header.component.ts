import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('menu', {static: false}) menu: ElementRef;
  constructor(public renderer: Renderer) { }

  ngOnInit() {
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
}
