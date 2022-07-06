import { Component, OnInit } from '@angular/core';
// import * as AOS from 'aos';
// import 'aos/dist/aos.css';
import { transition, trigger,style,animate,state } from '@angular/animations';
import * as animateOnScroll from 'aos';  
import { InjectionToken } from '@angular/core';  
import { OwlOptions } from 'ngx-owl-carousel-o';
export const aos = animateOnScroll;  
export const AosToken = new InjectionToken('AOS');
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('fade',[
     state('void',style({opacity:0})),
      transition('void => *',[
       
        animate(2000)
      ]),
      transition('* =>void',[
        animate(2000)
      ])
    ]),
    trigger('flyin',[
      transition('void => *',[
        style({tranform:'translateX(-100%)'}),animate(1000)
      ]),
      transition('* => void',[
        animate(1000,style({transform:'translateX(100%)'}))
      ])
    ])
  ]
  
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // AOS.init();
   
  }
  testimonialSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right " ></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}

