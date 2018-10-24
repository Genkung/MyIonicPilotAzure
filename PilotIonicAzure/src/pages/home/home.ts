import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  ClickMe(alertmsg:any)
  {
    let alert = this.alertCtrl.create({
      title: 'Hay guy!!!',
      subTitle: alertmsg,
      buttons: ['OK']
    });
    alert.present();
  }

}
