import {DoBootstrap, Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {createCustomElement} from '@angular/elements';
import {WebComponent} from './web.component';

@NgModule({
  declarations: [
    WebComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    WebComponent
  ]
})
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    if (customElements.get(WebComponent.tag)) {
      return;
    }

    customElements.define(
      WebComponent.tag,
      createCustomElement(WebComponent, {
        injector,
      }),
    );
  }

  ngDoBootstrap(): void {
    // required to prevent https://angular.io/errors/NG0403
  }
}
