import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { RegisterPage } from '../register/register';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  form;
  username;
  userpass;
  @ViewChild('myNav') nav: NavController
  constructor(public alertCtrl: AlertController,private storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required)
    });
    this.storage.get('name').then((data)=>{this.username=data;});
    this.storage.get('password').then((data)=>{this.userpass=data;});

  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  addPerson(){
    
if(this.username==this.form.value.name&&this.userpass==this.form.value.password){
console.log("ok");
}else{
  let alert = this.alertCtrl.create({
    title: 'New Friend!',
    subTitle: 'invalid user plz try again',
    buttons: ['ok']
  });
    alert.present()
   }

}
Register(){
  this.navCtrl.push(RegisterPage);
}
   /*this. username=this.storage.get('name').then((val) => {
    if(val==this.form.value.name){
      console.log('true');
    
     else{
      console.log(this.username);
     }
  });
  
   
    /*this.storage.set('name',this.form.value.name);
    this.storage.set('password',this.form.value.password);
    this.storage.set('email',this.form.value.email);
    this.storage.get('email').then((val) => {
      console.log('Your age is', val);
    })
  */
  }

