import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lugares: any = [
    {nombre: "Lugar 1", direccion: "Dirección 1", categoria: "Categoria 1"},
    {nombre: "Lugar 2", direccion: "Dirección 2", categoria: "Categoria 2"},
    {nombre: "Lugar 3", direccion: "Dirección 3", categoria: "Categoria 3"},
    {nombre: "Lugar 4", direccion: "Dirección 4", categoria: "Categoria 4"},
    {nombre: "Lugar 5", direccion: "Dirección 5", categoria: "Categoria 5"},
    {nombre: "Lugar 6", direccion: "Dirección 6", categoria: "Categoria 6"},
    {nombre: "Lugar 7", direccion: "Dirección 7", categoria: "Categoria 7"},
    {nombre: "Lugar 8", direccion: "Dirección 8", categoria: "Categoria 8"}
  ];
  constructor(public navCtrl: NavController) {
    
  }

  irLugar(name){
   this.navCtrl.push(LugarPage, {nombre: name}); 
  }

  vistaDetalle(){
    alert("Hola Mundo!!");
  }

}
