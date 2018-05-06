import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  form;
  constructor(private storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required)
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPersonPage');
  }

  addPerson(){
    this.storage.set('name',this.form.value.name);
    this.storage.set('password',this.form.value.password);
    this.storage.set('email',this.form.value.email);
    this.storage.get('email').then((val) => {
      console.log('Your age is', val);
    })
  
  }

}