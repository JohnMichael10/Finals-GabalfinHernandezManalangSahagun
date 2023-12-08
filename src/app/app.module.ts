import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppStoreModule } from './store/AppStoreModule';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule, 
    CommonModule,
    ...AppStoreModule,
    StoreDevtoolsModule.instrument({maxAge:25}),
    StoreModule.forRoot({}, {}),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyB3XivuGFPtxBOqXllm8-ZBdtdAieBXh9A",
      authDomain: "recipal-fb8eb.firebaseapp.com",
      projectId: "recipal-fb8eb",
      storageBucket: "recipal-fb8eb.appspot.com",
      messagingSenderId: "579183412601",
      appId: "1:579183412601:web:3fde5f0822968c9cc65ba8",
      measurementId: "G-08SRC28PBG"
    })),
    provideFirestore(() => getFirestore())
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})

export class AppModule {}
