import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { firebase as firebaseConfig } from './config.json';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { reducers } from './store/app.reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'serverApp'
    }),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    SharedModule,
    CoreModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
