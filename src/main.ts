import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


fetch(environment.webConfig + '?cb=' + new Date().getTime())
  .then(response => response.json())
  .then(data => {
    environment.config = data;
    if (environment.production) {
      enableProdMode();
      console.warn(`🚨 Console output is disabled on production!`);
      console.log = function (): void { };
      console.debug = function (): void { };
      console.warn = function (): void { };
      console.info = function (): void { };
    }

    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.log(err));
  });