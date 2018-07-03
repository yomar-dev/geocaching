import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lugares: any = [];
  constructor(public navCtrl: NavController, public lugaresService: LugaresService) {
    this.lugaresService.getLugares()
      .valueChanges()
      .subscribe((lugaresFB => {
        this.lugares = lugaresFB
      }))
  }

  irLugar(name){
   this.navCtrl.push(LugarPage, {nombre: name});
  }

  vistaDetalle(){
    this.navCtrl.push(LugarPage, {lugar: {}});
  }

  vistaDetalleExistente(lugar){
    this.navCtrl.push(LugarPage, {lugar: lugar});
  }

}
