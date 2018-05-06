import { Component, ViewChild, ElementRef } from '@angular/core';
declare var google;
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AddTripPage } from '../add-trip/add-trip';
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
pos1=null;
pos2=null;
coordinate=[];
  @ViewChild('map') mapElement: ElementRef;
  map: any;
 
  constructor(public navCtrl: NavController, public geolocation: Geolocation) {
 
  }
 
  ionViewDidLoad(){
    this.loadMap();
  }
 
  loadMap(){
 
    this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
    }, (err) => {
      console.log(err);
    });
 
  }
  addMarker(){
 
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
   
    let content = "<h4>Information!</h4>";         
   
    this.addInfoWindow(marker, content);

    if(this.pos1==null){
      this.pos1=JSON.stringify(marker.position);
      this.coordinate.push(JSON.parse(this.pos1));
    }else{
      this.pos2=JSON.stringify(marker.position);
      this.coordinate.push(JSON.parse(this.pos2));
      var path=new google.maps.Polyline({
        path:this.coordinate,
        geodesic:true,
        strokeColor:"#ff0000",
        strokeOpacity:1.0,
        strokeWeight:2.0
      });

      path.setMap(this.map);
      AddTripPage.fromdect=this.pos1;
      AddTripPage.todest=this.pos2;
      this.navCtrl.setRoot(AddTripPage);
    }
   
  }
  addInfoWindow(marker, content){
 
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
   
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
   
  }
}
