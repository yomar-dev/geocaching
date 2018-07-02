import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LugarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html',
})
export class LugarPage {

  nombreLugar: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombreLugar = navParams.get('nombre');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugarPage');
  }

}
