import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import{ Geolocation }from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AddTripPage } from '../pages/add-trip/add-trip';
import { MapPage } from '../pages/map/map';
import { SinglePage } from '../pages/single/single';
import { MapviewPage } from '../pages/mapview/mapview';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    AddTripPage,
    ListPage,
    MapPage,
    SinglePage,
    MapviewPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    AddTripPage,
    ListPage,
    MapPage,
    SinglePage,
    MapviewPage
  
    
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
