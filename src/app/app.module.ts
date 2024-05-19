import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { MatMenuModule } from '@angular/material/menu';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    AngularFireModule.initializeApp({
      projectId: 'ir-auto',
      appId: '1:1078052138524:web:9ac241d775814beefa79d9',
      storageBucket: 'ir-auto.appspot.com',
      apiKey: 'AIzaSyAQ-FA1BwnyLOAVqF48vvLAGJWxQf_UDv8',
      authDomain: 'ir-auto.firebaseapp.com',
      messagingSenderId: '1078052138524',
    }),
    //provideFirebaseApp(() => initializeApp({"projectId":"ir-auto","appId":"1:1078052138524:web:9ac241d775814beefa79d9","storageBucket":"ir-auto.appspot.com","apiKey":"AIzaSyAQ-FA1BwnyLOAVqF48vvLAGJWxQf_UDv8","authDomain":"ir-auto.firebaseapp.com","messagingSenderId":"1078052138524"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
