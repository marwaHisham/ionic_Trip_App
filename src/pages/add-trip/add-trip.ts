import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ListPage } from '../list/list'

/**
 * Generated class for the AddTripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { MapPage } from '../map/map';
@IonicPage()
@Component({
  selector: 'page-add-trip',
  templateUrl: 'add-trip.html',
})
export class AddTripPage {
  form;
  username;
  note;
  date;
  time;
  dest;
  loc;
  static fromdect="";
  static todest="";
  constructor(public navCtrl: NavController,private storage: Storage, public navParams: NavParams) {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      note: new FormControl("", Validators.required),
      Date: new FormControl("", Validators.required),
      Time: new FormControl("", Validators.required),
      Destination: new FormControl("", Validators.required),
      Location: new FormControl("", Validators.required)
    });
}


 
   
   
   addTrip(){
     this.storage.get("trips").then((val)=>{
       let TripLIst=val||[]
       TripLIst = [...TripLIst,{
         username:this.form.value.name,
         note:this.form.value.note,
         date:this.form.value.Date,
         time:this.form.value.Time,
         dest:this.form.value.Destination,
        loc:this.form.value.Location
       }]
       this.storage.set("trips",TripLIst);
     });
    this.navCtrl.push(ListPage);
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTripPage');
    this.form.controls["Location"].setValue(AddTripPage.fromdect);
    this.form.controls["Destination"].setValue(AddTripPage.todest)
  }
  viewMap(){
    this.navCtrl.push(MapPage);
    this.form.controls[""]
  }
  /*static view=()=>{
    console.log(AddTripPage.from destination)
  }*/
}
