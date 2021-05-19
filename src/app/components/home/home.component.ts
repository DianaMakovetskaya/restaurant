import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    margin: 15,
    loop: true,

    mouseDrag: false,

    touchDrag: false,

    pullDrag: false,

    dots: false,

    navSpeed: 700,

    navText: ['', ''],

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

        items: 3

      }

    },

    nav: true

  };



  slides = [

    {id: 1, img: 'assets/images/IMG_6597.JPG'},

    {id: 2, img: 'assets/images/IMG_6599.JPG'},

    {id: 3, img: 'assets/images/IMG_6600.JPG'},

    {id: 4, img: 'assets/images/IMG_6604.JPG'},


  ];
  constructor() {
  }

  ngOnInit(): void {
  }
  goToLink(url: string): void{
    window.open(url, '_blank');
  }

}
