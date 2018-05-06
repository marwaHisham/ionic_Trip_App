
import { Component, ViewChild, ElementRef } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: 'page-mapview',
  templateUrl: 'mapview.html',
})
export class MapviewPage {
pos1=null;
pos2=null;
static item =null;
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
      this.addMarker();
    }, (err) => {
      console.log(err);
    });
 
  }
  addMarker(){
    this.pos1=JSON.parse(MapviewPage.item.loc);
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.pos1
    });
   
    let content = "<h4>Information!</h4>";         
   
    this.addInfoWindow(marker, content);


      this.coordinate.push(this.pos1);
    
      this.pos2=JSON.parse(MapviewPage.item.dest);
      let marker2 = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.pos2
      });
      this.addInfoWindow(marker2, content);
      this.coordinate.push(this.pos2);
      var path=new google.maps.Polyline({
        path:this.coordinate,
        geodesic:true,
        strokeColor:"#ff0000",
        strokeOpacity:1.0,
        strokeWeight:2.0
      });

      path.setMap(this.map);
     
    
   
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

