import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { map, tap } from 'rxjs/operators';
import { ApiCallService } from 'src/app/api-call.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {
  imgSrc: any;
  constructor(
    public toastController: ToastController,
    private api: ApiCallService
  ) {}

  async presentToast() {
    const toast = await this.toastController.create({
      position: 'top',
      message: 'Added To favourite list',
      duration: 1000,
    });
    toast.present();
  }

  ngOnInit() {}
}
