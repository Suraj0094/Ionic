import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

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
  data:Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
    console.log("In ResortData controller")
    this.token = 'OlHPqkMUaTVlioS3xXhYDdYVX73MGVo_x7j2zUUvjstTKt09dCjaXjLRyH6z1-NrZE2gXH5agXMcwwMY_tGEC2g5brR_12cnJ4x17Eb7g8edduGIuidFASevqcHPWnYx';
    const headers = new HttpHeaders().set('Authorization',this.token);
    this.http.get('https://api.yelp.com/v3/businesses/search?latitude=37.786882&longitude=-122.399972', { headers }).subscribe(data =>{
        console.log(data);
    });
}
  
    
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResortdataPage');
  }

}