import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {Http, RequestOptions} from '@angular/http';
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
  token:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
    
    let headers = new Headers();
    this.token = 'OlHPqkMUaTVlioS3xXhYDdYVX73MGVo_x7j2zUUvjstTKt09dCjaXjLRyH6z1-NrZE2gXH5agXMcwwMY_tGEC2g5brR_12cnJ4x17Eb7g8edduGIuidFASevqcHPWnYx';
    headers.append('Authorization', 'Bearer ' + this.token);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });

    console.log('hello data provider');
    this.http.get('https://api.yelp.com/v3/businesses/search?latitude=37.786882&longitude=-122.399972',options).subscribe(data =>{
      console.log(data);
  
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResortdataPage');
  }

}
