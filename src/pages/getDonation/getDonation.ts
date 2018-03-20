import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';

/*
  Generated class for the Adopt page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-getDonation',
  templateUrl: 'getDonation.html'
})
export class GetDonation {
  donacion: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public alertCtrl: AlertController) {
    this.donacion = navParams.get('donacion');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetDonation');
  }

  done(donacion) {
    let alert = this.alertCtrl.create({
      title: 'Registro Completado',
      subTitle: 'En breve nos comunicaremos con ustedes.',
      buttons: [{
        text: "OK",
        handler: data => {
          this.navCtrl.push(MyApp, {
          });
        }
      }]
    });
    alert.present();
  }

}
