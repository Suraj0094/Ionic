import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  save(Name:string,Rating:number){
    this.navCtrl.push('ResortdataPage',{resortName:Name,resortRating:Rating});
  }
}
