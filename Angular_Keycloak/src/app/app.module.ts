import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { voyagesComponent } from './voyages/voyages.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KeycloakAngularModule } from 'keycloak-angular';
import { KeycloakService } from 'keycloak-angular';
import { APP_INITIALIZER } from '@angular/core';


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
  keycloak.init({
  config: {
  url: 'http://localhost:8090',
  realm: 'aziz-realm',
  clientId: 'voy-app'
  },
  initOptions: {
  onLoad :'login-required',
  checkLoginIframe: true
  /* onLoad: 'check-sso',
  silentCheckSsoRedirectUri:
  window.location.origin + '/assets/silent-check-sso.html' */
  }
  });
  }
@NgModule({
  declarations: [
    AppComponent,
    voyagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [
    {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
