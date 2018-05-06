import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapviewPage } from '../mapview/mapview';

/**
 * Generated class for the SinglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single',
  templateUrl: 'single.html',
})
export class SinglePage {
item;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
this.item=navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SinglePage');
  }
  viewMap(){
    MapviewPage.item=this.item
    this.navCtrl.push(MapviewPage);
  }
}
