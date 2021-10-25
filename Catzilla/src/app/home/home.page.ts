/* eslint-disable @typescript-eslint/ban-types */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  imageSrc: string = null;

  constructor() {}

  ngOnInit() {}
}
