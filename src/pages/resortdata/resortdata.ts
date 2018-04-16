import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResortdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resortdata',
  templateUrl: 'resortdata.html',
})
export class ResortdataPage {
  ResortRating:number;
  ResortName:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.ResortName = this.navParams.get('resortName');
      this.ResortRating = this.navParams.get('resortRating');
      console.log('Resort Name'+this.ResortName);
       
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResortdataPage');
  }

}
