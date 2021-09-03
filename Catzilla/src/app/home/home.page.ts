/* eslint-disable @typescript-eslint/ban-types */
import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';
interface Cat {
  breeds: [];
  height: number;
  url: string;
  id: string;
  width: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  imageSrc: string = null;

  constructor(private apiCalls: ApiCallService) {}
  ngOnInit() {
    this.apiCalls.getCatPic().subscribe((resData: []) => {
      resData.forEach((element: Cat) => {
        this.imageSrc = element.url;
        console.log(element.url);
      });
    });
  }
}
