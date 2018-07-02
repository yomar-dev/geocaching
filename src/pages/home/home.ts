import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {
    
  }

  irLugar(name){
   this.navCtrl.push(LugarPage, {nombre: name}); 
  }

}
