import {ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LazyElementsModule} from "@angular-extensions/elements";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyElementsModule.forRoot({
      rootOptions: {
        preload: false,
      },
      elementConfigs: [
        {
          tag: 'ng-web-component',
          url: 'http://127.0.0.1:8080/web-component.js',
        },
      ],
    }),
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
